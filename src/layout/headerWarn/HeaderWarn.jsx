import React, {useContext} from 'react';
import classes from "./Headerwarn.module.scss";
import {Link} from "react-router-dom";
import {MyContext} from "../../provider/Provider";

const HeaderWarn = (props) => {
    const {className} = props;
    const context = useContext(MyContext);
    const headerWarn = context.headerWarn;
    const toggleShowLogin = context.register.toggleShowLogin

    return (
        <div className={className}>
            <div className="container">
                <div className={classes.header_warn}>
                    <div className={classes.warn_menu}>
                        {headerWarn && headerWarn.map(warn =>
                            <Link to={warn.link.toLocaleLowerCase()} key={warn.id}
                                  className={classes.warn_menuItem}>{warn.name}</Link>
                        )}
                    </div>
                    <div className={classes.warn_menu}>
                        <span
                            draggable={false}
                            className={classes.warn_menuItem}
                            onClick={toggleShowLogin}
                        >
                            Профиль
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderWarn;