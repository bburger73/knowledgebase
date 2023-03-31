import re
from waitress import serve
from flask import Flask



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

if __name__ == "__main__":
    # app.run() ##Replaced with below code to run it using waitress
    serve(app, host='0.0.0.0', port=9999)