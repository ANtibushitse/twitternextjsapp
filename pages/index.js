import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tweet from './Tweet'

export default function Home() {
  return (
    <div className={styles.container}>
    <h1> Hello World! </h1>
    <Tweet  text= 'pass that prop' author="Arsene"  occupation ="Musician/Producert" />
    </div>
  )
}
