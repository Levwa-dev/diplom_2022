import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./Header.js"
import Footer from "./Footer.js"

import house from "../../Images/house.jpg"
import realtor from "../../Images/realtor.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faBed, faStairs, faTrowelBricks, faPenRuler, faThumbsUp } from "@fortawesome/free-solid-svg-icons"

export default function Offer () {

    const openModal = () => {
        const modal = document.querySelector('.offer-modal')
        document.body.style.overflow = 'hidden'
        modal.classList.add('modal-opened')
    }
    const closeModal = () => {
            const modal = document.querySelector('.offer-modal')
            document.body.style.overflow = 'auto'
            modal.classList.remove('modal-opened')
    }

    return (
        <>
        <Header/>
        <main>
            <section className="offer-images-section">
                <div className="offer-modal">
                    <div onClick={closeModal} className="offer-modal-curtain"></div>
                    <div className="modal-content">
                        <div className="modal-slider">
                            <MorePhotosSlider/>
                        </div>
                    </div>
                </div>
                <div className="wraper">
                    <div className="offer-images-wraper">
                        <div className="offer-images">
                            <div onClick={openModal} className="offer-main-image">
                                <img src={house} alt="Фото нерухомості"/>
                            </div>
                            <div className="offer-photos">
                                <div onClick={openModal} className="offer-photo">
                                    <img src={house} alt="Фото нерухомості"/>
                                </div>
                                <div className="offer-photo">
                                    <img src={house} alt="Фото нерухомості"/>
                                </div>
                                <div className="offer-photo">
                                    <img src={house} alt="Фото нерухомості"/>
                                </div>
                                <div className="offer-photo">
                                    <img src={house} alt="Фото нерухомості"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer-btn-showMore">
                        <button onClick={openModal} className="offer-showMore">Показати більше</button>
                    </div>
                 </div>
            </section>
            <OfferInfo/>
        </main>
        <Footer/>
        </>
    )
}
function MorePhotosSlider () {

    return (
            <Slider dots={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={false}
                    infinite={false}>
                <div>
                    <div className="modal-slide">
                        <img src={house} alt="Фото нерухомотсі"/>
                    </div>
                </div>
                <div>
                    <div className="modal-slide">
                        <img src={house} alt="Фото нерухомотсі"/>
                    </div>
                </div>          
            </Slider>
    )
}

function OfferInfo () {

    return (
        <section className="offer-info-section">
            <div className="wraper">
                <div className="offer-info">
                    <div className="offer-description-body">
                        <div className="offer-short-description">
                            <div className="offer-short-top">
                                <div className="offer-short-money">
                                    <span className="offer-short-price">20500 <FontAwesomeIcon icon={faDollarSign}/></span>
                                    <span className="offer-price-per-meter">500 <FontAwesomeIcon icon={faDollarSign}/>/М<sup>2</sup></span>
                                </div>
                                <p className="offer-short-street">Хортицьке шосе, 111</p>
                                <p className="offer-short-area">Хортицький р-н</p>
                                <div className="offer-short-info">
                                    <div className="offer-short-column">
                                    <p><FontAwesomeIcon className="offer-short-fontAwesome" icon={faBed}/> 2 кімнати</p>
                                    <p><FontAwesomeIcon className="offer-short-fontAwesome" icon={faPenRuler}/> 59 M<sup>2</sup></p>
                                    </div>
                                    <div className="offer-short-column">
                                    <p><FontAwesomeIcon className="offer-short-fontAwesome" icon={faStairs}/> 1 поверх з 9</p>
                                    <p><FontAwesomeIcon className="offer-short-fontAwesome" icon={faTrowelBricks}/> Панель</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offer-full-description">
                            <div className="offer-full-content">
                                <h2 className="offer-full-title">Опис</h2>
                                <p>Предлагается к продаже двух комнатная квартира на Бабурке, Хортицкий район,Хортицкое шоссе. Квартира общей площадью 50 квадратных метров, просторная кухня квадратного типа 8,5 квадратных метров, квартира расположена на втором этаже девятиэтажного дома, дом осбб всё чисто и красиво. Квартира в жилом состоянии, чистая, установлены металлопластиковые окна,трубопровод пластик.Отличное месторасположение,рядом остановка транспорта,школа и детский сад,АТБ,парковая зона, отделение почты,аптеки. Квартира продаётся с капитальным гаражом который расположен через дорогу от дома в гаражном кооперативе, гараж в идеальном состоянии, стоимость квартиры указана вместе с гаражом</p>
                            </div>
                            <div className="offer-full-content">
                                <h2 className="offer-full-title">Деталі</h2>
                                <p>Будинок - українська панель, в квартирі 2 кімнати. Планування кімнат роздільне. Загальний стан квартири - задовільний стан. Торг доречний</p>
                            </div>
                            <div className="offer-full-content">
                                <h2 className="offer-full-title">Розташування на мапі</h2>
                                <p>Вул. Хортицьке шосе, буд. 111, Хортицький р-н</p>
                                {/*ADD GOOGLE MAPS WITH BUILDING'S COORDS*/}
                                <div className="offer-map"></div>
                            </div>
                        </div>
                         <OffersRealtor/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function OffersRealtor () {

    return (
        <section className="offer-realtor-section">
                <h2 className="offer-realtor-title">Рієлтор</h2>
                <div className="offer-realtor-block">
                    <div className="offer-realtor-image">
                        <img src={realtor} alt="Фото рієлтора"/>
                    </div>
                    <div className="offer-realtor-info">
                        <p className="offer-realtor-name">Гірняк Василь</p>
                        <p className="offer-realtor-position">Спеціалість з продажу нерухомості</p>
                        <p className="offer-realtor-like"><FontAwesomeIcon icon={faThumbsUp}/> Рекомендацій</p>
                        <p className="offer-realtor-number">Номер телефону <span>0667270180</span></p>
                    </div>
                </div>
        </section>
    )
}