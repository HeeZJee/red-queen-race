import React, { useRef, useEffect } from 'react'

function Background2() {
    const refBackground2 = useRef(null)

    useEffect(() => {
        const animateBackground2 = refBackground2.current && refBackground2.current.animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
            {
                duration: 36000,
                iterations: Infinity
            }
        )
        function goFaster() {
            animateBackground2.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animateBackground2.playbackRate > 1) {
                        animateBackground2.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', goFaster)
    })
    return (
        <div>
            <div ref={refBackground2} className="scenery" id="Background2">
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
            </div>
        </div>
    )
}

export default Background2
