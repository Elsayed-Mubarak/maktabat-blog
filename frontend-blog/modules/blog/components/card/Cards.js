import styles from './Card.module.css';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Cards({ blogs, URL }) {

    console.log(".....blogs.............", blogs);
    console.log("....url ................", URL);
    let language = 'en'
    return (
        <div className={styles.allcards}>
            <div className="container" >
                <div className="row row-cols-1 row-cols-md-3" >
                    {
                        blogs.map(articel =>
                            articel.images.map(img =>
                                <div key={articel.id} >
                                    <div className="col mb-4" >
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
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}



