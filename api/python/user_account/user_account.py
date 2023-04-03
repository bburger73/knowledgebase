import re
from waitress import serve
from flask import Flask,request,jsonify
import mysql.connector
import random

from datetime import datetime

import bcrypt


app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"


@app.route("/hello/<name>")
def hello_there(name):
    formatted_now = "This Time"

    # Filter the name argument to letters only using regular expressions. URL arguments
    # can contain arbitrary text, so we restrict to safe characters only.
    match_object = re.match("[a-zA-Z]+", name)

    if match_object:
        clean_name = match_object.group(0)
    else:
        clean_name = "Friend"

    content = "Hello there, " + clean_name + "! It's " + formatted_now
    return content


@app.route('/user_account/create',methods=['POST'])
def create():
    jsonbody = request.json
    name = jsonbody['name']
    salt = bcrypt.gensalt()
    password = bcrypt.hashpw(jsonbody['pass'].encode('utf-8'), salt)
    email = jsonbody['email']
    user_id = random.randint(0,500000)
    authority = 0
    # now = datetime.now()
    create_date = "2023-04-02 11:35:09 UTC"
    # now.strftime("%m/%d/%Y, %H:%M:%S")
    modified_date = create_date
    expire_date = "2024-04-02 11:35:09 UTC"

    mydb = mysql.connector.connect(
        user='root', 
        password='mysql',
        host='127.0.0.1',
        database='skiller'
    )
    
    mycursor = mydb.cursor()
    sql = "INSERT INTO user_account(user_id,email,name,authority,create_date,modified_date) values(%s,%s,%s,%s,%s,%s)"
    val = (user_id,email,name,authority,create_date,modified_date)
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")

    sql = "insert into user_pass(user_id,password,create_date,expire_date,modified_date) values(%s,%s,%s,%s,%s)"
    val = (user_id,password,create_date,expire_date,modified_date)
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")

    mydb.close()
    return jsonify({"records_inserted":mycursor.rowcount,"success":True})


@app.route('/user_account/read',methods=['POST'])
def read():
    jsonbody = request.json
    password = jsonbody['pass'].encode('utf-8')
    email = jsonbody['email']
    
    mydb = mysql.connector.connect(
        user='root', 
        password='mysql',
        host='127.0.0.1',
        database='skiller'
    )
    
    mycursor = mydb.cursor()

    sql = """select user_account.user_id,user_account.authority,user_account.name,user_pass.password from user_account join user_pass where user_account.user_id=user_pass.user_id and user_account.delete_date is null and user_account.email=%s"""
    val = (email,)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()

    verified = False
    print(myresult)
    for x in myresult:
        print("******")
        print(x)
        if bcrypt.checkpw(password,x[3].encode('utf-8')):
            print(x)
            verified = True
    mydb.close()
    return jsonify({"records_inserted":mycursor.rowcount,"success":verified,"verified":verified})


if __name__ == "__main__":
    # app.run() ##Replaced with below code to run it using waitress
    serve(app, host='0.0.0.0', port=9999)
