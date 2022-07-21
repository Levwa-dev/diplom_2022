import React from "react";
import AdminHeader from "./AdminChildrenComponents/AdminHeader.js";
import AdminNavigation from "./AdminChildrenComponents/AdminNavigation.js"

export default function AdminMainPage () {

    return (
        <>
        <AdminHeader/>
        <main>
            <div className="wraper">
                <div className="admin-wrapper-content">
                    <AdminNavigation/>
                    <div className="admin-main-page">
                        <div className="admin-main-page-content">
                            <h2>Ласкаво просимо до адмін панелі</h2>
                            <span>Оберіть категорію даних</span> 
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}