import mysql.connector
import bcrypt

mydb = mysql.connector.connect(
  host="skillermysql",
  user="root",
  password="mysql",
  database="skiller"
)

mycursor = mydb.cursor()


# create signin token 
def create_token_signin(user_id,token,reset_token,create_date,expire_date,modified_date):
    sql = 'insert into user_token(user_id,token,reset_token,create_date,expire_date,modified_date ) values(%s,%s,%s,%s,%s,%s)'
    val = (user_id,token,reset_token,create_date,expire_date,modified_date)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)


# read signin token 
def read_token_signin(user_id):
    sql = 'select user_id,token,reset_token,create_date,expire_date,modified_date from user_token where user_id=%(user_id)s'
    val = {'user_id':user_id}
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        return x



# read user token from id
def read_user_token_from_id():
    sql = 'select id from user_token where user_id=%s'
    val = (user_id)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)


# read user id from token 
def read_user_id_from_token(token):
    sql = 'select user_id from user_token where token=%s'
    val = (token)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)


# read update 
def read_user_id_from_reset_token(reset_token):
    sql = 'select user_id from user_token where reset_token=%s'
    val = (reset_token)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)


def create_reset():
    print('x')

def create_token():
    print('x')

# reas user 
def read_user_login_data_from_id(record_id):
    sql = 'select id,user_id,email,authority,school,grade from users where id=%s'
    val = (record_id)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)


# get user account 
def read_user_data_from_id(user_id):
    sql = 'select names.user_id,name,points,ethnicity,prize_id from names join prize_select where names.user_id=%s and names.user_id=prize_select.user_id'
    val = (user_id)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)


# is logedin token 
def is_logged_in_token(token):
    sql = 'select user_account.user_id,user_account.authority,user_account.name from user_account join user_token where user_account.user_id=user_token.user_id and user_account.delete_date is null and user_token.token=%s'
    val = (token)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)



# is loged in pass
def is_logged_in_pass(email,password):
    sql = """select user_account.user_id,user_account.authority,user_account.name,user_pass.password from user_account join user_pass where user_account.user_id=user_pass.user_id and user_account.delete_date is null and user_account.email=%(email)s"""
    val = {"email":email}
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        if x[0] > 0:
            user_token = "asdf"
            # read_token_signin(x[0])[1]
            payload = {
                "id":x[0],
                "auth":x[1],
                "name":x[2],
                "password":x[3],
                "user_token":user_token,
                "python_token":str(bcrypt.hashpw(password.encode('utf8'),bcrypt.gensalt())),
                "response":"",
                "result":False
            }
            bcrypt_test = bcrypt.checkpw(password.encode('utf8'),x[3].encode('utf8'))
            if bcrypt_test:
                print("success")
                payload["response"] = "success"
                payload["result"] = True
                return payload
            else:
                print("passwordv")
                payload["response"] = "Failed"
                payload["result"] = False
                return payload
        else:
            print("failed")
            return {"message":"Failed","result":False}

# generate token 
def update_user_token(token,user_id):
    sql = "update passwords set token=%s where user_id=%s"
    val = (token,user_id)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)



def gen_token():
    print('x')




