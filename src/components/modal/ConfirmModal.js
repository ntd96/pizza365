import { Modal, Box, Typography, Button, Grid } from "@mui/material"
import { Input } from "reactstrap";
import { useState } from "react";
import Confirm2 from "./Cofirm2";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConfirmModal = ({ openConfirmModal, setOpenConfirmModal, setAlert, newObject }) => {
    // Tạo hook state hiển thị thêm giao diện orderid
    const [showOrderId, setShowOrderId] = useState(false)
    const handleClose = () => setOpenConfirmModal(false);

    // Tạo hook state chứa orderId
    const [inputOrderId, setInputOrderId] = useState('')
    const handleClick = () => {
        //Call Api để post 
        fetchApi('http://42.115.221.44:8080/devcamp-pizza365/orders', body)
            .then((data) => {
                console.log(data)
                setInputOrderId(data.orderId)  //              
                setShowOrderId(true) // Open Modal hiện moda            
            })
            .catch((error) => {
                console.log(error)
            })
            setOpenConfirmModal(false) // Tắt Modal Confirm 1 -- ( Modal xác nhận để gửi order )
    }

    // Tạo promise xử lí bất đồng bộ
    const fetchApi = async (url, body) => {
        const response = await fetch(url, body);
        const data = await response.json()
        return data
    }
    let body = {
        method: 'POST',
        body: JSON.stringify(newObject),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
    }

    return (
        <>
            <Modal
                open={openConfirmModal}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Grid item xs={12} marginBottom={3}>
                        <Typography id="modal-modal-description" sx={{ textAlign: 'center' }}>
                            Bạn có muốn đặt order này không?
                        </Typography>

                    </Grid>
                    <Grid item xs={12} textAlign='center'>
                        <Button variant="contained" sx={{ marginInline: '10px' }} onClick={handleClick} >
                            Xác nhận
                        </Button>
                        <Button variant="contained" color="success" onClick={handleClose} sx={{ width: '107px' }} >
                            Hủy bỏ
                        </Button>
                    </Grid>
                </Box>
            </Modal>
            <Confirm2
                inputOrderId={inputOrderId} // truyền OrderId
                showOrderId={showOrderId} // Open Modal Confirm2
                setInputOrderId={setInputOrderId}
                setShowOrderId={setShowOrderId} // Ẩn hiện Modal confirm
            />
        </>
    )
}

export default ConfirmModal