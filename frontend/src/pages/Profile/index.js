import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })

    }, [ongId])

    async function handleDeleteIncident(id) {

        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            //APÓS APAGAR O REGISTRO DO BANCO DE DADOS, ROMOVO ELE DA INTERFACE, ASSIM OS REGISTROS SÃO DELETADOS EM TEMPO REAL
            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (err) {
            alert("Erro ao deletar incidente!");
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/inicidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">

                    <FiPower size={18} color="#E02041"></FiPower>

                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO: </strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        {/*     SE COLOCAR "onClick={handleDeleteIncident(incident.id)}" ESTAREI PASSANDO O RETORNO DA FUNÇÃO, E ELA SERÁ EXECUTADA AO CARREGAR A TELA
* DELETANDO TODOS OS REGISTROS, POR ISSO USO UMA ARROW FUNCTION "onClick={() => handleDeleteIncident(incident.id)}" */}

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}