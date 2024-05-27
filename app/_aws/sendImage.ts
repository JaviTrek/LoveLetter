import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({  region: process.env.AWS_REGION,});

export async function sendImageAWS (base64: Buffer, title: string) {
    const command = new PutObjectCommand({
        Bucket: "dev.javi.bucket",
        ContentType: "image/jpeg",
        Key: `${title}.jpeg`,
        Body: base64,
    });

    try {
        const response = await client.send(command);
        console.log("image sent correctly!");
    } catch (err) {
        console.error(err);
    }
};

