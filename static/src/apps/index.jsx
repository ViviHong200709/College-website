import React from 'react'
import ReactDOM from 'react-dom'
import { Layout,Breadcrumb} from 'antd'
import {getApprovedArticleDataApi} from './../api/get-article-data.js';
import DisplayTable from './../components/index-table'
import {Table} from 'react-bootstrap';


import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={alreadyGetData:false,data:[]};
  }

  componentDidMount(){
    this.getApprovedArticleData();
  }

  async getApprovedArticleData(){
    const result = await getApprovedArticleDataApi();
    if (result&&result.success==true) {
      this.setState({alreadyGetData:true,data:result.data});
    }
  }

  render() {
    let articleData=this.state.data;
    return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          {this.state.alreadyGetData===true?<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <DisplayTable data={articleData}/>
          </div>:<div>无法获得数据</div>}
      </Content>
      </Layout>
    )
  }
}


export default App
