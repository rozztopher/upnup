import React from 'react'

const ServicesHolo = (props) => {

    const serviceGrid = {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        columnGap: '2%',
        rowGap: '10%',
        gridAutoRows: '1fr',
        marginTop: '40px'
    }

    const handleServiceSelect = (e) => {
        const newServices = []
        props.services.forEach(s => newServices.push(s))
        if (newServices.includes(e.target.innerHTML)) {
            const index = newServices.indexOf(e.target.innerHTML);
            if (index > -1) {
                newServices.splice(index, 1);
            }
        } else {
            newServices.push(e.target.innerHTML)
        }
        props.set(newServices)
    }

    const serviceList = [
        'Corporate Branding',
        '3D Product creation',
        'Augmented Productivity',
        'Personal Branding',
        'Immersive Web Apps',
        'Experience Marketing',
        'Product Branding',
        'VR / AR',
        'Immersive Tech',
        'Other'
    ]

    return (
        <div className='holoembedyou'>
            <div>
                <h3 style={{fontSize: '3rem'}}>Which services are you interested in?</h3>
                <div style={serviceGrid}>
                    {serviceList.map(se => {
                        const className = props.services.includes(se)
                            ? 'glass_active flex-center'
                            : 'glass_init flex-center'
                        return (
                            <div className={className} value={se} onClick={handleServiceSelect} key={se}>
                                {se}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ServicesHolo
