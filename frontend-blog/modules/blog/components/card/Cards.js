import styles from './Card.module.css';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Cards({ blogs, URL }) {

    return (
        <div className="container" >
            <div className={styles.cards_container}>
                <div className="row row-cols-1 row-cols-md-3">
                    {blogs.map(articel =>
                        articel.images.map(img =>
                            <div className={styles.card} key={articel.id} >
                                <Card.Img variant="top" src={`${URL}${img.url}`} />
                                <Card.Body>
                                    <Card.Title>{articel.title.length < 20 ? `${articel.title}` : `${articel.title.substring(0, 20)} . . .`}</Card.Title>
                                    <Card.Text>
                                        {articel.content.length < 100 ? `${articel.content}` : `${articel.content.substring(0, 100)} . . .`}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link href={`/`}>Show More</Link>
                                </Card.Footer>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}