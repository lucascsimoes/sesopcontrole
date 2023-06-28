import * as Styled from './style'
import notFound from '../../images/pageNotFound.png'

export default _ => {

    return (
        <Styled.PageNotFound>
            <img src={notFound}/>
            <h2> Página Não Encontrada </h2>
            <p> Essa página está indisponível, ou ela não existe ou está em manutenção. Tente novamente mais tarde. </p>
        </Styled.PageNotFound>
    )
}