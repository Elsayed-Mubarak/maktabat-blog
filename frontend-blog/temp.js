
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











.HoverContainer{
  display: flex;
}
  .sayedcol{
  width: 46 %;
  background: red;
  height: 300px;
  padding: 20px 30px;
  margin: 10px;
  border: 5px solid blue;
}
  
  .fontTest{
  font - size: 20px;
  color: white;
}
  
  .fontTest: hover {
  color: gray;

}






import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>kwareict</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
          <div className="HoverContainer">
            <div className="sayedcol">
              list
              </div>
            <div className="sayedcol">
              <div className="fontTest">
                cart
                </div>
              <div className="fontTest">
                cart
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}



return (
  <div className="navbarRuler">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Kware-Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/galary">Galary</Nav.Link>
          <NavDropdown title="Channels" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Libarary Search Key</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Artificial Intelligence</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Digital Repository And Archive</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Publish Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Digital Libarary</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Translate</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Language
                    </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
            <Dropdown.Item href="#/action-3">french</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Navbar.Collapse>
    </Navbar>
  </div>
);















< !DOCTYPE html >
  <html lang="en">

    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="css/style.css" rel="stylesheet">
            <title>Document</title>
</head>

          <body>
            <div class="header">
              <div class="logo">
                <img src="Graphic1.png" width="100px" alt="">

        </div>
                <div class="tit1 nav_it">
                  <span>Title1</span>
                </div>
                <div class="dr1">
                  <div class="col1">
                    <ul>
                      <li>any something</li>
                      <li>ahmed</li>
                      <li> helmy</li>
                      <li>ramadan</li>
                      <li>sayed</li>
                    </ul>
                  </div>
                  <div class="col2 ss1">

                  </div>
                </div>
                <div class="tit2 nav_it">
                  <span>Title2</span>

                </div>
                <div class="dr2 drp">
                  <div class="col1">
                    <ul>
                      <li>moubark</li>
                      <li>ali</li>
                      <li> 2020</li>
                      <li>blbla</li>
                      <li>???</li>
                    </ul>
                  </div>
                  <div class="col2 ss2">

                  </div>
                </div>
                <div class="tit3 nav_it">
                  <span>Title3</span>
                </div>
                <div class="dr3 drp">
                  <div class="col1">
                    <ul>
                      <li>2019</li>
                      <li>IIIII</li>
                      <li> YYYYY</li>
                      <li>ZZZZZ</li>
                      <li>SSSS</li>
                    </ul>
                  </div>
                  <div class="col2 ss3">

                  </div>
                </div>
                <div class="dr3 drp">
                  <div class="col1">
                    <ul>
                      <li>2019</li>
                      <li>IIIII</li>
                      <li> YYYYY</li>
                      <li>ZZZZZ</li>
                      <li>SSSS</li>
                    </ul>
                  </div>
                  <div class="col2 ss3">

                  </div>
                </div>
              </div>

</body>

</html>













          <div class="relative group">
            <button class="p-1 border-2 border-transparent text-gray-400 flex items-center  hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" type="button">
              <img src="https://cdn.nyaladev.com/barmaga.io/au.svg" class="w-3 ml-2" alt="Flag"><span>English</span>
              </button><div class="hidden items-center absolute border border-t-0 rounded-b bg-white p-2">
                <button class="flex items-center  focus:outline-none border-transparent px-4 py-2  text-black hover:bg-grey-lighter" data-locale="ar" type="button">
                  <img src="https://cdn.nyaladev.com/barmaga.io/sd.svg" class="w-3 ml-2" alt="Flag">العربية</button>
                  <button class="flex items-center  focus:outline-none border-transparent px-4 py-2  text-black hover:bg-grey-lighter" data-locale="en" type="button">
                    <img src="https://cdn.nyaladev.com/barmaga.io/au.svg" class="w-3 ml-2" alt="Flag">English</button>
          </div>
          </div>