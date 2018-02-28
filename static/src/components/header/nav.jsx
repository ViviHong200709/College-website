import React from 'react';
import {Nav, NavItem, Button,Col} from 'react-bootstrap';
import {isUserLoginApi} from '../../api/validate-login';
import {signOutApi} from '../../api/sign-out';
// import './index.css';
class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1
    };
  }

  componentDidMount() {
    this.setState({active: this.getActiveKey()});
  }

  getActiveKey() {
    let location = window.location.href;
    let index = location.lastIndexOf('/');
    let url = location.substring(index);
    let activeKey = -1;
    switch (url) {
      case '/':
        activeKey = 1;
        break;
      case '/upload':
        activeKey = 2;
        break;
      case '/verify':
        activeKey = 3;
        break;
      case '/check':
        activeKey = 4;
        break;
      default:

    }
    return activeKey;
  }

  handleLogin() {
    window.location.href = "/login";
  }

  handleLogOut(){
    let result=signOutApi();
    location.reload();
  }

  render() {
    const signOutBtn = {
      position: 'absolute',
      right: '80px',
      top: '0px',
      height: '39px'
    };
    const signInBtn = {
      position: 'absolute',
      right: '150px',
      top: '0px',
      height: '39px'
    };
    const welcome = {
      position: 'absolute',
      right: '150px',
      top: '0px',
      lineHeight: '39px'
    };
    return (<div className="row" style={{borderBottom:"solid 1px #ccc"}}>
      <Col md={12}>
        <Nav bsStyle="tabs" activeKey={this.state.active} onSelect={this.getActiveKey.bind(this)} style={{border:'none'}}>
          <NavItem eventKey={1} href="/">
            主页
          </NavItem>
          <NavItem eventKey={2} href="/upload" title="upload">
            教师上传文件
          </NavItem>
          <NavItem eventKey={3} href="/verify">
            管理员审核文件
          </NavItem>
          <NavItem eventKey={4} href="/check">
            领导查看文件
          </NavItem>
        </Nav>
      </Col>
      {/* <Col md={4} style={{fontSize:'16px',lineHeight:'39px',height:'39px'}}>
        <div style={{textAlign:'center'}}>
          {
            this.props.userName
            ? <div >欢迎你,{this.props.userName} <Button bsStyle="link" onClick={this.handleLogOut}>注销</Button></div>
            : <Button bsStyle="primary" onClick={this.handleLogin}>
              登录
            </Button>
          }
        </div>
      </Col> */}
    </div>);

  }
}

export default HeaderNav;