import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import house   from '../Images/house.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export default function SliderOffer () {

    return (
            <div className="offers-slider">
                    <Slider dots={false}
                            slidesToShow={3}
                            slidesToScroll={1}
                            autoplay={false}
                            infinite={true}>
                            <div>
                                <div className="offer-slide">
                                    <Link to='/offer'>
                                    <div className="offer-image">
                                        <img src={house} alt="Фото квартири"/>
                                    </div>
                                    </Link>
                                    <p className="offer-price">20500 <FontAwesomeIcon icon={faDollarSign}/></p>
                                    <div className="offer-description">
                                        <h4 className="offer-title">Будівельників бульвар</h4>
                                        <p className="offer-area">Бородинський, Бородинська вулиця, Дніпровський (Ленінський)</p>
                                        <span className="offer-city">Запоріжжя</span>
                                        <p className="offer-rooms">3 кімнати - 52.94 м²</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="offer-slide">
                                    <Link to='/offer'>
                                        <div className="offer-image">
                                            <img src={house} alt="Фото квартири"/>
                                        </div>
                                    </Link>
                                    <p className="offer-price">20500 <FontAwesomeIcon icon={faDollarSign}/></p>
                                    <div className="offer-description">
                                        <h4 className="offer-title">Будівельників бульвар</h4>
                                        <p className="offer-area">Бородинський, Бородинська вулиця, Дніпровський (Ленінський)</p>
                                        <span className="offer-city">Запоріжжя</span>
                                        <p className="offer-rooms">3 кімнати - 52.94 м²</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="offer-slide">
                                    <Link to='/offer'>
                                        <div className="offer-image">
                                            <img src={house} alt="Фото квартири"/>
                                        </div>
                                    </Link>
                                    <p className="offer-price">20500 <FontAwesomeIcon icon={faDollarSign}/></p>
                                    <div className="offer-description">
                                        <h4 className="offer-title">Будівельників бульвар</h4>
                                        <p className="offer-area">Бородинський, Бородинська вулиця, Дніпровський (Ленінський)</p>
                                        <span className="offer-city">Запоріжжя</span>
                                        <p className="offer-rooms">3 кімнати - 52.94 м²</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="offer-slide">
                                    <Link to='/offer'>
                                        <div className="offer-image">
                                            <img src={house} alt="Фото квартири"/>
                                        </div>
                                    </Link>
                                <p className="offer-price">20500 <FontAwesomeIcon icon={faDollarSign}/></p>
                                <div className="offer-description">
                                    <h4 className="offer-title">Будівельників бульвар</h4>
                                    <p className="offer-area">Бородинський, Бородинська вулиця, Дніпровський (Ленінський)</p>
                                    <span className="offer-city">Запоріжжя</span>
                                    <p className="offer-rooms">3 кімнати - 52.94 м²</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
            </div>
    )
    
}