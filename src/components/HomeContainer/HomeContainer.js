import react,{useState} from 'react';
import { Container } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import PurchaseOrder from '../PurchaseOrder/PurchaseOrder'
import Detial from '../Detial/Detial'
import FooterButtons from '../FooterButtons/FooterButtons'
const HomeContainer = () => {
    const [detials, setDetials] = useState([
        {
            Id:uuid(),
            Item : "Samsung note 10",
            Quantity : 1,
            UOM : "BOX",
            PricePerUnit:1000,
            TotalPrice : 12000,
            Discount: 0,
            TotalAfterDiscount: 12000
        },
        {
            Id:uuid(),
            Item : "Power cable roll",
            Quantity : 1,
            UOM : "ROLL",
            PricePerUnit:100,
            TotalPrice : 10000,
            Discount: 250,
            TotalAfterDiscount: 9750
        }
    ]);

    const addNewDetail = (detial) => {
        setDetials(oldArray => [...oldArray, detial])
    }
    const saveOnClick = () =>{
        if(detials.length>0){
        alert("Data saved successfully")
        }else{
            alert("No new data to save")
        }
    }
    const saveExitOnClick = () =>{
        if(detials.length>0){
            alert("Data saved successfully")
            setDetials([]);
        }else{
            alert("No new data to save")
        }
        
    }
    return (
        <Container>
            <PurchaseOrder />
            <Detial detials={detials} addNewDetail={addNewDetail}/>
            <FooterButtons saveOnClick={saveOnClick} saveExitOnClick={saveExitOnClick}/>
        </Container>
    );
}

export default HomeContainer;