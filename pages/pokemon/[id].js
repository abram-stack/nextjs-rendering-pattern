import { useRouter } from "next/router"
import React from 'react'
import styles from '../../styles/Details.module.css'
import stylesHome from '../../styles/Home.module.css'
import Head  from 'next/head';
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
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

      <Header />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
              <Image
                className={styles.picture}
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                alt={pokemon.name && pokemon.name}
                width={200}
                height={200}
              />
          </div>
          <span className={styles.line}></span>
          <div className={styles.cardContent}>
              <div className={styles.typeWrapper}>
                <p className={styles.type}>{pokemon.type}</p>
              </div>
              <div className={styles.nameWrapper}>
                <h1 className={styles.name}>{pokemon.name}</h1>
              </div>
              <div className={styles.statsWrapper}>
                {/* <h2 className={styles.statsTitle}>stats</h2> */}
                <table className={styles.statsContent}>
                  <tbody>
                  {pokemon.stats && pokemon.stats.map(({ name, value }) => (
                    <tr key={name}>
                      <td className={styles.attribute}>{name}</td>
                      <td className={styles.value}>{value}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
        <Link href='/' className={styles.back}>
          <button className={stylesHome.offset}>Back</button>
        </Link>
      </div>
    </div>
  )
}
{/*   
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
        
</div>} */}