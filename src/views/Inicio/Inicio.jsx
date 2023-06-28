import * as Styled from './style'
import { ScreenDisplay, CardDisplay } from '../../styles/globalStyles'

import Header from '../../components/Header/Header'



export default _ => {
    return (
        <ScreenDisplay>
            <Header
                title="SESOPCONTROLE"
                subtitle="Bem-vindo(a) ao SESOPCONTROLE, sistema que abriga os sistemas utilizados pelo SESOP, da ESAJ."
            />

            <CardDisplay gap={20} margin={80} startOn="center">
                <Styled.Card>
                    <h1> Dashboard </h1>
                </Styled.Card>
            </CardDisplay>
        </ScreenDisplay>
    )
}