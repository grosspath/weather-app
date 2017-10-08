
import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    location = {
        "bucketName": 'weather-appbuild',
        "objectKey": 'weatherAppBuild.zip'
    }

    job = event.get("CodePipeline.job")

    if job:
        for artifact in job["data"]["inputArtifacts"]:
            if artifact["name"] == "MyAppBuild":
                location = artifact["location"]["s3Location"]

                print "Building portfolio from " + str(location)

    s3 = boto3.resource('s3')

    weatherApp_bucket = s3.Bucket('p.weather-app')
    weatherAppBuild_bucket = s3.Bucket(location["bucketName"])

    weatherApp_zip = StringIO.StringIO()
    weatherAppBuild_bucket.download_fileobj(location["objectKey"], weatherApp_zip)

    with zipfile.ZipFile(weatherApp_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            weatherApp_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            weatherApp_bucket.Object(nm).Acl().put(ACL='public-read')

    if job:
        codepipeline = boto3.client('codepipeline')
        codepipeline.put_job_success_result(jobId=job["id"])
    return "Hello from lambda"
        
