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
import $ from 'jquery';
import {uploadPatentDataApi} from './../../api/upload-patent-data.js';
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
      let result = await uploadPatentDataApi( values )
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
    let apl_id = form.apl_id.value;
    let formModel = {
      id,
      name,
      apl_id
    };
    console.log(formModel);
    return formModel;
  }

  render() {
    return (<div className="box">
      {this.state.isAdminLogin==false?<div>管理员未登录</div>:
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            序号
          </Col>
          <Col md={3}>
            <FormControl type="text" name="id" placeholder="请输入序号"/>
          </Col>
        </FormGroup>

        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            专利名称
          </Col>
          <Col md={3}>
            <FormControl type="text" name="name" placeholder="请输入专利名称"/>
          </Col>
        </FormGroup>

        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            申请号
          </Col>
          <Col md={3}>
            <FormControl type="text" name="apl_id" placeholder="请输入申请号"/>
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
