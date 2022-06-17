from app.models import category_type, research_type, research, user
from app import db

def init_app(app):
    db.create_all()