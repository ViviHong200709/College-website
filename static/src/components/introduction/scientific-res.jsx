import React from 'react';
import {Table } from 'react-bootstrap';
import {getCopyrightInfoApi} from './../../api/get-copyright-data.js';
import {getPatentInfoApi} from './../../api/get-patent-data.js';

import './index.less'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={copyrightData:[],patentData:[]}
  }

  async componentDidMount(){
    let copyrightResult = await getCopyrightInfoApi();
    if (copyrightResult&&copyrightResult.success==true) {
      this.setState({copyrightData:copyrightResult.data})
    }else{
      alert('获取著作权数据失败')
    };
    let patentResult= await getPatentInfoApi();
    if (patentResult&&patentResult.success==true) {
      this.setState({patentData:patentResult.data});
    }else {
      alert('获取专利数据失败')
    }
    console.log(patentResult,'pantetResult',copyrightResult,'copyrightResult');
  }

  render() {
    return (<div className="box">
        <span className="title">主要科研成果</span>
    {/*
      <p>纵向：</p>
      <Table striped bordered condensed hover style={{marginTop:'15px'}}>
            <tbody>
              <tr height="34">
                <td height="34" style={{
                    height: '34px',
                    width: '64px'
                  }}>
                  序号</td>
                <td style={{
                    width: '231px'
                  }}>
                  经费来源</td>
                <td style={{
                    width: '366px'
                  }}>
                  项目名称</td>
                <td style={{
                    width: '79px'
                  }}>时间
                </td>
              </tr>
              <tr height="42">
                <td height="42" style={{
                    height: '42px'
                  }}>
                  1</td>
                <td >
                  国家自然科学基金</td>
                <td >BC图多处理器网络类中基于限制故障集条件下的可靠单播和广播研究</td>
                <td >2009-2011</td>

              </tr>
              <tr height="42">
                <td height="42" >
                  2</td>
                <td >江苏省自然科学基金项目</td>
                <td >类超立方体网络上的高容错通信研究</td>
                <td >2009-2011</td>

              </tr>
              <tr height="42">
                <td height="42">
                  3</td>
                <td >江苏省自然科学基金项目</td>
                <td >基于PKI、ECC的高强度VPN安全网关技术与核心系统的研究</td>
                <td >2004-2007</td>
              </tr>
              <tr height="42">
                <td height="42" >
                  4</td>
                <td >江苏省高校自然科学研究项目</td>
                <td >基于分布式资源协作的P2P视频点播交互性支持研究</td>
                <td >2008-2010</td>
              </tr>
              <tr height="42">
                <td height="42">
                  5</td>
                <td >苏州市应用基础研究计划项目</td>
                <td >基于下一代互联网的IPTV关键应用技术研究</td>
                <td >2009-2011</td>
              </tr>
            </tbody>
          </Table>

          <p>
            横向：</p>
            <Table striped bordered condensed hover style={{marginTop:'15px'}}>

            <tbody>
              <tr height="34">
                <td height="34" style={{height:'34px',width:'40px'}}>
                  序号</td>
                <td >
                  项目名称</td>
                <td >时间</td>

              </tr>
              <tr height="21">
                <td height="21">
                  1</td>
                <td >嵌入式视频防伪系统</td>
                <td >2009-2010</td>

              </tr>
              <tr height="21">
                <td height="21">
                  2</td>
                <td>支持交互操作的P2P视频点播系统关键技术研究，江苏省基础研究计划</td>
                <td>2010-2012</td>

              </tr>
              <tr height="21">
                <td height="21">
                  3</td>
                <td >嵌入式码本技术</td>
                <td >2006-2007</td>

              </tr>
              <tr height="21">
                <td height="21">
                  4</td>
                <td >网络计费项目</td>
                <td >2005-2006</td>

              </tr>
              <tr height="21">
                <td height="21">
                  5</td>
                <td >基于网格中文信息综合处理平台技术研究，江苏省工业高技术研究项目</td>
                <td >2005-2007</td>

              </tr>
              <tr height="21">
                <td height="21">
                  6</td>
                <td >IPCG综合计费系统，省高校科研成果产业化推进项目</td>
                <td >2007-2009</td>

              </tr>

            </tbody>
          </Table> */}

          <p>
            专利：</p>
            <Table striped bordered condensed hover style={{marginTop:'15px'}}>
                  <tbody>
                    <tr height="34">
                      <td height="34">
                        序号</td>
                      <td >
                        专利名称</td>
                      <td >申请号</td>

                    </tr>
                    {
                      this.state.patentData.map((item)=>{
                        return (<tr key={item.id}>
                          <td height="21">
                            {item.id}</td>
                          <td >{item.name}</td>
                          <td >{item.apl_id}</td>
                        </tr>)
                      })
                    }
                  </tbody>
                </Table>
                <p>
                  &nbsp;</p>
                <p>
                  软件著作权：</p>
                  <Table striped bordered condensed hover style={{marginTop:'15px'}}>
                  <tbody>
                    <tr height="34">
                      <td height="34">
                        序号</td>
                      <td >
                        著作权名称</td>
                      <td>登记号</td>

                    </tr>
                    {
                      this.state.copyrightData.map((item)=>{
                        return (<tr key={item.id}>
                          <td height="21">
                            {item.id}</td>
                          <td >{item.name}</td>
                          <td >{item.reg_id}</td>
                        </tr>)
                      })
                    }
                  </tbody>
                </Table>
          </div>)
  }
}

export default App;
