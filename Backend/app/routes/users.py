import json
from flask import Blueprint, request, jsonify
from app import db
from argon2 import PasswordHasher

from app.models.user import User
from app.common.response import Response

users_bp = Blueprint('users', __name__, url_prefix='/users')
ph = PasswordHasher()

@users_bp.route('/')
def list():
    try:
        users = User.query.all()
        if users:
            users = [user.as_dict() for user in users]
        response = Response.success(users)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response), 200

@users_bp.route('/<id>')
def retrieve(id):
    try:
        user = User.query.filter_by(id=id).first()
        print(user)
        if user:
            user = user.as_dict()
        response = Response.success(users)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return json.dumps(user)

# @users_bp.route('/', methods = ['POST'])
# def create():
#     try:
#         request_data = request.json
#         print(f'request_data={request_data}')
#         new_user = User(**request_data)
#         db.session.add(new_user)
#         db.session.commit()
#         response = Response.success(new_user.as_dict())
#     except Exception as e:
#         print(f'Exception: {e}')
#         response = Response.error(e)
#     return jsonify(response)
 
@users_bp.route('/<id>', methods = ['PUT'])
def update(id):
    try: 
        request_data = request.json
        user = User.query.filter_by(id = id).first()
        if user:
            if  request_data.get('prefix'):
                user.prefix = request_data.get('prefix')

            if  request_data.get('firstname'):
                user.firstname = request_data.get('firstname')

            if  request_data.get('lastname'):
                user.lastname = request_data.get('lastname')
            
            if  request_data.get('email'):
                user.email = request_data.get('email')

            if  request_data.get('password'):
                user.password = request_data.get('password')
        else:
            raise Exception(f'user id = {id} not found.')
        
        db.session.commit()
        response = Response.success(user.as_dict())
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response)
    

# @users_bp.route('/<id>', methods = ['DELETE'])
# def delete(id):
#     try:
#         user = User.query.filter_by(id = id).first_or_404()
#         db.session.delete(user)
#         db.session.commit()
#     except Exception as e:
#         print(f'Exception: {e}')
#         response = Response.error(e)
#     return {
#         'success' : 'Data deleted successfully'
#     }


@users_bp.route('/register', methods = ['POST'])
def register():
    try:
        request_data = request.json
        # Check existing user
        exists_user = User.query.filter_by(email=request_data.get('email')).first()
        # if existing
        if exists_user:
            raise Exception('email already registered')
        # hashing password
        hashed_password = ph.hash(request_data.get('password'))
        request_data['password'] = hashed_password
        # save to database
        new_user = User(**request_data)
        db.session.add(new_user)
        db.session.commit()
        # TODO send verify email
        response = Response.success(users.as_dict())
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return {
        'success' : 'Data deleted successfully'
    }