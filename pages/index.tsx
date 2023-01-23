import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '@/styles/Home.module.css'

import PiazzaPanic from '@/components/PiazzaPanic'

import banner from '@/public/img/banner.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Asimov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'text-center'}>
        <div className={styles.banner}>
          <Image className='py-5' src={banner} alt='Asimov' />
        </div>

        <hr className='gradient mb-3' />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2'></div>

            <div className='col-md-8'>
              <PiazzaPanic></PiazzaPanic>
            </div>

            <div className='col-md-2 p-0'></div>
          </div>
        </div>        
      </div>
    </>
  )
}
