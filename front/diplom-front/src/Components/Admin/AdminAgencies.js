import React from "react";

import AdminHeader from "./AdminChildrenComponents/AdminHeader.js";
import AdminNavigation from "./AdminChildrenComponents/AdminNavigation.js";
import AdminSearch from "./AdminChildrenComponents/AdminSearch.js";

import { Link } from "react-router-dom";

export default function AdminAgencies () {
    return (
        <>
            <AdminHeader/>
            <main>
                <div className="wraper">
                    <div className="admin-wrapper-content">
                        <AdminNavigation/>
                        <div className="admin-content">
                            <h2 className="admin-search-title">Пошук за Назвою, Email, Містом, та Телефоном</h2>
                            <AdminSearch/>
                            <Link to='/admin/agency' className="admin-add">Додати агенцію</Link>
                            <div className="admin-list">
                                <ul className="admin-list-title">
                                    <li>ID</li>
                                    <li>Name</li>
                                    <li>Email</li>
                                    <li>Password</li>
                                    <li>City</li>
                                    <li>Number</li>
                                    <li>Date</li>
                                </ul>
                                <ul className="admin-list-items">
                                    <li>1</li>
                                    <li>Валерій Дмитрієв</li>
                                    <li>dmitriiev.valieii65@gmal.com</li>
                                    <li>$2b$10$EsA0QeXDozMMagr.H4FqEeMfp9fA2aWvncN8pAF/XHF</li>
                                    <li>Запоріжжя</li>
                                    <li>+380667270180</li>
                                    <li>Олімп</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}