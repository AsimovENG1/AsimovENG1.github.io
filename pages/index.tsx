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
      </Head>

      <PiazzaPanic></PiazzaPanic>
    </>
  )
}
