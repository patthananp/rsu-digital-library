from app.routes.api.members import members_bp
from app.routes.api.users import users_bp
from app.routes.api.research_types import research_types_bp
from app.routes.api.category_types import category_types_bp
from app.routes.api.researches import researches_bp

from flask import Blueprint

api_bp = Blueprint('api', __name__, url_prefix='/api')

api_bp.register_blueprint(members_bp)
api_bp.register_blueprint(users_bp)
api_bp.register_blueprint(research_types_bp)
api_bp.register_blueprint(category_types_bp)    
api_bp.register_blueprint(researches_bp)