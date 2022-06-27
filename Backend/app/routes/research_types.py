import json
from flask import Blueprint, request, jsonify
from app import db

from app.models.research_type import Research_type
from app.common.response import Response

research_types_bp = Blueprint('research_types', __name__, url_prefix='/research-types')

@research_types_bp.route('/')
def list():
    try:
        research_types = Research_type.query.all()
        if research_types:
            research_types = [research_type.as_dict() for research_type in research_types]
        response = Response.success(research_types)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response), 200

@research_types_bp.route('/<id>')
def retrieve(id):
    try:
        research_type = Research_type.query.filter_by(id=id).first()
        print(research_type)
        if research_type:
            research_type = research_type.as_dict()
        response = Response.success(research_types)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return json.dumps(research_type)

@research_types_bp.route('/', methods = ['POST'])
def create():
    try:
        request_data = request.json
        print(f'request_data={request_data}')
        new_research_type = Research_type(**request_data)
        db.session.add(new_research_type)
        db.session.commit()
        response = Response.success(new_research_type.as_dict())
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response)

@research_types_bp.route('/<id>', methods = ['PUT'])
def update(id):
    try: 
        request_data = request.json
        research_type = Research_type.query.filter_by(id = id).first()
        if research_type:

            if  request_data.get('name'):
                research_type.name = request_data.get('name')

            if  request_data.get('description'):
                research_type.description = request_data.get('description')
            
        else:
            raise Exception(f'research_type_name = {name} not found.')
        
        db.session.commit()
        response = Response.success(research_type.as_dict())
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response)

@research_types_bp.route('/<id>', methods = ['DELETE'])
def delete(id):
    try:
        research_type = Research_type.query.filter_by(id = id).first()
        db.session.delete(research_type)
        db.session.commit()
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return {
        'success' : 'Data deleted successfully'
    }
