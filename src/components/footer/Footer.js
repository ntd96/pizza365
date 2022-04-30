import { Container, Typography, Grid, Button } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
const Footer = () => {
    return (
        <>
            <Container maxWidth='xxl' sx={{ background: 'orange', marginTop: '60px' }}>
                <Grid container textAlign='center'>
                    <Grid item xs={12} marginTop={3} marginBottom={1} >
                        <Typography fontWeight={700}>
                            FOOTER
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" sx={{ color: 'white', bgcolor: 'black' }} startIcon={<ArrowUpwardIcon />}>
                            <Typography variant="p">
                                To the top
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} >
                        <FacebookIcon fontSize="inherit" />
                        <TwitterIcon fontSize="inherit" />
                        <InstagramIcon fontSize="inherit" />
                        <AppleIcon fontSize="inherit" />
                        <YouTubeIcon fontSize="inherit" />
                        <GoogleIcon fontSize="inherit" />
                    </Grid>
                    <Grid item xs={12} marginTop={1} fontSize="15px">
                        Power by DEVCAMP
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footer