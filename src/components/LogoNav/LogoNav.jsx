import styles from './LogoNav.module.css'

const LogoNav = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={styles.logotipo}>
                        <h1>Mus<span className={styles.logo_span}>!</span>c Store</h1>
                        <h5 className="navbar-brand">A loja do fã de música</h5>
                    </div>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse" 
                        data-bs-target="#menu-navegacao"
                    >
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                </div>
                <div className="row">
                    <nav className="collapse navbar-collapse  justify-content-end" id="menu-navegacao">
                        <ul className="nav nav-pills d-block d-md-flex">
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="#sobre">
                                    Sobre a Loja                        
                                </a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="#produtos_slick">
                                    Slick
                                </a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="#produtos">
                                    Produtos
                                </a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="#contatos">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>     
                </div>               
            </div>
        </>
    )
}

export default LogoNav