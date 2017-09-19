from flask import Flask
from flask import request
import pika
import requests
app = Flask(__name__)

#receive from node
message = ""
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.queue_declare(queue='node_python')

def callback(ch,method,properties,body):
    print(" [x] Received %r" % body)
    message = body

channel.basic_consume(callback,
                    queue='node_python',
                    no_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()                       



#sending to java service  
connection2 = pika.BlockingConnection(pika.ConnectionParameters(
       host='localhost'))
channel2 = connection2.channel()


channel2.queue_declare(queue='python_api')

channel2.basic_publish(exchange='',
                  routing_key='python_api',
                  body='name')
print(" [x] Sent "+message)
connection2.close()   

#@app.route("/calculate/items=<name>", methods=['GET'])
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
