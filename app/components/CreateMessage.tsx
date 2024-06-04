"use client"
import {sendMessage, user} from "../_database/messages";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Props {
    user: user
}

export const maxDuration = 30;

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



    const [loading, setLoading] = useState(false)

      async function sendStuff(e) {


          e.preventDefault()

          //lets start loading/waiting
          toast('⌛ Please wait! Your letter is being sent.', {
              position: "top-right",
              autoClose: false,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
          });
            setLoading(true)

          //send our data and wait
          let result: {status: string} =  await sendMessage(formData)

          toast.dismiss();

          console.log(result)

          //we got results lets see
          if (result.status === "success") toast('✅ Letter sent correctly!', {
                  position: "top-right",
                  autoClose: 7000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
              });
           else toast('❌ Love Letter NOT sent!', {
              position: "top-right",
              autoClose: 7000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
          });
           setLoading(false)

    }

    return (
        <div className="sticky  ">


            <div
                className={`${loading ? "absolute bg-black bg-opacity-75 w-full h-full left-0 top-0" : "hidden"} mx-auto flex justify-center items-center `}>

                <div className="loader"></div>
            </div>

            <form onSubmit={sendStuff}
                  className="  m-5 sm:py-6 p-2 bg-teal-900 rounded-xl sm:w-2/3 mx-auto ">


                <h2>Make a message for your bebo!</h2>
                <br/>
                <div className="flex sm:flex-row flex-col sm:justify-center sm:text-center text-left sm:gap-12 gap-6">
                    <div>
                        <p className="py-2 sm:py-2">The theme of the message</p>

                        <input onChange={handleChange} required type="text" name="theme"
                               className="p-1 border rounded-md" placeholder="Rats, space, isopods..."/>
                    </div>

                    <div>
                        <p className="py-2 sm:py-2">The date you want your bebo to read this <br/> (your bebo won't see
                            this
                            message until the date you've chosen)</p>
                        <input onChange={handleChange} required className="p-1 border rounded-md" type="date"
                               name="date" min={today}
                               max="2035-12-31"/>
                    </div>

                </div>


                <p className=" mt-3 py-6 sm:py-2 text-left sm:text-center">The content/words of your message.</p>

                <textarea onChange={handleChange} required name="content"
                          className="p-1  md:w-2/4 w-full border rounded-md resize-none" rows={8}
                          placeholder="Dear Bebo.. you are the best!">
        </textarea>


                <br/><br/>
                <button type="submit" className="bg-cyan-800 rounded-xl p-2">Submit message</button>


            </form>

            <ToastContainer
                position="top-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />
        </div>)
}