import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer: FunctionComponent = ({ }) => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    PARADISE RANCH
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    LEÓPOLIS - PR
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
    )
}

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}))

export default Footer