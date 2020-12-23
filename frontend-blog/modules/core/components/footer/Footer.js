import styles from './Footer.module.css'


export default function Footer() {
    return (

        <footer style={{ 'margin-top': '300px' }} className="bg-light text-lg-start" className={styles.textcenter}>
            <style jsx>{`
  .social-footer {
    padding: 1rem;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  
  .social-footer .social-footer-icons li:last-of-type {
    margin-right: 0;
  }
  
  .social-footer .social-footer-icons .fa {
    font-size: 1.3rem;
    color: #fefefe;
  }
  
  .social-footer .social-footer-icons .fa:hover {
    color: #4a4a4a;
    transition: color 0.3s ease-in;
  }
      `}</style>
            <div className=" p-4 " className={styles.paddingbetweennav}>
                <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About Blog</h5>
                        <p style={{ 'floot': 'left', 'fontSize': '12px' }}>
                            LibraryThing.tech blog aims to provide collaborative spaces to accommodate
                            all librarians and those who care about the latest developments in fields like
                            informationaccess technologies and OSS knowledge management systems, to share
                            the latest news and future trends in areas like electronic libraries,
                            digital repositories and archiving, content curation and crowdsourcing,
                            discovery portals and search engines, systems arabization and translation,
                            knowledge and research center mangement systems, artificial intelligence,
                            and open access content.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <footer2 className="social-footer">
                <div className="social-footer-left">
                    <a href="#"><img className="logo" src="https://placehold.it/150x30" /></a>
                </div>
                <div className="social-footer-icons">
                    <ul className="menu simple">
                        <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                        <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
                        <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    </ul>
                </div>
            </footer2>
        </footer>

    );
}

