import * as Styled from './style'

import { useState, useEffect } from 'react'
import axios from 'axios'


export default _ => {

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get("../data/user.json")
            .then(response => setUser(response.data))
            .catch(e => setUser(e.message))
            
    }, [])

    return (
        <Styled.Navigation>
            <Styled.ProfileDisplay>
                <div>
                    <img src={user.photo}/>
                    <div>
                        <p> Seja bem-vindo(a), </p>
                        <h4> { user.name } </h4>

                        <Styled.EditProfile
                            to={`/user/${user.id}/edit`}
                        > 
                            editar perfil 
                        </Styled.EditProfile>
                    </div>
                </div>
            </Styled.ProfileDisplay>

            <nav>
                <Styled.Navigator 
                    to={'/'}
                    className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <svg viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                    <p> Início </p> 
                </Styled.Navigator>
                <Styled.Navigator 
                    to={'/systems/diariodebordo'}
                    className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <svg viewBox="0 0 512 512"><path d="M336 264.13V436c0 24.3-19.05 44-42.95 44H107c-23.95 0-43-19.7-43-44V172a44.26 44.26 0 0144-44h94.12a24.55 24.55 0 0117.49 7.36l109.15 111a25.4 25.4 0 017.24 17.77z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M200 128v108a28.34 28.34 0 0028 28h108" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M176 128V76a44.26 44.26 0 0144-44h94a24.83 24.83 0 0117.61 7.36l109.15 111A25.09 25.09 0 01448 168v172c0 24.3-19.05 44-42.95 44H344" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M312 32v108a28.34 28.34 0 0028 28h108" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                    <p> Diário de Bordo </p>
                </Styled.Navigator>
                <Styled.Navigator 
                    to={'/systems/videos'}
                    className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <svg viewBox="0 0 512 512"><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                    <p> Vídeos Educacionais </p> 
                </Styled.Navigator>
                <Styled.Navigator 
                    to={'/systems/equipamentos'}
                    className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <svg viewBox="0 0 512 512"><path d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M69 153.99l187 110 187-110M256 463.99v-200"/></svg>
                    <p> Equipamentos </p>
                </Styled.Navigator>
                <Styled.Navigator 
                    unavailable
                    to={'/systems/pessoal'}
                    className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <svg viewBox="0 0 512 512"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
                    <p> Controle de Pessoal </p>
                </Styled.Navigator>
            </nav>
        </Styled.Navigation>
    )
}