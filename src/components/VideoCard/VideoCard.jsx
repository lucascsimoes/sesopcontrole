import * as Styled from './style'

export default ({ data: { category, date, initial, isActive, speaker, title } }) => {

    // const titleWithInitial = `${initial} - ${title}`
    const icon = require(`../../images/thumbnails/${category}.png`)

    return (
        <Styled.Container type={category}>
            <Styled.Icon>
                <img src={icon}/>
            </Styled.Icon>
        </Styled.Container>
    )
}