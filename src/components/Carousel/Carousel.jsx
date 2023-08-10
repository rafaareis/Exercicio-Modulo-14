import { useEffect, useState } from "react"
import styles from './Carousel.module.css'

import Records from '../../../db/db.json'

const Carousel = () => {
    const dbProductsURL = "https://json-db-modulo-14.vercel.app/products"
    const [albunsArr, setAlbunsArr] = useState([])

    useEffect(() => {
        fetch(dbProductsURL)
        .then(res => res.json())
        .then(reJson => {
            console.log(reJson)
            setAlbunsArr(reJson)
        })
    }, [])

    return (
        <>
            {Records.map((albuns) => {
                return (
                    <div key={albuns.id}>
                        <img 
                            className={styles.capaDoDisco} 
                            src={albuns.capaDoDisco} 
                            alt={`Álbum de ${albuns.artista} - ${albuns.nomeDoDisco}`} 
                        />
                    </div>
                )
            })}
        </>
    )
}

export default Carousel