from .books import books_bp
from .members import members_bp
from .users import users_bp

def init_app(app):
    app.register_blueprint(books_bp)
    app.register_blueprint(members_bp)
    app.register_blueprint(users_bp)
