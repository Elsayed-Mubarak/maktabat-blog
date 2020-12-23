import styles from './SearchBox.module.css'
import { Container, Row, Col } from 'reactstrap';

export default function SearchAppBar() {
    return (
        <Container>
            <Row>
                <Col sm={{ size: 3, order: 2, offset: 9 }}>
                    <form className="form-inline active-cyan-4" >
                        <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                        <i className="fas fa-search" aria-hidden="true" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
}





