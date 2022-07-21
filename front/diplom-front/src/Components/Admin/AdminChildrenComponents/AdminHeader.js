import React from "react";

export default function AdminHeader () {

    return (
        <header className="admin-header">
            <div className="wraper">
                <div className="admin-header-content">
                    <h1 className="admin-header-title">Сайт з продажу нерухомості</h1>
                    <button className="admin-btn-exit">Вихід</button>
                </div>
            </div>
        </header>
    )
}