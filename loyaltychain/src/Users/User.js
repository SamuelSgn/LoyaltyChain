import React, {useState, useEffect } from "react";
import axios from "axios";
// import response  from "../../../Backend/routes/auth/auth";   
import '../styles/User.css';

function UserConnect() {

    const [email, setEmail] = useState('');
    const token = localStorage.getItem("kitchen");

    useEffect(()=>{
        console.log(token);
        axios.get("http://localhost:5000/User", {
            headers: {
                'Content-Type': 'Application/json',
                'authorization': `Bearer ${token}`
            }
        }).then((response)=>{
            console.log(response);
            setEmail(response.data)
        }).catch((error)=>{
            console.log(error);
        }, [token, setEmail])
    })
    return (
        <div className="email-diplay">
            <p>{email} is connected</p>
        </div>
    )
}

export default UserConnect;