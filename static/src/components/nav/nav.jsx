import React from 'react';
import {Nav, NavItem, Button,Col,NavDropdown,MenuItem } from 'react-bootstrap';
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
      case 'check_own':
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
          <NavDropdown id="home" title="主页"  eventKey={1} >
            <MenuItem eventKey={1.1} href="/intro/institude_intro">研究所简介</MenuItem>
            <MenuItem eventKey={1.2} href="/intro/academician_intro">院士简介</MenuItem>
            <MenuItem eventKey={1.3} href="/intro/memb_intro">研究所主要成员</MenuItem>
            <MenuItem eventKey={1.4} href="/intro/scientific_res">科研成果</MenuItem>
            <MenuItem eventKey={1.5} href="/intro/paper_intro">代表性论文</MenuItem>
          </NavDropdown>
          <NavDropdown id="teacher" eventKey={2} title="教师操作" >
            <MenuItem eventKey={2.1} href="/upload_article">上传文件</MenuItem>
            <MenuItem eventKey={2.2} href="/check_own">查询成果</MenuItem>
          </NavDropdown>
          <NavDropdown id="admin" eventKey={3} title="管理">
            <MenuItem eventKey={3.1} href="/verify">管理论文</MenuItem>
            <MenuItem eventKey={3.2} href="/memb_info_input">录入成员数据</MenuItem>
            <MenuItem eventKey={3.3} href="/memb_info_change">修改成员数据</MenuItem>
            <MenuItem eventKey={3.4} href="/patent_info_input">录入专利</MenuItem>
            <MenuItem eventKey={3.5} href="/patent_info_change">修改专利</MenuItem>
            <MenuItem eventKey={3.6} href="/copyright_info_input">录入软件著作权</MenuItem>
            <MenuItem eventKey={3.7} href="/copyright_info_change">修改软件著作权</MenuItem>
          </NavDropdown>
          <NavDropdown id="leader" eventKey={4} title="查阅">
            <MenuItem eventKey={4.1} href="/check">查阅论文</MenuItem>
          </NavDropdown>
        </Nav>
    </div>);

  }
}

export default HeaderNav;
