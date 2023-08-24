import styles from './Contato.module.css'

const Contato = () => {

    return (
        <>
            <section id="contatos">
                <div className="container">
                    <div className="row">
                        <div id={styles.our_products}>
                            <h2 className="section-title text-center mb-5">
                                Contate-nos:
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 mb-5">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label fw-bold">Nome Completo:</label>
                                    <input type="text" id="nome" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">E-mail:</label>
                                    <input type="email" id="email" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefone" className="form-label fw-bold">Celular:</label>
                                    <input type="tel" id="telefone" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpf" className="form-label fw-bold">CPF:</label>
                                    <input type="tel" id="cpf" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cep" className="form-label fw-bold">CEP:</label>
                                    <input type="tel" id="cep" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="endereco" className="form-label fw-bold">Endereço:</label>
                                    <input type="tel" id="endereco" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="enderecoNum" className="form-label fw-bold">Número do Logradouro:</label>
                                    <input type="tel" id="enderecoNum" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="item" className="form-label fw-bold">Item de interesse:</label>
                                    <input type="text" id="item" className="form-control" />
                                </div>
                                <button type="submit" className={`btn fw-bold ${styles.btn_contacts} `}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Contato