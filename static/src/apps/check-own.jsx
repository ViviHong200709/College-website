import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb,Input } from 'antd'
import UploadForm from './../components/upload-form/upload-form.jsx'
import {isUserLoginApi} from './../api/validate-login.js'
import {getArticleByUsername} from './../api/get-article-data';
import DisplayTable from './../components/index-table/index-table.jsx';
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
      <div style={{
        background: '#fff',
        padding: '20px'
      }}>
          {(this.state.isTeacherLogin)?<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <DisplayTable data={this.state.data} role='teacher'/>
          </div>:<div>教师未登录</div>}
      </div>
    )
  }
}


export default App
