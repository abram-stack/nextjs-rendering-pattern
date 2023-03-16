import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
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
      <h2>Pokemon lists</h2>
      <div className={styles.grid}>
        {pokemon.map(pokemon => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <Image
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                alt={pokemon.name}
                width={200}
                height={200}
              />
                {/* <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                /> */}
                <h3>{pokemon.name}</h3>
            </Link>
          </div>
        ))}
        </div>
    </div>
  )
}
