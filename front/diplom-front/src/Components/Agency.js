import React from "react";
import Slider from "react-slick";

import Header from "./Header.js";
import Footer from "./Footer.js";
import agencies from "../Images/agencies.jpg"
import realtor from "../Images/realtor.jpg"
import house from "../Images/house.jpg"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons"

export default function Agency () {

    return (
        <>  <Header/>
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
                            <div className="agency-realtor-image">
                                <img src={realtor} alt="Фото агента"/>
                            </div>
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
                    <div className="agency-offers-list">
                        <SimpleSlider/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}


class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="agency-oferr-slider">
        <Slider {...settings}>
        <div className="agency-offer">
            <div className="offer-image">
                <img src={house} alt="Фото квартири"/>
            </div>
            <p className="offer-price">20500 <FontAwesomeIcon icon={faDollarSign}/></p>
            <div className="offer-description">
                <h4 className="offer-title">Будівельників бульвар</h4>
                <p className="offer-area">Бородинський, Бородинська вулиця, Дніпровський (Ленінський)</p>
                <span className="offer-city">Запоріжжя</span>
                <p className="offer-rooms">3 кімнати - 52.94 м²</p>
            </div>
        </div>
        <div className="agency-offer">
            <div className="offer-image">
                <img src={house} alt="Фото квартири"/>
            </div>
            <p className="offer-price">20500 <FontAwesomeIcon icon={faDollarSign}/></p>
            <div className="offer-description">
                <h4 className="offer-title">Будівельників бульвар</h4>
                <p className="offer-area">Бородинський, Бородинська вулиця, Дніпровський (Ленінський)</p>
                <span className="offer-city">Запоріжжя</span>
                <p className="offer-rooms">3 кімнати - 52.94 м²</p>
            </div>
        </div>
        </Slider>
      </div>
    );
  }
}

