'use client'
import Image from "next/image"
import { useState } from "react"
import con_one from '../app/assets/con-one.png'
import con_two from '../app/assets/con-two.png'
import con_three from '../app/assets/con-three.png'
import con_four from '../app/assets/con-four.png'

export default function Products() {
    const [loading, setLoading] = useState(true)
    const images = [con_one, con_two, con_three, con_four, con_one, con_two, con_three, con_four]
    return (
        <div className="product-page">
            <span className="starter-section">
                ПРОДУКЦИЯ
            </span>
            <div className="product-container">
                {
                    images.map((c, i) => (
                        <div className="products-item" key={i}>
                            <div className="image-product">
                                <Image src={c} alt='product preview' className={loading ? 'customImage' : ''} onLoad={() => setLoading(false)} />
                            </div>
                            <div className="info-product">
                                <h2>Black Premium <br /> (Одинарный, 1-НФ)</h2>
                                <p>Размер: 250х120х65
                                    Количество в упаковке: 480 шт</p>
                                <a href="#">Узнать больше <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                                    <path d="M22.4824 2.13156C22.555 1.86515 22.398 1.59028 22.1316 1.51762L17.7901 0.333589C17.5237 0.260932 17.2488 0.418 17.1762 0.684413C17.1035 0.950826 17.2606 1.2257 17.527 1.29835L21.3861 2.35082L20.3336 6.20988C20.2609 6.47629 20.418 6.75116 20.6844 6.82382C20.9508 6.89648 21.2257 6.73941 21.2984 6.473L22.4824 2.13156ZM1.24807 14.4341L22.2481 2.43412L21.7519 1.56588L0.751931 13.5659L1.24807 14.4341Z" fill="#FF9A23" />
                                </svg></a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
