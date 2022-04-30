import { Button, Container, Grid, Typography } from "@mui/material"
import {  useState } from "react";
import ConfirmModal from "../../modal/ConfirmModal";


const commonStyles = {
    width: '13rem',
    height: '2rem',
    m: 'auto',
    borderBottom: 1,
    borderColor: 'orange',
    borderWidth: '2px',
    textAlign: 'center',
    marginBottom: 3,
    marginTop: 4
};
// Title
const title = {
    fontSize: 'larger',
    fontWeight: '700',
    color: 'orange',
}

const FormSubmit = ({ pizzaType, pizzaSize, valueDrink, setAlert }) => {

    // Thu thập dữ liệu cho state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [voucher, setVoucher] = useState('');
    const [message, setMessage] = useState('');

    // Tạo hook state ẩn hiện Confirm 
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    
    // const [newObject , setNewObject] = useState({
    //     kichCo: pizzaSize.kichCo,
    //     duongKinh: pizzaSize.duongKinh,
    //     suon: pizzaSize.suon,
    //     salad: pizzaSize.salad,
    //     loaiPizza: pizzaType.loaiPizza,
    //     idVourcher: voucher,
    //     idLoaiNuocUong: valueDrink,
    //     soLuongNuoc: pizzaSize.soLuongNuoc,
    //     hoTen: name,
    //     thanhTien: pizzaSize.thanhTien,
    //     email: email,
    //     soDienThoai: phone,
    //     diaChi: address,
    //     loiNhan: message
    // });
    // console.log(newObject)
   
    // Xử lí sự kiện gửi submit
    const onhandleSendClick = () => {
        console.log('cloclk')
        // B1 Thu thập dữ liệu
        // B2 validate
        let validate = validateObject();
        if (validate === true) {             
                setOpenConfirmModal(true);
        }
    }
    // Validate
    const validateObject = () => {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let checkPhone = RegExp(vnf_regex).test(phone)
        if (name === '') {
            setAlert({
                status: true,
                text: 'Chưa điền tên!',
                severity: 'warning'
            })
            return false
        }
        if (phone === '') {
            setAlert({
                status: true,
                text: 'Chưa điền Số điện thoại!',
                severity: 'warning'
            })
            return false
        }
        if (!checkPhone) {
            setAlert({
                status: true,
                text: 'Số điện thoại chưa đúng!',
                severity: 'error'
            })
            return false
        }
        if (address === '') {
            setAlert({
                status: true,
                text: 'Chưa điền Địa chỉ!',
                severity: 'warning'
            })
            return false
        }
        if (pizzaSize.kichCo === '') {
            setAlert({
                status: true,
                text: 'Chưa chọn Size!',
                severity: 'warning'
            })
            return false
        }
        if (pizzaType.loaiPizza === '') {
            setAlert({
                status: true,
                text: 'Chưa chọn Type!',
                severity: 'warning'
            })
            return false
        }
        return true
    }

    // Thu thập toàn bộ Object sau khi lấy giá trị xong
    let vObjectRequest = {
        kichCo: pizzaSize.kichCo,
        duongKinh: pizzaSize.duongKinh,
        suon: pizzaSize.suon,
        salad: pizzaSize.salad,
        loaiPizza: pizzaType.loaiPizza,
        idVourcher: voucher,
        idLoaiNuocUong: valueDrink,
        soLuongNuoc: pizzaSize.soLuongNuoc,
        hoTen: name,
        thanhTien: pizzaSize.thanhTien,
        email: email,
        soDienThoai: phone,
        diaChi: address,
        loiNhan: message
    }
    console.log(vObjectRequest)

    
    

    return (
        <>
        <div id="order">
            <Container maxWidth='lg'>
                <Grid sx={commonStyles}>
                    <Typography sx={title} >
                        Gửi đơn hàng
                    </Typography>
                </Grid>
                <Grid container marginBottom={1}>
                    Tên
                </Grid>
                <Grid item xs={12} marginBottom={2} >
                    <input className="form-control" placeholder="nhập tên" value={name} onChange={(event) => setName(event.target.value)} />
                </Grid>
                <Grid container marginBottom={1}>
                    Email
                </Grid>
                <Grid item xs={12} marginBottom={2} >
                    <input className="form-control" placeholder="nhập Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <Grid container marginBottom={1}>
                    Số điện thoại
                </Grid>
                <Grid item xs={12} marginBottom={2} >
                    <input className="form-control" placeholder="Nhập số điện thoại" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </Grid>
                <Grid container marginBottom={1}>
                    Địa chỉ
                </Grid>
                <Grid item xs={12} marginBottom={2} >
                    <input className="form-control" placeholder="Nhập địa chỉ" value={address} onChange={(event) => setAddress(event.target.value)} />
                </Grid>
                <Grid container marginBottom={1}>
                    Mã giảm giá
                </Grid>
                <Grid item xs={12} marginBottom={2} >
                    <input className="form-control" placeholder="Nhập mã giảm giá" value={voucher} onChange={(event) => setVoucher(event.target.value)} />
                </Grid>
                <Grid container marginBottom={1}>
                    Lời nhắn
                </Grid>
                <Grid item xs={12} marginBottom={2} >
                    <input className="form-control" placeholder="Nhập lời nhắn" value={message} onChange={(event) => setMessage(event.target.value)} />
                </Grid>
                <Grid item xs={12} >
                    <Button fullWidth variant="contained" sx={{ background: 'orange' }} onClick={onhandleSendClick} >
                        Gửi
                    </Button>
                </Grid>
            </Container>
        </div>

            <ConfirmModal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}           
                newObject={vObjectRequest} // truyền Object
            />
        </>
    )
}

export default FormSubmit