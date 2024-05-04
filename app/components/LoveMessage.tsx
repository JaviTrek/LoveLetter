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


    const colorVariants = {
        blue: 'bg-blue-600 hover:bg-blue-500 text-white',
        red: 'bg-red-500 hover:bg-red-400 text-white',
        yellow: 'bg-yellow-400 hover:bg-yellow-300 text-black',
        green: 'bg-green-500 hover:bg-green-400 text-white',
        indigo: 'bg-indigo-500 hover:bg-indigo-400 text-white',
        purple: 'bg-purple-500 hover:bg-purple-400 text-white',
        pink: 'bg-pink-500 hover:bg-pink-400 text-white',
        teal: 'bg-teal-500 hover:bg-teal-400 text-white',
        orange: 'bg-orange-500 hover:bg-orange-400 text-white',
        gray: 'bg-gray-500 hover:bg-gray-400 text-white',
        black: 'bg-black hover:bg-gray-800 text-white',
        white: 'bg-white hover:bg-gray-100 text-black',
        amber: 'bg-amber-500 hover:bg-amber-400 text-black',
        cyan: 'bg-cyan-500 hover:bg-cyan-400 text-white',
        lime: 'bg-lime-500 hover:bg-lime-400 text-black',
        emerald: 'bg-emerald-500 hover:bg-emerald-400 text-white',
        fuchsia: 'bg-fuchsia-500 hover:bg-fuchsia-400 text-white',
        rose: 'bg-rose-500 hover:bg-rose-400 text-white',
        violet: 'bg-violet-500 hover:bg-violet-400 text-white',
        sky: 'bg-sky-500 hover:bg-sky-400 text-white',
    };

    return (
        <div className={`${colorVariants[colors.primary]}  p-5 rounded-lg max-w-md mx-auto duration-300 cursor-pointer`}>
            <h2 className={` text-lg font-bold`}>{title}</h2>
            <p className={` text-base my-2`}>{content}</p>
            <p className={` text-sm italic`}>Sent by {user} on {date}</p>
        </div>
    );
};

