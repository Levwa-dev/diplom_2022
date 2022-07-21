import React from "react";

export default function AdminLogin () {

    return (
        <div className="admin-login-body">
        <div className="wraper">
            <form className="admin-login-form">
                <label for="admin-login">Введіть Email</label>
                <input id="admin-login" className="admin-login"/>
                <label for="admin-password">Введіть пароль</label>
                <input id="admin-password" className="admin-password"/>
                <button className="admin-login-btn">Увійти</button>
                <span>Неправильний email або пароль</span>
            </form>
        </div>
    </div>
    )
}