import React from "react";
import { useState } from "react";

export default function AdminSearch () { 
    const [inputValue, setInputValue] = useState('')
    const [findedElements, setFindedElements] = useState([])

    const saveInput = (e) => {
        setInputValue(e.target.value)
    }
    const sendRequest = (e) => {
        e.preventDefault()
        const request = {
            input: inputValue
        }
        send(request)
    }
    async function send (request) {
        const location = window.location.pathname
        let response = await fetch(`http://localhost:5555${location}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(request)
            });
            let result = await response.json()
            setFindedElements(result)
            setInputValue('')
    } 
    return (
        <>
        <div className="admin-search">
            <form className="admin-search-form">
                <input value={inputValue} onChange={saveInput} id="admin-search-input" className="admin-search-input"/>
                <button onClick={sendRequest} className="admin-search-btn">Знайти</button>
            </form>
        </div>
            <div className="admin-list">
                {findedElements.map(item=>{
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
                                    <li>Запоріжжя</li>
                                    <li>+380667270180</li>
                                    <li>Олімп</li>
                                </ul>
                    )}
                })}
            </div>
        </>
    )
}
