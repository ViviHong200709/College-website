import React from 'react'
// import {Button} from 'antd';
import {Button, ListGroup, ListGroupItem, Pagination} from 'react-bootstrap'
import $ from 'jquery';

import ReactDOM from 'react-dom'

import 'antd/lib/layout/style/css'
import './index.css';
import * as up from './up.png'
import * as down from './down.png'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDownClick(key, e) {
    e.preventDefault();
    $(`#des_${key}`).show();
    $(`#down_arrow_${key}`).hide();
    $(`#up_arrow_${key}`).show();
    let o = $(`#item_${key}`)[0];
    // let w = o.offsetWidth; //获得原始宽
    o.style.height=o.offsetHeight+$(`#des_${key}`).height()+'px';
  }

  handleUpClick(key, e) {
    e.preventDefault();
    $(`#des_${key}`).hide();
    $(`#down_arrow_${key}`).show();
    $(`#up_arrow_${key}`).hide();
    let o = $(`#item_${key}`)[0];
    // let w = o.offsetWidth; //获得原始宽
  o.style.height=o.offsetHeight-$(`#des_${key}`).height()+'px';
  }

  handleApprove(id, e) {
    e.preventDefault();
    this.props.handleApprove(id);
  }

  handleReject(id, e) {
    e.preventDefault();
    this.props.handleReject(id);
  }

  render() {
    const data = this.props.data;
    return (<div style={{
        background: '#fff',
        padding: 24,
        minHeight: 280
      }}>
      <ListGroup>
        {
          data.map((el, index) => {
            return (<ListGroupItem id={`item_${index}`} key={index} style={{
                width: '800px',
                height: '60px'
              }}>
              <div className="list_con">
                <div className="title">
                  <h2>
                    <a href={'/static/upload/' + el.src}>{el.title}</a>
                  </h2>
                  <img id={`down_arrow_${index}`} className="arrow" src={down} onClick={this.handleDownClick.bind(this, index)}/>
                  <img id={`up_arrow_${index}`} style={{
                      display: 'none'
                    }} className="arrow" src={up} onClick={this.handleUpClick.bind(this, index)}/>
                    <div className="operation">
                      <Button bsStyle="primary" style={{
                        marginRight: '20px'
                      }} onClick={this.handleApprove.bind(this, el.id)}>
                      批准
                    </Button>
                    <Button onClick={this.handleReject.bind(this, el.id)}>
                      驳回
                    </Button>
                  </div>
                </div>
                <div className="list_userbar">
                  <span className="name">
                    {el.author}
                  </span>
                  <span className="time">
                    <a href="#" target="_blank">
                      {el.post_time.substring(0, 10)}
                    </a>
                  </span>
                  <span className="strategy">
                    {el.status}
                  </span>
                </div>
                <div id={`des_${index}`} style={{
                    display: "none"
                  }}>{el.description}</div>
              </div>
            </ListGroupItem>)
          })
        }

      </ListGroup>
      {/* <div>
        <Pagination bsSize="large">{items}</Pagination>
      </div> */
      }
    </div>)
    //   <div style={{
    //     background: '#fff',
    //     padding: 24,
    //     minHeight: 280
    //   }}>
    //   <Table striped bordered condensed hover>
    //     <thead>
    //       <tr>
    //         <th>标题</th>
    //         <th>作者</th>
    //         <th width="30%">简介</th>
    //         {/* <th width="30%">内容</th> */}
    //         <th>状态</th>
    //         <th>操作</th>
    //         <th>链接</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {
    //         data.map((el, index) => {
    //           return (<tr key={index} height="100px">
    //             <td>
    //               {el.title}
    //             </td>
    //             <td>
    //               {el.author}
    //             </td>
    //             <td>
    //               {el.description}
    //             </td>
    //             {/* <td>
    //               {el.content}
    //             </td> */}
    //             <td>
    //               {el.status}
    //             </td>
    //             <td>
    //
    //               <Button bsStyle="primary" style={{marginRight:'20px'}} onClick={this.handleApprove.bind(this,el.id)} >
    //                   批准
    //               </Button>
    //               <Button onClick={this.handleReject.bind(this,el.id)}>
    //                 驳回
    //               </Button>
    //             </td>
    //             <td>  <a href={'/static/upload/'+el.src}>预览</a></td>
    //           </tr>);
    //         })
    //       }
    //     </tbody>
    //   </Table>
    // </div>)
  }
}

export default App
