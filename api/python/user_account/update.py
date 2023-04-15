import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="mysql",
  database="skiller"
)

mycursor = mydb.cursor()

def update_email():
    sql = 'update user_account set email=%s where user_id=%s'
    val = ("John", "Highway 21")
    mycursor.execute(sql, val)
    mydb.commit()
    print("1 record inserted, ID:", mycursor.lastrowid) 



def update_name():
    sql = 'update user_account set name=%s where user_id=%s'
    val = ("John", "Highway 21")
    mycursor.execute(sql, val)
    mydb.commit()
    print("1 record inserted, ID:", mycursor.lastrowid) 



def update_name():
    sql = 'update user_account set notification=%s where user_id=%s'
    val = ("John", "Highway 21")
    mycursor.execute(sql, val)
    mydb.commit()
    print("1 record inserted, ID:", mycursor.lastrowid) 

