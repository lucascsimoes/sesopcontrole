import * as Styled from './style'

export default ({ title, subtitle, color }) => {
    return (
        <Styled.Container>
            <h1> { title } </h1>
            <h2> { subtitle } </h2>
        </Styled.Container>
    )
}