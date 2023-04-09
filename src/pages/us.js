import Image from "next/image"
import React from 'react'
import Wave from 'react-wavify'


const AboutUs = () => {
    return (
        <div className='w-full '>
            <Image src={'/B&P.svg'} width={100} height={52} className={'m-10 w-[50px] relative top-[-80px] sm:top-[-420px]  sm:w-[80px] sm:h-[68px] h-[25px]'} />
            <Wave fill='#b5aaa3'
                paused={true}
                options={{
                    height: 20,
                    amplitude: 200,
                    speed: 0.15,
                    points: 3,
                }}
            />

            <p></p>

        </div>
    )
}

export default AboutUs