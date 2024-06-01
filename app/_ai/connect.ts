import OpenAI from "openai";
import {sendImageAWS} from "../_aws/sendImage";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function getAITitleColor(content: string, theme: string) {
    const getTitle = await openai.chat.completions.create({
        messages: [{ role: "system", content:
                `You are great writer and artist. Respond only on JSON to this message. You are to make a short title for a love letter based on the content you'll be receiving below. The title will be impacted on the next theme as well: ${theme}  It's up to you to draft the title based on the content and the title, feel free to be creative, funny, cryptic, abstract, romantic, etc.
                
                    Also, choose one of the following colors that you think will match the title and theme the best: blue, red, yellow, green, indigo, purple, pink, teal, orange, gray, black, white, amber, cyan, lime, emerald, fuchsia, rose, violet or sky.
                  
                  Your JSON titleRes will only include the title and color properties.
                  
                  Here is the content of the love letter: ${content}`
        }],
        model: "gpt-4-turbo",
        // @ts-ignore
        response_format: {
            type: "json_object"
        }
    });

    const titleRes = JSON.parse(getTitle.choices[0].message.content)



    //TODO:  create AI image, send it to AWS
    const imageReq = await openai.images.generate({
        model: "dall-e-3",
        prompt: `Create an unhinged images in non-traditional art styles such as art brut, deconstructivism, vaporwave, queer art or tumblr art based on the content provided by the user below. Make the image be uncanny and funny. For example, a giant air purifier in a forest.
         
         content ${content}`,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json"


    });



    const imageBuffer = Buffer.from(imageReq.data[0].b64_json, 'base64');

    await sendImageAWS(imageBuffer, titleRes.title.replace(/\s/g, ''))



    //console.log(titleRes)
    return {title: titleRes.title, color: titleRes.color};
}





