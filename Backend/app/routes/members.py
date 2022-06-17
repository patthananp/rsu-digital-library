import json
from flask import Blueprint

members_bp = Blueprint('members', __name__, url_prefix='/members')

@members_bp.route('/')
def list():
    return json.dumps('members_bp list')

@members_bp.route('/<id>')
def retrieve(id):
    return json.dumps(f'members_bp retrieve {id}')
