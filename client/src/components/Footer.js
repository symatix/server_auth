import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

function Footer(props){
    return(
        <div className="footer">
            <Typography className="footer-text" type="body2" gutterBottom>
                Sikon - System Constellations
            </Typography>
            <Grid container  direction="row" justify="center">
                <Grid item xs={6} md={4}>
                    <Typography className="footer-text" type="caption" gutterBottom align="center">
                        Mail: <a className="footer-link" href="mailto:info@konstelacije.com" target="_top">info@konstelacije.com </a><br/>
                        Mobile: <a className="footer-link" href="callto:00385995353535">+385 (99) 5353 - 535</a>
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography className="footer-text" type="caption" gutterBottom align="center">
                        Skype: SKYPE CONTACT <br/>
                        Facebook: <a className="footer-link" href="https://www.facebook.com/sikonmreza">Sikon</a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;