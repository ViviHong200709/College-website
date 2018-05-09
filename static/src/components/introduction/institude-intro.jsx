import React from 'react';
import {Panel,ListGroup,ListGroupItem} from 'react-bootstrap'
import './index.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <span className="title" >高性能计算与应用研究所</span>
      <span className="sub-title">研究所简介</span>
      <p align="left">高性能计算的发展水平是衡量一个国家综合国力和国际竞争力的重要指标，
        已成为世界各国竞相争夺的战略制高点。目前高性能计算在国民经济、国防建设、科学研究
        等领域的作用日益显著，已经成为继理论科学、实验科学后的第三种科学方法，已被广泛地
        应用在数字试验、数字模拟、数字仿真等方面。</p>
      <p>苏州大学高性能计算与应用研究所成立于2009年，现任所长为我国非数值并行算法研究的
        学科领军人陈国良院士。研究人员的梯队结构合理，具有较好的理论基础和实践能力。研究
        所目前拥有科研人员18人，研究生63人，其中具有正高级职称的4人，副高职称的3人，中
        级职称的10人，具有博士学位的11人。科研工作主要集中在并行体系结构与算法、网络与分
        布式计算、高性能与分布式计算应用等方向。研究所成员在国内外学术期刊和国际学术会议
        上发表论文三百多篇，其中在包括IEEE Trans. on Para. and Dist. Systems、IEEE
        Trans. on Computers、Info. Sci.、Algorithmica、J. of Para. and Dist. Compu
        ting等在内的SCI期刊上发表论文二十多篇。</p>
        <p>目前，研究所拥有实验用房660多平方
        米。建有曙光集群一套，包括一个A620r-FX管理节点、20个计算节点（每节点16个CPU，32G
        B内存）、一个胖计算节点（32个CPU，32GB内存）、4.8TB存储节点；IBM集群系统一套，包
        含一个OpenPower710管理节点、28个JS20计算节点（每节点2个CPU，4GB内存）、14个HS2
        0 WEB应用节点、1TB DS4300存储节点、4TB DS4500存储节点。两套UPS： Emerson和APC分
        别对应曙光集群和IBM集群，高档微机70 多台。</p>
      <span className="sub-title">主要研究方向</span>
      <span className="sm-title">一、并行体系结构与算法</span>
      <Panel collapsible defaultExpanded header="Panel heading">
        <ListGroup fill>
          <ListGroupItem>（1）新型高性能多处理机互连结构及性能研究</ListGroupItem>
          <ListGroupItem>（2）高性能高可用并行计算系统</ListGroupItem>
          <ListGroupItem>（3）并行与分布式数据库</ListGroupItem>
          <ListGroupItem>（4）多核计算机体系结构研究</ListGroupItem>
        </ListGroup>
      </Panel>
      <span className="sm-title">二、网络与分布式计算</span>
      <Panel collapsible defaultExpanded header="Panel heading">
        <ListGroup fill>
          <ListGroupItem>（1）无线网络</ListGroupItem>
          <ListGroupItem>（2）网络安全与可信计算</ListGroupItem>
          <ListGroupItem>（3）网络测量与管理</ListGroupItem>
          <ListGroupItem>（4）分布式系统资源管理</ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel collapsible defaultExpanded header="Panel heading">
        <span className="sm-title">三、高性能与分布式计算应用</span>
        <ListGroup fill>
          <ListGroupItem>（1）新型高性能多处理机互连结构及性能研究</ListGroupItem>
          <ListGroupItem>（2）水资源保护</ListGroupItem>
          <ListGroupItem>（3）生物信息学中的高性能计算</ListGroupItem>
        </ListGroup>
      </Panel>
    </div>)
  }
}

export default App
