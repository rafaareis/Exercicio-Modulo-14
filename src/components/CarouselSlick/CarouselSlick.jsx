import { useEffect, useState } from "react"
import Slider from "react-slick"
import styles from "./CarouselSlick.module.css"



const CarouselSlick = () => {
    const dbProductsURL = "https://json-db-modulo-14.vercel.app/products"
    const [albunsArr, setAlbunsArr] = useState([])

    useEffect(() => {
        fetch(dbProductsURL)
        .then(res => res.json())
        .then(reJson => {
            setAlbunsArr(reJson)
        })
    }, [])


const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
    };
            



    return (
        <>
            <section id="produtos_slick">
                <Slider {...settings} className={`container`} id="carousel-imagens">
                    {albunsArr.map((albuns) => {
                        return (
                            <div key={albuns.id}>
                                <img className={styles.capaDoDisco}src={albuns.capaDoDisco} alt={`Foto do disco ${albuns.artista} - ${albuns.nomeDoDisco}`} />
                            </div>                    
                        )
                    })}
                </Slider>
            </section>

        </>
    )
}

export default CarouselSlick