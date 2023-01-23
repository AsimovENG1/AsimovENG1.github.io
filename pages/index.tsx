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

      <div className='d-flex flex-column mh-vh'>
        <div className='flex-shrink-0 text-center'>
          <header className='bg-asimov'>
            <Image className='py-5' src={banner} alt='Asimov' />
          </header>

          <hr className='gradient mb-3' />

          <main className='container-fluid'>
            <div className='row'>
              <div className='col-md-2'></div>

              <div className='col-md-8'>
                <PiazzaPanic></PiazzaPanic>
              </div>

              <div className='col-md-2 p-0'></div>
            </div>
          </main>
        </div>


        <footer className='footer mt-auto text-center'>
          <hr className='gradient' />

          <div className='bg-asimov text-light py-3'>
            <span>Copyright &copy; Asimov {new Date().getFullYear()}</span>
          </div>

        </footer>
      </div>
    </>
  )
}
