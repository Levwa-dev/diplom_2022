import React from "react";


import Header from "./Header.js";
import Footer from "./Footer.js";
import SliderOffer from "./OfferSlider.js";

import agencies from "../../Images/agencies.jpg"
import realtor from "../../Images/realtor.jpg"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export default function Agency () {

    return (
        <>  <Header/>
            <main>
            <section className="agency-section">
                <div className="wraper">
                    <div className="agency-wraper">
                        <div className="agency">
                            <div className="agency-image">
                                <img src={agencies} alt="Лого агенції"></img>
                            </div>
                            <div className="agency-content">
                                <div className="agency-top">
                                    <h2 className="agency-title">Олімп</h2>
                                    <p className="agency-post">Агенція</p>
                                    <p className="agency-city"><FontAwesomeIcon icon={faLocationDot}/> Запоріжжя</p>
                                </div>
                                <div className="agency-bottom">
                                    <div className="agency-short-info">
                                        <span className="agency-years">3 Роки на ринку</span>
                                        <span className="agency-realtors">5 Рієлторів</span>
                                        <span className="agency-offers">5 Пропозицій</span>
                                    </div>
                                    <div className="agency-contacts">
                                        <p className="agency-number-title">Номер телефону</p>
                                        <p className="agency-number">0667270180</p>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="agency-description">
                <div className="wraper">
                    <h2 className="agency-description-title">О нас</h2>
                    <p className="agency-description-paragraph">Агентство «Олімп» сьогодні є найбільшою компанією на ринку нерухомості. Спектр професійних ріелторських послуг, пропонованих агентством, дуже широкий: продаж, придбання, обмін квартир і кімнат, оренда квартир і офісів, угоди із заміською нерухомістю, житлові кредитні програми, юридичний супровід проведених операцій з нерухомістю. На сторожі інтересів клієнтів агентства стоять надійні професіонали. Вони подбають про те, щоб довгоочікуване житло відповідало всім вимогам, а його пошук увінчався успіхом для клієнта. Професійні юристи, які спеціалізуються з питань нерухомості, забезпечать надійні гарантії безпеки всіх операцій. Рівень сервісу, що надає агентство нерухомості «Олімп», не залежить від суми передбачуваної операції.</p>
                </div>
            </section>
            <section className="agency-realtors-section">
                <div className="wraper">
                    <h2 className="agency-realtors-title">Список агенів Олімп</h2>
                    <div className="agency-realtors-list">
                        <div className="agency-realtor">
                            <Link to='/realtors/realtor'>
                                <div className="agency-realtor-image">
                                    <img src={realtor} alt="Фото агента"/>
                                </div>
                            </Link>
                            <p className="agency-realtor-name">Гірняк Василь</p>
                        </div>
                        <div className="agency-realtor">
                            <div className="agency-realtor-image">
                                <img src={realtor} alt="Фото агента"/>
                            </div>
                            <p className="agency-realtor-name">Гірняк Василь</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="agency-offers-section">
                <div className="wraper">
                    <h2 className="agency-offers-title">Активні Пропозиції</h2>
                    <SliderOffer/>
                </div>
            </section>
            </main>
            <Footer/>
        </>
    )
}

