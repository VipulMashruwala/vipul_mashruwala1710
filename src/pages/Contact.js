import React, { Fragment, useState} from "react";
import Footer from "../components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Section.module.css';
import axios from 'axios'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const submitFormHandler = (event) =>{
        if(name === "" || email === "" || subject === "" || message === ""){
            toast.error('Please fill all details !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else{
            const contact_data = {
                name : name,
                email : email,
                subject : subject,
                message : message
            }
    
            axios({
                url: '/contact',
                method: 'POST',
                data: JSON.stringify(contact_data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.data['type'] === "success"){
                    toast.success(response.data['msg'], {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");  
                }
                if(response.data['type'] === "warning"){
                    toast.warning(response.data['msg'], {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    
                }
            })
            .catch(err => {
                console.log(err)
                toast.error(err, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })   
            
        }
        event.preventDefault();
    }

    return (
        <Fragment>
            <div className={classes.ContactSection}>
                <div className={classes.ContactHeading}>
                        <ToastContainer />
                    <p className={classes.GetInTouch}>Get In Touch</p>
                    <form onSubmit={submitFormHandler}>
                        <input className={classes.Input} type = 'text' 
                            value={name} placeholder="Name"
                            onChange={(event) => setName(event.target.value)}></input>
                        <br></br>
                        <input className={classes.Input} type = 'text' 
                            value={email} placeholder="Email"
                            onChange={(event) => setEmail(event.target.value)}></input>
                        <br></br>
                        <input className={classes.Input} type = 'text' 
                            value={subject} placeholder="Subject"
                            onChange={(event) => setSubject(event.target.value)}></input>
                        <br></br>
                        <textarea className={classes.InputMessage} type = 'text' 
                            value={message} placeholder="Message"
                            onChange={(event) => setMessage(event.target.value)}></textarea>
                        <br></br>
                        <br></br>
                        <button className={classes.SendMessageBtn} type="submit">Send Message</button>
                    </form>
                </div>
            </div>
          
            <div className={classes.Footer}>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Contact;