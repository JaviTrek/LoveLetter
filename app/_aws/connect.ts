// snippet-start:[s3.JavaScript.buckets.createclientv3]
import {GetObjectCommand, ListBucketsCommand, S3Client} from "@aws-sdk/client-s3";
// This relies on a Region being set up in your local AWS config.
const client = new S3Client({
    region: process.env.AWS_REGION || "us-east-2",
});


export { client };


export async function getImage(bucketName: string, fileKey: string) {

    console.log("server flag")
    console.log(process.env.IS_SERVER_FLAG)

    try {
        const data = await client.send(new GetObjectCommand({
            Bucket: bucketName,
            Key: fileKey
        }));

        // If the response body is readable, we can convert it to a buffer
        if (data.Body) {
            //we get image as buffer
            const imageBuffer = await streamToBuffer(data.Body);
            //we make that buffer into a base64 string?
            const base64Image = Buffer.from(imageBuffer).toString('base64');
            //we return our image in a way the frontend src can understand
            return { image: `data:image/jpeg;base64,${base64Image}` }
        }
        return null;
    } catch (err) {
        console.error("Error", err);
        throw err;
    }
}

// Helper function to convert readable stream to buffer
function streamToBuffer(stream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks)));
    });
}

