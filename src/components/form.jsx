'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
    const form = useRef(null);

    const notify = () => toast.error("Something went wrong!");

    const sendEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ynovw8', 'template_klpiu1p', form.current, 'fR5GwlLPYBarn04Uo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <form ref={form} onSubmit={sendEmail} >
            <input className='uni-input' type="text" name="from_name" required placeholder='Ваше имя' />
            <input className='uni-input' type="number" name="email_id" placeholder='Ваш номер телефона' />
            <textarea className='uni-input' name="message" required onInvalid={notify} placeholder='Дополнительный комментарий' />
            <input className='uni-input' type="submit" value="Отправить" />
            <ToastContainer />
        </form>
    );
};