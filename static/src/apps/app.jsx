import React from 'react'
import ReactDOM from 'react-dom'
import { Layout} from 'antd'
import Nav from './../components/nav/nav.jsx'
import Header from './../components/header/header.jsx'
import FooterCommon from './../components/footer/footer-common.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {isUserLoginApi} from './../api/validate-login'
import Home from './index.jsx';
import Upload from './upload.jsx';
import Verify from './verify.jsx';
import Check from './check.jsx';
import UploadSuccess from './upload-success.jsx';

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
          <Route exact path="/" component={Home}/>
          <Route path='/upload' component={Upload}/>
          <Route path='/verify' component={Verify}/>
          <Route path='/check' component={Check}/>
          <Route path='/upload_success' component={UploadSuccess}/>
        </div>
      </Router>
      <FooterCommon />
    </div>// <Layout className="layout">
      // </Layout>
    )
  }
}


export default App
