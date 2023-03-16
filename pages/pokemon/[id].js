import { useRouter } from "next/router"
import React from 'react'
import styles from '../../styles/Details.module.css'
import Head  from 'next/head';
import Link from "next/link";


export default function Details() {
  //get id from parameter
  const { query: { id } } = useRouter();

  const [pokemon, setPokemon] = React.useState({ })

  React.useEffect(() => {
    //run useEffect everytime id is changes
    async function getPokemon() {
      const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`)
      setPokemon(await res.json())
    }
    if (id) {
      getPokemon()
    }
  }, [id])
  

  if (!pokemon)
    return null; 
  
  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div className={styles.layout}>
        <Link href='/'>
          Back to home
        </Link>
        <div>
          <img
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={ pokemon.name}
          />
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type}</div>
          <table>
              <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats && pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  )
  
          // <table>
          //<thead className={styles.header}>
          //     <tr>
          //       <th>Name</th>
          //       <th>Value</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {pokemon.stats.map(({ name, value }) => (
          //       <tr key={name}>
          //         <td className={styles.attribute}>{name}</td>
          //         <td>{value}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
        
}