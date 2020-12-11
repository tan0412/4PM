import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/Menu/MenuLeft.css"
class MenuLeft extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    
    render() {
        return (
            <div className="Menu-Left">
                <Link to="/">
                    <div className = "Logo">
                        <h1>Logo</h1>
                    </div>
                </Link>
                <div className="nav-menu drop-down">

                    <div className="drop-down-porfolio nav-item">
                        Category
                    </div>
                    <div className="sub-menu">
                    <Link to="/Beauty">
                        <div className = "nav-item">
                            Beauty
                        </div>
                    </Link>
                    <Link to="/Food">
                        <div className = "nav-item">
                            Food
                        </div>
                    </Link>
                    <Link to="/Product">
                        <div className = "nav-item">
                            Product
                        </div>
                    </Link>
                    <Link to="/Fashion">
                        <div className = "nav-item">
                            Fashion
                        </div>
                    </Link>
                    <Link to="/Outdoor">
                        <div className = "nav-item">
                            Outdoor
                        </div>
                    </Link>
                    <Link to="/Indoor">
                        <div className = "nav-item">
                            Indoor
                        </div>
                    </Link>
                    </div>
                </div>
            <Link to="/Home">
                <div className="drop-down-porfolio nav-item">
                    Trang chủ
                </div>
            </Link>
            <Link to="/">
                <div className="drop-down-porfolio nav-item">
                    Trang admin
                </div>
            </Link>
            <Link to="/">
                <div className="drop-down-porfolio nav-item">
                    Báo giá dịch vụ
                </div>
            </Link>
            <Link to="/">
                <div className="drop-down-porfolio nav-item">
                    Giới thiệu
                </div>
            </Link>
            <Link to="/">
                <div className="drop-down-porfolio nav-item">
                    Liên hệ 
                </div>
            </Link>

            </div>
            
        );
    }
}

export default MenuLeft;