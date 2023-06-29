import React, { useRef, useState, useEffect } from 'react'
import * as Styled from './style'

import { Slider } from '@mui/material';

export default ({ change }) => {
    const [openModal, setOpenModal] = useState(false)

    const [filterYear, setFilterYear] = React.useState([new Date().getFullYear() - 1, new Date().getFullYear()]);

    const [allCategories, setAllCategories] = useState([])
    const [allSpeakers, setAllSpeakers] = useState([])

    const [filterOrder, setFilterOrder] = useState('Mais recentes')
    const [filterState, setFilterState] = useState('Todos')
    const [filterSpeaker, setFilterSpeaker] = useState('Todos')

    const handleYear = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
            setFilterYear([Math.min(newValue[0], filterYear[1] - 1), filterYear[1]]);
        } else {
            setFilterYear([filterYear[0], Math.max(newValue[1], filterYear[0] + 1)]);
        }
    };

    // STATE E FUNÇÃO PARA MUDAR AS CATEGORIAS FILTRADAS
    const [filterCategories, setFilterCategories] = useState([])
    const handleCategories = (value) => {
        if (filterCategories.includes(value)) {
            setFilterCategories(oldValues => oldValues.filter(item => item !== value))
        } else {
            setFilterCategories(oldValues => [...oldValues, value])
        }
    }

    // ABRIR E FECHAR ACCORDION
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // FETCH COM FUNÇÃO PARA FILTRAR TODAS AS CATEGORIAS E PALESTRANTES EXISTENTES
    useEffect(() => {
        fetch('/data/videos.json')
            .then(r => r.json())
            .then(r => {
                const category = r.map(item => {
                    return item.category
                })

                const speaker = r.map(item => {
                    return item.speaker
                })

                setAllCategories(category)
                setAllSpeakers(speaker)
            })
    }, [])

    // ABRIR E FECHAR MODAL
    const modal = useRef(null)
    const closeModal = (e) => {
        if (e.target === modal.current) {
            setOpenModal(false);
            
        }
    }

    // IDENTIFICAR CLIQUE FORA OU DENTRO DO MODAL
    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
    
        return () => {
          document.removeEventListener('mousedown', closeModal);
        };
    }, []);

    // CONTADOR DE QUANTOS ITENS TEM EM CADA OPÇÃO DO ACCORDION
    function countOccurrences(array, value) {
        const count = array.reduce((accumulator, currentItem) => {
            if (value !== 'Todos') {
                if (currentItem === value) {
                  return accumulator + 1;
                } else {
                  return accumulator;
                }
            }
        }, 0);

        return count
    }

    // ALTERAR VALORES DO FILTRO E FECHAR O MODAL
    function submitFilterValues() {
        change({
            time: filterYear,
            order: filterOrder,
            state: filterState,
            category: filterCategories,
            speaker: filterSpeaker
        })

        setOpenModal(false);
    }

    return (
        <>
        <Styled.FilterButton onClick={() => setOpenModal(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            <p> FILTROS </p>
        </Styled.FilterButton>

        <Styled.Modal ref={modal} open={openModal}>
            <main>
                <h2> Filtros </h2>

                <Styled.SliderDisplay>
                    <header>
                        <h4> Período </h4>
                        <h5> { `${filterYear[0]} até ${filterYear[1]}` } </h5>
                    </header>

                    <div>
                        <Styled.Slider
                            min={new Date().getFullYear() - 4}
                            max={new Date().getFullYear()}
                            marks
                            valueLabelDisplay="auto"
                            value={filterYear}
                            onChange={handleYear}
                            disableSwap
                        />
                    </div>
                </Styled.SliderDisplay>

                <Styled.OptionDisplay open={activeIndex === 0}>
                    <header onClick={() => toggleSection(0)}>
                        <div>
                            <svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
                            <h4> Ordenar por </h4>
                        </div>
                        
                        <h5> { filterOrder } </h5>
                    </header>
                    <div>
                        {['Mais recentes', 'Mais antigos'].map((item, key) => (
                            <Styled.Option
                                key={key}
                                onClick={() => setFilterOrder(item)}
                                selected={filterOrder === item}
                            >
                                <div></div>
                                <p> { item } </p>
                            </Styled.Option>
                        ))}
                    </div>
                </Styled.OptionDisplay>
                <Styled.OptionDisplay open={activeIndex === 1}>
                    <header onClick={() => toggleSection(1)}>
                        <div>
                            <svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
                            <h4> Estado dos vídeos </h4>
                        </div>
                        
                        <h5> { filterState } </h5>
                    </header>
                    <div>
                        {['Todos', 'Apenas ativos', 'Apenas inativos'].map((item, key) => (
                            <Styled.Option
                                key={key}
                                onClick={() => setFilterState(item)}
                                selected={filterState === item}
                            >
                                <div></div>
                                <p> { item } </p>
                            </Styled.Option>
                        ))}
                    </div>
                </Styled.OptionDisplay>
                <Styled.OptionDisplay open={activeIndex === 2}>
                    <header onClick={() => toggleSection(2)}>
                        <div>
                            <svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
                            <h4> Categorias </h4>
                        </div>
                        
                        <h5> 
                            { 
                            filterCategories.length === 0 ? 'Todos' : 
                            filterCategories.length > 1 ? `${filterCategories[0]} mais ${filterCategories.length - 1}` :
                            filterCategories[0]
                            } 
                        </h5>
                    </header>
                    <div>
                        {Array.from(new Set(allCategories)).map((item, key) => (
                            <Styled.Option
                                key={key}
                                quantity={countOccurrences(allCategories, item)}
                                onClick={() => handleCategories(item)}
                                selected={filterCategories.includes(item)}
                            >
                                <div></div>
                                <p> { item } </p>
                            </Styled.Option>
                        ))}
                    </div>
                </Styled.OptionDisplay>
                <Styled.OptionDisplay open={activeIndex === 3}>
                    <header onClick={() => toggleSection(3)}>
                        <div>
                            <svg viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
                            <h4> Palestrantes </h4>
                        </div>
                        
                        <h5> { filterSpeaker } </h5>
                    </header>
                    <div>
                        {['Todos', ...Array.from(new Set(allSpeakers))].map((item, key) => (
                            <Styled.Option
                                key={key}
                                quantity={countOccurrences(allSpeakers, item)}
                                onClick={() => setFilterSpeaker(item)}
                                selected={filterSpeaker.includes(item)}
                            >
                                <div></div>
                                <p> { item } </p>
                            </Styled.Option>
                        ))}
                    </div>
                </Styled.OptionDisplay>

                <Styled.FilterCommands onClick={submitFilterValues}>
                    <button> Aplicar filtro </button>
                </Styled.FilterCommands>
            </main>
        </Styled.Modal>
        </>
    )
}