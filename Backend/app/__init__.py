from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from app import routes, models
routes.init_app(app)
models.init_app(app)
CORS(app)
