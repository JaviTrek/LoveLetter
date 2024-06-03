import OpenAI from "openai";
import {sendImageAWS} from "../_aws/sendImage";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function getAITitleColor(content: string, theme: string) {
    const getTitle = await openai.chat.completions.create({
        messages: [{ role: "system", content:
                `You are great writer and artist. Respond only on JSON to this message. You are to make a short title for a love letter based on the content you'll be receiving below. The title will be impacted on the theme as well: ${theme}  Make the title be unhinged, funny but keeping it within the theme and content the user provided.
                
                    Also, choose one of the following colors at random and use it as the value of your color property: blue, red, yellow, green, indigo, purple, pink, teal, orange, gray, black, white, amber, cyan, lime, emerald, fuchsia, rose, violet or sky.
                  
                  Your JSON titleRes will only include the title and color properties.
                  
                  Here is the content of the love letter: ${content}`
        }],
        model: "gpt-4o",
        // @ts-ignore
        response_format: {
            type: "json_object"
        }
    });

    const titleRes = JSON.parse(getTitle.choices[0].message.content)



    //TODO:  create AI image, send it to AWS
  /*  const imageReq = await openai.images.generate({
        model: "dall-e-3",
        prompt: `Create an unhinged image based on the content and theme below. Pick the most important points from the content below and use them to create the image. Make the image be uncanny and funny. For example, a giant air purifier in a forest.
        
        The theme for our image is: ${theme}
         
         content for extra inspiration: ${content}`,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json"


    });
*/


    //const imageBuffer = Buffer.from(imageReq.data[0].b64_json, 'base64');

    //await sendImageAWS(imageBuffer, titleRes.title.replace(/\s/g, ''))



    //console.log(titleRes)
    return {title: titleRes.title, color: titleRes.color};
}





