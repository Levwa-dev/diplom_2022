import React from "react";
import {useEffect} from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import realtor from '../Images/realtor.jpg'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Paginator} from './Main.js'

export default function Realtors () {
    const findCity = (e) => {
        const findFormRealtors = document.querySelector('.realtor-find-city')
        const findFormBtnRealtors = e.target
        findFormRealtors.classList.toggle('open-city-form')
        findFormBtnRealtors.classList.toggle('open-city-form-btn')
    }
    useEffect(()=>{
        const toggler = (e)=>{
            const elemRealtors = e.target
            const findElemRealtors = elemRealtors.closest('.realtor-find-city')
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
                <section className="realtor-search">
                    <div className="wraper">
                        <h2 className="realtor-title">Рієлтори в місті 
                            <span onClick={findCity} className="realtor-city">Запоріжжя</span>
                            <div className="realtor-find-city">
                                <form className="realtor-find-city-form">
                                    <label htmlFor="realtor-find-city-input">Введіть місто</label>
                                    <input id='realtor-find-city-input'/>
                                    <button>Знайти</button>
                                </form>
                            </div>
                        </h2>
                        <form className="realtor-search-form">
                            <input className="realtor-search-input" placeholder="Ім'я або прізвище"/>
                            <button className="realtor-search-btn">Знайти</button>
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
        <section className="realtor-main">
            <div className="realtor-content">
                <div className="realtor-item">
                        <div className="realtor-image">
                            <img alt='Фото рієлтора'src={realtor} />
                        </div>
                        <div className="realtor-item-info">
                            <div className="realtor-item-name">
                                <span className="realtor-item-firstName">Гірняк</span><span className="realtor-item-lastName"> Василь</span>
                            </div>
                            <div className="realtor-item-position">Спеціалість з продажу нерухомості</div>
                            <div className="realtor-item-rating-container">
                                <div className="realtor-item-rating"><span className="realtor-item-rating-count">100 </span><FontAwesomeIcon className="realtor-item-rating-fontawesome" icon={faThumbsUp}/><br/>Рекомендацій</div>
                            </div>
                            <div className="realtor-item-contacts">
                                <p className="realtor-item-tel">Телефон</p>
                                <p className="realtor-item-number">0667270180</p>
                            </div>
                        </div>
                    </div>
                    <div className="realtor-item">
                        <div className="realtor-image">
                            <img alt='Фото рієлтора'src={realtor} />
                        </div>
                        <div className="realtor-item-info">
                            <div className="realtor-item-name">
                                <span className="realtor-item-firstName">Гірняк</span><span className="realtor-item-lastName"> Василь</span>
                            </div>
                            <div className="realtor-item-position">Спеціалість з продажу нерухомості</div>
                            <div className="realtor-item-rating-container">
                                <div className="realtor-item-rating"><span className="realtor-item-rating-count">100 </span><FontAwesomeIcon className="realtor-item-rating-fontawesome" icon={faThumbsUp}/><br/>Рекомендацій</div>
                            </div>
                            <div className="realtor-item-contacts">
                                <p className="realtor-item-tel">Телефон</p>
                                <p className="realtor-item-number">0667270180</p>
                            </div>
                        </div>
                    </div>
                    <div className="realtor-item">
                        <div className="realtor-image">
                            <img alt='Фото рієлтора'src={realtor} />
                        </div>
                        <div className="realtor-item-info">
                            <div className="realtor-item-name">
                                <span className="realtor-item-firstName">Гірняк</span><span className="realtor-item-lastName"> Василь</span>
                            </div>
                            <div className="realtor-item-position">Спеціалість з продажу нерухомості</div>
                            <div className="realtor-item-rating-container">
                                <div className="realtor-item-rating"><span className="realtor-item-rating-count">100 </span><FontAwesomeIcon className="realtor-item-rating-fontawesome" icon={faThumbsUp}/><br/>Рекомендацій</div>
                            </div>
                            <div className="realtor-item-contacts">
                                <p className="realtor-item-tel">Телефон</p>
                                <p className="realtor-item-number">0667270180</p>
                        </div>
                    </div>
                </div>
            </div>
            <Paginator/>
        </section>
    )
}