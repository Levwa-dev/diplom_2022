import React from "react";
import { useState } from "react";

import AdminHeader from "./AdminChildrenComponents/AdminHeader";
import AdminNavigation from "./AdminChildrenComponents/AdminNavigation";

import {validationPassword, passwordSaving, validationEmail, isEmpty} from "../../HelpersFunctions/Validators.js"

export default function AdminCreateAgency () {
    const [fieldsData, setFieldsData] = useState({
        name: '',
        password: '',
        email: '',
        city: '',
        street: '',
        building: '',
        description: '',
        workingFrom: '',
        number: '',
        image:''
    })

    const saveData = (key) => (e) => {
        let copy = {...fieldsData}
        copy[key] = e.target.value
        setFieldsData(copy)
    }
    const showFileName = (e) =>{ 
        const infoArea = document.querySelector('#file-upload-filename')
        let input = e.target;
        let fileName = input.files[0].name;
        infoArea.textContent = 'Назва файлу: ' + fileName;
        let copy = {...fieldsData}
        copy.image = input.files[0]
        setFieldsData(copy)

    }
    const sendData = async (e) => {
        try {
            e.preventDefault()
            const isFull = isEmpty(fieldsData)
            if(isFull){
                let formData = new FormData()
                for(let item in fieldsData){
                    formData.append(item,fieldsData[item])
                }
                const location = window.location.pathname
                const response = await fetch(`http://localhost:5555${location}`, {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json()
                if(result.resp) {
                    alert('Запис збереженно')
                    window.location.reload(false)
                }
                else{
                    alert(result.message)
                }
            }
            else {
                alert("Заповніть всі поля")
            }
        }
        catch(err){
            alert("Сервер не відповідає, спробуйте пізніше")
        }
    }
    return (
     <>
     <AdminHeader/>
     <main>
        <div className="wraper">
            <div className="admin-wrapper-content">
                <AdminNavigation/>
                <div className="create-content">
                    <div>
                        <h1 className="create-agency-title">Додати Агенцію</h1>
                        <form className="create-agency-form">
                            <label htmlFor="create-agency-name">Назва агенції</label>
                            <input onChange={saveData('name')} id="create-agency-name"/>
                            <label htmlFor="create-agency-password">Пароль</label>
                            <input onChange={validationPassword('create-agency-password-err')} type='password' id="create-agency-password"/>
                            <span className="create-agency-password-err"></span>
                            <label htmlFor="create-agency-password-check">Повторіть пароль</label>
                            <input onChange={passwordSaving('create-agency-password','create-agency-password-err-two',saveData)} type='password'  id="create-agency-password-check"/>
                            <span className="create-agency-password-err-two"></span>
                            <label htmlFor="create-agency-email">Email агенції</label>
                            <input onChange={validationEmail('create-agency-email-err', saveData)} type='email' id="create-agency-email"/>
                            <span className="create-agency-email-err"></span>
                            <label htmlFor="create-agency-city">Місто</label>
                            <input onChange={saveData('city')} id="create-agency-city"/>
                            <label htmlFor="create-agency-street">Вулиця</label>
                            <input onChange={saveData('street')} id="create-agency-street"/>
                            <label htmlFor="create-agency-building">Номер будинку</label>
                            <input onChange={saveData('building')} id="create-agency-building"/>
                            <label htmlFor="create-agency-description">Опис агенції</label>
                            <textarea onChange={saveData('description')} id="create-agency-description"></textarea>
                            <label htmlFor="create-agency-date">Працюють з</label>
                            <input onChange={saveData('workingFrom')} type='date' id="create-agency-date"/>
                            <label htmlFor="create-agency-number">Номер телефону</label>
                            <input onChange={saveData('number')} type='number' id="create-agency-number"/>
                            <input onChange={showFileName} name="agency-file" type='file' accept="image/*" id="create-agency-image"/>
                            <label htmlFor="create-agency-image">Завантажити логотип</label>
                            <div id="file-upload-filename"></div>
                            <button onClick={sendData} id="create-agency-btn">Створити Агенцію</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </main>
     </>   
    )
}