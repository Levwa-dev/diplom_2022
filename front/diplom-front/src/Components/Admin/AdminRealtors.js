import React from "react";
import { useState, useEffect } from "react";
import AdminHeader from "./AdminChildrenComponents/AdminHeader.js";
import AdminNavigation from "./AdminChildrenComponents/AdminNavigation.js";
import AdminSearch from "./AdminChildrenComponents/AdminSearch.js";

import { Link } from "react-router-dom";

export default function AdminRealtors () {
    const [realtors, setRealtors] = useState([])
    const [searchRealtors, setSearchRealtors] = useState([])

    useEffect(()=>{
        fetch ('http://localhost:5555/admin/realtors')
        .then(data=>data.json())
        .then(data=>setRealtors(data))
        .catch(()=>alert('Сервер не відповідає'))
    },[])

    return (
        <>
            <AdminHeader/>
            <main>
            <div className="wraper">
                <div className="admin-wrapper-content">
                    <AdminNavigation/>
                    <div className="admin-content">
                        <h2 className="admin-search-title">Пошук за Ім'ям та Прізвищем, Email, Телефоном або Агенцією</h2> 
                        <AdminSearch saveSearchValue={setSearchRealtors}>
                            <div className="admin-list">
                                {searchRealtors.map(item=>{
                                    if(item.err){
                                        return <p key={item.id}>{item.err}</p>
                                    }
                                    else{
                                        return(
                                            <Link key={item.id} to={`/admin/agency/${item.id}`}>
                                                <ul className="admin-list-items">
                                                    <li>{item.id}</li>
                                                    <li>{item.name}</li>
                                                    <li>{item.email}</li>
                                                    <li>{item.password}</li>
                                                    <li>{item.city}</li>
                                                    <li>{item.number}</li>
                                                    <li>{item.agencyName}</li>
                                                </ul>
                                            </Link>
                                    )}
                                })}
                            </div>
                        </AdminSearch>
                        <Link to='/admin/realtor' className="admin-add">Додати рієлтора</Link>
                        <div className="admin-list">
                        <ul className="admin-list-title">
                            <li>ID</li>
                            <li>Name</li>
                            <li>Email</li>
                            <li>Password</li>
                            <li>City</li>
                            <li>Number</li>
                            <li>Agency</li>
                        </ul>
                            {realtors.map(item=>{
                                return(
                                <ul key={item.id} className="admin-list-items">
                                    <li>{item.id}</li>
                                    <li>{item.name}</li>
                                    <li>{item.email}</li>
                                    <li>{item.password}</li>
                                    <li>{item.city}</li>
                                    <li>{item.number}</li>
                                    <li>{item.agencyName}</li>
                                </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}