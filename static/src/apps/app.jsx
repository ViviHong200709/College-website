import React from 'react'
import ReactDOM from 'react-dom'
import { Layout} from 'antd'
import Nav from './../components/header/nav.jsx'
import Header from './../components/header/header.jsx'
import FooterCommon from './../components/footer/footer-common.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {isUserLoginApi} from './../api/validate-login'
import Home from './index.jsx';
import Upload from './upload.jsx';
import Verify from './verify.jsx';
import Check from './check.jsx';

import 'antd/lib/layout/style/css'

const { Content, Footer } = Layout

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={userName:''};
  }

  componentDidMount(){
    this.isUserLogin();
  }

  async isUserLogin(){
    let result= await isUserLoginApi();
    if (result&&result.success===true) {
      this.setState({userName:result.data.userName})
      console.log('result.data:',result.data);
    }
  }

  render() {
    return (
    <div>
      <Header userName={this.state.userName}/>
      <Nav userName={this.state.userName}/>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path='/upload' component={Upload}/>
          <Route path='/verify' component={Verify}/>
          <Route path='/check' component={Check}/>
        </div>
      </Router>
      <FooterCommon />
    </div>// <Layout className="layout">
      // </Layout>
    )
  }
}


export default App