import React, {useState} from 'react'

const CaseStudyHolo = (props) => {

    const [image, setImage] = useState(0)

    setTimeout(() => {
        if (image === props.images.length - 1) {
            setImage(0)
        } else {
            setImage(image+1)
        }
    }, 2500)

    return (
        <div className='holoembedportrait purpol'>
            <p style={{fontSize: '40px'}}>{props.title}</p>
            {props.content.map((c) => {
                return (
                    <p style={{fontSize: '16px'}}>{c}</p>
                )
            })}
            <img src={props.images[image]} alt='cs' style={{width: '100%', borderRadius: '1vw'}}></img>
        </div>
    )
}

export default CaseStudyHolo
