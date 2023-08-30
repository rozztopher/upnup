import React from 'react'

const ValuesHolo = (props) => {

    const valueGrid = {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: '2%',
        rowGap: '10%',
        gridAutoRows: '1fr',
        marginTop: '40px'
    }

    const handleValueSelect = (e) => {
        const newValues = Object.assign([], props.values)
        if (newValues.includes(e.target.innerHTML)) {
            const index = newValues.indexOf(e.target.innerHTML);
            if (index > -1) {
                newValues.splice(index, 1);
            }
        } else {
            newValues.push(e.target.innerHTML)
        }
        props.set(newValues)
    }

    const valueList = [
        'Recognition through success',
        'Sustainability',
        'Safe and secure',
        'Innovation and disruption',
        'Simple and intuitive',
        'Aesthetic and beneficial',
        'Increase profits',
        'Sharing is caring',
    ]

    return (
        <div className='holoembedyou'>
            <div>
                <h3 style={{fontSize: '3rem'}}>Your Values?</h3>
                <div style={valueGrid}>
                    {valueList.map(v => {
                        const className = props.values.includes(v)
                            ? 'glass_active flex-center'
                            : 'glass_init flex-center'
                        return (
                            <div className={className} value={v} onClick={handleValueSelect} key={v}>
                                {v}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ValuesHolo
