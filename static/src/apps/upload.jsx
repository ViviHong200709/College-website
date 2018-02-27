import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb,Input } from 'antd'
import UploadForm from './../components/upload-form.jsx'
import {isUserLoginApi} from './../api/validate-login.js'

import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={isTeacherLogin:false};
  }

  componentDidMount(){
    this.isTeacherLogin();
  }

  async isTeacherLogin(){
    let result= await isUserLoginApi();
    if (result&&result.success===true) {
      if (result.data.role==='teacher') {
        this.setState({isTeacherLogin:true});
      }
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>upload</Breadcrumb.Item>
          </Breadcrumb>
          {(this.state.isTeacherLogin)?<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <UploadForm/>
          </div>:<div>teacher is not login...</div>}
        </Content>
      </Layout>
    )
  }
}


export default App
