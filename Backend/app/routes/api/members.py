import json
from flask import current_app, Blueprint, request

members_bp = Blueprint('members', __name__, url_prefix='/members')

@members_bp.route('/')
def list():
    query = request.args
    if query:
        return query
    else:
        return {'hello': 'world'}
    
@members_bp.route('/', methods = ['POST'])
def create():
    files = request.files
    print(files)
    formdata = request.form
    print(formdata)
    return {'hello': 'world'}
    
