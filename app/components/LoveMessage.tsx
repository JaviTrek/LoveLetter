/*// this component will display messages

export default function Page() {


    /!*
    * Message Contents ------
    *
    *
    * Icon on corner
    * Title - Date issued
    * Message
    * Date meant to be read
    *
    *
    * END-
    *
    * Message Types:
    *
    * Love, Support, Congratulations, Miss you
    *
    * *!/

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <p> Paragraph</p>

        </div>
    )
}*/




interface ThemeColors {
    primary: string;
    secondary: string;
    font: string;
}

interface MessageProps {
    theme: string;
    content: string;
    user: string;
    date: string;
    title: string;
    aiTheme: {
        colors: ThemeColors;
    };
}

export default function LoveMessage({ content, user, date, title, aiTheme }) {
    const { colors } = aiTheme;

    return (
        <div className={`bg-${colors.primary} p-5 rounded-lg max-w-md mx-auto`}>
            <h2 className={`text-${colors.font} text-lg font-bold`}>{title}</h2>
            <p className={`text-${colors.secondary} text-base my-2`}>{content}</p>
            <p className={`text-${colors.font} text-sm italic`}>Sent by {user} on {date}</p>
        </div>
    );
};

