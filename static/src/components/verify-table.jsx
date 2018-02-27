import React from 'react'
// import {Button} from 'antd';
import {Button,Table } from 'react-bootstrap';
import ReactDOM from 'react-dom'

import 'antd/lib/layout/style/css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleApprove(id,e){
    e.preventDefault();
    this.props.handleApprove(id);
  }

  handleReject(id,e){
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
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>标题</th>
            <th>作者</th>
            <th width="30%">简介</th>
            <th width="30%">内容</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((el, index) => {
              return (<tr key={index} height="100px">
                <td>
                  {el.title}
                </td>
                <td>
                  {el.author}
                </td>
                <td>
                  {el.description}
                </td>
                <td>
                  {el.content}
                </td>
                <td>
                  {el.status}
                </td>
                <td>

                  <Button bsStyle="primary" style={{marginRight:'20px'}} onClick={this.handleApprove.bind(this,el.id)} >
                      批准
                  </Button>
                  <Button onClick={this.handleReject.bind(this,el.id)}>
                    驳回
                  </Button>
                </td>
              </tr>);
            })
          }
        </tbody>
      </Table>
    </div>)
  }
}

export default App
