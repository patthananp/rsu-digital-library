import boto3  # pip install boto3

# # Let's use Amazon S3
# s3 = boto3.resource("s3",
#     aws_access_key_id='AKIAVRZ3UCNLB7SUBNO2',
#     aws_secret_access_key='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')

# # Print out bucket names
# for bucket in s3.buckets.all():
#     print(bucket.name)

# Create an S3 access object
s3 = boto3.client("s3",
    aws_access_key_id='AKIAVRZ3UCNLB7SUBNO2',
    aws_secret_access_key='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')

# s3.download_file(
#     Bucket="digital-library", Key="529-2564 พัทธนันท์ M.S.IT 6406110 รศ.ดร. ปณิธิ.pdf", Filename="downloads/downloaded_from_s3.pdf"
# )

s3.upload_file(
    Filename="uploads/test_yupload.txt",
    Bucket="digital-library",
    Key="text.txt",
)