import React from 'react';
import {Table} from 'react-bootstrap'
import {getMembInfoApi} from './../../api/get-user-data.js';
import './index.less'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadyGetData: false,
      data: []
    };
  }

  componentDidMount() {
    this.getUserInfoData();
  }

  async getUserInfoData() {
    let result = await getMembInfoApi();
    if (result && result.success == true) {
      this.setState({alreadyGetData: true, data: result.data});
      console.log(result.data, 'result.data');
    }
  }

  render() {
    return (
      <div className="box">
          <span className="title">研究所主要成员</span>
        {/* <p align="left">
	<strong>教授 (3人)</strong></p>
<p align="left">
<strong>樊建席</strong>，男，教授，博士，博士生导师。获香港城市大学计算机科学专业博士学位。美国《Math. Reviews》评论员。研究方向包括高性能与分布式计算、算法、图论等。在包括IEEE TC、IEEE TPDS、Info. Sci.、Algorithmica、JPDC、计算机学报、计算机研究与发展等在内的国内外学术期刊和国际学术会议上共发表学术论文四十多篇，其中被SCI 收录14 篇（第一作者）、EI 收录30篇。先后主持国家自然科学基金项目和省自然科学基金项目3项。
<br/>
<strong>朱艳琴</strong>，女，教授，博士。现任苏州大学计算机科学与技术学院副院长，硕士生导师。主要研究方向有：计算机网络、信息安全技术、应用密码学等，内容涉及计算机网络体系结构、高强度密码算法及协议、PKI与数字证书技术、无线网技术、P2P网络及应用、信息隐藏与数字水印技术等。在国内外重要学术刊物以及国内外学术会议上发表论文五十余篇，其中多篇被EI、ISTP检索。长期从事计算机研究和教学工作，编写出版了计算机网络教材2部。
<br/>
<strong>张广泉</strong>，男，教授，博士、中国科学院计算机科学国家重点实验室博士后。1999年6月毕业于重庆大学计算机软件与理论专业并获工学博士学位，1996年任副教授、2002年任教授，2004.6～2009.5任苏州大学计算机学院软件工程系主任。1999年起任硕士生导师，主要研究兴趣包括网络化软件与服务计算、软件体系结构与形式化方法、无线网与协议分析等。先后承担10多项国家级、省部级科研项目，在国内外学术期刊/会议发表论文多篇。现任中国计算机学会软件工程、系统软件和理论计算机科学三个专业委员会委员。 <br/><br/></p>
<p align="left">
	<strong>教师及研究所人员 ( 14人 )</strong></p> */
        }
        <Table striped bordered condensed hover style={{marginTop:'15px'}}>
       <thead>
         <tr>
           <th>工号</th>
           <th>姓名</th>
           <th>职称</th>
           <th>研究方向</th>
         </tr>
       </thead>
       <tbody>
           {
             this.state.data.map(item => {
               return (
                 <tr key={item.id} id={`display_${item.id}`}>
                   <td>
                     <font face="Verdana">{item.id}
                     </font>
                   </td>
                   <td>
                     <font face="Verdana">{item.name}
                     </font>
                   </td>
                   <td>
                     <font face="Verdana">{item.profession_title.map((pt_item)=>{
                       return (<span>{pt_item}  </span>)
                     })}</font>
                   </td>
                   <td>
                     <font face="Verdana">{item.research_area}</font>
                   </td>
               </tr>

          );})}
           </tbody>
     </Table>
    </div>)
  }
}

export default App;
