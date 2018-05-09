import React from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  ControlLabel,
  FieldGroup,
  Row,
  Col,
  Input,
  Label
} from 'react-bootstrap';
import MultiSelect from './../multi-select/multi-select.jsx';
import $ from 'jquery';
import {uploadUserDataApi} from './../../api/upload-memb-data.js';
import {isUserLoginApi} from './../../api/validate-login.js';
import './index.less'

let values;
class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={isAdminLogin: false,selectedOptions:[]};
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
      }
    }
  }
  async handleSubmit(e) {
    e.preventDefault()
    let values = await this.getFormValues(e)
    if ( values ) {
      let result = await uploadUserDataApi( values )
      if ( result && result.success === true ) {
        alert('录入成功');
        location.reload();
      } else if ( result  ){
        alert('录入失败')
      }
    } else {
      console.error( '系统繁忙，稍后再试！' );
    }
  }

  getFormValues(e) {
    let form = e.target.elements;
    let id = form.id.value;
    let name = form.name.value;
    let profession_title = values;
    let research_area = form.research_area.value;
    let formModel = {
      id,
      name,
      profession_title,
      research_area
    };
    console.log(formModel);
    return formModel;
  }

  select(selectedOptions){
    if (selectedOptions) {
      values=selectedOptions
    }

  }

  render() {
    return (<div className="box">
      {this.state.isAdminLogin==false?<div>管理员未登录</div>:
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            工号
          </Col>
          <Col md={3}>
            <FormControl type="text" name="id" placeholder="请输入工号"/>
          </Col>
        </FormGroup>

        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            姓名
          </Col>
          <Col md={3}>
            <FormControl type="text" name="name" placeholder="请输入姓名"/>
          </Col>
        </FormGroup>

        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            职称
          </Col>
          <Col md={3}>
            <MultiSelect handleSelect={(selectedOptions)=>{this.select(selectedOptions)}}/>
          </Col>
        </FormGroup>

        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            研究方向
          </Col>
          <Col md={3}>
            <select id="city" className="select" name="research_area">
              <option value="并行体系结构与算法">并行体系结构与算法</option>
              <option value="网络与分布式计算">网络与分布式计算</option>
              <option value="高性能与分布式计算应用">高性能与分布式计算应用</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <Col md={1}></Col>
          <Col md={3}>
            <Button type="submit">
              提交
            </Button>
          </Col>
        </FormGroup>

      </Form>}
    </div>);
  }
}
export default SignInForm
