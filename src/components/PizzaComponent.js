
import { useState } from "react"
import SnackBar from "./alert/SnackBar"
import Content from "./content/Content"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import ConfirmModal from "./modal/ConfirmModal"

const PizzaComponent = () => {

    // Tạo HookState chứa dữ liệu Component Pizza Size
    const [pizzaSize, setPizzaSize] = useState({
        kichCo: '',
        duongKinh: '',
        suon: '',
        salad: '',
        soLuongNuoc: '',
        thanhTien: 0
    })
    console.log(pizzaSize)
    // Tạo HookState chứa dữ liệu Component  Pizza Type
    const [pizzaType, setPizzaType] = useState({
        loaiPizza: ''
    })
    console.log(pizzaType)

    // Tạo HookState để chứa value khi user nhập avo2
    const [valueDrink, setValueDrink] = useState('');


    // Alert
    const [alert, setAlert] = useState({
        status: false,
        text: '',
        severity: null
    })

    return (
        <>
            <Header />
            <Content
                pizzaSize={pizzaSize} // SIZE
                setPizzaSize={setPizzaSize} // SIZE
                pizzaType={pizzaType} // TYPE
                setPizzaType={setPizzaType} // TYPE
                // openConfirmModal={openConfirmModal} // MODAL
                // setOpenConfirmModal={setOpenConfirmModal} // MODAL
                valueDrink={valueDrink} // Drink
                setValueDrink={setValueDrink} // // data drink
                setAlert={setAlert} // alert
            />
            <Footer />


            <SnackBar
                alert={alert}
                setAlert={setAlert}
            />
        </>
    )
}

export default PizzaComponent