from flask import Flask, request

app = Flask(__name__)

books = [
    {"title" : "book1", "price" : 290, "id" : 1, "author" : "admin"}
]

@app.route('/')
def hello() :
    q = request.args.get('q')
    print(q)
    return {"message" : "Hello"}, 201

@app.route('/book', methods=['POST', 'GET', 'PUT'])
def book() :
    if request.method == 'POST' :
        body = request.get_json()
        books.append(body)
        return {"message" : "Book already add", "body" : body}, 201
    elif request.method == 'GET' :
        return {"books" : books}, 200
    elif request.method == 'PUT' :
        body = request.get_json()
        for i, book in enumerate(books) :
            if book['id'] == body['id'] :
                books[i] = body
        return {"message" : "Book has been replace", "body" : body}, 200
        

if __name__ == '__main__' :
    app.run(debug=True)
