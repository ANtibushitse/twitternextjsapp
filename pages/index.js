import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tweet from './Tweet'

import path from 'path'
import fs from 'fs'

export default function Home({tweets}) {
  return (
    <div className={styles.container}>
    <h1> Hello World! </h1>
    {tweets.map(tweet=> <Tweet key={tweet.id} text= {tweet.text} author={tweet.author} occupation={tweet.occupation} />)}
    
    </div>
  ) 
}

 export async function getServerSideProps(){
   const  filePath = path.join(process.cwd(), 'data.json')
   const tweets  = JSON.parse(fs.readFileSync(filePath))
   return {
    props: {
tweets
    }
   }
 }