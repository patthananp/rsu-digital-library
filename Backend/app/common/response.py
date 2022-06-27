from datetime import datetime
from app.common import constants

class Response():

    def success(data={}):

        now = datetime.now()

        return {
            'meta': {
                'response_code': getattr(constants, 'SUCCESS'),
                'response_datetime': now.strftime('%d/%m/%Y %H:%M:%S'),
                'response_ref': 'test',
                'response_desc': 'desc'
            },
            'data': data
        }
    
    def error(e):

        now = datetime.now()
        return {
            'meta': {
                'response_code': getattr(constants, 'ERROR'),
                'response_datetime': now.strftime('%d/%m/%Y %H:%M:%S'),
                'response_ref': 'error',
                'response_desc': str(e)
            }
        }