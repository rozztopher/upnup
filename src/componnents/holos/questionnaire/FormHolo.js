import React from 'react'

const FormHolo = (props) => {

    const areaStyle = {
        width: '100%',
        height: '250px',
        marginTop: '50px',
        borderRadius: '20px',
        color: '#000'
    }

    const errorStyle = {
        position: 'absolute',
        bottom: '2,0%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        fontSize: '2rem'
    }

    const thankYouStyle = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '64px'
    }

    return (
        <div className='holoembedyou'>
            {!props.submitted &&
                <div>
                    <div className='grid-2'>
                        <input id='name' className='enter-input-text' placeholder="Name" value={props.name} readOnly />
                        <input id='company' className='enter-input-text' placeholder="Company (optional)" value={props.company} readOnly />
                    </div>
                    <div className='grid-2 mt-5'>
                        <input id='email' className='enter-input-text' placeholder="Email" value={props.email} readOnly />
                        <input id='number' className='enter-input-text' placeholder="Phone Number" value={props.number} readOnly />
                    </div>
                    <textarea id='message' value={props.message} placeholder={"Enter message (optional)"} style={areaStyle} readOnly></textarea>
                    <p style={errorStyle}>{props.formError}</p>
                </div>
            }
            {props.submitted &&
                <div>
                    <p style={thankYouStyle}>Thank You!</p>
                </div>
            }
        </div>
    )
}

export default FormHolo
