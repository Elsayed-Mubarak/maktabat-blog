
<div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="keywords" content="htmlcss bootstrap menu, navbar, hover nav menu CSS examples" />
    <meta name="description" content="Bootstrap navbar hover examples for any type of project, Bootstrap 4" />
    <title>Demo - Bootstrap hover dropdown sample. html code example </title>


    {/* jQuery */}
    {/* Bootstrap files (jQuery first, then Popper.js, then Bootstrap JS) */}
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n/* ============ desktop view ============ */\n@media all and (min-width: 992px) {\n\t.navbar .nav-item .dropdown-menu{ display: none; }\n\t.navbar .nav-item:hover .nav-link{ color: #fff;  }\n\t.navbar .nav-item:hover .dropdown-menu{ display: block; }\n\t.navbar .nav-item .dropdown-menu{ margin-top:0; }\n}\t\n/* ============ desktop view .end// ============ */\n\n\n" }} />


    <header className="section-header py-4">
        <div className="container">
            <h2>Demo page</h2>
        </div>
    </header> {/* section-header.// */}


    {/* ========================= SECTION CONTENT ========================= */}
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Brand</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                    <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
                    <li className="nav-item"><a className="nav-link" href="#"> About </a></li>
                    <li className="nav-item"><a className="nav-link" href="#"> Services </a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  Hover me</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                            <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                            <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
                    <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown"> Dropdown right </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                            <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                        </ul>
                    </li>
                </ul>
            </div> {/* navbar-collapse.// */}


        </nav>
        <section className="section-content py-5">
            <h6>Demo view: Navbar dropdown with simple hover effect </h6>
            <p>For this demo page you should connect to the internet to receive files from CDN  like Bootstrap CSS, Bootstrap JS and jQuery. </p>
            <p> If page is not working correctly, then check your internet connection. </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
       proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
       proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <a href="http://bootstrap-menu.com/detail-basic-hover.html" className="btn btn-warning"> « Back to tutorial or Download code</a>
        </section>
    </div>{/* container //  */}
</div>