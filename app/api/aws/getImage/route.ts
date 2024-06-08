import {GetObjectCommand, S3Client} from "@aws-sdk/client-s3";
// This relies on a Region being set up in your local AWS config.
const client = new S3Client({
    region: process.env.AWS_REGION,
});
export const maxDuration = 30;
// Helper function to convert readable stream to buffer
function streamToBuffer(stream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks)));
    });
}



export async function GET(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')
    try {
        const data = await client.send(new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET,
            Key: key
        }));

        // If the response body is readable, we can convert it to a buffer
        if (data.Body) {
            //we get image as buffer
            const imageBuffer = await streamToBuffer(data.Body);
            //we make that buffer into a base64 string?


            // @ts-ignore
            const base64Image = Buffer.from(imageBuffer).toString('base64');
            //we return our image in a way the frontend src can understand

            // @ts-ignore
            return Response.json({ image: `data:image/jpeg;base64,${base64Image}` })
        }
        return null;
    } catch (err) {
            console.error("Error", err);
        throw err;
    }
}