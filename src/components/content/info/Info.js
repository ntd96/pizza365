import { Container, Grid, Typography } from "@mui/material"

const commonStyles = {
    width: '15rem',
    height: '2rem',
    m: 'auto',
    borderBottom: 1,
    borderColor: 'orange',
    borderWidth: '2px'
};
// Title
const title = {
    fontSize: 'larger',
    fontWeight: '700',
    color: 'orange',
}
// Text info
const text = {
    textAlign: 'left',
    padding: '18px',
    borderRight: 1,
    borderColor: 'white',
    
}

const Info = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <Grid container >
                    <Grid item xs={12} textAlign='center' marginTop={5} marginBottom={3} >
                        <Grid sx={commonStyles}>
                            <Typography sx={title} >
                                Tại sao lại là Pizza 365
                            </Typography>
                        </Grid>
                        <br />
                        <Grid container sx={{ border: 1, borderColor: 'orange' }}  >
                            <Grid item xs={3} sx={{ ...text, background: 'bisque' }} >
                                <Typography variant="h6" >
                                    <b>Đa dạng</b>
                                </Typography>
                                <Typography variant="p">
                                    <b>Số lượng pizza đa dạng, có đầy đủ các loại pizaa đang hot nhất hiện nay.</b>
                                </Typography>
                            </Grid>

                            <Grid item xs={3} sx={{ ...text, background: 'cornsilk' }} >
                                <Typography variant="h6"  >
                                    <b>Chất lượng</b>
                                </Typography>
                                <Typography variant="p">
                                    <b>Nguyên liệu sạch 100% rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm.</b>
                                </Typography>
                            </Grid>

                            <Grid item xs={3} sx={{ ...text, background: 'yellow' }} >
                                <Typography variant="h6"  >
                                    <b>Hương vị</b>
                                </Typography>
                                <Typography variant="p">
                                    <b>Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ pizaa 365.</b>
                                </Typography>
                            </Grid>

                            <Grid item xs={3} sx={{ ...text, borderRight: 0, background: 'sandybrown' }}  >
                                <Typography variant="h6"  >
                                    <b>Dịch vụ</b>
                                </Typography>
                                <Typography variant="p">
                                    <b>Nhân viên thân thiện, nhà hàng hiện đại.Dịch vụ giao hàng nhanh chất lượng, tân tiến.</b>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Info