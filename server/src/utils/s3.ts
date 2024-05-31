import {PutObjectCommand,S3Client} from '@aws-sdk/client-s3'

const s3 = new S3Client({
    region:'us-east-1',
    credentials:{
        accessKeyId:process.env.AWSACSESSKEY as string,
        secretAccessKey:process.env.AWSSECRETACESSKEY as string
    }
})

async function uploadToS3(Bucket:string,key:string,contentType:string,content:any) {
    const command = new PutObjectCommand({
        Bucket:Bucket,
        Key:key,
        Body:content,
        ContentType:contentType,
    })
  
   
     await s3.send(command)
    const url = `https://s3.amazonaws.com/${Bucket}/${key}`
    
    return url

}

export default uploadToS3