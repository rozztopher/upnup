import { isValidPhoneNumber, getCountries } from 'libphonenumber-js'
import emailjs from 'emailjs-com'

function validateName(name) {
    if (name) {
        return true
    } else {
        return false
    }
}

// function validateEmail(email) {
//     const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!mailRegex.test(String(email).toLowerCase())) {
//         return false
//     } else {
//         return true
//     }
// }

function validateNumber(number) {
    let validNumber = isValidPhoneNumber(number)
    getCountries().forEach(country => {
        if (isValidPhoneNumber(number, country)) {
            validNumber = true
        }
    })
    return validNumber
}

export function validateForm(name, email, number) {
    if (!validateName(name)) {
        return "Invalid name"
    } 
    // else if (!validateEmail(email)) {
    //     return "Invalid email"
    // } 
    else if (!validateNumber(number)) {
        return "Invalid phone number"
    } else {
        return ''
    }
}

export function sendEmail() {

    const data = {
        name: 'Ross Clelland',
        email: 'ross.clelland@yahoo.com',
        company: 'Upnup',
        number: '07826139944',
        industry: 'Tech',
        values: 'Disruptive, Cool',
        services: 'Personal Branding, Web Development',
        message: '',
        reply_to: ''
    }

    emailjs.send('service_2kq3lvc', 'template_zuksvzh', data, 'user_cpF77Jn35lkFuc2h8793u').then(res => {console.log('sent')}).catch(err => {console.log(err)})
}
