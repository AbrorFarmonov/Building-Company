import { Form } from "./form";

export default function Main() {
    return (
        <main>
            <div className="left-main">
                <h1>Лучшие решения для облицовки вашего дома!</h1>
                <span>10 лет на рынке!</span>
                <button>Посмотреть каталог</button>
            </div>
            <div className="right-main">
                <h2>Оставьте вашу заявку</h2>
                <p>Заполните форму и мы перезвоним!</p>
                <Form />
            </div>
        </main>
    )
}
