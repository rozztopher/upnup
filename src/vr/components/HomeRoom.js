import React, { useEffect, useState } from 'react'
import { validateForm } from '../../utils/Utils'
import IndustryHolo from '../../componnents/holos/questionnaire/IndustryHolo'
import ServicesHolo from '../../componnents/holos/questionnaire/ServicesHolo'
import ValuesHolo from '../../componnents/holos/questionnaire/ValuesHolo'
import FormHolo from '../../componnents/holos/questionnaire/FormHolo'
import emailjs from 'emailjs-com';

const HomeRoom = () => {

    const [industry, setIndustry] = useState('')
    const [values, setValues] = useState([])
    const [services, setServices] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [formError, setFormError] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleFormSubmit = () => {
        const validStatus = validateForm(name, email, number)
        if (validStatus) {
            setFormError(validStatus)
        } else {
            const data = {
                name: name,
                email: email,
                company: company,
                number: number,
                industry: industry,
                values: values,
                services: services,
                message: message,
            }

            emailjs.send('service_je0binl', 'template_zuksvzh', data, 'user_cpF77Jn35lkFuc2h8793u').then(res => {
                console.log('sent')
            }).catch(err => {
                console.log(err)
            })

            sessionStorage.setItem('form', 'submitted')
            setFormSubmitted(true)
        }
    }

    useEffect(() => {
        window.addEventListener('superkeyboardinput', () => {
            const input = document.querySelector('#keyboard').getAttribute("super-keyboard").value
            if (sessionStorage.getItem('activeInput') === 'name') { setName(input) }
            else if (sessionStorage.getItem('activeInput') === 'company') { setCompany(input) }
            else if (sessionStorage.getItem('activeInput') === 'email') { setEmail(input) }
            else if (sessionStorage.getItem('activeInput') === 'number') { setNumber(input) }
            else if (sessionStorage.getItem('activeInput') === 'message') { setMessage(input) }
            document.querySelector('#keyboard').setAttribute("super-keyboard", "value", '');
            document.querySelector('#keyboard').setAttribute('position', '-100 -100 100')
            sessionStorage.setItem('activeInput', '')
        })

        window.addEventListener('inputrequired', (e) => {
            if (sessionStorage.getItem('vr') === 'false') {
                document.querySelector('#keyboard').setAttribute('position', '0 -0.2 -1')
                document.querySelector('#keyboard').setAttribute("super-keyboard", "show", true);
                sessionStorage.setItem('activeInput', e.detail.target.id)
            }
        })

        window.addEventListener('FormSubmitted', () => {
            handleFormSubmit()
        })
    })

    return (
        <>
            <a-entity id="room-object" gltf-model="url(/upnup-room/ROOM_2.9.2.glb)" class="collidable" room position="-4 -1 0.5" visible="true"></a-entity>
            <a-entity id="product-object" product visible="true" position="0 -0.2 2.4" scale="0.2 0.2 0.2"></a-entity>

            <a-plane class="collidable" position="10.25 0 5.75" color="blue" height="5" width="3" room-to-museum visible="false" rotation="0 180 0"></a-plane>

            <a-box class="collidable" depth="4" height="0.75" width="1" position="3.2 -0.7 2.9" visible="false" open-textures></a-box>
            <a-box class="collidable" depth="1" height="0.75" width="2.5" position="2.4 -0.7 4.4" visible="false" open-textures></a-box>

            <a-box indicator position="10.2 1.5 5" rotation="0 0 45" color="#007ADE" scale="0.25 0.25 0.25"></a-box>
            <a-box indicator position="3.5 0.5 4" rotation="0 0 45" color="#007ADE" scale="0.1 0.1 0.1"></a-box>

            <a-image src="#ross" position="16 0.8 5.5" rotation="0 180 0" scale="0.5 1 1"></a-image>
            <a-image src="#artur" position="18 0.8 5.5" rotation="0 180 0" scale="0.5 1 1"></a-image>
            <a-image src="#lea" position="20 0.8 5.5" rotation="0 180 0" scale="0.5 1 1"></a-image>
            <a-image src="#arion" position="22 0.8 5.5" rotation="0 180 0" scale="0.5 1 1"></a-image>
            <a-image src="#felix" position="23.75 0.8 4" rotation="0 270 0" scale="0.5 1 1"></a-image>
            <a-image src="#lorenzo" position="23.75 0.8 2" rotation="0 270 0" scale="0.5 1 1"></a-image>
            <a-image src="#gian" position="23.75 0.8 0.5" rotation="0 270 0" scale="0.5 1 1"></a-image>
            <a-image src="#fredy" position="23.75 0.8 -1.2" rotation="0 270 0" scale="0.5 1 1"></a-image>

            <a-image src="#about" position="21.8 0.6 -7" rotation="0 0 0" scale="3.2 2 1"></a-image>
            <a-image src="#workflow" position="24 0.6 -5" rotation="0 270 0" scale="3.2 2 1"></a-image>
            <a-image src="#services" position="19.5 0.6 -5" rotation="0 90 0" scale="3.2 2 1"></a-image>

            <a-image id='next-button' class='collidable' src="#next" position="10.2 -0.5 -7" rotation="0 0 0" scale="0.72 0.25 1" activate-form></a-image>
            <a-image id='back-button' class='collidable' src="#back" position="9.6 -0.5 -7" rotation="0 0 0" scale="0.72 0.25 1" deactivate-form></a-image>
            <a-image id='send-button' class='collidable' src="#send" position="10.8 -0.5 -7" rotation="0 0 0" scale="0.72 0.25 1" submit-form></a-image>

            <a-entity id='ay-industry' class="collidable holos" htmlembed="ppu: 400" position="10.2 0.7 -7" rotation="0 0 0">
                <IndustryHolo set={setIndustry} industry={industry} />
            </a-entity>

            <a-entity id='ay-services' class="collidable holos" htmlembed="ppu: 400" position="12.5 0.7 -5" rotation="0 270 0">
                <ServicesHolo set={setServices} services={services} />
            </a-entity>

            <a-entity id='ay-values' class="collidable holos" htmlembed="ppu: 400" position="7.9 0.7 -5" rotation="0 90 0">
                <ValuesHolo set={setValues} values={values} />
            </a-entity>

            <a-entity id='ay-form' class="collidable holos" htmlembed="ppu: 400" position="10.2 0.7 -6.9" rotation="0 0 0">
                <FormHolo name={name} email={email} number={number} company={company} message={message} formError={formError} submitted={formSubmitted} />
            </a-entity>

            <a-image src="#contact" position="-2.66 0.15 -7" rotation="0 0 0" scale="1 0.66 1"></a-image>
            <a-image src="#address" position="-0.25 0.15 -7" rotation="0 0 0" scale="1 0.66 1"></a-image>
        </>
    )
}

export default HomeRoom
