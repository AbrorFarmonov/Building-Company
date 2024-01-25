import React from 'react'
import { MotionDiv, fromLeft, fromRight } from './animation'

export default function About() {
    return (
        <div className='about-page' id='about'>
            <MotionDiv variants={fromLeft} initial='initial' transition={{ duration: 0.6, ease: 'backInOut', delay: 0.4 }} whileInView='animate' className="left-about">
                <span className='starter-section'>О НАС</span>
                <h2>10 лет на рынке</h2>
                <p>Если Вы хотите купить облицовочный кирпич в Актобе, тогда Вы обратились точно по адресу. У нас есть кирпич различного цвета и размера. Мы на рынке облицовочного кирпича более 10 лет! Мы - прямые поставщики Украинского завода &quot;ЕВРОТОН&quot;, &quot;Белая Церковь&quot; и также поставщики ведущих Российских кирпичных заводов таких как &quot;ТМ Ликолор&quot;, &quot;НЗКМ кирпичный завод&quot;, &quot;Копыловская керамика&quot;, &quot;Брянский кирпичный завод&quot;, &quot;КЗ Красная Гвардия&quot;.Наша команда - это молодые современные лица, которые помогут подобрать оптимальный дизайн, выполнят полный подсчет кирпича от и д. <br /><br />Подберем кирпич для Вашего дома в соответствии ЦЕНА=КАЧЕСТВО!!</p>
            </MotionDiv>
            <MotionDiv variants={fromRight} initial='initial' transition={{ duration: 0.6, delay: 0.6, ease: 'backInOut' }} whileInView='animate' className="right-about">
                <p>Широкий ассортимент, сотни довольных клиентов!</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/f1DmuVOk_Ec?si=BKumEvUrICUna-ci" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </MotionDiv>
        </div>
    )
}
