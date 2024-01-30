const logData = {
    "login": "admin@gmail.com",
    "password": "admin1234"
}
const getElementById = (id) => {
    return document.getElementById(id)
}


// Switch Sign In and Sign Up ---------
const container = getElementById('container')
const registerBtn = getElementById('register')
const loginBtn = getElementById('login')

registerBtn.addEventListener('click', () => {
    container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
})


// Form Sign Up ---------------------
const form = getElementById('registration-form')
const inputName = getElementById('name')
const inputEmail = getElementById('email')
const inputPassword = getElementById('password')

form.addEventListener('submit', e => {
    const error = document.querySelector('.error')
    const name = inputName.value
    const email = inputEmail.value
    const password = inputPassword.value

    const errorMsg = []

    if (name.length < 2 || name.length > 20) {
        errorMsg.push('The name must be between 2 and 20 characters')
    }

    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        errorMsg.push('Please, enter a valid email address')
    }

    if (password.length < 6) {
        errorMsg.push('The password must be at least 6 characters')
    }

    errorMessage(e, errorMsg, error)
})

// Form Sign In ---------------------
const loginForm = getElementById('login-form')
const inputLoginEmail = getElementById('login-email')
const inputLoginPassword = getElementById('login-password')

loginForm.addEventListener('submit', e => {
    const error = document.querySelector('#login-err')
    const email = inputLoginEmail.value
    const password = inputLoginPassword.value

    const errorMsg = []

    if (email !== logData.login || password !== logData.password) {
        errorMsg.push('Wrong login or password');
    }

    errorMessage(e, errorMsg, error)
})

function errorMessage(e, errorMsg, error) {
    if (errorMsg.length > 0) {
        e.preventDefault()
        error.innerText = errorMsg.join('\n')
    }
}