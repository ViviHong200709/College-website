import React from 'react'
import ReactDOM from 'react-dom'
import {Table, ListGroup, ListGroupItem, Pagination, Button} from 'react-bootstrap'
import $ from 'jquery';
import './index.css';
import * as up from './up.png'
import * as down from './down.png'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  componentDidMount() {
  }

  handleDownClick(key, e) {
    e.preventDefault();
    $(`#des_${key}`).show();
    $(`#down_arrow_${key}`).hide();
    $(`#up_arrow_${key}`).show();
    let o = $(`#item_${key}`)[0];
    o.style.height = o.offsetHeight + $(`#des_${key}`).height() + 'px';
  }

  handleUpClick(key, e) {
    e.preventDefault();
    $(`#des_${key}`).hide();
    $(`#down_arrow_${key}`).show();
    $(`#up_arrow_${key}`).hide();
    let o = $(`#item_${key}`)[0];
    o.style.height = o.offsetHeight - $(`#des_${key}`).height() + 'px';
  }

  handleApprove(id, e) {
    e.preventDefault();
    this.props.handleApprove(id);
  }

  handleReject(id, e) {
    e.preventDefault();
    this.props.handleReject(id);
  }

  changePage(id, e) {
    e.preventDefault();
    this.setState({activePage: id})
  }

  prevPage(e) {
    e.preventDefault();
    let nextActivePage = 1;
    if (this.state.activePage != 1) {
      nextActivePage = this.state.activePage - 1;
    }
    this.setState({activePage: nextActivePage});
  }

  nextPage(pageCount, e) {
    e.preventDefault();
    let nextActivePage = pageCount;
    if (this.state.activePage != pageCount) {
      nextActivePage = this.state.activePage + 1;
    }
    this.setState({activePage: nextActivePage});
  }

  render() {
    const data = this.props.data;
    let items = [];
    let count = 5;
    let pageCount = Number.parseInt(data.length / count + (
      data.length % count == 0
      ? 0
      : 1));
    for (let number = 1; number <= pageCount; number++) {
      items.push(<Pagination.Item key={number} id={`page_${number}`} active={number === this.state.activePage} onClick={this.changePage.bind(this, number)}>{number}</Pagination.Item>);
    }
    let dataShown = data.slice(count * (this.state.activePage - 1), count * this.state.activePage)
    return (<div style={{
        background: '#fff',
        padding: 24,
        minHeight: 280
      }}>
      <ListGroup>
        {
          dataShown.map((el, index) => {
            return (<ListGroupItem id={`item_${index}`} key={index} style={{
                width: '80%',
                height: '60px'
              }}>
              <div className="list_con">
                <div className="title">
                  <h2>
                    {
                      this.props.role
                        ? <a href={`/static/upload/${el.src}`}>{el.title}</a>
                        : <span>
                            {el.title}
                          </span>
                    }
                  </h2>
                  <img id={`down_arrow_${index}`} className="arrow" src={down} onClick={this.handleDownClick.bind(this, index)}/>
                  <img id={`up_arrow_${index}`} style={{
                      display: 'none'
                    }} className="arrow" src={up} onClick={this.handleUpClick.bind(this, index)}/> {
                    this.props.role == 'admin'
                      ? <div className="operation">
                          {
                            el.status == 'approved'
                              ? null
                              : <Button bsStyle="primary" style={{
                                    marginRight: '20px'
                                  }} onClick={this.handleApprove.bind(this, el.id)}>
                                  批准
                                </Button>
                          }
                          <Button onClick={this.handleReject.bind(this, el.id)}>
                            驳回
                          </Button>
                        </div>
                      : null
                  }
                  {
                    this.props.role == 'teacher' && el.status == 'unapproved'
                      ? <div className="operation">
                          <Button bsStyle="primary" style={{
                              marginRight: '20px'
                            }}>
                            撤销申请
                          </Button>
                        </div>
                      : null
                  }
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
                  }}>
                  {el.description}
                </div>
              </div>
            </ListGroupItem>)
          })
        }
      </ListGroup>
      <div>
        <Pagination bsSize="large">
          <Pagination.Prev onClick={this.prevPage.bind(this)}/> {items}
          <Pagination.Next onClick={this.nextPage.bind(this, pageCount)}/>
        </Pagination>
      </div>
    </div>)
  }
}

export default App
