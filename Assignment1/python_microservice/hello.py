from flask import Flask
from flask import request
import requests
app = Flask(__name__)


@app.route("/calculate/items=<name>", methods=['GET'])
def CalculatePrice(name):
	if(name):
	    url = 'http://localhost:8080/invoice'
        print "url ->", url
        r = requests.get(url)
        return "hello from python "+name+" "+r.text, r.status_code
	


@app.route("/calculate/",methods=['POST'])
def GetCalculate():
    return "OK"	

@app.route("/welcome", methods=['GET'])
def Welcome():
	#items = request.form['welcome']
	print "items"

if __name__ == "__main__":
	app.run(debug=True)
