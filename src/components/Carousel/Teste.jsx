import { useEffect, useState } from "react"
import Slider from "react-slick"
import styles from "./Carousel.module.css"



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

const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
    };
            



    return (
        <>
            <Slider {...settings} className={`container`} id="carousel-imagens">
                {albunsArr.map((albuns) => {
                    return (
                        <div key={albuns.id}>
                            <img className={styles.capaDoDisco}src={albuns.capaDoDisco} alt={`Foto do disco ${albuns.artista} - ${albuns.nomeDoDisco}`} />
                        </div>                    
                    )
                })}
            </Slider>
        </>
    )
}

export default Teste