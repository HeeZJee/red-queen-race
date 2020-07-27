import React, { useEffect, useRef } from 'react'

function Background1() {

    const refBackground1 = useRef(null)

    useEffect(() => {
        const animateBackground1 = refBackground1.current && refBackground1.current.animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
            {
                duration: 36000,
                iterations: Infinity
            }
        )

        function goFaster() {
            animateBackground1.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animateBackground1.playbackRate > 1) {
                        animateBackground1.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', goFaster)
    })

    return (
        <div ref={refBackground1} className="scenery" id="background2">
            <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

            <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
            <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
        </div>
    )
}

export default Background1
