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

export async function getAITheme(content: string, theme: string) {
    const getTitle = await openai.chat.completions.create({
        messages: [{ role: "system", content:
                `Respond only on JSON to this message. You are to make a short title for a love letter based on the content you'll be receiving below. The title will be impacted on the next theme as well: ${theme}  It's up to you to draft the title based on the content and the title, feel free to be creative, funny, cryptic, abstract, romantic, etc.
                  
                  Here is the content of the love letter: ${content}`
        }],
        model: "gpt-4",
    });

    const title = JSON.parse(getTitle.choices[0].message.content)
    return {title};
}

export async function getAI(content: string, theme: string) {
    console.log("AI FUNCTION RUNNING-----------")

    const getTitle = await openai.chat.completions.create({
        messages: [{ role: "system", content:
                `Respond only on JSON to this message. You are to make a short title for a love letter based on the content you'll be receiving below. The title will be impacted on the next theme as well: ${theme}  It's up to you to draft the title based on the content and the title, feel free to be creative, funny, cryptic, abstract, romantic, etc.
                  
                  Here is the content of the love letter: ${content}`
        }],
        model: "gpt-4",
    });

    const title = JSON.parse(getTitle.choices[0].message.content)
    console.log(title)

    const getColors = await openai.chat.completions.create({
        messages: [{ role: "system", content:
                `Respond only on JSON to this message. You are to make a color scheme for a love letter based on the theme and title. You'll respond with a JSON object named color that has a primary, secondary and font keys. Their values will be tailwindcss color values (such as green-500). Make sure the three colors make sense together and the font color is readable compared to primary (which will be the background).
                  
                  Here is the theme of the love letter: ${theme}
                  
                  Here is the title of the love letter: ${title}`
        }],
        model: "gpt-4",
    });

    const colors = JSON.parse(getColors.choices[0].message.content)

    console.log(colors)
    return {title, colors}

    //TODO:  bg image (pattern) and main image

    //const image = await openai.images.generate({ prompt: "A cute baby sea otter" });

    //console.log(image.data);

}

