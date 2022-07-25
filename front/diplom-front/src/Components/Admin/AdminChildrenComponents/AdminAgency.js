import React from "react";

import AdminHeader from "./AdminHeader.js";
import AdminNavigation from "./AdminNavigation.js";

export default function AdminAgency () {

    return (
        <>
        <AdminHeader/>
        <main>
            <div className="wraper">
                <div className="admin-wrapper-content">
                    <AdminNavigation/>
                    <div className="create-content">
                        <div>
                            <h1 className="create-agency-title">Агенція Олімп</h1>
                            <div>
                                {/*ПРОДОЖУЄМО РОЗРОБКУ ТУТ
                                ПРОДУМАТИ ДИЗАЙН,
                                ЗРОБИТИ ФОРМИ ДЛЯ РЕДАГУВАННЯ,
                                КНОПКУ ВИДАЛЕННЯ
                                ПОСИЛАННЯ НА ЦЮ СТОРІНКУ ТА СSS*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}