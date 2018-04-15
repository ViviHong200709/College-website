import React from 'react'
import ReactDOM from 'react-dom'
import {getApprovedArticleDataApi} from './../api/get-article-data.js';
import DisplayTable from './../components/index-table/index-table'
import {Table} from 'react-bootstrap';


import 'antd/lib/layout/style/css'


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
        <div style={{ padding: '0 50px' }}>
          {this.state.alreadyGetData===true?<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <DisplayTable data={articleData}/>
          </div>:<div>无法获得数据</div>}
        </div>
    )
  }
}


export default App
