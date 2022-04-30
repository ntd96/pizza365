import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import { useState } from "react";
const commonStyles = {
    width: '13rem',
    height: '2rem',
    m: 'auto',
    borderBottom: 1,
    borderColor: 'orange',
    borderWidth: '2px',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 2
};
// Title
const title = {
    fontSize: 'larger',
    fontWeight: '700',
    color: 'orange',
}

const PizzaType = ({pizzaType, setPizzaType}) => {

    // Color size S
    const [colorS, setColorS] = useState('orange')
    // Color size M
    const [colorM, setColorM] = useState('gold')
    // Color size L
    const [colorL, setColorL] = useState('orange')

    // SEAFOOD
    const onSeaFoodClick = () => {
        console.log('seafood')
        setColorS('primary');
        setColorM('gold');
        setColorL('orange');

        setPizzaType({
            loaiPizza: 'SEAFOOD',
        });
    }
    // HAWAII
    const onHawaiClick = () => {
        
        setColorS('orange');
        setColorM('primary');
        setColorL('orange');

        setPizzaType({
            loaiPizza: 'HAWWAII'
        })
    }
    // BACON
    const onBaconClick = () => {

        setColorS('orange');
        setColorM('gold');
        setColorL('primary');

        setPizzaType({
            loaiPizza: 'BACON'
        })
    }

    return (
        <>
        <div id="type">
            <Container>
                <Grid sx={commonStyles}>
                    <Typography sx={title} >
                        Chọn Loại Pizza
                    </Typography>
                </Grid>
                <Grid container spacing={5}>
                    {/* Ô 1 */}
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                image={require('../../../assets/images/seafood.jpg')}
                            />
                            <CardContent>
                                <Grid item xs={12} padding={1}  >
                                    <Typography variant="h5">
                                        OCEAN MANIA
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <Typography variant="p">
                                        PIZZA HẢI SẢN XỐT MAYONNAISE.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} padding={1} >
                                    <Typography variant="p">
                                        Xốt Cà Chua, Phố Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.
                                    </Typography>
                                </Grid>
                            </CardContent>
                            <CardActions sx={{ background: 'lightgrey'}}>
                                <Grid item xs={12} textAlign='center' >
                                    <Button onClick={onSeaFoodClick} variant="contained" sx={{background: colorS}}>
                                        Chọn
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* Ô 2 */}
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                image={require('../../../assets/images/hawaiian.jpg')}
                            />
                            <CardContent>
                                <Grid item xs={12} padding={1}  >
                                    <Typography variant="h5">
                                        HAWAIIAN
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <Typography variant="p">
                                        PIZZA DĂM BỐNG DỨA KIỂU HAWAII.
                                    </Typography>
                                    
                                </Grid>
                                <Grid item xs={12} padding={1} >
                                    <Typography variant="p">
                                        Xốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông, Thơm.                                        
                                    </Typography>                                    
                                </Grid>
                            </CardContent>
                            <CardActions sx={{ background: 'lightgrey'}}>
                                <Grid item xs={12} textAlign='center' >
                                    <Button onClick={onHawaiClick} variant="contained" sx={{background: colorM}}>
                                        Chọn
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* Ô 3 */}
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                image={require('../../../assets/images/bacon.jpg')}
                            />
                            <CardContent>
                                <Grid item xs={12}  padding={1} >
                                    <Typography variant="h5" >
                                        CHEESY CHICKEN BACON
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  padding={1}>
                                    <Typography variant="p">
                                        PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <Typography variant="p" >
                                        Xốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai Mozzarelaa, Cà Chua.
                                    </Typography>
                                </Grid>
                            </CardContent>
                            <CardActions  sx={{ background: 'lightgrey'}}>
                                <Grid item xs={12} textAlign='center' >
                                    <Button onClick={onBaconClick} variant="contained" sx={{background:colorL}}>
                                        Chọn
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>   
        </div>
        </>
    )
}

export default PizzaType