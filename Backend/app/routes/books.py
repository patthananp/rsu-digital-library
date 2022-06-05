import json
from flask import Blueprint

books_bp = Blueprint('books', __name__, url_prefix='/books')

data = [
    {
        'id': 1,
        'title': 'a',
        'author': 'a'
    },
    {
        'id': 2,
        'title': 'aaa',
        'author': 'aaa'
    },
    {
        'id': 3,
        'title': 'ass',
        'author': 'ass'
    },
    {
        'id': 4,
        'title': 'add',
        'author': 'add'
    },
    {
        'id': 5,
        'title': 'aff',
        'author': 'affg'
    }
]

@books_bp.route('/')
def list():
    return json.dumps(data)

@books_bp.route('/<id>')
def retrieve(id):
    item = next(x for x in data if x.get('id')==int(id))
    return json.dumps(item)
