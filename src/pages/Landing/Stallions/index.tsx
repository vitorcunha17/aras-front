import React, { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import g1 from "./images/g1.jpg";
import g2 from "./images/g2.jpg";
import g3 from "./images/g3.jpg";


const Stallions: FunctionComponent = ({ }) => {

    const images = [
        {
            original: g1,
            thumbnail: g1,
        },
        {
            original: g2,
            thumbnail: g2,
        },
        {
            original: g3,
            thumbnail: g3,
        },
    ];
    return (
        <>
            <br />
            <h1 style={{ textAlign: "center", fontWeight: "bold" }} id="garanhoes">
                Garanhões
            </h1>
            <br />
            <Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <ImageGallery items={images} />
                </Grid>
            </Grid>
            <hr />
        </>
    )
}

export default Stallions