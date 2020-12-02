import react, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form, Col, Row } from "react-bootstrap";
import { v4 as uuid } from 'uuid';
import "./Detial.css";
const Detial = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false); setItemName('');};
    const handleShow = () => setShow(true);

    const [itemName, setItemName] = useState('');
    const [uom, setUom] = useState('BOX');
    const [quantity, setQuantity] = useState(1);
    const [unit, setUnit] = useState(1);
    const [totalPrice, setTotalPrice] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [dicountWay, setDicountWay] = useState("percentage");
    const [afterDiscount, setAfterDiscount] = useState(1);
    useEffect(
        () => {
            setTotalPrice(quantity * unit)
        },
        [quantity,unit]
    );

    useEffect(
        () => {
            if(dicountWay === "percentage"){
                let discountVal = (totalPrice * discount) / 100
                setAfterDiscount(totalPrice - discountVal)
            }else if(dicountWay === "amount"){
                setAfterDiscount(totalPrice - discount)
            } 
        },
        [totalPrice,discount,dicountWay]
    );

    const addNewLine = () =>{
        itemName.length < 4 && setItemName(' ')
        if(itemName.length > 4){
            let tableRow = {
                Id:uuid(),
                Item : itemName,
                Quantity : quantity,
                UOM : uom,
                PricePerUnit:unit,
                TotalPrice : totalPrice,
                Discount: discount,
                TotalAfterDiscount: afterDiscount
            }
            props.addNewDetail(tableRow)
            handleClose()
            setItemName('');
            setUom('BOX');
            setQuantity(1);
            setUnit(1);
            setTotalPrice(1);
            setDiscount(0);
            setDicountWay("percentage");
            setAfterDiscount(1);
        }
    }

    const tableBody = props.detials.map(detial=>{
        return(
            <tr key={detial.Id}>
                <td>{detial.Item}</td>
                <td>{detial.Quantity}</td>
                <td>{detial.UOM}</td>
                <td>{detial.PricePerUnit}</td>
                <td>{detial.TotalPrice}</td>
                <td>{detial.Discount}</td>
                <td>{detial.TotalAfterDiscount}</td>
            </tr>
        );
    })
    return (
        <div className="Detial">
            <h2 className="Detial-page-title">Detial</h2>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>UOM</th>
                        <th>Price per unit (EGP)</th>
                        <th>Total Price (EGP)</th>
                        <th>Discount</th>
                        <th>Total after discount (EGP)</th>
                    </tr>
                </thead>
                
                    {tableBody.length > 0?<tbody>{tableBody}</tbody>:''}
                
            </Table>
            {tableBody.length <= 0?<h2 className="mx-auto" style={{width:"fit-content"}}>No Products To Show</h2>:''}
            <Button variant="outline-primary" className="mt-2" onClick={handleShow}>
                Add new detail
            </Button>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="mx-auto">Detail form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md={5} controlId="formGroupName">
                                    <Form.Label>Item name</Form.Label>
                                    <Form.Control required type="text" value={itemName} onChange={e => setItemName(e.target.value)} />
                                    {itemName.length<5 && itemName.length!==0 && <small style={{color:"red"}}>Item Name should be more than 4 letters</small>}
                                </Form.Group>
                                <Col md={2}></Col>
                                <Form.Group as={Col} md={5}>
                                    <Form.Label>UOM</Form.Label>
                                    <Form.Control as="select" defaultValue="" name="uom" value={uom} onChange={e => setUom(e.currentTarget.value)}>
                                        <option value="BOX">BOX</option>
                                        <option value="ROLL">ROLL</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md={3}>
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" min={1} defaultValue={1} name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md={4}>
                                    <Form.Label className="d-block">Unit</Form.Label>
                                    <Form.Control type="number" min={1} defaultValue={1} className="d-inline-block w-75" name="unit" value={unit} onChange={e => setUnit(e.currentTarget.value)} /> EGP
                            </Form.Group>
                                <Col md={3}></Col>
                                <Form.Group as={Col} md={5}>
                                    <Form.Label className="d-block">Total Price</Form.Label>
                                    <Form.Control type="number" min={1} defaultValue={1} className="d-inline-block w-75" name="totalPrice" value={totalPrice} disabled /> EGP
                            </Form.Group>
                            </Form.Row>
                            <Form.Row className="align-items-center">
                                <Form.Group as={Col} md={3}>
                                    <Form.Label>Discount</Form.Label>
                                    <Form.Control type="number" min={1} defaultValue={1} name="discount" value={discount} onChange={e => setDiscount(e.currentTarget.value)} />
                                </Form.Group>
                                <Col sm={9}>
                                    <Form.Check inline name="dicountWay" label="%" type="radio" id='inline-radio-1' value="percentage" checked={dicountWay === "percentage"} onClick={e => setDicountWay(e.currentTarget.value)} />
                                    <Form.Check inline name="dicountWay" label="Amount" type="radio" id='inline-radio-2' value="amount" checked={dicountWay === "amount"} onClick={e => setDicountWay(e.currentTarget.value)} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md={5}>
                                    <Form.Label>Total price after discount</Form.Label>
                                    <Form.Control type="number" min={1} defaultValue={1} className="d-inline-block w-75" disabled name="afterDiscount" value={afterDiscount} /> EGP
                                </Form.Group>
                            </Form.Row>
                        </Form>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Row className="w-100">
                        <Col>
                            <Button variant="secondary" onClick={handleClose} className="w-100">
                                Close
                    </Button>
                        </Col>
                        <Col>
                            <Button variant="primary"  onClick={addNewLine} className="w-100">Save</Button>

                        </Col>
                    </Row>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Detial;
