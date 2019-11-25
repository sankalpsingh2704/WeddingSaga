import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { requestLogin } from '../actions/loginAction';

 class Login extends React.PureComponent{
    
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
    }
    componentDidMount () {
        console.log("Did Mount");
        
    }
    componentDidUpdate () {
        console.log("Did Update");
    }
    requestSubmit = _ =>{
        console.log(this.username.current.value,this.password.current.value);
        this.props.requestLoginUser({
            username: this.username.current.value,
            password: this.password.current.value
        });
    }
    render(){
        return (
            <form>
                <label htmlFor="username"><input type="text" id="username" name="username" ref={this.username} /></label>
                <label htmlFor="password"><input type="password" id="password" name="password" ref={this.password} /></label>
                <input type="button" onClick={this.requestSubmit} value="Login" />
            </form>

        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return  {
        logginResult: state.loginReducer
    }
}
const mapDispachtoProps = dispatch => {
    return {
        requestLoginUser: (loginInfo) =>{
            dispatch(requestLogin(loginInfo));
        }
    }
}
export default compose(connect(mapStateToProps,mapDispachtoProps))(Login);