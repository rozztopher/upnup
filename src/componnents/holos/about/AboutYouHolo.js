import React, { useState } from 'react'

const AboutYouHolo = () => {

    const industryGrid = {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: '2vw',
        rowGap: '2vw',
        gridAutoRows: '1fr'
    }

    const valueGrid = {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        columnGap: '2vw',
        rowGap: '2vw',
        gridAutoRows: '1fr'
    }

    const serviceGrid = {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        columnGap: '2vw',
        rowGap: '2vw',
        gridAutoRows: '1fr'
    }

    const [activePage, setActivePage] = useState('info')
    const [industry, setIndustry] = useState('')
    const [values, setValues] = useState([])
    const [services, setServices] = useState([])

    const next = () => {
        if (activePage === 'industry') { setActivePage('values') }
        else if (activePage === 'values') { setActivePage('services') }
        else if (activePage === 'services') { setActivePage('check') }
        else if (activePage === 'check') { setActivePage('info') }
        else if (activePage === 'info') { setActivePage('industry') }
    }

    const prev = () => {
        if (activePage === 'industry') { setActivePage('check') }
        else if (activePage === 'values') { setActivePage('industry') }
        else if (activePage === 'services') { setActivePage('values') }
        else if (activePage === 'check') { setActivePage('services') }
        else if (activePage === 'info') { setActivePage('check') }
    }

    const handleIndustrySelect = (e) => {
        if (e.target.innerHTML === industry) {
            setIndustry('')
        } else {
            setIndustry(e.target.innerHTML)
        }
    }

    const handleValueSelect = (e) => {
        const newValues = Object.assign(values)
        if (newValues.length >= 5 && !newValues.includes(e.target.innerHTML)) {
            newValues[4] = e.target.innerHTML
        }
        else if (newValues.includes(e.target.innerHTML)) {
            const index = newValues.indexOf(e.target.innerHTML);
            if (index > -1) {
                newValues.splice(index, 1);
            }
        } else {
            newValues.push(e.target.innerHTML)
        }
        setValues(newValues)
    }

    const handleServiceSelect = (e) => {
        const newServices = Object.assign(services)
        if (newServices.includes(e.target.innerHTML)) {
            const index = newServices.indexOf(e.target.innerHTML);
            if (index > -1) {
                newServices.splice(index, 1);
            }
        } else {
            newServices.push(e.target.innerHTML)
        }
        setServices(newServices)
    }

    const industries = ['Commerce', 'Construction', 'Consulting', 'Finance', 'Health and Social Services', 'Music/Arts', 'Tech', 'Other']
    const valueList = ['Breaking the wheel', 'Clear hierarchies', 'Control', 'Data based decision making', 'Decide according to feeling', 'Digital development', 'Fast cashflow', 'Flexible', 'Keeping traditions alive', 'Lone wolf', 'No hierarchies', 'Out of the box thinking', 'Planned', 'Realisation of passion', 'Reclaiming the analog', 'Stick to the tried and tested', 'Team spirit', 'Tolerance', 'Transparent communication', 'Trust Culture']
    const serviceList = ['Corporate Branding', '3D Product creation', 'Augmented Productivity', 'Personal Branding', 'Immersive Web Apps', 'Experience Marketing', 'Product Branding', 'VR & AR', 'Immersive Tech']

    const industryQuestion = () => {
        return (
            <div>
                <h3>Your Industry?</h3>
                <div style={industryGrid}>
                    {industries.map(i => {
                        const s = industry === i
                            ? { background: '#F8F8F8', color: '#2D2D2D' }
                            : { background: '#2D2D2D', color: '#F8F8F8' }
                        return (
                            <div className='header-rec' value={i} onClick={handleIndustrySelect} style={s}>
                                {i}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const valueQuestion = () => {
        return (
            <div>
                <h3>Your Values?</h3>
                <div style={valueGrid}>
                    {valueList.map(v => {
                        const s = values.includes(v)
                            ? { background: '#F8F8F8', color: '#2D2D2D', fontSize: '16px' }
                            : { background: '#2D2D2D', color: '#F8F8F8', fontSize: '16px' }
                        return (
                            <div className='header-rec' value={v} onClick={handleValueSelect} style={s}>
                                {v}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const serviceQuestion = () => {
        return (
            <div>
                <h3>Your Services?</h3>
                <div style={serviceGrid}>
                    <div className='header-rec'>Branding</div>
                    <div className='header-rec'>Immersive Design {'&'} Development</div>
                    <div className='header-rec'>Consulting</div>
                    {serviceList.map(se => {
                        const s = services.includes(se)
                            ? { background: '#F8F8F8', color: '#2D2D2D', fontSize: '16px' }
                            : { background: '#2D2D2D', color: '#F8F8F8', fontSize: '16px' }
                        return (
                            <div className='header-rec' value={se} onClick={handleServiceSelect} style={s}>
                                {se}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const doubleCheck = () => {
        return (
            <div>
                <h3>Let's double check</h3>
                <p style={{ fontSize: '16px' }}>Are you sure you filled in everything correctly? Now is your chance to correct or even reconsider your entry.</p>
                <p style={{ fontSize: '16px' }}>Afterwards we need some personal information from you which we will of course treat confidentially.</p>
                <p style={{ fontSize: '16px' }}>Thank you for your honesty and your trust in Upnup!</p>
                <div style={serviceGrid}>
                    <div>
                        <p>Industry</p>
                        <div style={{ fontSize: '16px' }}>Tech</div>
                    </div>
                    <div>
                        <p>Values</p>
                        <div style={{ fontSize: '16px' }}>Stick to the tried and tested</div>
                        <div style={{ fontSize: '16px' }}>Stick to the tried and tested</div>
                        <div style={{ fontSize: '16px' }}>Stick to the tried and tested</div>
                        <div style={{ fontSize: '16px' }}>Stick to the tried and tested</div>
                        <div style={{ fontSize: '16px' }}>Stick to the tried and tested</div>
                    </div>
                    <div>
                        <p>Services</p>
                        <div style={{ fontSize: '16px' }}>Augmented productivity</div>
                        <div style={{ fontSize: '16px' }}>Augmented productivity</div>
                        <div style={{ fontSize: '16px' }}>Augmented productivity</div>
                        <div style={{ fontSize: '16px' }}>Augmented productivity</div>
                        <div style={{ fontSize: '16px' }}>+2 more</div>
                    </div>
                </div>
            </div>
        )
    }

    const form = () => {
        return (
            <div>
                <div className='grid-2'>
                    <input onClick={() => console.log('name')} className='enter-input-text' onChange={() => { }} placeholder="Name" />
                    <input onClick={() => console.log('company')} className='enter-input-text' onChange={() => { }} placeholder="Company (optional)" />
                </div>
                <div className='grid-2 mt-5'>
                    <input onClick={() => console.log('email')} className='enter-input-text' onChange={() => { }} placeholder="Email" />
                    <input onClick={() => console.log('number')} className='enter-input-text' onChange={() => { }} placeholder="Phone Number" />
                </div>
            </div>
        )
    }

    return (
        <div className='holoembedyou'>
            <div id='holo-content'>
                {activePage === 'industry' && industryQuestion()}
                {activePage === 'values' && valueQuestion()}
                {activePage === 'services' && serviceQuestion()}
                {activePage === 'check' && doubleCheck()}
                {activePage === 'info' && form()}
            </div>
            <div className='carousel'>
                <img src='/icons/chevron-right.svg' style={{ transform: 'scaleX(-1)' }} onClick={next}></img>
                <div className='dot ml-1' onClick={() => setActivePage('industry')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('values')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('services')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('check')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('info')}></div>
                <img className='ml-1' src='/icons/chevron-right.svg' onClick={prev}></img>
            </div>
        </div>
    )
}

export default AboutYouHolo
