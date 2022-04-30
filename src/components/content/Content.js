
import DrinkSelect from "./drink/DrinkSelect"
import FormSubmit from "./form/FormSubmit"
import Info from "./info/Info"
import Lading from "./lading/Lading"
import PizzaSize from "./pizza-size/PizzaSize"
import PizzaType from "./pizza-type/PizzaType"

const Content = ({ pizzaSize, setPizzaSize, pizzaType, setPizzaType, valueDrink,setValueDrink, setAlert }) => {

    return (
        <>
            <Lading />
            <Info />
            <PizzaSize
                pizzaSize={pizzaSize}
                setPizzaSize={setPizzaSize}
            />
            <PizzaType
                pizzaType={pizzaType}
                setPizzaType={setPizzaType}
            />
            <DrinkSelect 
            valueDrink={valueDrink} 
            setValueDrink={setValueDrink}
            />
            <FormSubmit
                pizzaType={pizzaType} // Data Type
                pizzaSize={pizzaSize} // Data Size
                valueDrink={valueDrink} // Data Drink
                // openConfirmModal={openConfirmModal} // MODAL
                // setOpenConfirmModal={setOpenConfirmModal} // MODAL
                setAlert={setAlert} // alert
            />
        </>
    )
}

export default Content