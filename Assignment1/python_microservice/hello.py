from flask import Flask
app = Flask(__name__)

@app.route("/calculate/items=<name>", methods=['GET'])
def CalculatePrice(name):
	return name

@app.route("/welcome", methods=['GET'])
def Welcome():
	#items = request.form['welcome']
	print "items"

if __name__ == "__main__":
	app.run()