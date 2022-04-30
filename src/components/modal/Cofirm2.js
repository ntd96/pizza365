import { Modal, Box, Typography } from "@mui/material";
import { Input } from "reactstrap";


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
    background: 'orange',
    borderRadius: '18px'
};
const style2 = {
    textAlign: 'center',
    fontSize: 'xxx-large',
    fontFamily: 'monospace',
    background: 'antiquewhite'
}

const Confirm2 = ({ inputOrderId, showOrderId, setShowOrderId }) => {

    const handleClose = () => { 
        setShowOrderId(false);// Đóng modal confirm 2
        window.location.reload(); // Reset lại trang
    }  

    return (
        <>

            <Modal
                open={showOrderId}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography marginBottom={1}>
                        Mã OrderId của bạn là:
                    </Typography>
                    <Input disabled value={inputOrderId} style={style2}/>
                </Box>
            </Modal>
        </>
    )
}

export default Confirm2