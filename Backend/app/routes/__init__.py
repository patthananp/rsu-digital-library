from app.routes.members import members_bp
from app.routes.users import users_bp
from app.routes.research_types import research_types_bp
from app.routes.category_types import category_types_bp
from app.routes.researches import researches_bp

def init_app(app):
    app.register_blueprint(members_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(research_types_bp)
    app.register_blueprint(category_types_bp)
    app.register_blueprint(researches_bp)



