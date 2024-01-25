import { Form } from "./form";

export default function Contact() {
    return (
        <div className="contact-page">
            <div className="left-contact">
                <h1>Оставьте вашу заявку</h1>
                <p>Заполните форму и мы перезвоним вам для консультации</p>
                <Form />
            </div>
            <div className="right-contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d163198.1899594922!2d57.05987853737625!3d50.273786678964136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCQ0LrRgtC-0LHQtSwgNDEg0YDQsNC30YrQtdC30LQsINGC0L7QstCw0YDQvdGL0Lkg0LTQstC-0YAgNjAy0JAsINC-0YTQuNGBIDM!5e0!3m2!1sru!2s!4v1706186997548!5m2!1sru!2s" width="100%" height="400px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a className="link-for-prices" href="https://drive.google.com/file/d/1BnpK4-a7mFYsuTeC2XmXGN76dcXV3XtJ/view?usp=sharing" target="_blank">Скачать прайс-лист</a>

            </div>
        </div>
    )
}
