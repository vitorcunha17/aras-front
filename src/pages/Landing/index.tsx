import React, { FunctionComponent } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from '@material-ui/core';
import Header from './Header';
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import Grid from "@material-ui/core/Grid";
import FeaturedPost from './FeaturedPost';
import Register from './Register';
import AboutUs from './AboutUs';
import Stallions from './Stallions';
import History from './History';
import Footer from './Footer';

const Landing: FunctionComponent = ({ }) => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <main>
                    <img style={{ width: "100%" }} src={img2} alt="banner" />
                    <br />
                    <br />
                    <Carousel>
                        <div style={{ height: "250px" }}>
                            <img src={img4} alt="img1" />
                        </div>
                        <div style={{ height: "500px" }}>
                            <img src={img3} alt="img3" />
                        </div>
                        <div style={{ height: "500px" }}>
                            <img src={img1} alt="img4" />
                        </div>
                    </Carousel>
                    <hr />
                    <br />
                    <h1 style={{ textAlign: "center", fontWeight: "bold" }} id="noticias">
                        Notícias
                    </h1>
                    <br />
                    <Grid container spacing={4}>
                        <FeaturedPost />
                    </Grid>
                    <br />
                    <hr />
                    <Stallions />
                    <br />
                    <Register />
                    <br />
                    <History />
                    <br />
                    <AboutUs />
                    <br />
                    <Footer />
                </main>
            </Container>
        </>
    )
}

export default Landing
