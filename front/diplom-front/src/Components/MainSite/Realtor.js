import React from "react";


import Header from "./Header.js";
import Footer from "./Footer.js";
import SliderOffer from "./OfferSlider.js";

import realtor from '../../Images/realtor.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export default function Realtor () {

    return (
        <>
            <Header/>
            <main>
                <section className="realtor-section">
                    <div className="wraper">
                        <div className="realtor-info-content">
                            <div className="realtor-info">
                                <div className="realtor-left">
                                    <div className="realtor-image">
                                        <img src={realtor} alt="Фото рієлтора"/>
                                    </div>
                                    <div className="realtor-recomendation">
                                        <div className="realtor-recomendation-count">
                                            <FontAwesomeIcon className="realtor-fontAwesome" icon={faThumbsUp}/>
                                            <span><span>28</span> Клієнтів рекомендують</span>
                                        </div>
                                        <button className="realtor-recomend">Рекомендувати</button>
                                    </div>
                                </div>
                                <div className="realtor-right">
                                    <div className="realtor-description">
                                        <div className="realtor-description-top">
                                            <h2 className="realtor-name">Гірняк Василь</h2>
                                            <p className="realtor-agency">Агенція <Link className="realtor-agency-link" to='/agencies/agency'>Олімп</Link></p>
                                            <p className="realtor-area"><FontAwesomeIcon icon={faLocationDot}/> Запоріжжя</p>
                                            <p className="realtor-number">Номер телефону <span>0667270180</span></p>
                                        </div>
                                        <div className="realtor-description-bottom">
                                            <p>
                                            Красивый дом – это мечта каждого. Мы знаем, как сделать вашу мечту явью! Очень люблю свою работу и воспринимаю ее, как искусство, приносящее удовольствие! Если вы хотите: - быстро найти для себя дом, или квартиру в Запорожье - получать только актуальную информацию по объектам - иметь обратную связь в режиме 24/7 - получить качественный до- и после продажный сервис - и САМОЕ ГЛАВНОЕ никакого лишнего стресса! НАМ С ВАМИ ПО ПУТИ!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="realtor-slider-section">
                    <div className="wraper">
                        <h2 className="realtor-slider-title">Актуальні пропозиції рієлтора</h2>
                        <SliderOffer/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}