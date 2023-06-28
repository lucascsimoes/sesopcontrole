import { useEffect, useState } from "react"
import * as Styled from './style'
import { ScreenDisplay } from "../../styles/globalStyles"

import Filter from "../../components/Filter/Filter"
import Order from "../../components/Order/Order"
import VideoCard from "../../components/VideoCard/VideoCard"

export default _ => {

    const [cols, setCols] = useState(6)
    const [videos, setVideos] = useState([])
    const [filters, setFilters] = useState({
        time: [new Date().getFullYear() - 1, new Date().getFullYear()],
        order: 'Mais recentes',
        state: 'Todos',
        category: [],
        speaker: 'Todos'
    })

    useEffect(() => {
        fetch('/data/videos.json')
            .then(r => r.json())
            .then(r => setVideos(r))
    }, [])

    useEffect(() => {
        const windowWidth = document.body.clientWidth

        if (windowWidth <= 1680 && cols === 6) {
            setCols(5)
        }

        if (windowWidth <= 1460 && cols !== 4) {
            setCols(4)
        }
    }, [])

    window.addEventListener('resize', () => {
        const windowWidth = document.body.clientWidth

        if (cols !== 4) {
            if (windowWidth <= 1680) {
                setCols(5)
            }
    
            if (windowWidth <= 1460) {
                setCols(4)
            }
        }
    })

    useEffect(() => {
        const byCategory = filterCategory()
        const bySpeaker = filterSpeaker()
        const byTime = filterTime()
        const byState = filterState()

        console.log(byState)
    }, [filters, videos])

    function filterCategory() {
        if (filters.category.length === 0) {
            return videos
        } else {
            const value = videos.filter(item => filters.category.includes(item.category))
            return value
        }
    }

    function filterSpeaker() {
        if (filters.speaker === 'Todos') {
            return videos
        } else {
            const value = videos.filter(item => filters.speaker === item.speaker)
            return value
        }
    }

    function filterTime() {
        const firstYear = Number(filters.time[0])
        const lastYear = Number(filters.time[1])
        const value = videos.filter(item => Number(item.date.substring(item.date.length - 4)) >= firstYear && Number(item.date.substring(item.date.length - 4)) <= lastYear)
        return value
    }

    function filterState() {
        if (filters.state === 'Todos') {
            return videos
        } else if (filters.state === 'Apenas ativos') {
            const value = videos.filter(item => item.isActive === true)
            return value
        } else {
            const value = videos.filter(item => item.isActive === false)
            return value
        }
    }

    return (
        <ScreenDisplay>
            <Styled.Row>
                <Styled.Results> Mostrando <b> { videos.length } </b> resultados </Styled.Results>

                <Order
                    defaultValue={cols}
                    changeCols={setCols}
                />
                <Filter change={setFilters}/>
            </Styled.Row>

            <Styled.Content grid={cols}>
            {videos.map(item => (
                <VideoCard
                    key={item.id}
                    data={item}
                />
            ))}
            </Styled.Content>
        </ScreenDisplay>
    )
}