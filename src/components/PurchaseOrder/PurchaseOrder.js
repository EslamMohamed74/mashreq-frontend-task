import react,{useState} from 'react';
import { Form, Col, Row } from 'react-bootstrap'
import './PurchaseOrder.css'
const PurchaseOrder = () => {
    const [Name, setName] = useState('');
    const [category, setCategory] = useState('Choose...');
    const [brand, setBrand] = useState('Choose...');
    const [SKU, setSKU] = useState('');
    const [Barcode, setBarcode] = useState('');
    return (
        <div className="PurchaseOrder">
            <h2 className="PurchaseOrder-page-title">Purchase Order</h2>
            <Form>
                <Form.Row>
                    <Col md={5}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Category</Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select" defaultValue="" defaultValue="" name="category" value={category} onChange={e => setCategory(e.currentTarget.value)}>
                                    <option value="Choose...">Choose...</option>
                                    <option value="...">...</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Brand</Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select" defaultValue="" defaultValue="" name="brand" value={brand} onChange={e => setBrand(e.currentTarget.value)}>
                                    <option value="Choose...">Choose...</option>
                                    <option value="...">...</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Col>

                    <Col sm={12}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1}>Name</Form.Label>
                        <Col sm={11} className="pl-md-0">
                            <Form.Control type="text" placeholder="" name="name" value={Name} onChange={e => setName(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    </Col>

                    <Col md={5}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>SKU</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="" name="SKU" value={SKU} onChange={e => setSKU(e.target.value)}/>
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Barcode</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="" name="Barcode" value={Barcode} onChange={e => setBarcode(e.target.value)}/>
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
}

export default PurchaseOrder;