import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AdminHeader from "./AdminChildrenComponents/AdminHeader.js";
import AdminNavigation from "./AdminChildrenComponents/AdminNavigation.js";
import NotFound from "../MainSite/NotFound.js"
import { formatter, validationPassword, validationEmail, passwordSaving } from "../../HelpersFunctions/Validators.js";

export default function AdminAgency () {
    const data = {
        name: '',
        password: '',
        email: '',
        city: '',
        street: '',
        building: '',
        description: '',
        workingFrom: '',
        number: '',
        logo:''
    }
    const [agencyData, setAgancyData] = useState(data)
    const [editAgencyData, setEditAgencyData] = useState(data)
    const [failedLoad, setFailedLoad] = useState(false)

    const navigation = useNavigate()

    useEffect(()=>{
        const location = window.location.pathname
        fetch(`http://localhost:5555${location}`)
        .then(result=>result.json())
        .then(result=>{
            result.error === '404'? setFailedLoad(true) : 
            result.workingFrom = Date.parse(result.workingFrom)
            result.date = Date.parse(result.date)
            setAgancyData(result)
            setEditAgencyData(result)
        })
        .catch(()=>alert('Сервер не відповідає, спробуйте пізніше'))
    },[])
   
    const saveData = (key) => (e) => {
        let copy = {...editAgencyData}
        copy[key] = e.target.value
        setEditAgencyData(copy)
    }

    const showEditInputs = (e) => {
        const inputs = document.querySelectorAll('.admin-item-edit')
        const area = document.querySelector('.admin-item-edit-textarea')
        const file = document.querySelector('.admin-item-edit-image-content')
        const confirmBtn = document.querySelector('.admin-item-edit-confirm')
        const editBtn = e.target
        for (let input of inputs){
            input.classList.toggle('admin-item-edit-open')
        }
        area.classList.toggle('admin-item-edit-open')
        file.classList.toggle('admin-item-edit-open')
        editBtn.classList.toggle('admin-item-edit-btn-active')
        if (editBtn.classList.contains('admin-item-edit-btn-active')) {
            editBtn.innerHTML = 'Скасувати'
        }
        else{
            editBtn.innerHTML = 'Редагувати запис'
            setEditAgencyData({...agencyData})
        }
        confirmBtn.classList.toggle('admin-item-edit-open')
    }

    const showFileName = (e) =>{ 
        const infoArea = document.querySelector('#file-upload-filename')
        let input = e.target;
        let fileName = input.files[0].name;
        infoArea.textContent = 'Назва файлу: ' + fileName;
        let copy = {...editAgencyData}
        copy.logo = input.files[0]
        setEditAgencyData(copy)

    }
    const editAgency = () => {
        const dataForChange = {}
        let formData = new FormData()

        for(let item in agencyData){
            if( agencyData[item] !== editAgencyData[item]){
                dataForChange[item] = editAgencyData[item]
            }
        }
        for(let item in dataForChange){
            formData.append(item, dataForChange[item])
        }
        const location = window.location.pathname
        let acces = window.confirm('Ви дійсно хочете змінити цей запис?')
        if(acces){
            fetch(`http://localhost:5555${location}`, {
                method: 'POST',
                body: formData
            })
            .then(res=>res.json())
            .then(res=> res ? window.location.reload(false) : alert('Сталася помилка при редагуванні'))
            .catch(()=>alert("Сервер не відповідає спробуйте пізніше"))
        }

    }
    
    const deleteAgency = (e) => {
        const location = window.location.pathname
        e.preventDefault()
        let acces = window.confirm("Ви дійстно хочете видалити цей запис?")
        if(acces){
            fetch(`http://localhost:5555${location}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(res=>{
                if(res){
                    navigation(`/admin/agencies`)
                }
                else{
                    alert("При видаленні сталася помилка")
                }
            })
            .catch(()=>alert('Cервер не відповідає, спробуйте пізніше'))
        }
            
    }
    if(failedLoad){
        return (
            <NotFound/>
        )
    }
    else{
        return (
            <>
            <AdminHeader/>
            <main>
                <div className="wraper">
                    <div className="admin-wrapper-content">
                        <AdminNavigation/>
                        <div className="create-content">
                                <button onClick={deleteAgency} className="admin-item-delete">Видалити запис</button>
                                <button onClick={showEditInputs} className="admin-item-edit-btn">Редагувати запис</button>
                                <button onClick={editAgency} className="admin-item-edit-confirm">Підтвердити зміни</button>
                                <div>
                                    <h1 className="create-agency-title">Агенція {agencyData.name}</h1>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">ID</p>
                                            <p className="admin-item-info">{agencyData.id}</p>
                                        </div>
                                    </div>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Назва</p>
                                            <p className="admin-item-info">{agencyData.name}</p>
                                        </div>
                                    </div>
                                    <input onChange={saveData('name')} value={editAgencyData.name} id="admin-agency-edit-name" className="admin-item-edit"/>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Пароль</p>
                                            <p className="admin-item-info">{agencyData.password}</p>
                                        </div>
                                    </div>
                                    <div className="admin-item-edit-password-content">
                                        <input onChange={validationPassword('create-agency-password-err')} defaultValue={editAgencyData.password} id="admin-agency-edit-password" className="admin-item-edit"/>
                                        <span className="create-agency-password-err"></span>
                                        <input onChange={passwordSaving('admin-agency-edit-password','create-agency-password-err-two', saveData)} defaultValue={editAgencyData.password} id="admin-agency-edit-password-two" className="admin-item-edit"/>    
                                        <span className="create-agency-password-err-two"></span>
                                    </div>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Email</p>
                                            <p className="admin-item-info">{agencyData.email}</p>
                                        </div>
                                    </div>
                                    <div className="admin-item-edit-email-content">
                                        <input onChange={validationEmail('create-agency-email-err', saveData)} defaultValue={editAgencyData.email} id="admin-agency-edit-email" className="admin-item-edit"/>
                                        <span className="create-agency-email-err"></span>
                                    </div>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Місто</p>
                                            <p className="admin-item-info">{agencyData.city}</p>
                                        </div>
                                    </div>
                                    <input onChange={saveData('city')} value={editAgencyData.city} id="admin-agency-edit-city" className="admin-item-edit"/>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Вулиця</p>
                                            <p className="admin-item-info">{agencyData.street}</p>
                                        </div>
                                    </div>
                                    <input onChange={saveData('street')} value={editAgencyData.street} id="admin-agency-edit-street" className="admin-item-edit"/>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Номер будинку</p>
                                            <p className="admin-item-info">{agencyData.building}</p>
                                        </div>
                                    </div>
                                    <input onChange={saveData('building')} value={editAgencyData.building} id="admin-agency-edit-building" className="admin-item-edit"/>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Опис</p>
                                            <p className="admin-item-info">{agencyData.description}</p>
                                        </div>
                                    </div>
                                    <textarea onChange={saveData('description')} value={editAgencyData.description}  className="admin-item-edit-textarea"></textarea>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Працюють з</p>
                                            <p className="admin-item-info">{formatter.format(agencyData.workingFrom)}</p>
                                        </div>
                                    </div>
                                    <input onChange={saveData('workingFrom')} type='date' id="admin-agency-edit-workingFrom" className="admin-item-edit"/>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Номер телефону</p>
                                            <p className="admin-item-info">{agencyData.number}</p>
                                        </div>
                                    </div>
                                    <input onChange={saveData('number')} value={editAgencyData.number} id="admin-agency-edit-number" className="admin-item-edit"/>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Логотип</p>
                                            <p className="admin-item-info">{agencyData.logo}</p>
                                            <img alt="sd" src={agencyData.logo}></img>
                                        </div>
                                    </div>
                                    <div className="admin-item-edit-image-content">
                                        <input onChange={showFileName} type='file' accept="image/*" id="edit-agency-image"/>
                                        <label className="admin-item-edit" htmlFor="edit-agency-image">Завантажити логотип</label>
                                        <div id="file-upload-filename"></div>
                                    </div>
                                    <div className="admin-item">
                                        <div className="admin-item-content">
                                            <p className="admin-item-title">Дата реїстрації</p>
                                            <p className="admin-item-info">{formatter.format(agencyData.date)}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </>
        )
    }
}