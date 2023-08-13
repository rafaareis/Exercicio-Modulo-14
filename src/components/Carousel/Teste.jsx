import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import styles from './Carousel.module.css'



const Teste = () => {
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

    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 6
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    return (
        <>
            <Container>
                <Carousel className="col-md-12">
                    {albunsArr.map((albuns) => {
                        return (
                            <Carousel.Item key={albuns.id} >
                                <Card className={`col-md-3`}>
                                    <Card.Img 
                                        src={albuns.capaDoDisco}
                                        className={`${styles.capaDoDisco}`}
                                    />
                                </Card>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Container>

        </>
    )
}

export default Teste