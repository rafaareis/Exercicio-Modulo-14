import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row" 
import styles from './LogoNav.module.css'

const LogoNav = () => {

    return (
        <>
            <header id="cabecalho" className="navbar navbar-expand-lg sticky-top">
                <Container>
                    <Row>
                        <div className={styles.logotipo}>
                            <h1>Mus<span className={styles.logo_span}>!</span>c Store</h1>
                            <h5 className="navbar-brand">A loja do fã de música</h5>
                        </div>
                        <button 
                            className="navbar-toggler"
                            data-bs-toggle="collapse" 
                            data-bs-target="#menu-navegacao"
                            aria-controls="menu-navegacao" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                    </Row>
                    <Row>
                        <nav className="navbar-collapse collapse justify-content-end" id="menu-navegacao">
                            <ul className="nav nav-pills d-block d-md-flex">
                                <li className="nav-item fw-bold" id={styles.navLi}>
                                    <a className="nav-link"  href="#sobre">
                                        Sobre a Loja                        
                                    </a>
                                </li>
                                <li className="nav-item fw-bold" id={styles.navLi}>
                                    <a className="nav-link"  href="#produtos">
                                        Produtos
                                    </a>
                                </li>
                                <li className="nav-item fw-bold" id={styles.navLi}>
                                    <a className="nav-link"  href="#contatos">
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default LogoNav