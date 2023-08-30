import React, {useState} from 'react'

const AboutUsHolo = () => {

    const [activePage, setActivePage] = useState('about')

    const next = () => {
        if (activePage === 'about') { setActivePage('services') }
        else if (activePage === 'services') { setActivePage('branding') }
        else if (activePage === 'branding') { setActivePage('design') }
        else if (activePage === 'design') { setActivePage('consulting') }
        else if (activePage === 'consulting') { setActivePage('about') }
    }

    const prev = () => {
        if (activePage === 'about') { setActivePage('consulting') }
        else if (activePage === 'services') { setActivePage('about') }
        else if (activePage === 'branding') { setActivePage('services') }
        else if (activePage === 'design') { setActivePage('branding') }
        else if (activePage === 'consulting') { setActivePage('design') }
    }

    const aboutUs = () => {
        return (
            <div>
                <h3>About Us</h3>
                <p>Upnup is the pionieer in the digital development and the driving force in redesigning the digital world-we create unique experiences, form identities and shape new dimensions. We are always on the cutting edge and on the pulse of life. We are disruptive, curious and brave!</p>
                <p>This is how we bring companies in touch with generation Z and on the path to success. This is how we bring Europe back on the technological and communicative map, back in the competition of the tech industry.</p>
            </div>
        )
    }

    const serviceOverview = () => {
        return (
            <div>
                <h3>Our Services</h3>
                <div className='service-grid'>
                    <div className='header-rec'>Branding</div>
                    <div className='header-rec'>Immersive Design {'&'} Development</div>
                    <div className='header-rec'>Consulting</div>
                    <div className='sub-rec'>Corporate Branding</div>
                    <div className='sub-rec'>3D Product creation</div>
                    <div className='sub-rec'>Augmented Productivity</div>
                    <div className='sub-rec'>Personal Branding</div>
                    <div className='sub-rec'>Immersive Web Apps</div>
                    <div className='sub-rec'>Experience Marketing</div>
                    <div className='sub-rec'>Product Branding</div>
                    <div className='sub-rec'>VR {'&'} AR</div>
                    <div className='sub-rec'>Immersive Tech</div>
                </div>
            </div>
        )
    }

    const brandingServices = () => {
        return (
            <div>
                <h3>Branding Services</h3>
                <p>Branding (/ˈbrandɪŋ/) gives a company, a product and a person character, makes its identity visible and gives it a sexy cover. Branding also lays the foundation for everything else.</p>
                <p>Your friends love you for your personality and style, they share your values and humor, they know your strengths and weaknesses and would recognize your voice at any carnival. Create friendships with your customers!</p>
                <div className='subservice-grid'>
                    <div className='header-rec'>Corporate Branding</div>
                    <div className='sub-rec'>The company becomes unique and trustworthy</div>
                    <div className='header-rec'>Personal Branding</div>
                    <div className='sub-rec'>The human as a brand</div>
                    <div className='header-rec'>Product Branding</div>
                    <div className='sub-rec'>The product with what you can identify yourself with</div>
                </div>
            </div>
        )
    }

    const designServices = () => {
        return (
            <div>
                <h3>Immersive Design {'&'} Development Services</h3>
                <p>Immersive technologies offer the possibility of expanding our reality or even immersing in to a new one. It's about real experiences with lasting memories, about emotions and excitement.</p>
                <div className='subservice-grid'>
                    <div className='header-rec'>3D Product Creation</div>
                    <div className='sub-rec'>The product can be experienced! Flexible and dynamic, every centimeter and angle can be viewed in detail. Conviction, trust {'&'} purchase!</div>
                    <div className='header-rec'>Immersive Web Apps</div>
                    <div className='sub-rec'>Websites were yesterday - we create Web Spaces for today and tomorrow! For desktop, mobile, VR and AR devices - accessible for everything and everyone.</div>
                    <div className='header-rec'>VR {'&'} AR</div>
                    <div className='sub-rec'>Virtual spaces and the use of augmented reality - enabling a new, unique way of experiencing. Art, events, real estate, festivals, showrooms, everything is possible!</div>
                </div>
            </div>
        )
    }

    const consultingServices = () => {
        return (
            <div>
                <h3>Consulting</h3>
                <p>Are you keen on the advantages of immersive technologies, but don't know where and how to start? Our experienced team will show you the possibilities and advise you and your company individually - until you are sure you can go full throttle on your own!</p>
                <div className='subservice-grid'>
                    <div className='header-rec'>Augmented Productivity</div>
                    <div className='para-rec body'>How do you keep the team spirit and stay productive when the home office is preferred, or the team is international? We show you the possibilities of digital, virtual office space, and how to enhance your productivity with modern technologies.</div>
                    <div className='header-rec'>Experience Marketing</div>
                    <div className='para-rec body'>Marketing measures that are remembered, create experiences, build trust and produce happy, loyal customers - but how? We advise you with the possibilities of Experience Marketing so that you can raise yourself and your business to a unique level.</div>
                    <div className='header-rec'>Immersive Tech Consulting</div>
                    <div className='para-rec body'>Immersive technologies are conquering the digital world and opening up unimagined opportunities. The possibilities and potential are limitless. We guide you through the immersive tech world and show you useful applications for you and your business!</div>
                </div>
            </div>
        )
    }

    return (
        <div className='holoembed'>
            <div id='holo-content'>
                {activePage === 'about' && aboutUs()}
                {activePage === 'services' && serviceOverview()}
                {activePage === 'branding' && brandingServices()}
                {activePage === 'design' && designServices()}
                {activePage === 'consulting' && consultingServices()}
            </div>
            <div className='carousel'>
                <img src='/icons/chevron-right.svg' style={{transform: 'scaleX(-1)'}} onClick={next}></img>
                <div className='dot ml-1' onClick={() => setActivePage('about')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('services')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('branding')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('design')}></div>
                <div className='dot ml-1' onClick={() => setActivePage('consulting')}></div>
                <img className='ml-1' src='/icons/chevron-right.svg' onClick={prev}></img>
            </div>
        </div>
    )
}

export default AboutUsHolo
