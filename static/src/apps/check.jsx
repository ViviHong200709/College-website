import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
// import DisplayTable from './../components/check-table/check-table.jsx';
import DisplayTable from './../components/index-table/index-table.jsx';
import { isUserLoginApi } from './../api/validate-login';
import {getApprovedArticleDataApi} from './../api/get-article-data'
import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={isLeaderLogin:false,data:[]};
  }

  componentDidMount(){
    this.isLeaderLogin();
  }

  async isLeaderLogin(){
    let result = await isUserLoginApi();
    if(result&&result.success==true){
      if (result.data.role==='leader') {
        this.setState({isLeaderLogin:true});
        let dataResult = await getApprovedArticleDataApi();
        this.setState({data: dataResult.data});
        console.log('data',this.state.data);
      }
      //领导已登录
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Check</Breadcrumb.Item>
          </Breadcrumb>
          {(this.state.isLeaderLogin?<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <DisplayTable data={this.state.data} role='leader'/>
          </div>:<div>leader未登录</div>)}
        </Content>
      </Layout>
    )
  }
}


export default App
