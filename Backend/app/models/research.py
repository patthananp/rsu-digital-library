from fileinput import filename
from app import db

class Research(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text)
    # author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # supervisor_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    year = db.Column(db.Integer, nullable=False)
    pages = db.Column(db.Integer, nullable=False)
    # research_type_id = db.Column(db.Integer, db.ForeignKey("research_type.id"))
    
    abstract = db.Column(db.Text, nullable=False)
    keywords = db.Column(db.Text, nullable=False)
    filename = db.Column(db.Text)
    
    # author = db.relationship("User", backref='author', foreign_keys=[author_id])
    # supervisor = db.relationship("User", backref='supervisor', foreign_keys=[supervisor_id])
    
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return f'Research : {self.title}'