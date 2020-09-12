import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from '@material-ui/core/Link';

const social = [
    {
        name: "Instagram",
        icon: InstagramIcon,
        link: "https://www.instagram.com/paradise.ranch/"
    },
    {
        name: "Facebook",
        icon: FacebookIcon,
        link: "https://www.facebook.com/flavio.lisboa"
    }
]

const AboutUs: FunctionComponent = ({ }) => {
    const classes = useStyles()

    return (
        <Grid id="quemsomos">
            <Grid item xs={12} md={12} lg={12}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                    <Typography variant="h6" gutterBottom>
                        Quem Somos?
                    </Typography>
                    <Typography>
                        O centro de treinamento Paradise Ranch vem desde 1982 trabalhando com a criação e venda de cavalos, das raças Appaloosa, Quarto de Milha e Paint Horse.
                        A partir do ano de 2005 passamos a trabalhar com alojamento e treinamento de cavalos em diversas modalidades, hoje tendo como principal modalidade o laço
                        em dupla, mas também atuando na doma de cavalos, ranch sorting, laço de bezerro, breakway roping (laço feminino) e 3 tambores, atuando também ministrando
                        aulas de equitação básica adulto e infantil, alojamento e reabilitação de cavalos, com uma estrutura de cocheiras de alvenaria, piquetes e pastos, tanto
                        para cavalos quanto para os animais envolvidos nos treinamentos.
                    </Typography>
                </Paper>
                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                    Social
                </Typography>
                {
                    social.map(network => (
                        <Link display="block" variant="body1" href={network.link} key={network.name}>
                            <Grid container direction="row" spacing={1} alignItems="center">
                                <Grid item>
                                    <network.icon />
                                </Grid>
                                <Grid item>{network.name}</Grid>
                            </Grid>
                        </Link>
                    ))
                }
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}))

export default AboutUs