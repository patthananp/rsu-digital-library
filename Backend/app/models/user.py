from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prefix = db.Column(db.String(100))
    firstname = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(100))

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return f'<User : {self.firstname, self.lastname}>'