import React from "react";
import { useState } from "react";

export default function AdminSearch (props) { 
    const [inputValue, setInputValue] = useState('')

    const saveInput = (e) => {
        setInputValue(e.target.value)
    }
    const clearSearch = (e) => {
        e.preventDefault()
        props.saveSearchValue([])
    }
    const sendRequest = async (e) => {
        try {
            e.preventDefault()
            const location = window.location.pathname
            let response = await fetch(`http://localhost:5555${location}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({input:inputValue})
                });
            let result = await response.json()
            props.saveSearchValue(result)
            setInputValue('')   
        } catch (error) {
            alert("Сервер не відповідає, спробуйте пізніше")
        }
    } 
    return (
        <>
        <div className="admin-search">
            <form className="admin-search-form">
                <input value={inputValue} onChange={saveInput} id="admin-search-input" className="admin-search-input"/>
                <button onClick={sendRequest} className="admin-search-btn">Знайти</button>
                <button onClick={clearSearch} className="admin-search-btn">Очистити</button>
            </form>
        </div>
        {props.children}
        </>
    )
}
