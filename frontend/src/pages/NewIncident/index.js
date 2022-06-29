import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import api from "../../services/api"

import "./styles.css";
import logoImg from "../../assets/logo.svg"

export default function Register() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const navigate = useNavigate()

    const ongId = localStorage.getItem("ongId")
    

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post("incidents", data, {
                headers: {
                    Authorization: ongId,
                }
            })

            navigate("/profile");
        } catch (error) {
            alert("Erro ao cadastrar caso, tente novamente.")
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}