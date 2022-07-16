import React from "react";

import house from '../Images/house.jpg'
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from './Search.js';
import Footer from "./Footer.js";
import Header from './Header.js';
import { Link } from "react-router-dom";

export default function Main () {

    return (
        <>
        <Header/>
        <main>
            <Search/>
            <div className="wraper">
                <div className="main-content-wraper">
                    <div className="main-content">
                        <div className="offer">
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
                        <div className="offer">
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
                        <div className="offer">
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
                    </div>
                    <Paginator/>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export function Paginator () {

    return (
        <>
        <div className="main-paginator">
            <div className="paginator-content">
                <button className="paginator-btn">Назад</button>
                <span>1 з 2</span>
                <button className="paginator-btn">Веперед</button>
            </div>
        </div>
        </>
    )
}