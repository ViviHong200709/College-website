import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb,Input } from 'antd'
import UploadForm from './../components/upload-form/upload-form.jsx'
import {isUserLoginApi} from './../api/validate-login.js'
import {getArticleByUsername} from './../api/get-article-data';
import DisplayTable from './../components/check-table/check-table.jsx';
import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={isTeacherLogin:false,data:[]};
  }

  componentDidMount(){
    this.isTeacherLogin();
  }

  async isTeacherLogin(){
    let result= await isUserLoginApi();
    if (result&&result.success===true) {
      if (result.data.role==='teacher') {
        this.setState({isTeacherLogin:true});
        let articleResult = await getArticleByUsername(result.data.userName);
        console.log('articleResult',articleResult.data);
        this.setState({data:articleResult.data})
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
              <DisplayTable data={this.state.data}/>
            <UploadForm/>
          </div>:<div>teacher is not login...</div>}
        </Content>
      </Layout>
    )
  }
}


export default App
