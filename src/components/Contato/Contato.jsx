import { useState } from 'react'
import styles from './Contato.module.css'

const Contato = () => {
    
    

    const [cepAddress, setCepAddress] = useState({});

    const checkCEP = (e) => {
        const cep = e.target.value;
        console.log(cep)
        const cepURL = `https://viacep.com.br/ws/${cep}/json/`
        fetch(cepURL)
        .then(res => res.json())
        .then(reJson => {
            console.log(reJson)
            setCepAddress(reJson)
            console.log(reJson.logradouro);

        })

    }

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
                        <div className="col-md-5 mb-5">
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
                                    <input type="tel" id="telefone" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpf" className="form-label fw-bold">CPF:</label>
                                    <input type="tel" id="cpf" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cep" className="form-label fw-bold">CEP:</label>
                                    <input type="tel" id="cep" className="form-control" required onBlur={checkCEP} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="endereco" className="form-label fw-bold">Endereço:</label>
                                    <input type="text" id="endereco" className="form-control" required value={cepAddress.logradouro} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="enderecoNum" className="form-label fw-bold">Número do Logradouro:</label>
                                    <input type="tel" id="enderecoNum" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bairro" className="form-label fw-bold">Bairro:</label>
                                    <input type="text" id="bairro" className="form-control" required value={cepAddress.bairro} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="complemento" className="form-label fw-bold">Complemento:</label>
                                    <input type="text" id="complemento" className="form-control" required value={cepAddress.complemento} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cidade" className="form-label fw-bold">Cidade:</label>
                                    <input type="text" id="cidade" className="form-control" required value={cepAddress.localidade} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="estado" className="form-label fw-bold">Estado:</label>
                                    <input type="text" id="estado" className="form-control" required value={cepAddress.uf} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="item" className="form-label fw-bold">Item de interesse:</label>
                                    <input type="text" id="item" className="form-control" required />
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