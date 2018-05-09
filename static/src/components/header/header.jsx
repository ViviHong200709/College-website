import React from 'react';
import {Nav, NavItem, Button,Col} from 'react-bootstrap';
import {isUserLoginApi} from '../../api/validate-login';
import {signOutApi} from '../../api/sign-out';
import logo from './logo.png';
import './index.less';
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  handleLogOut(){
    let result=signOutApi();
    location.reload();
  }

  render() {
    return (
      <div className="container row" style={{width:'100%'}}>
        <div  className="logo"><img  src={logo} alt=""/></div>
        <div className="system-name">苏州大学高性能计算与应用研究所</div>
        {
          this.props.userName
          ? <div  className="welcome">欢迎你,{this.props.userName} <Button bsStyle="link" onClick={this.handleLogOut}>注销</Button></div>
          : <div className="btn-login" >
            <a href="/login">如有账号,请登陆</a>
          </div>
        }
      </div>);
  }
}

export default App;
