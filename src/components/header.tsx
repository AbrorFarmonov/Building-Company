import Image from 'next/image'
import phone_icon from '../app/assets/phone.svg'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <a href="/">LOGO</a>
            </div>
            <nav>
                <a href="#">О нас</a>
                <a href="#">Продукция</a>
                <a href="#">Контакты</a>
            </nav>
            <button>
                <Image src={phone_icon} alt='phone number' />
                <span>
                    Связаться сейчас
                </span>
            </button>
        </header>
    )
}
