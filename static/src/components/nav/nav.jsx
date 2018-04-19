import React from 'react';
import {Nav, NavItem, Button,Col} from 'react-bootstrap';
import {isUserLoginApi} from '../../api/validate-login';
import {signOutApi} from '../../api/sign-out';
import './index.less';
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
    return (<div className="row">
        <Nav bsStyle="tabs" activeKey={this.state.active} onSelect={this.getActiveKey.bind(this)} style={{border:'none'}}>
          <NavItem eventKey={1} href="/">
            主页
          </NavItem>
          <NavItem eventKey={2} href="/upload">
            上传文件
          </NavItem>
          <NavItem eventKey={3} href="/verify">
            审核文件
          </NavItem>
          <NavItem eventKey={4} href="/check">
            查看文件
          </NavItem>
        </Nav>
    </div>);

  }
}

export default HeaderNav;
