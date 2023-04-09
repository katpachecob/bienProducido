import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"
import About from './about';
import AboutUs from './us';
import Products from './products';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const logoVariantB = {
    initial: { y: "5%",x:'100%' },
    animate: { y: "-10%",x:'100%' },
  };
  const logoVariantP = {
    initial: { y: "0%" , x:'-96%' },
    animate: { y: "57%" , x:'-96%' },
  };
  const logoVariantbBien = {
    initial: { y: "14%", opacity: 0, x:'102%' },
    animate: { y: "14%", opacity: 1,  x:'102%'},
  };
  const logoVariantbProducido = {
    initial: { y: "95%", opacity: 0, x:'-100%' },
    animate: { y: "95%", opacity: 1,  x:'-100%'},
  };

  return (
    <div>
      <main className="min-h-[80vh] flex flex-col items-center justify-between pt-24 ">
        <div className='flex flex-row pt-[120px] sm:pt-[10px]  pb-[150px] sm:pb-[200px]'>
          <motion.div
            variants={logoVariantB}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
            className={'w-[100%] sm:w-[100%]'}
          >
            <Image
              src="/LogoB.svg"
              alt="Letra B"
              width={284}
              height={224}
              priority

            />
          </motion.div>
          <motion.div
            variants={logoVariantbBien}
            initial="initial"
            animate="animate"
            transition={{
              type: "tween",
              duration: 4, opacity: { duration: 2 }
            }}
            className={'w-[100%] sm:w-[100%]'}
          >
            <Image
              src="/BIEN.svg"
              alt="Letra B"
              width={284}
              height={294}
              priority

            />
          </motion.div>
          <motion.div
            variants={logoVariantbProducido}
            initial="initial"
            animate="animate"
            transition={{
              type: "tween",
              duration: 4, opacity: { duration: 2 }
            }}
            className={'w-[100%] sm:w-[100%]'}
          >
            <Image
              src="/PRODUCIDO.svg"
              alt="Letra P"
              width={284}
              height={294}
              priority

            />
          </motion.div>
          <motion.div
            variants={logoVariantP}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
            className={'w-[100%] sm:w-[100%]'}
          >
            <Image
              src="/LogoP.svg"
              alt="Letra P"
              width={284}
              height={294}
              priority

            />
          </motion.div>
         
        </div>

        <div className='w-full  flex items-center justify-center mt-10 '>

          <motion.div
            className='w-12 h-12 bg-[#ebebeb] rounded-full '
          />
        </div>

      </main>
      <div className='min-h-[70vh] '>
      {/* <About/> */}
      <Image src={'/shadow.svg'} width={100} height={52} className={'w-full relative  bottom-[-80px] sm:bottom-[-10px] opacity-90 blur-3xl'} />
      <Image src={'/shadow.svg'} width={100} height={52} className={'w-full relative rotate-180 bottom-[-80px]  sm:bottom-[-10px] opacity-90 blur-3xl '} />
        </div>
        <div >
      <AboutUs/>
        </div>
        <div className='min-h-[100vh] '>
      <Products/>
        </div>
    </div>
  )
}
