import React, { FunctionComponent, useRef } from 'react'
import { Toolbar, makeStyles } from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../../images/logo.png";
import "antd/dist/antd.css";
import LoginModal from './LoginModal';

const sections = [
    { title: "Notícias", url: "#noticias" },
    { title: "Garanhões", url: "#garanhoes" },
    { title: "Matrizes", url: "#matrizes" },
    { title: "Animais à venda", url: "#animaisvenda" },
    { title: "Estrutura", url: "#estrutura" },
    { title: "Nossa História", url: "#historia" },
    { title: "Quem somos?", url: "#quemsomos" }
];

const Header: FunctionComponent = ({ }) => {
    const classes = useStyles()

    const loginModal = useRef<{ open(): void }>()

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Button size="small">
                    Contato
                </Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {/*<img alt="Logo" className="logo" src={logo} />*/}
                </Typography>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => loginModal.current?.open()}
                >
                    Login
                </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                className={classes.toolbarSecondary}
                style={{
                    marginTop: "8px",
                    marginBottom: "8px",
                    background: "#172853",
                    color: "#fff"
                }}
            >
                {
                    sections.map(section => (
                        <Button
                            color="inherit"
                            key={section.title}
                            // variant="body2"
                            href={section.url}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </Button>
                    ))
                }
            </Toolbar>
            <LoginModal ref={loginModal} />
        </>
    )
}

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        flex: 1
    },
    toolbarSecondary: {
        justifyContent: "space-between",
        overflowX: "auto"
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0
    }
}))

export default Header