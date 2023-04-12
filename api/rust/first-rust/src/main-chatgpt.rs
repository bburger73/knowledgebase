use actix_web::{post, web, HttpResponse, Result};
use serde::{Deserialize, Serialize};
use std::net::TcpListener;
// this has been written by chat gpt

fn main() {
    let listener = TcpListener::bind("0.0.0.0:7878").unwrap();
    
    for stream in listener.incoming() {
        let stream = stream.unwrap();
            my_handler(stream);
            // handle_connection(stream);
    }
}

#[derive(Deserialize, Serialize)]
struct MyPayload {
    who: String,
    a: i32,
    b: String,
}

#[post("/my-endpoint")]
async fn my_handler(payload: web::Json<MyPayload>) -> Result<HttpResponse> {
    let response_string = format!(
        "The payload contained: who={}, a={}, b={}",
        payload.who, payload.a, payload.b
    );

    Ok(HttpResponse::Ok().body(response_string))
}