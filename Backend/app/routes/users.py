import json
from flask import Blueprint
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
def create(firstname, lastname):
    new_user = User(firstname='yok', lastname='hhh')
    db.session.add(new_user)
    db.session.commit()
    return json.dumps(new_user.to_dict())
 
   
    # new_user.create('yyy', 'hhh')
    # return json.dumps(new_user)


# @users_bp.route('/<id>', methods = ['PUT'])
# def update():


# create POST ,rest api
# update PUT
# delete DELETE