import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className={styles.container}>
     <h1> Hello next world  </h1>

    <ul>

      <li>
        <Link href="/portfolio" >Portfolio</Link>
      </li>

    </ul>


    </div>
  )
}
