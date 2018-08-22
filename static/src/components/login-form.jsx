import React from 'react';
import { Form,FormGroup,ControlLabel,FormControl,Button,Checkbox,Col,Row } from 'react-bootstrap';
import Request from './../utils/request'
import { signInApi, signInForm } from './../api/sign-in'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleSubmit(e) {
    e.preventDefault()

    let values = await this.getFormValues(e)
    if ( values ) {
      let result = await signInApi( values )
      if ( result && result.success === true ) {
        signInForm( values )
      } else if ( result && result.message ){
        alert( '认证失败')
      }
    }
  }


  getFormValues(e) {
    let form = e.target.elements;
    let userName = form.username.value;
    let password = form.password.value;
    let remember = form.remember.checked;
    let formModel={userName,password,remember};
    return formModel;
  }


  render(){
    return (
      <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup  className="row">
          <Col md={4}></Col>
          <Col componentClass={ControlLabel} md={1} >
            用户名
          </Col>
          <Col md={3}>
            <FormControl type="text" name="username"  ref="username" placeholder="请输入用户名" />
          </Col>
          {/* <Col md={4}></Col> */}
        </FormGroup>

        <FormGroup className="row">
          <Col md={4}></Col>
          <Col componentClass={ControlLabel} md={1}>
            密码
          </Col>
          <Col md={3}>
            <FormControl type="password" name="password" placeholder="请输入密码" />
          </Col>
          <Col md={4}></Col>
        </FormGroup>

        <FormGroup className="row">
          <Col md={4}></Col>
          <Col mdOffset={4} md={4}>
            <Checkbox name="remember" defaultChecked="true">记住密码</Checkbox>
          </Col>
          {/* <Col md={4}></Col> */}
        </FormGroup>

        <FormGroup className="row">
          <Col md={5}></Col>
          <Col  md={2}>
            <Button type="submit" style={{width:'180px'}}>
              登录
            </Button>
          </Col>
          <Col md={5}></Col>
        </FormGroup>
      </Form>
    )
  }
}

export default Login;
