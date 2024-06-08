import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import sharp from "sharp";
export const maxDuration = 30;
const client = new S3Client({  region: process.env.AWS_REGION});

export async function sendImageAWS (base64: Buffer, title: string) {

    const compressedBuffer = await sharp(base64).resize(800, 800).jpeg({quality: 75}).toBuffer();

    const command = new PutObjectCommand({
        Bucket: "dev.javi.bucket",
        ContentType: "image/jpeg",
        Key: `${title}.jpeg`,
        Body: compressedBuffer,
    });

    try {
        await client.send(command);
        console.log("S3 image sent correctly!");
    } catch (err) {
        console.error(err);
    }

}