import React, { FunctionComponent, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import h1 from "./images/h1.jpg";
import h2 from "./images/h2.jpg";
import Typography from '@material-ui/core/Typography';
import { Button } from 'antd'


const History: FunctionComponent = ({ }) => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <br />
            <h1 style={{ textAlign: "center", fontWeight: "bold" }} id="historia">
                Nossa História
            </h1>
            <br />
            <Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <img style={{ width: "100%" }} src={h1} alt="h1" />
                    <br />
                    <br />
                    <Typography variant="subtitle1" gutterBottom>
                    &nbsp;&nbsp;&nbsp;&nbsp; Natural de Balsamo – Sp., mas radicado no Paraná desde 1969, mas preciso na cidade de Cornélio Procópio – Pr., Carlos Roberto Lisboa, filho dos pecuaristas Waldo Campos Lisboa e Helena Alves de Paula Lisboa, criado em fazenda, siando para estudar e  formou-se em engenharia química, saiu de casa jovem para trabalhar, vindo até o Paraná. No paraná cursou faculdade de direito, casou-se com maria Cristina Guimarães Lisboa, tiveram 3 filhos, júnior, Waldo e Flavio.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; No ano de 1980 foi adquirida a primeira égua por Carlos Roberto Lisboa, uma égua da raça appaloosa nominada Prysla, uma égua de pelagem leopardo, porém não era pura, mas com todos as características de um belo exemplar da raça appaloosa! Com o passar do tempo a paixão pelos cavalos aumentava e um sonho começava a se tornar realidade!
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Então no ano de 1982 era criado o Paradise Ranch e a sim se  iniciava  a criação de cavalos na cidade de Cornélio Procópio Pr., no mesmo ano, almejando o aprimoramento da criação, em contato com um amigo residente nos EUA, o então juiz da APHA Bill Verdugo, foi adquirido o jovem potro, Navajo Valiant M, uma promessa nas pista de halter nos EUA, sendo campeão em várias pistas na américa do norte! Ao chegar no Brasil Navajo Valiant M, não fez diferente das suas apresentações nos EUA e sagrou-se campeão em várias exposições as quais se apresentou!
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; No ano de 1983, em um leilão da fazenda Berrante, foi adquirido a potra pura da criação sendo um exemplar da raça quarto de milha, a bela potra chamada de Poco Mona EW, para ser coberta com o então garanhão Navalo Valiant M, e ao decorrer do ano foram adquiridas outras matrizes, mas sem esperar, nossa criação fora pega de surpresa, com a perca precoce do nosso então garanhão Navajo Valiant M.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; Abalado com a perca do jovem garanhão, mas não desanimando com a fatalidade, começamos a busca por um novo garanhão, em contato com criadores renomados para a aquisição de um novo garanhão, encontramos um substituo para Navajo Valiant M, o então garanhão americano nominado Jojo Domino, um garanhão fechado na linhagem de trabalho, de pelagem alazão mantado, animal de temperamento forte, qual foi utilizado por alguns anos no criatório do Paradise Ranch.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; No mesmo com animo e renovado com a criação e começo da estação de nascimentos dos potros, em contato com seu assessor nos EUA para a compra de outro futuro garanhão.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; Encontrado um potro cuja as características eram as desejado para um futuro garanhão foi adquirido o jovem potro Pacific Twister, um jovem potro negro mantado. Feito todos os tramites, no ano de 1984, desembarcava o jovem potro no Brasil!
                    {visible === false &&
                        <>
                            <br />
                            <br />
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <Button size={"large"} onClick={() => setVisible(true)}>
                                    <b>Ler mais...</b>
                                </Button>
                            </div>
                            <br />
                        </>
                    }
                    {visible === true &&
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp; Empolgado com a criação com dois garanhões importados, começam as buscas em melhorar as qualidades das matrizes do Paradise Ranch, foram adquiridas matrizes da raça quarto de milha!
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Com o passar do tempo procurando melhorar a criação, fora disponibilizado o então garanhão Jojo Domino em um leilão oficial da raça appaloosa durante a feira agroindustrial em Curitiba Pr., o animal de propriedade do Paradise Ranch foi destaque no leilão se tornando o animal mais valorizado do leilão!
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Com a criação em ascensão, e cada vez mais querendo melhorar o padrão da criação, começaram as buscas por matrizes importadas, onde foram adquiridas matrizes das raças quarto de milha, como Miss Blue Lake e Miss Doe Bid, não satisfeito no ano de 1989, durante a expo Londrina, um animal em especial chamou a atenção do Dr. Carlos Roberto Lisboa, a égua chamada Marisa, um exímio exemplar da raça, uma matriz de 12 anos importada dos EUA onde era consagrada campeã na modalidade de apartação, vinha com prenhes positiva do também importado o garanhão Tiger Chick. A então matriz foi adquirida sendo a sim recorde de preço de toda a feira no ano de 1989! 
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Já no Paradise Ranch no final do ano a nossa então matriz Marisa, se tornava o pilar da criação do appaloosa no Paradise Ranch com a primeiro produto dela no rancho, a então potra nominada Princess Chick CRL, potra qual viraria uma futura matriz do rancho!
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Com o passar do tempo a venda de potros ficavam frequentes e animais eram vendidos para todo estado do Paraná, São Paulo, e alguns animais eram exportados para o Paraguai.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; No ano de 1993, com algumas filhas do garanhão Pacific Twister se tornando matrizes, começaram as buscas por um novo garanhão e visitando a central paulista na cidade de Jau – Sp., de propriedade do Sr. Jorge Rudney Atalla, encontramos o jovem garanhão importado ao pé da mãe, do estado de Nebraska EUA, Orbit Plaudit, jovem garanhão fechando 3 anos! Vindo a ser o reprodutor chefe no Paradise Ranch durante 15 anos!
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; No ano de 2004 mudando o foco da criação não apenas para os appaloosa mais também para o quarto de milha, foi adquirido o jovem garanhão negro nominado Tiger Smarvel, filho do hall da fama Smarvelena.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Em 2012 foi adquirido o primeiro animal da raça Paint Horse um potro homozigoto chamado Peppy Delta hdl, hoje sendo um dos garanhões chefes e animal de competição do Paradise Ranch.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Em 2013 foi adquirido do haras Andorinha de propriedade do Sr. Raul Ozorio de Almeida o jovem atleta e garanhão Nosy kid And, animal sendo campeão potro do futuro e pan-americano de rédeas, filho de Hollywood Jake  campeão mundial de rédeas, em uma égua filha de Sonnys Reflection, campeão americano de western pleasure, Nosy kid And chegando ao Paradise Ranch foi treinado para as modalidade de laço cabeça, laço pé e laco de bezerro, hoje Nosy Kid And se encontra na Bahia como garanhão do haras fazenda conselho de propriedade de Paulo, onde foi treinado para vaquejada obtendo premiações na nova modalidade.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; No ano de 2016 foi adquirido o potro Gunner Swingim da Infinity Horse potro filho de Gunner Is Starstruck filho da lenda Colonels Smoke Gun (gunner) Na Smart Swingin Lena filha da lenda já desaparecida Smart Little Lena, 1 tríplice coroa nos EUA em apartação.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Hoje Gunner Swingim é um dos garanhões do Paradise Ranch tendo até o momento dois dos filhos nascidos com a pelagem baio, e sendo um dos animais qual vem se destacando nos treinamentos na modalidade de laço, tanto na cabeça quanto no pé!
                        </div>
                    }
                    </Typography>
                    <br />
                    <img style={{ width: "100%" }} src={h2} alt="h2" />
                </Grid>
            </Grid>
            <hr />
        </>
    )
}

export default History