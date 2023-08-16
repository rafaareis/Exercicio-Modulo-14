import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import styles from './LogoNav.module.css'

const LogoNav = () => {

    return (
        <>
            <header id="cabecalho" className="navbar navbar-expand-lg sticky-top">
                <Container>
                    <div className={styles.logotipo}>
                        <h1>Mus<span className={styles.logo_span}>!</span>c Store</h1>
                        <h5 className="navbar-brand">A loja do fã de música</h5>
                    </div>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu-navegacao">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <Nav className="navbar-collapse collapse justify-content-end" id="menu-navegacao">
                        <ul className="nav nav-pills d-block d-md-flex">
                            <li className={`nav-item fw-bold`} id={styles.navLi}>
                                <a className="nav-link active" data-bs-target="#sobre" href="#sobre">
                                    Sobre a Loja                        
                                </a>
                            </li>
                            <li className={`nav-item fw-bold`} id={styles.navLi}>
                                <a className="nav-link" data-bs-target="#produtos" href="#produtos">
                                    Produtos
                                </a>
                            </li>
                            <li className={`nav-item fw-bold`} id={styles.navLi}>
                                <a className="nav-link" data-bs-target="#contatos" href="#contatos">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </Nav>
                    

                </Container>
            </header>
        </>
    )
}

export default LogoNav