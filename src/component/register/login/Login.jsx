import React, {useEffect, useState} from 'react';
import classes from "./Login.module.scss";
import InputUI from "../../UI/input-ui/InputUI";
import MyButton from "../../UI/my_button/MyButton";

const Login = (props) => {
    const {toggleShowSignUp} = props;
    const [login, setLogin] = useState({
        userName: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)


    const toggleToShowLogin = (e) => {

    }
    const toggleLogin = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setLogin({
            ...login,
            [name]: value
        })
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className={classes.login}>
            <h1 className={classes.loginTitle}>Вход</h1>
            <InputUI
                placeholder={'Username...'}
                type={'text'}
                value={login.userName}
                name={'userName'}
                onChange={toggleLogin}
            />
            <InputUI
                placeholder={'Password...'}
                type={showPassword ? 'text' : 'password'}
                value={login.password}
                name={'password'}
                onChange={toggleLogin}
            />
            <label
                className={classes.showPassword}
                onClick={toggleShowPassword}
            >
                <input type="checkbox" id='showPassword'/>
                Show password
            </label>
            <MyButton className={classes.loginBtn}>
                ВОЙТИ
            </MyButton>
            <MyButton
                className={classes.signUpBtn}
                onClick={toggleShowSignUp}
            >
                ЗАРЕГИСТРИРОВАТЬся
            </MyButton>
        </div>

    );
};

export default Login;