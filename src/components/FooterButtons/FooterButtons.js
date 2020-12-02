import react from 'react';
import { Button } from 'react-bootstrap'
import './FooterButtons.css'
const FooterButtons = (props) => {
    return (
        <div className="FooterButtons float-right">
            <div className="my-4">
                <Button variant="primary" size="lg" onClick={()=>props.saveOnClick()}>
                    Save
                </Button>{' '}
                <Button variant="secondary" size="lg" onClick={()=>props.saveExitOnClick()}>
                    Save & Exit
                </Button>
            </div>
        </div>
    );
}

export default FooterButtons;