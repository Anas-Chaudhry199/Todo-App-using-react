import { useState } from "react";

export const TodoDate = () =>{
    const [dateTime, setdateTime] = useState("")
    setInterval(() =>{

        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString()
        setdateTime(`${formattedDate} - ${formattedTime}`)
    },1000)
 
    return(
        <h2 className="date-time">{dateTime}</h2>
    )
}