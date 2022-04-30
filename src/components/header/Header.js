import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material"


const Header = () => {
    return (
            <Container maxWidth='xxl'>
                <AppBar >
                    <Container maxWidth='xxl' sx={{ background: 'orange' }} >
                        <Toolbar >
                            <Typography variant="p" sx={{ flexGrow: 1 }} >
                                <Link href="#" underline="none" sx={{ color: 'black' }} > Trang chủ </Link>
                            </Typography>
                            <Typography variant="p" sx={{ flexGrow: 1 }}>
                                <Link href="#combo" underline="none" sx={{ color: 'black' }} > Combo </Link>
                            </Typography>
                            <Typography variant="p" sx={{ flexGrow: 1 }}>
                                <Link href="#type" underline="none" sx={{ color: 'black' }} > Loại pizza </Link>
                            </Typography>
                            <Typography variant="p"  >
                                <Link href="#order" underline="none" sx={{ color: 'black' }} > Gửi đơn hàng </Link>
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Container>
    )
}

export default Header