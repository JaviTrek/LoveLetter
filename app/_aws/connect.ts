// snippet-start:[s3.JavaScript.buckets.createclientv3]
import {GetObjectCommand, ListBucketsCommand, S3Client} from "@aws-sdk/client-s3";
// This relies on a Region being set up in your local AWS config.
const client = new S3Client({
    region: process.env.AWS_REGION,
});


export { client };

export const helloS3 = async () => {
    const command = new ListBucketsCommand({});

    const { Buckets } = await client.send(command);
    console.log("Buckets: ");
    console.log(Buckets.map((bucket) => bucket.Name).join("\n"));
    return Buckets;
};

export const getPhoto = async () => {
    const command = new GetObjectCommand({
        Bucket: "dev.javi.bucket",
        Key: "avatar.jpg",
    });

    try {
        const response = await client.send(command);
        // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
        const str = await response.Body.transformToString();
        console.log(str);
    } catch (err) {
        console.error(err);
    }
};

async function getImage(bucketName: string, fileKey: string) {
    try {
        const data = await client.send(new GetObjectCommand({
            Bucket: bucketName,
            Key: fileKey
        }));

        // If the response body is readable, we can convert it to a buffer
        if (data.Body) {
            return await streamToBuffer(data.Body);
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

