import React from "react";
import {useEffect} from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import realtor from '../../Images/realtor.jpg'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Paginator} from './Main.js'
import { Link } from "react-router-dom";

export default function Realtors () {
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
        <main>
            <SearchItems>
                <section className="realtors-search">
                    <div className="wraper">
                        <h2 className="realtors-title">Рієлтори в місті 
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
                            <input className="realtors-search-input" placeholder="Ім'я або прізвище"/>
                            <button className="realtors-search-btn">Знайти</button>
                        </form>
                    </div>
                </section>
            </SearchItems>
            <div className="wraper">
                <RealtorMain/>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export function SearchItems ({children}) {

    return (
        <>{children}</>
    )
}

function RealtorMain () {

    return (
        <section className="realtors-main">
            <div className="realtors-content">
                <div className="realtors-item">
                        <Link to='/realtors/realtor'>
                            <div className="realtors-image">
                                <img alt='Фото рієлтора'src={realtor} />
                            </div>
                        </Link> 
                        <div className="realtors-item-info">
                            <div className="realtors-item-name">
                                <span className="realtors-item-firstName">Гірняк</span><span className="realtors-item-lastName"> Василь</span>
                            </div>
                            <div className="realtors-item-position">Спеціалість з продажу нерухомості</div>
                            <div className="realtors-item-rating-container">
                                <div className="realtors-item-rating"><span className="realtors-item-rating-count">100 </span><FontAwesomeIcon className="realtors-item-rating-fontawesome" icon={faThumbsUp}/><br/>Рекомендацій</div>
                            </div>
                            <div className="realtors-item-contacts">
                                <p className="realtors-item-tel">Телефон</p>
                                <p className="realtors-item-number">0667270180</p>
                            </div>
                        </div>
                    </div>
                    <div className="realtors-item">
                        <div className="realtors-image">
                            <img alt='Фото рієлтора'src={realtor} />
                        </div>
                        <div className="realtors-item-info">
                            <div className="realtors-item-name">
                                <span className="realtors-item-firstName">Гірняк</span><span className="realtors-item-lastName"> Василь</span>
                            </div>
                            <div className="realtors-item-position">Спеціалість з продажу нерухомості</div>
                            <div className="realtors-item-rating-container">
                                <div className="realtors-item-rating"><span className="realtors-item-rating-count">100 </span><FontAwesomeIcon className="realtors-item-rating-fontawesome" icon={faThumbsUp}/><br/>Рекомендацій</div>
                            </div>
                            <div className="realtors-item-contacts">
                                <p className="realtors-item-tel">Телефон</p>
                                <p className="realtors-item-number">0667270180</p>
                            </div>
                        </div>
                    </div>
                    <div className="realtors-item">
                        <div className="realtors-image">
                            <img alt='Фото рієлтора'src={realtor} />
                        </div>
                        <div className="realtors-item-info">
                            <div className="realtors-item-name">
                                <span className="realtors-item-firstName">Гірняк</span><span className="realtors-item-lastName"> Василь</span>
                            </div>
                            <div className="realtors-item-position">Спеціалість з продажу нерухомості</div>
                            <div className="realtors-item-rating-container">
                                <div className="realtors-item-rating"><span className="realtors-item-rating-count">100 </span><FontAwesomeIcon className="realtors-item-rating-fontawesome" icon={faThumbsUp}/><br/>Рекомендацій</div>
                            </div>
                            <div className="realtors-item-contacts">
                                <p className="realtors-item-tel">Телефон</p>
                                <p className="realtors-item-number">0667270180</p>
                        </div>
                    </div>
                </div>
            </div>
            <Paginator/>
        </section>
    )
}