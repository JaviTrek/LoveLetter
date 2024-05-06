"use client"
import {sendMessage, user} from "../_database/messages";
import {useState} from "react";

interface Props {
    user: user
}

export default function CreateMessage({user: user}: Props) {


    const today = new Date().toISOString().split('T')[0];

    // State for each input field
    const [formData, setFormData] = useState({
        theme: "default",
        content: "default",
        user: user,
        date: new Date()
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

     function sendStuff(e) {

        e.preventDefault()
        console.log(e)

        sendMessage(formData)
    }

    return (<form onSubmit={sendStuff} className=" m-10 sm:py-6 p-2 bg-teal-900 border-8 border-teal-950 rounded-xl sm:w-2/3 mx-auto ">

        <h1>Make a message for your bebo!</h1>
        <br/>
        <div className="flex sm:flex-row flex-col justify-center align-middle sm:gap-14 gap-8">
            <div>
                <p className="py-4">The theme of the message</p>

                <input onChange={handleChange} required type="text" name="theme" className="p-1 border rounded-md" placeholder="Love, support, pipicaca"/>
            </div>

            <div>
                <p className="py-4">The date you want your bebo to read this <br/> (your bebo won't see this message until the date you've chosen)</p>
                <input onChange={handleChange} required className="p-1 border rounded-md" type="date" name="date" min={today}
                       max="2035-12-31"/>
            </div>

        </div>


        <br/><br/>


        <p className="py-4">The content/words of your message.</p>

        <textarea onChange={handleChange} required name="content"
                  className="p-1  md:w-2/3 w-full border rounded-md resize-none" rows={12}
                  placeholder="Dear Bebo..">
        </textarea>


        <br/><br/>
        <button type="submit" className="bg-cyan-800 rounded-xl p-4">Submit message</button>


    </form>)
}