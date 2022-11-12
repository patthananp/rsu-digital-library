import json
import os
from flask import current_app, Blueprint, request, jsonify
from app import db

from app.models.research import Research
from app.common.response import Response
from app.common.s3utils import S3utils

researches_bp = Blueprint('researches', __name__, url_prefix='/researches')

@researches_bp.route('/', methods = ['GET'])
def list():
    try:
        researches = Research.query.all()
        if researches:
            researches = [research.as_dict() for research in researches]
        response = Response.success(researches)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response), 200

@researches_bp.route('/<id>', methods = ['GET'])
def retrieve(id):
    try:
        research = Research.query.filter_by(id=id).first()
        print(research)
        if research:
            research = research.as_dict()
        response = Response.success(research)
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return json.dumps(research)

def allowed_file(filename):
    print(f"current_app.config[ALLOWED_EXTENSIONS]: {current_app.config['ALLOWED_EXTENSIONS']}")
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in current_app.config['ALLOWED_EXTENSIONS']

@researches_bp.route('/', methods = ['POST'])
def create():
    try:    
        files = request.files
        form_data = request.form
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = file.filename
            filepath = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)
            
            s3utils = S3utils()
            s3utils.upload_file(filepath)
            
        new_research = Research(**form_data)
        db.session.add(new_research)
        db.session.commit()
        response = Response.success(new_research.as_dict())
        response = Response.success('success')
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response)

@researches_bp.route('/<id>', methods = ['PUT'])
def update(id):
    try:
        files = request.files
        form_data = request.form
        # TODO Update new file
        research = Research.query.filter_by(id=id).first()
        if research:
            if form_data.get('title'):
                research.title = form_data.get('title')

            if form_data.get('author_id'):
                research.author_id = form_data.get('author_id')

            if form_data.get('supervisor_id'):
                research.supervisor_id = form_data.get('supervisor_id')
            
            if form_data.get('year'):
                research.year = form_data.get('year')

            if form_data.get('pages'):
                research.pages = form_data.get('pages')

            if form_data.get('research_type_id'):
                research.research_type_id = form_data.get('research_type_id')
        else:
            raise Exception(f're id = {id} not found.')
        
        db.session.commit()
        response = Response.success(research.as_dict())
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return jsonify(response), 200

 
@researches_bp.route('/<id>', methods = ['DELETE'])
def delete(id):
    try:
        research = Research.query.filter_by(id = id).first_or_404()
        db.session.delete(research)
        db.session.commit()
    except Exception as e:
        print(f'Exception: {e}')
        response = Response.error(e)
    return {
        'success' : 'Data deleted successfully'
    }