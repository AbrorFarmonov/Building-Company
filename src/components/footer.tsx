import { MotionDiv, fromLeft, fromRight } from "./animation";

export default function Footer() {
  return (
    <>
      <footer>
        <MotionDiv variants={fromLeft} whileInView='animate' initial='initial' className="left-footer">
          <ul>
            <p>Навигация</p>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Наши работы</a></li>
          </ul>
          <div>
            <ul>
              <p>Контакты</p>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.965 8.0925C6.045 10.215 7.785 11.9475 9.9075 13.035L11.5575 11.385C11.76 11.1825 12.06 11.115 12.3225 11.205C13.1625 11.4825 14.07 11.6325 15 11.6325C15.4125 11.6325 15.75 11.97 15.75 12.3825V15C15.75 15.4125 15.4125 15.75 15 15.75C7.9575 15.75 2.25 10.0425 2.25 3C2.25 2.5875 2.5875 2.25 3 2.25H5.625C6.0375 2.25 6.375 2.5875 6.375 3C6.375 3.9375 6.525 4.8375 6.8025 5.6775C6.885 5.94 6.825 6.2325 6.615 6.4425L4.965 8.0925Z" fill="black" />
                  </svg>
                  <span>+7 705 392 61 45</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.965 8.0925C6.045 10.215 7.785 11.9475 9.9075 13.035L11.5575 11.385C11.76 11.1825 12.06 11.115 12.3225 11.205C13.1625 11.4825 14.07 11.6325 15 11.6325C15.4125 11.6325 15.75 11.97 15.75 12.3825V15C15.75 15.4125 15.4125 15.75 15 15.75C7.9575 15.75 2.25 10.0425 2.25 3C2.25 2.5875 2.5875 2.25 3 2.25H5.625C6.0375 2.25 6.375 2.5875 6.375 3C6.375 3.9375 6.525 4.8375 6.8025 5.6775C6.885 5.94 6.825 6.2325 6.615 6.4425L4.965 8.0925Z" fill="black" />
                  </svg>
                  <span>+7 707 777 75 85</span>
                </a>
              </li>
            </ul>
            <ul style={{ marginTop: 29, maxWidth: 265 }}>
              <p>Адрес</p>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 8.625C8.50272 8.625 8.02581 8.42746 7.67417 8.07582C7.32254 7.72419 7.125 7.24728 7.125 6.75C7.125 6.25272 7.32254 5.7758 7.67417 5.42417C8.02581 5.07254 8.50272 4.875 9 4.875C9.49728 4.875 9.97419 5.07254 10.3258 5.42417C10.6775 5.7758 10.875 6.25272 10.875 6.75C10.875 6.99623 10.8265 7.24005 10.7323 7.46753C10.638 7.69502 10.4999 7.90171 10.3258 8.07582C10.1517 8.24993 9.94502 8.38805 9.71753 8.48227C9.49005 8.5765 9.24623 8.625 9 8.625ZM9 1.5C7.60761 1.5 6.27226 2.05312 5.28769 3.03769C4.30312 4.02226 3.75 5.35761 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 5.35761 13.6969 4.02226 12.7123 3.03769C11.7277 2.05312 10.3924 1.5 9 1.5Z" fill="black" />
                </svg>
                <span>
                  г. Актобе, 41 разъезд, товарный двор 602А, офис 3
                </span>
              </li>
            </ul>
          </div>
        </MotionDiv>
        <MotionDiv variants={fromRight} whileInView='animate' initial='initial' transition={{delay: 0.6}} className="right-footer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d163198.1899594922!2d57.05987853737625!3d50.273786678964136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCQ0LrRgtC-0LHQtSwgNDEg0YDQsNC30YrQtdC30LQsINGC0L7QstCw0YDQvdGL0Lkg0LTQstC-0YAgNjAy0JAsINC-0YTQuNGBIDM!5e0!3m2!1sru!2s!4v1706186997548!5m2!1sru!2s" width="100%" height="300px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </MotionDiv>
      </footer>
      <div className="bottom-footer">
        <span>Разработано Best Solutions</span>
      </div>
    </>
  )
}
