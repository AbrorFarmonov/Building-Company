'use client'
import Image from 'next/image'
import phone_icon from '../app/assets/phone.svg'
import { MotionDiv, fromTop } from './animation'
import { useState } from 'react'
import bars from '../app/assets/bars.svg'
import close from '../app/assets/close.svg'

export default function Header() {
    const [action, setAction] = useState(true)
    return (
        <>
            <MotionDiv variants={fromTop} transition={{ duration: 0.6, ease: 'backInOut' }} initial='initial' animate='animate' className='header'>
                <div className="logo">
                    <a href="/">LOGO</a>
                </div>
                <nav className='for-laptop'>
                    <a href="#about">О нас</a>
                    <a href="#products">Продукция</a>
                    <a href="#contact">Контакты</a>
                </nav>
                <a href='#contact' className='for-laptop'>
                    <Image src={phone_icon} alt='phone number' />
                    <span>
                        Связаться сейчас
                    </span>
                </a>
                <button onClick={() => setAction(!action)} className='for-phone'>
                    <Image src={bars} alt='menu icon' className='icons-action' />
                </button>
            </MotionDiv>
            <div className={action ? 'menu-for-phone' : 'menu-for-phone active'}>
                <button onClick={() => setAction(!action)}>
                    <Image src={close} alt='button for close' className='icons-action' />
                </button>
                <nav>
                    <a href="#about">О нас</a>
                    <a href="#products">Продукция</a>
                    <a href="#contact">Контакты</a>
                </nav>
                <a href='#contact' className='link-for-contact'>
                    <Image src={phone_icon} alt='phone number' />
                    <span>
                        Связаться сейчас
                    </span>
                </a>
            </div>
        </>
    )
}
