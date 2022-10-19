import boto3
from botocore.exceptions import ClientError
import os
from flask import current_app


class S3utils():
    def __init__(self, aws_access_key_id=None, aws_secret_access_key=None, bucket=None):
        self.s3_client = boto3.client('s3',
                                 aws_access_key_id=aws_access_key_id or current_app.config['AWS_ACCESS_KEY_ID'],
                                 aws_secret_access_key=aws_secret_access_key or current_app.config['AWS_SECRET_ACCESS_KEY'])
        self.bucket = bucket or current_app.config['AWS_S3_DEFAULT_BUCKET']
        
    def upload_file(self, file_name, object_name=None):
        """Upload a file to an S3 bucket

        :param file_name: File to upload
        :param bucket: Bucket to upload to
        :param object_name: S3 object name. If not specified then file_name is used
        :return: True if file was uploaded, else False
        """

        # If S3 object_name was not specified, use file_name
        if not object_name:
            object_name = os.path.basename(file_name)

        # Upload the file
        try:
            response = self.s3_client.upload_file(file_name, self.bucket, object_name)
        except ClientError as e:
            return False
        return True
    
    def download_fileobj(self, object_name, file_name=None):
        """Upload a file to an S3 bucket
        
        :param object_name: S3 object name. If not specified then file_name is used
        :param file_name: File to upload
        :return: True if file was downloaded, else False
        """
        
        # If S3 file_name was not specified, use object_name
        if not file_name:
            file_name = object_name
        
        # Download File
        try:
            response = self.s3_client.download_file(file_name, self.bucket, object_name)
        except ClientError as e:
            return False
        return True
    