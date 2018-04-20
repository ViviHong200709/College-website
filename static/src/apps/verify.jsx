import React from 'react'
import ReactDOM from 'react-dom'
import {Layout, Menu, Breadcrumb} from 'antd'
import DisplayTable from './../components/index-table/index-table.jsx';
import {isUserLoginApi} from './../api/validate-login.js';
import {getAllArticleDataApi} from './../api/get-article-data';
import {approveArticleDataApi,rejectArticleDataApi} from './../api/handle-article-data';

import 'antd/lib/layout/style/css'

const {Header, Content, Footer} = Layout

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdminLogin: false,
      data: []
    };
  }

  componentDidMount() {
    this.isAdminLogin();
  }

  async isAdminLogin() {
    let result = await isUserLoginApi();
    if (result && result.success === true) {
      if (result.data.role==='admin') {
        //管理员已登录
        this.setState({isAdminLogin: true});
        let dataResult = await getAllArticleDataApi();
        this.setState({data: dataResult.data});
      }
    }
  }

  async approve(id,e){
    let result= await approveArticleDataApi({'id':id});
    if (result && result.success === true) {
      location.reload();
    }
  }

  async reject(id,e){
    let result =await rejectArticleDataApi({'id':id});
    if (result&& result.success === true) {
      location.reload();
    }
  }

  render() {
    return (<Layout className="layout">
      <Content style={{
          padding: '0 50px'
        }}>
        <Breadcrumb style={{
            margin: '12px 0'
          }}>
          <Breadcrumb.Item>verify</Breadcrumb.Item>
        </Breadcrumb>
        {
          this.state.isAdminLogin
            ? <div style={{
                  background: '#fff',
                  padding: 24,
                  minHeight: 280
                }}>
                {
                  this.state.data.length > 0
                    ? <DisplayTable data={this.state.data}
                      handleApprove={(id)=>{this.approve(id)}}
                      handleReject={(id)=>{this.reject(id)}} role='admin'/>
                    : <div>暂无数据</div>
                }
              </div>
            : <div>管理员未登录</div>
        }
      </Content>
    </Layout>)
  }
}

export default App
