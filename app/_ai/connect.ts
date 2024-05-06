import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function getAITitleColor(content: string, theme: string) {
    const getTitle = await openai.chat.completions.create({
        messages: [{ role: "system", content:
                `Respond only on JSON to this message. You are to make a short title for a love letter based on the content you'll be receiving below. The title will be impacted on the next theme as well: ${theme}  It's up to you to draft the title based on the content and the title, feel free to be creative, funny, cryptic, abstract, romantic, etc.
                
                    Also, choose one of the following colors that you think will match the title and theme the best: blue, red, yellow, green, indigo, purple, pink, teal, orange, gray, black, white, amber, cyan, lime, emerald, fuchsia, rose, violet or sky.
                  
                  Your JSON response will only include the title and color properties.
                  
                  Here is the content of the love letter: ${content}`
        }],
        model: "gpt-4",
    });

    const response = JSON.parse(getTitle.choices[0].message.content)
    console.log(response)
    return {title: response.title, color: response.color};
}

    //TODO:  AI image



