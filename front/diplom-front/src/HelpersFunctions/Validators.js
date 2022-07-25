export const formatter = new Intl.DateTimeFormat('uk',{
    day: 'numeric',
    month : 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
})
export const validationPassword = (span) => (e) => {
    const password = e.target.value
    const errSpan = document.querySelector(`.${span}`)
    const reg = /[а-яА-яЁё\s]/
    let ok = reg.test(password)
    if (!ok) {
        if (password.length < 6 || password.length > 20) {
            errSpan.innerHTML = 'Пароль повинен бути від 6 до 20 символів'
        }
        else{
            errSpan.innerHTML = ''
        }
    }
    else{
        errSpan.innerHTML = 'Тільки латинські букви, цифри та знаки'
    }
}
export const passwordSaving = (password, span, saving)=> (e) => {
    const firstPassword = document.querySelector(`#${password}`)
    const errSpan = document.querySelector(`.${span}`)
    const save = saving('password')
    if(firstPassword.value === e.target.value){
        save(e)
        errSpan.innerHTML = ''
    }
    else {
        errSpan.innerHTML = 'Паролі не співпадають'
    }
}
export const validationEmail = (span, saving) => (e) => {
    const errSpan = document.querySelector(`.${span}`)
    const email = e.target.value
    const reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const ok = reg.test(email)
    const save = saving('email')
    if(!ok) {
        errSpan.innerHTML = 'Введіть правильний email'
    }
    else {
        save(e)
        errSpan.innerHTML = ''
    }
}
export const isEmpty = (data) => {
    for(let item in data){
        if(data[item] === '') {
            return false
        }
    }
    return true
}