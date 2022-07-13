import React from "react";
import { useEffect } from "react";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
    const openModal = (key) => (e) => {
       const modal = document.querySelector(`.${key}`)
       const modalBtn = e.target
       modalBtn.classList.toggle('search-modal-btn-open')  
       modal.classList.toggle('search-modals-open')
    }
    useEffect(()=>{
        const toggler = (e) =>{
            const btnElem = document.querySelectorAll('.search-modal-btn-open')
            const btn = document.querySelectorAll('.search-modals-open')
    
            const elem = e.target
            const needElem = elem.closest('.search-modals-open')    
            if(btn.length >= 1 && btnElem.length >= 1) {
                if(needElem === null && btnElem[0] !== elem){
                    btn[0].classList.remove('search-modals-open')
                    btnElem[0].classList.remove('search-modal-btn-open')
                }
                else if (btnElem.length >= 2){
                    btn[1].classList.remove('search-modals-open')
                    btnElem[1].classList.remove('search-modal-btn-open')
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
            <section className="search">
                <div className="wraper">
                    <div className="search-content">
                        <h1 className="search-title">Продаж квартир в місті </h1>
                        <div className="search-body">
                            <div className="search-left">
                                <button className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                                <input className="search-city" placeholder="Оберіть місто"></input>
                            </div>
                            <div className="search-right">
                                <button className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                                <input className="search-area" placeholder="Введіть район"></input>
                            </div>
                        </div>
                        <div className="search-filters">
                            <div className="search-cost">
                                <div onClick={openModal('search-cost-modal')} className="search-cost-title">Ціна</div>
                                <div className="search-cost-modal">
                                    <form className="search-cost-form" >
                                        <div className="search-cost-input">
                                            <div className="search-min-cost"><input className="search-min-cost-input" placeholder="Від"></input><FontAwesomeIcon icon={faDollarSign}/></div>
                                            <div className="search-max-cost"><input className="search-max-cost-input" placeholder="До"></input><FontAwesomeIcon icon={faDollarSign}/></div>
                                        </div>
                                        <button className="search-cost-form-button">Застосувати фільтр</button>
                                    </form>
                                </div>
                            </div>
                            <div className="search-room">
                                <div onClick={openModal('search-room-modal')} className="search-room-title">Кімнати</div>
                                <div className="search-room-modal">
                                    <form className="search-room-form" >
                                        <div className="search-room-input">
                                            <label htmlFor="rooms">Кількість кімнат</label>
                                            <input id="rooms" className="search-room-count-input"></input>
                                        </div>
                                        <button className="search-room-form-button">Застосувати фільтр</button>
                                    </form>
                                </div>
                            </div>
                            <div className="search-floor">
                                <div onClick={openModal('search-floor-modal')} className="search-floor-title">Поверх</div>
                                    <div className="search-floor-modal">
                                        <form className="search-floor-form" >
                                            <h3 className="search-floor-modal-title">Поверх</h3>
                                            <div className="search-floor-input">
                                                <input className="search-floor-min-input" placeholder="Від"></input>
                                                <input className="search-floor-max-input" placeholder="До"></input>
                                            </div>
                                            <h3 className="search-floor-modal-title">Поверховість</h3>
                                            <div className="search-floor-input">
                                                <input className="search-floor-min-input" placeholder="Від"></input>
                                                <input className="search-floor-max-input" placeholder="До"></input>
                                            </div>
                                            <button className="search-floor-form-button">Застосувати фільтр</button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}