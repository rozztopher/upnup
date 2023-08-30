import React from 'react'

const IndustryHolo = (props) => {

    const industryGrid = {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: '2%',
        rowGap: '10%',
        gridAutoRows: '1fr',
        marginTop: '40px'
    }

    const handleIndustrySelect = (e) => {
        if (e.target.innerHTML === props.industry) {
            props.set('')
        } else {
            props.set(e.target.innerHTML)
        }
    }

    const industries = [
        'Commerce',
        'Construction',
        'Consulting',
        'Finance',
        'Health and Social Services',
        'Music/Arts',
        'Tech',
        'Other'
    ]

    return (
        <div className='holoembedyou'>
            <div>
                <h3 style={{fontSize: '3rem'}}>Your Industry?</h3>
                <div style={industryGrid}>
                    {industries.map(i => {
                        const className = props.industry === i
                        ? 'glass_active flex-center'
                        : 'glass_init flex-center'
                        return (
                            <div className={className} value={i} onClick={handleIndustrySelect} key={i}>
                                {i}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default IndustryHolo
