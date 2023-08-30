import React from 'react'
import Team from './TeamInfo.json'
import { Link } from 'react-router-dom'

const FigureHolo = (props) => {

    const member = Team[props.member]

    return (
        <div className='holoembedportrait'>
            <p style={{fontSize: '40px'}}>{member.name}</p>
            <p style={{fontSize: '32px'}}>{member.role}</p>
            <p>{member.quote}</p>
            {member.desc.map(d => {
                return (
                    <p style={{fontSize: '16px'}}>{d}</p>
                )
            })}
            {member.linkedIn &&
                <Link to={{ pathname: member.linkedIn }} target="_blank">
                    <img src='/icons/linkedin-white.svg' alt='linkedin' style={{width: '80px', height: '80px'}}></img>
                </Link>
            }
        </div>
    )
}

export default FigureHolo
