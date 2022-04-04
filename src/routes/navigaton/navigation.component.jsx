import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <nav className='navigation'>
                <Link className="logo-container" to="/">
                    <div className="logo">LOGO</div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='shop'>SHOP</Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;