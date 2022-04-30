import { Container, Grid, Select, Typography, MenuItem, InputLabel, FormControl } from "@mui/material"
import { useEffect, useState } from "react";

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


const DrinkSelect = ({setValueDrink, valueDrink}) => {

    // Tạo HookState để chứa mảng drink sau khi gọi từ sever
    const [dataDrink, setDataDrink] = useState([])
    

    // Tạo promise xử lí tác vụ bất đồng bộ
    const fetchApi = async (url, body) => {
        const response = await fetch(url, body);
        const data = response.json();
        return data
    }
    // call Api get All Drink - didmount
    useEffect(() => {
        fetchApi('http://42.115.221.44:8080/devcamp-pizza365/drinks')
            .then((data) => {
                setDataDrink(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    

    return (
        <>
            <Container maxWidth='lg'>
                <Grid sx={commonStyles}>
                    <Typography sx={title} >
                        Chọn đồ uống
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth >
                        <InputLabel >Chọn đồ uống</InputLabel>

                        <Select
                            value={valueDrink}
                            label="chọn đồ uống"
                        onChange={(event) => setValueDrink(event.target.value)}
                        >
                            {
                                dataDrink.map((element, index) => {
                                    return (
                                        <MenuItem value={element.maNuocUong} key={index}> {element.tenNuocUong} </MenuItem>
                                    )
                                })
                            }
                        </Select>


                    </FormControl>
                </Grid>
            </Container>
        </>
    )
}

export default DrinkSelect