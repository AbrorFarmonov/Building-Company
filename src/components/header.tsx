import Image from 'next/image'
import phone_icon from '../app/assets/phone.svg'
import { MotionDiv, fromTop } from './animation'

export default function Header() {
    return (
        <MotionDiv variants={fromTop} transition={{ duration: 0.6, ease: 'backInOut' }} initial='initial' animate='animate' className='header'>
            <div className="logo">
                <a href="/">LOGO</a>
            </div>
            <nav>
                <a href="#about">О нас</a>
                <a href="#products">Продукция</a>
                <a href="#contact">Контакты</a>
            </nav>
            <a href='#contact'>
                <Image src={phone_icon} alt='phone number' />
                <span>
                    Связаться сейчас
                </span>
            </a>
        </MotionDiv>
    )
}
