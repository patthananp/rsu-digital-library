from fileinput import filename
from app import db

class Research(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    # author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # supervisor_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    year = db.Column(db.String(80), nullable=False)
    pages = db.Column(db.String(30), nullable=False)
    # research_type_id = db.Column(db.Integer, db.ForeignKey("research_type.id"))
    filename = db.Column(db.String(200))
    
    # author = db.relationship("User", backref='author', foreign_keys=[author_id])
    # supervisor = db.relationship("User", backref='supervisor', foreign_keys=[supervisor_id])
    
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return f'Research : {self.title}'