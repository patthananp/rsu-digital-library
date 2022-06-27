import json
from flask import Blueprint, request, jsonify
from app import db

from app.models.category_type import Category_type
from app.common.response import Response

category_types_bp = Blueprint('category_types', __name__, url_prefix='/category-types')

@category_types_bp.route('/')
def list():
    try:
        category_types = Category_type.query.all()
        if category_types:
            category_types = [category_type.as_dict() for category_type in category_types]
        response = Response.success(category_types)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response), 200

@category_types_bp.route('/<id>')
def retrieve(id):
    try:
        category_type = Category_type.query.filter_by(id=id).first()
        print(category_type)
        if category_type:
            category_type = category_type.as_dict()
        response = Response.success(category_types)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return json.dumps(category_type)

@category_types_bp.route('/', methods = ['POST'])
def create():
    try:
        request_data = request.json
        print(f'request_data={request_data}')
        new_category_type = Category_type(**request_data)
        db.session.add(new_category_type)
        db.session.commit()
        response = Response.success(new_category_type.as_dict())
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response)

@category_types_bp.route('/<id>', methods = ['PUT'])
def update(id):
    try: 
        request_data = request.json
        category_type = Category_type.query.filter_by(id = id).first()
        if category_type:

            if  request_data.get('name'):
                category_type.name = request_data.get('name')
                
            if  request_data.get('description'):
                research_type.description = request_data.get('description')

        else:
            raise Exception(f'user id = {id} not found.')
        
        db.session.commit()
        response = Response.success(category_type.as_dict())
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response)

@category_types_bp.route('/<id>', methods = ['DELETE'])
def delete(id):
    try:
        category_type = Category_type.query.filter_by(id = id).first_or_404()
        db.session.delete(category_type)
        db.session.commit()
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return {
        'success' : 'Data deleted successfully'
    }
