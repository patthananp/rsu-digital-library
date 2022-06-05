from flask import Flask, request
from routes.books import books_bp
from flask_cors import CORS

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:P#ssword123@digital-library-db.cmzd0z7srps6.ap-southeast-1.rds.amazonaws.com:3306/digital-library'
CORS(app)


books = [
    {"title" : "book1", "price" : 290, "id" : 1, "author" : "admin"}
]

@app.route('/')
def hello() :
    q = request.args.get('q')
    print(q)
    return {"message" : "Hello"}, 201

# @app.route('/book', methods=['POST', 'GET', 'PUT'])
# def book() :
#     if request.method == 'POST' :
#         body = request.get_json()
#         books.append(body)
#         return {"message" : "Book already add", "body" : body}, 201
#     elif request.method == 'GET' :
#         return {"books" : books}, 200
#     elif request.method == 'PUT' :
#         body = request.get_json()
#         for i, book in enumerate(books) :
#             if book['id'] == body['id'] :
#                 books[i] = body
#         return {"message" : "Book has been replace", "body" : body}, 200
        

app.register_blueprint(books_bp)



if __name__ == '__main__' :
    app.run(debug=True)
