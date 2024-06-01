import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import sharp from "sharp";

const client = new S3Client({  region: process.env.AWS_REGION});

export async function sendImageAWS (base64: Buffer, title: string) {

    const compressedBuffer = await sharp(base64).resize(800, 800).jpeg({quality: 75}).toBuffer();

    //console.log(compressedBuffer);

    const command = new PutObjectCommand({
        Bucket: "dev.javi.bucket",
        ContentType: "image/jpeg",
        Key: `${title}.jpeg`,
        Body: compressedBuffer,
    });

    try {
        await client.send(command);
        console.log("image sent correctly!");
    } catch (err) {
        console.error(err);
    }

}