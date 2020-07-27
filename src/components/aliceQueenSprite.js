import React, { useRef, useEffect } from 'react'

function AliceQueenSprite() {
    const refAliceQueenSprite = useRef(null)

    useEffect(() => {
        const animateAliceQueenSprite = refAliceQueenSprite.current.animate(
            [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
            {
                easing: 'steps(7, end)',
                duration: 600,
                playbackRate: 1,
                iterations: Infinity
            }
        )

        function goFaster() {
            animateAliceQueenSprite.playbackRate *= 1.1;
            setInterval(
                () => {
                    if (animateAliceQueenSprite.playbackRate > 1) {
                        animateAliceQueenSprite.playbackRate *= .9;
                    }
                }, 6000)
        }
        window.addEventListener('click', goFaster)
    })
    return (
        <div id="red-queen_and_alice">
            <img ref={refAliceQueenSprite} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
        </div>
    )
}

export default AliceQueenSprite
