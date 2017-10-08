
import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    s3 = boto3.resource('s3')

    weatherApp_bucket = s3.Bucket('p.weather-app')
    weatherAppBuild_bucket = s3.Bucket('weather-appbuild')

    weatherApp_zip = StringIO.StringIO()
    weatherAppBuild_bucket.download_fileobj('weatherAppBuild.zip', weatherApp_zip)

    with zipfile.ZipFile(weatherApp_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            weatherApp_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            weatherApp_bucket.Object(nm).Acl().put(ACL='public-read')


    return "Hello from lambda"   
