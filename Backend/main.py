# from flask import Flask, request
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:Passw0rd@digital-library-db.cmzd0z7srps6.ap-southeast-1.rds.amazonaws.com:3306/digital_library'
# db = SQLAlchemy(app)
# CORS(app)

# import models, routes
# routes.init_app(app)
# # models.init_app(app)


# if __name__ == '__main__' :
#     db.create_all()
#     app.run(debug=True)