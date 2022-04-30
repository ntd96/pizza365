import { Card, CardContent, CardHeader, Grid, Container, Typography, CardActions, Button } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

const commonStyles = {
    width: '13rem',
    height: '2rem',
    m: 'auto',
    borderBottom: 1,
    borderColor: 'orange',
    borderWidth: '2px',
    textAlign: 'center'
};
// Title
const title = {
    fontSize: 'larger',
    fontWeight: '700',
    color: 'orange',
}
const TextCard = {
    borderBottom: '1px solid',
    borderColor: 'darkgrey',
    margin: '10px',
    height: '35px',
    textAlign: 'center'
}

const PizzaSize = ({ pizzaSize, setPizzaSize }) => {

    // Color size S
    const [colorS, setColorS] = useState('orange')
    // Color size M
    const [colorM, setColorM] = useState('gold')
    // Color size L
    const [colorL, setColorL] = useState('orange')

    // Size S
    const onSizeSClick = () => {
        // Thay đổi màu khi click
        setColorS('primary');
        setColorM('gold');
        setColorL('orange');
        // Thu thập giá trị Size S
        setPizzaSize({
            kichCo: 'S',
            duongKinh: '20',
            suon: '2',
            salad: '200',
            soLuongNuoc: '2',
            thanhTien: 150000
        });
    }
    // Size M
    const onSizeMClick = () => {
        // Thay đổi màu khi click
        setColorS('orange');
        setColorM('primary');
        setColorL('orange');
        setPizzaSize({
            kichCo: 'M',
            duongKinh: '25',
            suon: '4',
            salad: '300',
            soLuongNuoc: '3',
            thanhTien: 200000
        });
    }
    // Size L
    const onSizeLClick = () => {
        // Thay đổi màu khi click
        setColorS('orange');
        setColorM('gold');
        setColorL('primary');
        setPizzaSize({
            kichCo: 'L',
            duongKinh: '30',
            suon: '8',
            salad: '500',
            soLuongNuoc: '4',
            thanhTien: 250000
        });
    }

    return (
        <>
            <div id="combo">
                <Container maxWidth='lg' sx={{ marginTop: '10px' }}   >
                    <Grid sx={commonStyles}>
                        <Typography sx={title} >
                            Chọn Size Pizza
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='center' marginTop={1} marginBottom={3} >
                        <Typography variant="p" sx={{ color: 'orange' }}>
                            Chọn combo pizza phù hợp với nhu cầu của bạn
                        </Typography>
                    </Grid>
                    <Grid container spacing={5}>
                        {/* Ô 1 */}
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    title="Size S"
                                    subheader="(small)"
                                    sx={{ textAlign: 'center', background: 'orange' }}
                                />
                                <CardContent>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Đường kính: <b> 20cm</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Sườn nướng: <b>2</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Salad: <b> 200g</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Nước ngọt: <b> 2</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ textAlign: 'center' }} >
                                        <Typography sx={{ fontSize: 'xx-large' }}>
                                            <b>150.000</b>
                                        </Typography>
                                        <Typography>
                                            VNĐ
                                        </Typography>
                                    </Grid>
                                </CardContent>
                                <CardActions sx={{ background: '#cbcbcb' }}>
                                    <Grid item xs={12} textAlign='center'  >
                                        <Button onClick={onSizeSClick} variant="contained" sx={{ background: colorS }} >Chọn</Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* Ô 2 */}
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    title="Size M"
                                    subheader="(Medium)"
                                    sx={{ textAlign: 'center', background: 'gold' }}
                                />
                                <CardContent>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Đường kính: <b> 25cm</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Sườn nướng: <b>4</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Salad: <b> 300g</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Nước ngọt: <b> 3</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ textAlign: 'center' }} >
                                        <Typography sx={{ fontSize: 'xx-large' }}>
                                            <b>200.000</b>
                                        </Typography>
                                        <Typography>
                                            VNĐ
                                        </Typography>
                                    </Grid>
                                </CardContent>
                                <CardActions sx={{ background: '#cbcbcb' }}>
                                    <Grid item xs={12} textAlign='center'  >
                                        <Button onClick={onSizeMClick} variant="contained" sx={{ background: colorM }} >Chọn</Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* Ô 3 */}
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    title="Size M"
                                    subheader="(Medium)"
                                    sx={{ textAlign: 'center', background: 'orange' }}
                                />
                                <CardContent>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Đường kính: <b> 30cm</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Sườn nướng: <b>8</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Salad: <b> 500g</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={TextCard} >
                                        <Typography>
                                            Nước ngọt: <b> 4</b>
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ textAlign: 'center' }} >
                                        <Typography sx={{ fontSize: 'xx-large' }}>
                                            <b>250.000</b>
                                        </Typography>
                                        <Typography>
                                            VNĐ
                                        </Typography>
                                    </Grid>
                                </CardContent>
                                <CardActions sx={{ background: '#cbcbcb' }}>
                                    <Grid item xs={12} textAlign='center'  >
                                        <Button onClick={onSizeLClick} variant="contained" sx={{ background: colorL }} >Chọn</Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <br />
            </div>

        </>
    )
}

export default PizzaSize