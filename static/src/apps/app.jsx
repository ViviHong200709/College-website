import React from 'react'
import ReactDOM from 'react-dom'
import { Layout} from 'antd'
import Nav from './../components/nav/nav.jsx'
import Header from './../components/header/header.jsx'
import FooterCommon from './../components/footer/footer-common.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {isUserLoginApi} from './../api/validate-login'
import Verify from './verify.jsx';
import Check from './check.jsx';
import CheckOwn from './check-own.jsx';
import UploadArticle from './../components/upload-form/upload-form.jsx'
import UploadSuccess from './upload-success.jsx';

import MembInfoInput from './../components/info-handle/memb-info-input.jsx';
import MembInfoChange from './../components/info-handle/memb-info-change.jsx';
import PatentInfoInput from './../components/info-handle/patent-info-input.jsx';
import PatentInfoChange from './../components/info-handle/patent-info-change.jsx';
import CopyrightInfoInput from './../components/info-handle/copyright-info-input.jsx';
import CopyrightInfoChange from './../components/info-handle/copyright-info-change.jsx';
import Introduction from './introduction.jsx';
import InstitudeIntro from './../components/introduction/institude-intro.jsx';
import 'antd/lib/layout/style/css'

const { Content, Footer } = Layout

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={userName:'',
    role:''
  };
  }

  componentDidMount(){
    this.isUserLogin();
  }

  async isUserLogin(){
    let result= await isUserLoginApi();
    if (result&&result.success===true) {
      this.setState({userName:result.data.userName,role:result.data.role})
      console.log('result.data:',result.data);
    }
  }

  render() {
    return (
    <div>
      <Header userName={this.state.userName}/>
      <Nav userName={this.state.role}/>
      <Router>
        <div>
          <Route exact path="/" component={InstitudeIntro}/>
          <Router>
              <Route path="/intro" component={Introduction}/>
          </Router>
          <Route path='/check_own' component={CheckOwn}/>
          <Route path='/upload_article' component={UploadArticle}/>
          <Route path='/verify' component={Verify}/>
          <Route path='/check' component={Check}/>
          <Route path='/memb_info_input' component={MembInfoInput}/>
          <Route path='/memb_info_change' component={MembInfoChange}/>
          <Route path='/patent_info_input' component={PatentInfoInput}/>
          <Route path='/patent_info_change' component={PatentInfoChange}/>
          <Route path='/copyright_info_input' component={CopyrightInfoInput}/>
          <Route path='/copyright_info_change' component={CopyrightInfoChange}/>
          <Route path='/upload_success' component={UploadSuccess}/>
        </div>
      </Router>
      <FooterCommon />
    </div>
    )
  }
}


export default App
