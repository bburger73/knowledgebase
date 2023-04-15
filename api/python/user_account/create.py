import mysql.connector
from datetime import datetime
import bcrypt

mydb = mysql.connector.connect(
  host="skillermysql",
  user="root",
  password="mysql",
  database="skiller"
)

mycursor = mydb.cursor()

# create account
def create_user(user_id,email,password,name):
    create_date = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
    sql = "insert into user_account(user_id,email,name,authority,create_date,modified_date) values(%s, %s,%s, %s,%s, %s)"
    val = (user_id,email,name,0,create_date,create_date)
    mycursor.execute(sql, val)
    mydb.commit()
    
    expire_date = datetime.utcnow().replace(year=datetime.utcnow().year + 1).strftime('%Y-%m-%d %H:%M:%S')
    create_password(user_id,password,create_date,expire_date,create_date)
    
    return {"id":mycursor.lastrowid,"user_id":user_id,"message":"Success","result":True}


# read if email is already registere
def check_email_registered(email):
    sql = "select email from user_account where email=%s"
    val = (email)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)

def get_user_ids():
    sql = "select user_id from user_account"
    mycursor.execute(sql)
    myresult = mycursor.fetchall()
    for x in myresult:
      print(x)

def create_password(user_id,password,create_date,expire_date,modified_date):
    sql = "insert into user_pass(user_id,password,create_date,expire_date,modified_date) values(%s,%s, %s,%s, %s)"
    val = (user_id,bcrypt.hashpw(password.encode('utf8'),bcrypt.gensalt()),create_date,expire_date,modified_date)
    mycursor.execute(sql, val)
    mydb.commit()
    return True

# def make_user_id():
  # $hashedEmail = hash("sha512","$email");
  # $outInt = 0;
  # for($i=0;$i < 15;++$i)
  # {
  #     $outInt += ord($hashedEmail[$i]);
  # }

  # $idArr = getuser_ids($conn);
  # if(is_array($idArr))
  # {
  #     while(in_array($outInt,$idArr))
  #     {
  #         $outInt = ceil($outInt * 2.3);
  #     }
  # }
  # return $outInt;
