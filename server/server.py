from flask import Flask

# Initializing flask app
app = Flask(__name__)

@app.route('/', methods=["GET"])
def home_page():
  
    # Returning an api for showing in  reactjs
    return {"response": "ok"}, 200
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)