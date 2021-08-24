
from flask import Flask, render_template, request 
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:Clutch95$@localhost/orders'
db = SQLAlchemy(app)

class Data(db.Model):
    __tablename__="lamborghini_orders"
    id=db.Column(db.Integer, primary_key=True)
    email=db.Column(db.String(120), unique=True)
    full_name=db.Column(db.String(120))
    model=db.Column(db.String(120))
    trim=db.Column(db.String(120))
    color=db.Column(db.String(120))
    interior_color=db.Column(db.String(120))

    def __init__(self, email, full_name, model, trim, color, interior_color):
        self.email=email
        self.full_name=full_name
        self.model=model
        self.trim=trim
        self.color=color
        self.interior_color=interior_color
        
@app.route("/")
def index():
    return render_template("lambo.html")


@app.route("/thankyou", methods=['POST'])
def thankyou():
    if request.method=='POST':
        email=request.form["email_name"]
        full_name=request.form["full_name"]
        model=request.form["model"]
        trim=request.form["trim"]
        color=request.form["color"]
        interior_color=request.form["interior_color"]
        print(request.form)

        data=Data(email,full_name,model,trim,color, interior_color)
        db.session.add(data)
        db.session.commit()
        return render_template("thankyou.html")

if __name__=='__main__':
    app.debug=True
    app.run()