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

    return (<form onSubmit={sendStuff} className="bg-teal-900 p-4 *:px-1   *:text-sm">

        <p className="py-4">The theme of the message (love, rats, pipicaca)</p>

        <input onChange={handleChange} required type="text" name="theme" className="p-1 border rounded-md" placeholder="Your message"/>
        <br/><br/>

        <p className="py-4">The content/words of your message.</p>

        <textarea onChange={handleChange} required name="content" className="p-1  md:w-1/3 w-full border rounded-md resize-none" rows={10}
                  placeholder="Dear Bebo..">
        </textarea>

        <p className="py-4">The date you want your bebo to read this</p>
        <input onChange={handleChange} required className="p-1 " type="date" name="date" min={today} max="2035-12-31"/>

        <br/><br/>
        <button type="submit">Submit message</button>


    </form>)
}