import { MotionDiv, fromLeft, fromRight } from "./animation";
import { Form } from "./form";

export default function Main() {
    return (
        <MotionDiv className="main">
            <MotionDiv variants={fromLeft} initial='initial' transition={{ duration: 0.6, delay: 0.6, ease: 'backInOut' }} whileInView='animate' className="left-main">
                <h1>Лучшие решения для облицовки вашего дома!</h1>
                <span>10 лет на рынке!</span>
                <button>Посмотреть каталог</button>
            </MotionDiv>
            <MotionDiv variants={fromRight} initial='initial' transition={{ duration: 0.6, delay: 1.2, ease: 'backInOut' }} whileInView='animate' className="right-main">
                <h2>Оставьте вашу заявку</h2>
                <p>Заполните форму и мы перезвоним!</p>
                <Form />
            </MotionDiv>
        </MotionDiv>
    )
}
