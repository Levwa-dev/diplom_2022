import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import { SearchItems } from "./Realtors.js"
import {Paginator} from "./Main.js"
import Footer from "./Footer.js";
import {faCalendarDays, faPeopleRoof, faBuilding} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import agencies from '../Images/agencies.jpg'


export default function Agencies () {

    const findCity = (e) => {
        const findFormRealtors = document.querySelector('.realtors-find-city')
        const findFormBtnRealtors = e.target
        findFormRealtors.classList.toggle('open-city-form')
        findFormBtnRealtors.classList.toggle('open-city-form-btn')
    }

    useEffect(()=>{
        const toggler = (e)=>{
            const elemRealtors = e.target
            const findElemRealtors = elemRealtors.closest('.realtors-find-city')
            const findFormRealtors = document.querySelector('.open-city-form')
            const findFormBtnRealtors = document.querySelector('.open-city-form-btn')
    
            if(findFormRealtors !== null && findFormRealtors !== null){
                if(findElemRealtors===null && elemRealtors !== findFormBtnRealtors ){
                    findFormRealtors.classList.remove('open-city-form')
                    findFormBtnRealtors.classList.remove('open-city-form-btn')
                } 
            }
            e.stopImmediatePropagation()
        }
        document.addEventListener('click', toggler)
        return ()=>{
            document.removeEventListener('click', toggler)
        }
    },[])

    return (
        <>  
            <Header/>
            <SearchItems/>
            <section className="realtors-search">
                    <div className="wraper">
                        <h2 className="realtors-title">Агенства в місті 
                            <span onClick={findCity} className="realtors-city">Запоріжжя</span>
                            <div className="realtors-find-city">
                                <form className="realtors-find-city-form">
                                    <label htmlFor="realtors-find-city-input">Введіть місто</label>
                                    <input id='realtors-find-city-input'/>
                                    <button>Знайти</button>
                                </form>
                            </div>
                        </h2>
                        <form className="realtors-search-form">
                            <input className="realtors-search-input" placeholder="Назва агенства"/>
                            <button className="realtors-search-btn">Знайти</button>
                        </form>
                    </div>
            </section>
            <SearchItems/>
            <div className="wraper">
            <div className="agencies-content-wraper">
                <div className="agencies-content">
                    <div className="agencies-item">
                        <div className="agencies-left">
                            <Link to='/agencies/agency'>
                            <div className="agencies-image">
                                <img src={agencies} alt="Лого Агенції"/>
                            </div>
                            </Link>
                            <div className="agencies-contacts">
                                <p className="agencies-tel">Телефон агенції</p>
                                <p className="agencies-number">0667270180</p>
                            </div>
                        </div>
                        <div className="agencies-right">
                            <h3 className="agencies-name">Олімп</h3>
                            <div className="agencies-description">
                                <div className="agencies-years">
                                    <span className="agencies-spans">3 </span><FontAwesomeIcon className="agencies-fontAwesome" icon={faCalendarDays}/>
                                    <p>Років на ринку</p>
                                </div>
                                <div className="agencies-people">
                                    <span  className="agencies-spans">5 </span><FontAwesomeIcon className="agencies-fontAwesome" icon={faPeopleRoof}/>
                                    <p>Рієлторів</p>
                                </div>
                                <div className="agencies-offers">
                                    <span  className="agencies-spans">5 </span><FontAwesomeIcon className="agencies-fontAwesome" icon={faBuilding}/>
                                    <p>Пропозицій</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agencies-item">
                        <div className="agencies-left">
                            <div className="agencies-image">
                                <img src={agencies} alt="Лого Агенції"/>
                            </div>
                            <div className="agencies-contacts">
                                <p className="agencies-tel">Телефон агенції</p>
                                <p className="agencies-number">0667270180</p>
                            </div>
                        </div>
                        <div className="agencies-right">
                            <h3 className="agencies-name">Олімп</h3>
                            <div className="agencies-description">
                                <div className="agencies-years">
                                    <span className="agencies-spans">3 </span><FontAwesomeIcon className="agencies-fontAwesome" icon={faCalendarDays}/>
                                    <p>Років на ринку</p>
                                </div>
                                <div className="agencies-people">
                                    <span  className="agencies-spans">5 </span><FontAwesomeIcon className="agencies-fontAwesome" icon={faPeopleRoof}/>
                                    <p>Рієлторів</p>
                                </div>
                                <div className="agencies-offers">
                                    <span  className="agencies-spans">5 </span><FontAwesomeIcon className="agencies-fontAwesome" icon={faBuilding}/>
                                    <p>Пропозицій</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Paginator/>
            </div>
            </div>
            <Footer/>
        </>
    )
}