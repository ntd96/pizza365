import { Stack, Alert, Snackbar } from "@mui/material"

const SnackBar = ({alert, setAlert}) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };

    return (
        <>
            <Stack spacing={2} sx={{ width: '100%' }}>

                <Snackbar open={alert.status} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
                        {alert.text}
                    </Alert>
                </Snackbar>
            </Stack>
        </>
    )
}

export default SnackBar