import json
from flask import Blueprint, request
from app import db

from app.models.user import User

users_bp = Blueprint('users', __name__, url_prefix='/users')

@users_bp.route('/')
def list():
    users = User.query.all()
    if users:
        users = [user.as_dict() for user in users]
    return json.dumps(users)

@users_bp.route('/<id>')
def retrieve(id):
    user = User.query.filter_by(id=id).first()
    print(user)
    if user:
        user = user.as_dict()
    return json.dumps(user)

@users_bp.route('/', methods = ['POST'])
def create():
    request_data = request.json
    print(f'request_data={request_data}')
    new_user = User(**request_data)
    # new_user = User(firstname='yok', lastname='hhh')
    db.session.add(new_user)
    db.session.commit()
    return json.dumps(new_user.as_dict())
 


@users_bp.route('/<id>', methods = ['PUT'])
def update(id):
    request_data = request.json
    # if firstname not in data:
    #     return {
    #         'error' : 'Bad Request',
    #         'message' : 'Not found data'
    #     }, 400
    user = User.query.filter_by(id = id).first_or_404()
    # user.firstname = request_data['firstname']
    if 'firstname' in request_data:
        user.firstname = request_data.get('firstname')
    db.session.commit()
    return json.dumps(user.as_dict())
    

@users_bp.route('/<id>', methods = ['DELETE'])
def delete(id):
    user = User.query.filter_by(id = id).first_or_404()
    db.session.delete(user)
    db.session.commit()
    return {
        'success' : 'Data deleted successfully'
    }



# create POST ,rest api
# update PUT
# delete DELETE