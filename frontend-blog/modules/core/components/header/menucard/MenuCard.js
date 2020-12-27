import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import styles from './MenuCard.module.css'

const Example = (props) => {
    return (
        <div className='cardcontainer' style={{ display: 'flex', float: 'right' }}>
            <Card style={{ marginRight: '20px', borderRadius: '20px' }}>
                <CardImg className={styles.cardImage} top width="100%" src="/images/card1.jpeg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Latest Article</CardTitle>
                    <CardText>This is a wider card with .</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{ marginRight: '40px', borderRadius: '20px' }}>
                <CardImg className={styles.cardImage} top width="100%" src="/images/card1.jpeg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Kware Blog</CardTitle>
                    <CardText>This is a wider Blog with .</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardBody>
            </Card>

        </div>
    );
};

export default Example;