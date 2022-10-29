from app.routes.api import api_bp

def init_app(app):
    app.register_blueprint(api_bp)



