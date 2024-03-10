import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Waiter_button.css'


const Waiter = () =>{

    const Popup = () =>{
        toast.success(
            <span style={{ fontWeight: 'bold' }}>
                The Waiter will be with you shortly
            </span>
        );
    }
    return(
        <div>
        <Button id="Waiter" onClick={Popup}> 
            Request Assistance
        </Button>
        <ToastContainer 

        />
        </div>
    )        
}

export default Waiter;