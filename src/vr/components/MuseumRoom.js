import React from 'react'

const MuseumRoom = () => {

    return (
        <>
            <a-entity id="museum-object" museum museum-setup position="127.6 -1 0.5" scale="1.33 1.33 1.33"></a-entity>
            
            <a-plane class="collidable" position="135.1 0 0.3" color="blue" height="5" width="3" museum-to-room visible="false" rotation="0 180 0"></a-plane>

            <a-image src="#stayhuman" position="130 0.8 -4" rotation="0 112.5 0" scale="1 2 1"></a-image>
            <a-image src="#spayce" position="140 0.8 -4" rotation="0 247.5 0" scale="1 2 1"></a-image>
            <a-image src="#foxdeal" position="134 0.8 -17" rotation="0 0 0" scale="1 2 1"></a-image>
            <a-image src="#coin" position="141 0.8 -17" rotation="0 0 0" scale="1 2 1"></a-image>

            <a-image src="#stayhuman1" position="130.01 0.5 -4" rotation="0 112.5 0" scale="0.84 0.6 1" stayhuman-slide></a-image>
            <a-image src="#spayce1" position="139.99.01 0.4 -4" rotation="0 247.5 0" scale="0.84 0.5 1" spayce-slide></a-image>
            <a-image src="#foxdeal1" position="134 0.5 -16.99" rotation="0 0 0" scale="0.84 0.5 1" foxdeal-slide></a-image>
            <a-image src="#spayce1" position="141 0.5 -16.99" rotation="0 0 0" scale="0.84 0.84 1" coin-slide></a-image>
        </>
    )
}

export default MuseumRoom
