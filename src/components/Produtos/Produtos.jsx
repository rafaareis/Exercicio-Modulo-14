import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Slider from "react-slick"

import styles from "./Produtos.module.css"

const Produtos = () => {

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

    const settings1 = {
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
    };

    return (
        <>
            <section id="produtos" className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div id={styles.our_products}>
                            <h2 className="section-title text-center mb-5">
                                Nossos Produtos
                            </h2>
                        </div>
                    </Row>
                    <Row>
                        <aside className="col-md-2">
                            <nav className="nav nav-pills flex-column nav-produtos">
                                <button type="button" data-bs-toggle="tab" data-bs-target="#lancamentos" className="fw-bold text-start nav-link text-colored active">Lançamentos</button>
                                <button type="button" data-bs-toggle="tab" data-bs-target="#promocoes" className="fw-bold text-start nav-link text-colored">Promoções</button>                                
                                <button type="button" data-bs-toggle="tab" data-bs-target="#outros" className="fw-bold text-start nav-link text-colored">Outros</button>
                                <button type="button" data-bs-toggle="tab" data-bs-target="#camiseta" className="fw-bold text-start nav-link text-colored">Camiseta</button>
                            </nav>
                        </aside>
                        <div className="col-md-10">
                            <div className="tab-content">
                                <div className="tab-pane active" id="lancamentos">
                                    <Slider {...settings} id={`lanc-carousel`} className={`container`}>
                                        {albunsArr.map((albuns) => {
                                            if(albuns.lancamento) {
                                                return (
                                                    <div key={albuns.id} className={styles.div_produto} >
                                                        <img className={styles.capaDoDisco2} src={albuns.capaDoDisco} alt={`Foto do disco ${albuns.artista} - ${albuns.nomeDoDisco}`} />
                                                        <h3>{albuns.nomeDoDisco}({albuns.anoLancamento})</h3>
                                                        <h4>{albuns.artista}</h4>
                                                        <div className="price">
                                                            <strong>{albuns.price}</strong>
                                                        </div>
                                                        <button type="button">Tenho interesse</button>
                                                    </div>                    
                                                )
                                            }
                                        })}
                                    </Slider>
                                </div>
                                <div className="tab-pane" id="promocoes">
                                    <Slider {...settings} id={`promo-carousel`} className={`container`}>
                                        {albunsArr.map((albuns) => {
                                            if(albuns.promocao) {
                                                return (
                                                    <div key={albuns.id} className={styles.div_produto} >
                                                        <img className={styles.capaDoDisco2} src={albuns.capaDoDisco} alt={`Foto do disco ${albuns.artista} - ${albuns.nomeDoDisco}`} />
                                                        <h3>{albuns.nomeDoDisco}({albuns.anoLancamento})</h3>
                                                        <h4>{albuns.artista}</h4>
                                                        <div className="price">
                                                            <div className="promoDiv">
                                                                <del>{albuns.originalPrice}</del>
                                                                <p>{albuns.percent}%OFF</p>
                                                            </div>
                                                            <strong>{albuns.price}</strong>
                                                        </div>
                                                        <button type="button">Tenho interesse</button>
                                                    </div>                    
                                                )
                                            }
                                        })}
                                    </Slider>
                                </div>
                                <div className="tab-pane" id="outros">
                                    <Slider {...settings1} id={`promo-outros`} className={`container`}>
                                        {albunsArr.map((albuns) => {
                                            if(!albuns.promocao && !albuns.lancamento && albuns.categoria !== "camiseta" ) {
                                                return (
                                                    <div key={albuns.id} className={styles.div_produto} >
                                                        <img className={styles.capaDoDisco2} src={albuns.capaDoDisco} alt={`Foto do disco ${albuns.artista} - ${albuns.nomeDoDisco}`} />
                                                        <h3>{albuns.nomeDoDisco}({albuns.anoLancamento})</h3>
                                                        <h4>{albuns.artista}</h4>
                                                        <div className="price">
                                                            <strong>{albuns.price}</strong>
                                                        </div>
                                                        <button type="button">Tenho interesse</button>
                                                    </div>                    
                                                )
                                            }
                                        })}
                                    </Slider>
                                </div>
                                <div className="tab-pane" id="camiseta">
                                    <Slider {...settings} id={`promo-camiseta`} className={`container`}>
                                        {albunsArr.map((albuns) => {
                                            if(albuns.categoria === "camiseta" ) {
                                                return (
                                                    <div key={albuns.id} className={styles.div_produto} >
                                                        <img className={styles.capaDoDisco} src={albuns.camisetaImg} alt={`Foto do disco ${albuns.artista} - ${albuns.nomeDaCamiseta}`} />
                                                        <h3>{albuns.nomeDaCamiseta}</h3>
                                                        <h4>{albuns.artista}</h4>
                                                        <div className="price">
                                                            <strong>{albuns.price}</strong>
                                                        </div>
                                                        <button type="button">Tenho interesse</button>
                                                    </div>                    
                                                )
                                            }
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>  
        </>
    )
}

export default Produtos