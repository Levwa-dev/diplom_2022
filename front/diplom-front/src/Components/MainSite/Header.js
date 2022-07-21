import React from "react";
import logo from '../../Images/logo.jpg'
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'


export default function Header () {

    return (
        <header>
            <div className="wraper">
                <div className="header-content">
                    <div className="header-left">
                        <div className="header-logo">
                            <img src={logo} alt="Логотип"/>
                        </div>
                        <nav className="header-navigation">
                            <ul className="header-list">
                                <li className="header-item"><Link className="header-item-link" to='/'>Продаж</Link></li>
                                <li className="header-item"><Link className="header-item-link" to='/'>Оренда</Link></li>
                                <li className="header-item"><Link className="header-item-link" to='/agencies'>Агенства</Link></li>
                                <li className="header-item"><Link className="header-item-link" to='/realtors'>Рієлтори</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-action">
                        <div className="header-action-content">
                            <div className="header-plus">+ Додати оголошення</div>
                            <div className="header-login">
                            <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}