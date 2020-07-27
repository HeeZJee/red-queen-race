import React, { useRef, useEffect } from 'react'

function Foreground2() {

    const refForeground2 = useRef(null)

    useEffect(() => {
        const animateForeground2 = refForeground2.current.animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
            {
                duration: 12000,
                iterations: Infinity
            }
        )
        function goFaster() {
            animateForeground2.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animateForeground2.playbackRate > 1) {
                        animateForeground2.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', goFaster)
    })
    return (
        <div className="scenery" id="foreground2" ref={refForeground2} >
            <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
            <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
        </div>
    )
}

export default Foreground2
