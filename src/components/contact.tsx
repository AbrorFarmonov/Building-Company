import { MotionDiv, fromLeft, fromRight } from "./animation";
import { Form } from "./form";

export default function Contact() {
    return (
        <div className="contact-page" id="contact">
            <MotionDiv variants={fromLeft} whileInView='animate' initial='initial' className="left-contact">
                <h1>Оставьте вашу заявку</h1>
                <p>Заполните форму и мы перезвоним вам для консультации</p>
                <Form />
            </MotionDiv>
            <MotionDiv variants={fromRight} whileInView='animate' initial='initial' transition={{ delay: 0.6 }} className="right-contact">
                <div className="banner-contact">
                    <h1>Сделайте заказ до 2 февраля и получите скидку -10%</h1>
                </div>
                <a className="link-for-prices" href="https://drive.google.com/file/d/1BnpK4-a7mFYsuTeC2XmXGN76dcXV3XtJ/view?usp=sharing" target="_blank">Скачать прайс-лист</a>

            </MotionDiv>
        </div>
    )
}
