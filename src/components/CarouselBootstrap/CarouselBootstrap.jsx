import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

import styles from "./CarouselBootstrap.module.css"


const CarouselBootstrap = () => {

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
            <div data-bs-spy="scroll" data-bs-target="cabecalho" data-bs-smooth-scroll="true">
                <section id="sobre-o-retaurante">
                    <Container>
                        <Carousel>
                            {albunsArr.map((albuns) => {
                                return (
                                <Carousel.Item key={albuns.id}>
                                    <img className={styles.profile} src={albuns.profile} alt={`Foto de ${albuns.artista}`} />
                                </Carousel.Item>
                                )
                            })}
                        </Carousel>
                        <div id={styles.sobre}>
                            <h2>Sobre a Mus!c Store</h2>
                            <div className="paragraph">
                                <p>A <strong>Mus!c Store</strong> é uma loja virtual que oferece uma grande variedade de CDs e outros produtos relacionados à música.</p> 
                                <p>A loja oferece preços competitivos e frete grátis <strong>para todo o Brasil</strong> em compras acima de <strong>R$ 99,00</strong>.</p>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default CarouselBootstrap