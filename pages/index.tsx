import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Asimov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container-fluid text-center'>
        <div>
          <img src='/asimov-lg.png' />
        </div>

        <hr />

        <h2>Piazza Panic</h2>

        <p>It seems to be a quiet day at the Piazza: there aren't that many students and staff around
          this time of the year, so most of the kitchen staff are away on leave - you only have three
          cooks. Suddenly, a crowd bursts into the restaurant: it's an open day, and they all want to eat
          at once! Make the most of your kitchen and your staff, and face up to the challenge of
          serving an impatient and demanding crowd!</p>

        <hr />

        <h3>Downloads</h3>

        <div className='row'>

          <div className='col-md-4'>
            <h4>PLAY</h4>
            <button className='btn btn-primary'>PiazzaPanic.jar</button>
          </div>

          <div className='col-md-4'>
            <h4>Source Code</h4>
            <button className='btn btn-primary'>Github</button>
          </div>

          <div className='col-md-4'>
            <h4>Documents</h4>
            <ul>
              <li>Req1.pdf</li>
              <li>Arch1.pdf</li>
              <li>Plan1.pdf</li>
              <li>Risk1.pdf</li>
              <li>Impl1.pdf</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}
