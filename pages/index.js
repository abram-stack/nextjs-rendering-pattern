import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { co2 } from '@tgwf/co2'
import Header from '../components/Header'
import Card from '../components/Card'

export default function Home() {

  const swd = new co2({ model: 'swd' })
  
  const emissions = swd.perByte(1600000, true)
  console.log(emissions)
  
  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(() => {
    async function getPokemon() {
      const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")
      setPokemon(await res.json())
    }

    getPokemon()
  },[])

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Entwurfsmuster</title>
      </Head>

      <Header/>
      
      <div className={styles.content}>
        <div className={styles.grid}>
          {pokemon.map(pokemon => (
            <Card pokemon={pokemon} key={pokemon.id} />
            
          ))}
          </div>
      </div>
    </div>
  )
}
