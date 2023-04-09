import React from 'react';
import Typed from 'typed.js';
import { Trykker, Trispace } from 'next/font/google';
import Image from 'next/image';


const trykker = Trykker({ subsets: ['latin'], weight: '400' })
const trispace = Trispace({ subsets: ['latin'] })
const About = () => {
    const text = React.useRef(null);


    React.useEffect(() => {
        const typed = new Typed(text.current, {
            strings: ['Hola! Somos Kath y Belen, te damos la bienvenida a este nuevo espacio llamado Bien Producido, lo hemos creado pensando en ti y en lo que te gusta. Aquí podrás encontrar desde lo que hacemos hasta lo que tus artistas favoritos hacen; con un simple click pasarás de estar aquí a estar en la sala de podcast con nosotras escuchando cómo productores, artistas, músicos y gente del medio te cuentan sus anécdotas desde la experiencia y el conocimiento <br><br> ¡Queremos que seas parte de nuestra comunidad! Así que te invitamos a conocernos'],
            typeSpeed: 10,
            smartBackspace: true,
            cursorChar: '|',
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <>
        <div className='w-full mt-[80px] sm:mt-40'>
            <Image src={'/B&P.svg'} width={100} height={52} className={'m-10 w-[50px] sm:w-[80px] sm:h-[68px] h-[25px]'} />
      
            <div className='mx-10 h-[400px] sm:mx-[300px]  mt-8 text-center'>
                <span ref={text} className={`${trykker.className} text-[16px] sm:text-[24px] `} />
          
            </div>
        </div>
    
        </>
    )
}

export default About