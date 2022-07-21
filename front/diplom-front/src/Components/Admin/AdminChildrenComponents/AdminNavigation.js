import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavigation () {

    return (
        <nav className="admin-navigation">
            <ul className="admin-navigation-list">
                <li className="admin-navigation-item"><Link to="/admin/realtors">Рієлтори</Link></li>
                <li className="admin-navigation-item"><Link to='#'>Нерухомість</Link></li>
                <li className="admin-navigation-item"><Link to="/admin/agencies">Агенства</Link></li>
            </ul>
        </nav>
    )
}