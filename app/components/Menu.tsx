"use client"

interface Props {
    user: String
}


export default function Menu({user}: Props) {


    return(
        <div className="flex">
            <button onClick={()=>{
                console.log(user)
            }}>
                Read
                <div className="hidden ">
                    <button> My messages</button>
                    <button> Bebo's messages</button>
                </div>
            </button>
            <button>
                Write
            </button>
        </div>
    )
}