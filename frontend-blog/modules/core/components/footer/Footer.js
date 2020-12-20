import styles from './Footer.module.css'




export default function Footer() {
    return (
        <footer style={{ 'position': 'fixed', 'bottom': '0', 'width': '100%' }} className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p style={{ 'floot': 'left' }}>
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
                        <h5 className="text-uppercase mb-0">Links</h5>
                        <ul className="list-unstyled">
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
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}

