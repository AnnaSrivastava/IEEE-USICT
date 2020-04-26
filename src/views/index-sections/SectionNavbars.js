/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import "reactstrap";
import "tachyons";
function SectionNavbars() {
  return (
    <div className="flex">
      <div className="w-20"></div>
    <section className="tc pa5-ns pa3 ">
  <article className=" ba b--black-20 mw5  ">
    <img src={require("assets/img/ryan.jpg")} 
    className="db" alt="Jesse Grant" />
    <h1 class="f4 b tc  ">Dr.Ashish Payal</h1>
    <hr class="mw3 bb bw1 b--black-10" />
    <p className="black f6 measure center georgia lh-copy">
    Quite affectionate and outgoing.
    She loves to get chin scratches and will
    roll around on the floor waiting for you give her more of them.
    Quite affectionate and outgoing.
    She loves to get chin scratches and will
    roll around on the floor waiting for you give her more of them.
  </p>
  </article>
</section>
<section className="tc pa3 pa5-ns ">
  <article className=" ba b--black-20 mw5  ">
    <img src={require("assets/img/ryan.jpg")} 
    className="db" alt="Jesse Grant" />
    <h1 class="f4 b tc  ">Dr. Kamaldeep Kaur</h1>
    <hr class="mw3 bb bw1 b--black-10" />
    <p className="black f6 measure center georgia lh-copy">
    Quite affectionate and outgoing.
    She loves to get chin scratches and will
    roll around on the floor waiting for you give her more of them.
    Quite affectionate and outgoing.
    She loves to get chin scratches and will
    roll around on the floor waiting for you give her more of them.
  </p>
  </article>
</section>
</div>
    // <>
    //   <div className="section section-navbars">
    //     <Container id="menu-dropdown">
    //       <div className="title">
    //         <h3>Menu</h3>
    //       </div>
    //       <br />
    //       <Row>
    //         <Col md="6">
    //           <Navbar className="bg-primary" expand="lg">
    //             <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
    //               Menu
    //             </NavbarBrand>
    //             <button
    //               aria-controls="navbarSupportedContent"
    //               aria-expanded={false}
    //               aria-label="Toggle navigation"
    //               className="navbar-toggler navbar-toggler-right"
    //               data-target="#navbar-menu"
    //               data-toggle="collapse"
    //               id="navbar-menu"
    //               type="button"
    //             >
    //               <span className="navbar-toggler-bar" />
    //               <span className="navbar-toggler-bar" />
    //               <span className="navbar-toggler-bar" />
    //             </button>
    //             <UncontrolledCollapse navbar toggler="#navbar-menu">
    //               <Nav className="mr-auto" navbar>
    //                 <NavItem>
    //                   <NavLink href="#pablo" onClick={e => e.preventDefault()}>
    //                     Link
    //                   </NavLink>
    //                 </NavItem>
    //                 <NavItem>
    //                   <NavLink href="#pablo" onClick={e => e.preventDefault()}>
    //                     Link
    //                   </NavLink>
    //                 </NavItem>
    //                 <UncontrolledDropdown nav inNavbar>
    //                   <DropdownToggle
    //                     aria-expanded={false}
    //                     aria-haspopup={true}
    //                     caret
    //                     color="default"
    //                     data-toggle="dropdown"
    //                     href="#pablo"
    //                     id="dropdownMenuButton"
    //                     nav
    //                     onClick={e => e.preventDefault()}
    //                     role="button"
    //                   >
    //                     Dropdown
    //                   </DropdownToggle>
    //                   <DropdownMenu
    //                     aria-labelledby="dropdownMenuButton"
    //                     className="dropdown-info"
    //                   >
    //                     <DropdownItem header tag="span">
    //                       Dropdown header
    //                     </DropdownItem>
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Action
    //                     </DropdownItem>
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Another action
    //                     </DropdownItem>
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Something else here
    //                     </DropdownItem>
    //                     <DropdownItem divider />
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Separated link
    //                     </DropdownItem>
    //                     <DropdownItem divider />
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Another separated link
    //                     </DropdownItem>
    //                   </DropdownMenu>
    //                 </UncontrolledDropdown>
    //               </Nav>
    //             </UncontrolledCollapse>
    //           </Navbar>
    //         </Col>
    //         <Col md="6">
    //           <Navbar className="bg-danger" expand="lg">
    //             <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
    //               Icons
    //             </NavbarBrand>
    //             <button
    //               aria-controls="navbarSupportedContent"
    //               aria-expanded={false}
    //               aria-label="Toggle navigation"
    //               className="navbar-toggler navbar-toggler-right"
    //               data-target="#navbar-menu-icon"
    //               data-toggle="collapse"
    //               id="navbar-menu-icon"
    //               type="button"
    //             >
    //               <span className="navbar-toggler-bar" />
    //               <span className="navbar-toggler-bar" />
    //               <span className="navbar-toggler-bar" />
    //             </button>
    //             <UncontrolledCollapse navbar toggler="#navbar-menu-icon">
    //               <Nav className="ml-auto" navbar>
    //                 <NavItem className="active">
    //                   <NavLink href="#pablo" onClick={e => e.preventDefault()}>
    //                     <i aria-hidden={true} className="nc-icon nc-email-85" />
    //                   </NavLink>
    //                 </NavItem>
    //                 <NavItem>
    //                   <NavLink href="#pablo" onClick={e => e.preventDefault()}>
    //                     <i
    //                       aria-hidden={true}
    //                       className="nc-icon nc-single-02"
    //                     />
    //                   </NavLink>
    //                 </NavItem>
    //                 <UncontrolledDropdown nav inNavbar>
    //                   <DropdownToggle
    //                     aria-expanded={false}
    //                     aria-haspopup={true}
    //                     caret
    //                     color="default"
    //                     data-toggle="dropdown"
    //                     href="#pablo"
    //                     nav
    //                     onClick={e => e.preventDefault()}
    //                     role="button"
    //                   >
    //                     <i
    //                       aria-hidden={true}
    //                       className="nc-icon nc-settings-gear-65"
    //                     />
    //                   </DropdownToggle>
    //                   <DropdownMenu className="dropdown-danger" right>
    //                     <DropdownItem header tag="span">
    //                       Dropdown header
    //                     </DropdownItem>
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Another action
    //                     </DropdownItem>
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Something else here
    //                     </DropdownItem>
    //                     <DropdownItem divider />
    //                     <DropdownItem
    //                       href="#pablo"
    //                       onClick={e => e.preventDefault()}
    //                     >
    //                       Separated link
    //                     </DropdownItem>
    //                   </DropdownMenu>
    //                 </UncontrolledDropdown>
    //               </Nav>
    //             </UncontrolledCollapse>
    //           </Navbar>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    // </>
);
}

export default SectionNavbars;
