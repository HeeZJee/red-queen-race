import React, { useRef, useEffect } from 'react'

function Foreground1() {

    const refForeground1 = useRef(null)

    useEffect(() => {
        const animateForeground1 = refForeground1.current.animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
            {
                duration: 12000,
                iterations: Infinity
            }
        )
        function goFaster() {
            animateForeground1.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animateForeground1.playbackRate > 1) {
                        animateForeground1.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', goFaster)
    })


    return (
        <div className="scenery" id="foreground1" ref={refForeground1} >
            <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
        </div>
    )
}

export default Foreground1
