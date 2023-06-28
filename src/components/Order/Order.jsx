import { useState } from 'react'
import * as Styled from './style'

export default ({ defaultValue, changeCols }) => {

    const [windowWidth, setWindowWidth] = useState(document.body.clientWidth)
    window.onresize = () => setWindowWidth(document.body.clientWidth)

    return (
        <Styled.Container>
            {!(windowWidth <= 1240) && 
            <Styled.Columns 
                cols={4} 
                onClick={() => changeCols(4)}
                selected={defaultValue === 4}
            >
                {Array(4).fill("").map((_, key) => <div key={key}></div> )}
            </Styled.Columns>
            }

            {!(windowWidth <= 1460) && 
            <Styled.Columns 
                cols={5} 
                onClick={() => changeCols(5)}
                selected={defaultValue === 5}
            >
                {Array(5).fill("").map((_, key) => <div key={key}></div> )}
            </Styled.Columns>
            }
            
            {!(windowWidth <= 1680) &&
            <Styled.Columns 
                cols={6} 
                onClick={() => changeCols(6)}
                selected={defaultValue === 6}
            >
                {Array(6).fill("").map((_, key) => <div key={key}></div> )}
            </Styled.Columns>
            }
        </Styled.Container>
    )
}