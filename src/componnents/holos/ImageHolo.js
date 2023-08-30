import React from 'react'

const ImageHolo = (props) => {

    return (
        <div className='holoembed'>
            <img src={props.src} alt='holo' style={{width: '100%', height: '100%'}}></img>
        </div>
    )
}

export default ImageHolo
