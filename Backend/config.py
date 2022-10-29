class BaseConfig(object):
    
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://admin:Passw0rd@digital-library-db.ce1kvnizqrfe.ap-southeast-1.rds.amazonaws.com:3306/digital_library'
    SECRET_KEY = 'hO6rCflxLF9SfiU2fFy3Q2LBlQ4d1bhUeDNQZmfqoEDLdg4n0nwlYLqAxitN?mAF=Xr?XZpPaCR1pM=8tdjqtpONxLJ!tCvhX8TPA//4RepWNbMrry2mUIi-?3lL=yG8j?QOs1RGf5TW?39GMZvibHujwW9U3k5Mgjm1M/1ZGk9!toLGMacVw!UUGYLuLp3YvfbvbTsHJ-W2Vi72VOHSvkbyC9sJEUSd6w!vsP4mckBlUjoLkzr=TgS7PyB8qS3C'
    SECURITY_PASSWORD_SALT = 'P@tthanan'
    
    UPLOAD_FOLDER = "/Users/patthanan/Desktop/test_uploads"
    ALLOWED_EXTENSIONS = ('txt', 'pdf')

    AWS_ACCESS_KEY_ID='AKIAVRZ3UCNLB7SUBNO2'
    AWS_SECRET_ACCESS_KEY='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'
    AWS_DEFAULT_REGION=''
    AWS_S3_DEFAULT_BUCKET='digital-library'