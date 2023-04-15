import re
from waitress import serve
from flask import Flask,request,jsonify
from user_account.read import is_logged_in_pass
from user_account.create import create_user
import random

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


@app.route("/user_account/create", methods=[ 'POST'])
def signup():
    inputs = request.json
    return jsonify(create_user(random.randint(9999,30000),inputs['email'],inputs['pass'],inputs['name']))
    

@app.route("/user_account/read", methods=['POST'])
def signin():
    inputs = request.json
    return jsonify(is_logged_in_pass(inputs['email'],inputs['pass']))

@app.route("/user_account/update", methods=['PUT'])
def update_account():
    inputs = request.get_json(silent=True)
    return inputs

@app.route("/user_forgot/create", methods=['POST'])
def forgot():
    inputs = request.get_json(silent=True)
    return inputs


if __name__ == "__main__":
    # app.run() ##Replaced with below code to run it using waitress
    serve(app, host='0.0.0.0', port=9999)