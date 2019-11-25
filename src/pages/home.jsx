import React, { useState, useContext, useEffect, useCallback, useRef, useMemo, useLayoutEffect,
useReducer, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import {loginReducer} from '../reducers/loginReducer';
/*
export default class Home extends React.Component{
    render(){
        return (
            <div>
                This is a Home Page
                <Link to="Login" > Login Page</Link>
            </div>

        )
    }
}*/
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
const ThemeContext = React.createContext(themes);
 const Home = (props) => {
    
    
    const [name, clickHandler] = useState({firstname:"Sankalp", lastName: "Narayan"});
   
    useEffect(_=> {
        console.log(props);
    })
   
    return (<div>
                <p>You clicked{` ${name.firstname} ${name.lastName}`}</p>
                
                <button onClick={_=> clickHandler({firstname:"Khushbu",lastName:"Verma"})}>Click Me</button>
                <ThemeContext.Consumer>
                    {value => <button style={{background:value.dark.background,color: value.dark.foreground}} onClick={_=> clickHandler({firstname:"Khushbu",lastName:"Verma"})}>Consumer</button>}
                </ThemeContext.Consumer>
                
                <ThemeContext.Provider value={themes.dark}>
                    <ThemeButton/>
                </ThemeContext.Provider>
                <ReduxArea/>
            </div>
    )
}
const ThemeButton = props => {
    const myTheme = useContext(ThemeContext);
    useEffect(()=>{
        console.log(myTheme);
    });
    return(
        <div>
            <button style={{backgroundColor:myTheme.background, color: myTheme.foreground}}>Themed Provoider Button</button>
        </div>
    )
}


const ReduxArea = _ => {
    const [state,dispatch] = useReducer(loginReducer,{
        username: "sankalp",
        password: "",
        response: ""
    });
    return (
        <div>
            <div>{`Total Count is: ${state.username}` }</div>
            <button onClick={() => dispatch({type: 'RESULTLOGIN',response:{username:"khushbu",password:"verma"}})}>+</button>
        </div>

    )

}

export default Home;