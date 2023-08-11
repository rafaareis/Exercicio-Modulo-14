
import { useEffect, useState } from "react"
import styles from "./Carousel.module.css"

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
            <div className="container text-center my-3">
                <div className="row mx-auto my-auto justify-content-center">
                    <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            {albunsArr.map((albuns) => {
                                if(albuns.id === 1) {
                                    return (
                                        <div key={albuns.id} className="carousel-item active">
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img className={`img-fluid ${styles.capaDoDisco}` } src={albuns.capaDoDisco} alt={`Capa de ${albuns.artista} - ${albuns.nomeDoDisco}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={albuns.id} className="carousel-item">
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img className={`img-fluid ${styles.capaDoDisco}`} src={albuns.capaDoDisco} alt={`Capa de ${albuns.artista} - ${albuns.nomeDoDisco}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>
                            <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel