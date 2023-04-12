use std::{
    fs,
    io::{prelude::*, BufReader},
    net::{TcpListener, TcpStream}
};


use mysql::*;
use mysql::prelude::*;

fn main() {
    let listener = TcpListener::bind("0.0.0.0:7878").unwrap();
    
    for stream in listener.incoming() {
        let stream = stream.unwrap();
        mysqlconn(stream);
        handle_connection(stream);
    }
}

struct Payment {
    customer_id: i32,
    amount: i32,
    account_name: Option<String>,
}

fn handle_connection(mut stream: TcpStream) {
    let buf_reader = BufReader::new(&mut stream);
    let request_line = buf_reader.lines().next().unwrap().unwrap();

    if request_line == "GET / HTTP/1.1" {
        let status_line = "HTTP/1.1 200 OK";
        let contents = fs::read_to_string("hello.html").unwrap();
        let length = contents.len();

        let response = format!(
            "{status_line}\r\nContent-Length: {length}\r\n\r\n{contents}"
        );

        stream.write_all(response.as_bytes()).unwrap();
    } else {
        let status_line = "HTTP/1.1 404 NOT FOUND";
        let contents = fs::read_to_string("404.html").unwrap();
        let length = contents.len();

        let response = format!(
            "{status_line}\r\nContent-Length: {length}\r\n\r\n{contents}"
        );

        stream.write_all(response.as_bytes()).unwrap();
    }
}


fn mysqlconn(mut stream: TcpStream) -> std::result::Result<(), Box<dyn std::error::Error>> {
    let url = "mysql://root:mysql@localhost:3306/skiller";
    let pool = Pool::new(url)?;

    let mut conn = pool.get_conn()?;

    // Let's create a table for payments.
    conn.query_drop(
        r"CREATE TEMPORARY TABLE payment (
            customer_id int not null,
            amount int not null,
            account_name text
        )")?;

    let payments = vec![
        Payment { customer_id: 1, amount: 2, account_name: None },
        Payment { customer_id: 3, amount: 4, account_name: Some("foo".into()) },
        Payment { customer_id: 5, amount: 6, account_name: None },
        Payment { customer_id: 7, amount: 8, account_name: None },
        Payment { customer_id: 9, amount: 10, account_name: Some("bar".into()) },
    ];

    // Now let's insert payments to the database
    conn.exec_batch(
        r"INSERT INTO payment (customer_id, amount, account_name)
          VALUES (:customer_id, :amount, :account_name)",
        payments.iter().map(|p| params! {
            "customer_id" => p.customer_id,
            "amount" => p.amount,
            "account_name" => &p.account_name,
        })
    )?;

    // Let's select payments from database. Type inference should do the trick here.
    let selected_payments = conn
        .query_map(
            "SELECT customer_id, amount, account_name from payment",
            |(customer_id, amount, account_name)| {
                Payment { customer_id, amount, account_name }
            },
        )?;

    // Let's make sure, that `payments` equals to `selected_payments`.
    // Mysql gives no guaranties on order of returned rows
    // without `ORDER BY`, so assume we are lucky.
    //assert_eq!(payments, selected_payments);
    println!("Yay!");
    let single_payment = selected_payments[0].account_name;
    println!("{}","{single_payment}");
    //stream.write_all(format!("{single_payment}").as_bytes()).unwrap();
    Ok(())
}