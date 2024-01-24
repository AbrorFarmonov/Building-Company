'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
    const form = useRef();

    const notify = () => toast.error("Wow so easy!");

    const sendEmail = async (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_9ynovw8', 'template_klpiu1p', form.current, 'fR5GwlLPYBarn04Uo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <>

            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="from_name" required placeholder='Ваше имя' />
                <input type="number" name="email_id" placeholder='Ваш номер телефона' />
                <textarea name="message" required placeholder='Дополнительный комментарий' />
                <input type="submit" value="Отправить" />
            </form>
            <ToastContainer />
        </>
    );
};