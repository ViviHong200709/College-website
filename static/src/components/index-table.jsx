import React from 'react'
import {Button} from 'antd'
import ReactDOM from 'react-dom'
import {Table} from 'react-bootstrap'
import 'antd/lib/layout/style/css'

class App extends React.Component {
  constructor(props) {
    super(props);
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
              </tr>);
            })
          }
        </tbody>
      </Table>
    </div>)
  }
}

export default App
