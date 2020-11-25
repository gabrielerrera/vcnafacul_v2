import React from 'react';
import './styled.css';


import { Hostinger } from './styled';
import { DivPrincipal, Body } from '../../globalStyle';

const Apoiadores = () => (
    <div style={{
        marginBottom: "20px",
        marginTop: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
        }}>
        <Body bold >Apoiadores</Body>
        <div style={{marginTop: "30px", display: "flex", justifyContent: "center"}}>
        <a href="https://www.hostinger.com.br/">
            <div className='hostinger'></div>
        </a>
        </div>
    </div>
)

export default Apoiadores;