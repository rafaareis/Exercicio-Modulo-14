import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import styles from './Carousel.module.css'


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
            <div className="container">
                {albunsArr.map((albuns) => {
                    return (
                        <Card key={albuns.id}>
                            <Card.Img 
                                src={albuns.capaDoDisco}
                                className={`${styles.capaDoDisco}`}
                            />
                        </Card>
                    )
                })}
            </div>

        </>
    )
}

export default Carousel