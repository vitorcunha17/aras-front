import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import img5 from '../../../images/5.jpg';
import img6 from '../../../images/6.jpg';

const FeaturedPost: FunctionComponent = ({ }) => {
    const classes = useStyles()

    return (
        <>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    Prova de Laço
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Dia 30/05/2020, às 20:00hrs
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    Texto de exemplo para prova de laço
                                    texto de exemplo para prova de laço.
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Para mais informações: (43) 99601-8002
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image={img5} />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    Curso de Doma
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    DOM 08 - 10hrs
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    Texto exemplo para curso de doma
                                    texto exemplo para curso de doma.
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Para mais informações: (43) 99601-8002
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image={img6} />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        </>
    )
}

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export default FeaturedPost