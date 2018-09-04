/**
 * App Routes
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import $ from 'jquery';
import { Scrollbars } from 'react-custom-scrollbars';

// Components
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import HorizontalMenu from '../../components/HorizontalMenu/HorizontalMenu';

// app config
import AppConfig from 'Constants/AppConfig';

// actions
import { collapsedSidebarAction, startUserTour } from 'Actions';

class MainApp extends Component {

    state = {
        loadingHeader: true,
        loadingSidebar: true
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        const { windowWidth } = this.state;
        window.addEventListener("resize", this.updateDimensions);
        if (AppConfig.enableUserTour && windowWidth > 600) {
            setTimeout(() => {
                this.props.startUserTour();
            }, 2000);
        }
        setTimeout(() => {
            this.setState({ loadingHeader: false, loadingSidebar: false });
        }, 114);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentWillReceiveProps(nextProps) {
        const { windowWidth } = this.state;
        if (nextProps.location !== this.props.location) {
            if (windowWidth <= 1199) {
                this.props.collapsedSidebarAction(false);
            }
        }
    }

    updateDimensions = () => {
        this.setState({ windowWidth: $(window).width(), windowHeight: $(window).height() });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    renderPage() {
        const { pathname } = this.props.location;
        const { children } = this.props;
        if (pathname === '/app/chat' || pathname.startsWith('/app/mail') || pathname === '/app/todo') {
            return (
                <div className="rct-page-content p-0">
                    {children}
                </div>
            );
        }
        return (
            <Scrollbars
                className="rct-scroll"
                autoHide
                autoHideDuration={100}
                style={this.getScrollBarStyle()}
            >
                <div className="rct-page-content pr-20 pl-20 pt-20">
                    {children}
                </div>
            </Scrollbars>
        );
    }

    // render header
    renderHeader() {
        return <Header />
    }

    //render Sidebar
    renderSidebar() {
        return <div />
    }

    //Scrollbar height
    getScrollBarStyle() {
        return {
            height: 'calc(100vh - 50px)'
        }
    }

    render() {
        return (
            <div className="app customAppContainer">
                <div className="app-main-container customAppMainContainer">
                    <Sidebar
                        sidebar={this.renderSidebar()}
                        rootClassName='customSidebarRootClassName'
                        sidebarClassName='customSidebarClassName'
                        contentClassName='customSidebarContentClassName'
                        overlayClassName='customSidebaroverlayClassName'
                    >
                        <div className="app-container">
                            <div className="rct-app-content">
                                <div className="app-header">
                                    {this.renderHeader()}
                                </div>
                                <div className="rct-page">
                                    <HorizontalMenu {...this.props}/>
                                    {this.renderPage()}
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
                <Footer />
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return { settings }
}

export default withRouter(connect(mapStateToProps, {
    collapsedSidebarAction,
    startUserTour
})(MainApp));
