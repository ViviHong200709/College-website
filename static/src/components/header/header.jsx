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

  handleLogin() {
    window.location.href = "/login";
  }

  handleLogOut(){
    let result=signOutApi();
    location.reload();
  }

  render() {
    return (<div className="container row" style={{width:'100%'}}>
      <Col sm={3} className="logo"><img  src={logo} alt=""/></Col>
      <Col sm={5} className="system-name">计算机学院高性能计算网站</Col>
      <Col sm={3} className="welcome">
        {
          this.props.userName
          ? <div>欢迎你,{this.props.userName} <Button bsStyle="link" onClick={this.handleLogOut}>注销</Button></div>
          : <Button bsStyle="primary" onClick={this.handleLogin}>
            登录
          </Button>
        }
      </Col>
      {/* <Col sm={1}></Col> */}
    </div>);
  }
}

export default App;
