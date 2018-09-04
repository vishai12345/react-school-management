/**
 * Horizontal Menu
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import navLinks from './NavLinks';
import $ from 'jquery';

import NavMenuItem from './NavMenuItem';
const inActiveClass = {"opacity": "0", "visibility": "hidden"}
const activeClass = {"opacity": "1", "visibility": "visible"}
class HorizontalMenu extends Component {

    // componentDidMount() {
    //     $(document).on("mouseover", '.horizontal-menu ul li',function(e) {
    //         const self = $(this)
    //         if(self.children('ul').css('opacity') == 0){
    //             console.log(self.children('ul').css('opacity'), "if")
    //             $('.horizontal-menu ul li').children('ul').css(inActiveClass);
    //             self.children('ul').css(activeClass);
    //         }else{
    //             console.log(self.children('ul').css('opacity'), "else")
    //         }
    //     })
    //     $(document).on('click', '.horizontal-menu ul li ul li', function (e) {
    //        $(this).closest('ul.list-unstyled').css(inActiveClass);
    //     });
    // }

    render() {
        const { pathname } = this.props.location
        return (
            <div className="horizontal-menu bg-primary" style={{  backgroundColor: '#2196f3' }}>
                <ul className="list-unstyled nav">
                    <li className="nav-item" style={{ backgroundColor: pathname.includes("survey") && 'white' }}>
                        <Link to="/survey/dashboard" className="nav-link">
                            <i className={`zmdi zmdi-view-dashboard ${pathname.includes("survey") ? 'text-dark' : 'text-light'}`}></i>
                            <span className={`menu-title ${pathname.includes("survey") ? 'text-dark' : 'text-light'}`} >Survey</span>
                        </Link>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category1.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item" style={{ backgroundColor: pathname.includes("poll") && 'white' }}>
                        <Link to="/poll/dashboard" className="nav-link">
                            <i className={`zmdi zmdi-widgets ${pathname.includes("poll") ? 'text-dark' : 'text-light'}`}></i>
                            <span className={`menu-title ${pathname.includes("poll") ? 'text-dark' : 'text-light'}`} >Poll</span>
                        </Link>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category2.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item" style={{ backgroundColor: pathname.includes("assessment") && 'white' }}>
                        <Link to="/assessment" className="nav-link">
                            <i className={`zmdi zmdi-view-carousel ${pathname.includes("assessment") ? 'text-dark' : 'text-light'}`} ></i>
                            <span className={`menu-title ${pathname.includes("assessment") ? 'text-dark' : 'text-light'}`} >Assessment</span>
                        </Link>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category3.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                        {/* <li className="nav-item">
                            <a href="javascript:void(0);" className="nav-link">
                                <i className="zmdi zmdi-wrench"></i>
                                <span className="menu-title"><IntlMessages id="sidebar.features" /></span>
                            </a>
                            <ul className="list-unstyled sub-menu">
                                {navLinks.category4.map((menu, key) => (
                                    <NavMenuItem
                                        menu={menu}
                                        key={key}
                                    />
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="javascript:void(0);" className="nav-link">
                                <i className="zmdi zmdi-assignment-check"></i>
                                <span className="menu-title"><IntlMessages id="sidebar.applications" /></span>
                            </a>
                            <ul className="list-unstyled sub-menu">
                                {navLinks.category5.map((menu, key) => (
                                    <NavMenuItem
                                        menu={menu}
                                        key={key}
                                    />
                                ))}
                            </ul>
                        </li> */}
                </ul>
            </div>
        );
    }
}

export default HorizontalMenu;
