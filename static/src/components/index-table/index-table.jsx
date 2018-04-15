import React from 'react'
import ReactDOM from 'react-dom'
import {Table, ListGroup, ListGroupItem,Pagination} from 'react-bootstrap'
import $ from 'jquery';
import './index.css';
import * as up from './up.png'
import * as down from './down.png'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDownClick(key,e){
    e.preventDefault();
    $(`#des_${key}`).show();
    $(`#down_arrow_${key}`).hide();
    $(`#up_arrow_${key}`).show();
    let o=$(`#item_${key}`)[0];
    let w=o.offsetWidth;//获得原始宽
    // console.log(o.style.height);
    o.style.height='120px';//设置宽度
  }

  handleUpClick(key,e){
    e.preventDefault();
    $(`#des_${key}`).hide();
    $(`#down_arrow_${key}`).show();
    $(`#up_arrow_${key}`).hide();
    let o=$(`#item_${key}`)[0];
    let w=o.offsetWidth;//获得原始宽
    o.style.height='60px';//设置宽度
  }

  render() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 10; number++) {
      items.push(
        <Pagination.Item active={number === active}>{number}</Pagination.Item>
      );
    }
    const data = this.props.data;
    return (
      <div style={{
        background: '#fff',
        padding: 24,
        minHeight: 280
      }}>
      <ListGroup>
        {data.map((el, index) => {
          return (
            <ListGroupItem id={`item_${index}`} key={index} style={{
                width: '80%',
                height: '60px'
              }}>
              <div className="list_con">
                <div className="title" >
                  <h2>
                      {el.title}
                  </h2>
                  <img id={`down_arrow_${index}`} className="arrow" src={down} onClick={this.handleDownClick.bind(this,index)}/>
                  <img id={`up_arrow_${index}`} style={{display:'none'}} className="arrow" src={up} onClick={this.handleUpClick.bind(this,index)}/>
                </div>
                <div className="list_userbar">
                  <span className="name">
                      {el.author}
                  </span>
                  <span className="time">
                    <a href="#" target="_blank">
                    {el.post_time.substring(0,10)}
                    </a>
                  </span>
                  <span className="strategy">
                    最新文章
                  </span>
                </div>
                <div id={`des_${index}`} style={{display:"none"}}>{el.description}</div>
                {/* <div className="read_num">
                  <p className="num">9</p>
                  <p className="text">阅读量</p>
                </div> */}
              </div>
            </ListGroupItem>
          )
        })}

      </ListGroup>
      <div>
        <Pagination bsSize="large">{items}</Pagination>
      </div>
    </div>)
  }
}

export default App
