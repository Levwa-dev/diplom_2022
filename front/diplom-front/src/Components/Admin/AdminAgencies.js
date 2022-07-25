import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AdminHeader from "./AdminChildrenComponents/AdminHeader.js";
import AdminNavigation from "./AdminChildrenComponents/AdminNavigation.js";
import AdminSearch from "./AdminChildrenComponents/AdminSearch.js";

import { formatter } from "../../HelpersFunctions/Validators.js";

export default function AdminAgencies () {
    const [agencies, setAgencies] = useState([])
    const [searchAgencies, setSearchAgencies] = useState([])

    const saveSearchValue = (value) => {
        setSearchAgencies(value)
    }

    useEffect(()=>{
        fetch ('http://localhost:5555/admin/agencies')
        .then(result=>result.json())
        .then(result=>setAgencies(result))
        .catch(err=>console.log(err)) 
    },[])

    return (
        <>
        <AdminHeader/>
        <main>
                <div className="wraper">
                    <div className="admin-wrapper-content">
                        <AdminNavigation/>
                        <div className="admin-content">
                            <h2 className="admin-search-title">Пошук за Назвою, Email, Містом, та Телефоном</h2>
                            <AdminSearch saveSearchValue = {saveSearchValue}/>
                            <div className="admin-list">
                                {searchAgencies.map(item=>{
                                    if(item.err){
                                        return <p key={item.id}>{item.err}</p>
                                    }
                                    else{
                                        return(
                                                <ul key={item.id} className="admin-list-items">
                                                    <li>{item.id}</li>
                                                    <li>{item.name}</li>
                                                    <li>{item.email}</li>
                                                    <li>{item.password}</li>
                                                    <li>{item.city}</li>
                                                    <li>{item.number}</li>
                                                    <li>{formatter.format(Date.parse(item.date))}</li>
                                                </ul>
                                    )}
                                })}
                            </div>
                            <Link to='/admin/create-agency' className="admin-add">Додати агенцію</Link>
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
                                {
                                    agencies.map(item=>{
                                        return (
                                        <ul key={item.id} className="admin-list-items">
                                            <li>{item.id}</li>
                                            <li>{item.name}</li>
                                            <li>{item.email}</li>
                                            <li>{item.password}</li>
                                            <li>{item.city}</li>
                                            <li>{item.number}</li>
                                            <li>{formatter.format(Date.parse(item.date))}</li>
                                        </ul>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}