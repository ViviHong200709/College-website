import React from 'react'
// import { Form,Upload, Icon, Input, Button, Checkbox, message } from 'antd';
// import {Upload,Icon} from 'antd'
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  ControlLabel,
  FieldGroup,
  Row,
  Col,
  Glyphicon
} from 'react-bootstrap'
import Request from './../utils/request'
import {uploadApi} from './../api/upload';
//
// const FormItem = Form.Item;

// const SignInForm = Form.create()(React.createClass({
class SignInForm extends React.Component {
  constructor(props){
    super(props);
  }

  async handleSubmit(e) {
    e.preventDefault()
    let values = await this.getFormValues(e)
    console.log(values);
    if ( values ) {
      let result = await uploadApi( values )
      if ( result && result.success === true ) {
        console.log('申请成功');
        // message.success( '申请成功' )
         signInForm( values )
      } else if ( result && result.message ){
        console.error(result.message);
        // message.error( result.message )
      }
    } else {
      console.error( '系统繁忙，稍后再试！' );
      // message.error( '系统繁忙，稍后再试！' )
    }
  }


  getFormValues(e) {
    let form = e.target.elements;
    let title = form.title.value;
    let description = form.description.value;
    let author = form.author.value;
    let content=form.content.value;
    let formModel={title,description,author,content};
    return formModel;
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (<Form  onSubmit={this.handleSubmit.bind(this)} >
      <FormGroup className="row">
        <Col componentClass={ControlLabel} md={1}>
          标题
        </Col>
        <Col md={3}>
          <FormControl type="text" name="title" placeholder="请输入标题"/>
        </Col>
      </FormGroup>

      <FormGroup className="row">
        <Col componentClass={ControlLabel} md={1}>
          简介
        </Col>
        <Col md={3}>
          <FormControl type="text" name="description" placeholder="请输入简介"/>
        </Col>
      </FormGroup>

      <FormGroup className="row">
        <Col componentClass={ControlLabel} md={1}>
          作者
        </Col>
        <Col md={3}>
          <FormControl type="text" name="author" placeholder="请输入作者"/>
        </Col>
      </FormGroup>

      <FormGroup className="row">
        <Col componentClass={ControlLabel} md={1}>
          正文
        </Col>
        <Col md={5}>
          <FormControl componentClass="textarea" name="content" placeholder="请输入正文"/>
        </Col>
      </FormGroup>

      <FormGroup>
        {/* <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button> */}
        <Col componentClass={ControlLabel} md={1}>
          附件
        </Col>
        <Col md={3}>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </Col>
        {/* <Upload > */}
          {/* <Button type="submit"> */}
            {/* <Icon type="upload"/>
            Click to Upload */}
          {/* </Button> */}
        {/* </Upload> */}
      </FormGroup>

      <FormGroup className="row">
        <Col md={1}></Col>
        <Col md={3}>
          <Button type="submit">
            提交
          </Button>
        </Col>
      </FormGroup>

    </Form>);
    // <div style={{ width: "280px", margin: "0 auto" }}>
    //    <Form onSubmit={this.handleSubmit} className="login-form">
    //    <FormItem style={{marginBottom:"15px"}}>
    //      {getFieldDecorator('title', {
    //        rules: [{ required: true}],
    //      })(
    //        <div>标题<Input type="text" name="title" /></div>
    //      )}
    //     </FormItem>
    //     <FormItem style={{marginBottom:"15px"}}>
    //       {getFieldDecorator('description', {
    //         rules: [{ required: true}],
    //       })(
    //         <div>简介<Input type="text" name="description" /><br/></div>
    //       )}
    //     </FormItem>
    //     <FormItem style={{marginBottom:"15px"}}>
    //       {getFieldDecorator('author', {
    //         rules: [{ required: true}],
    //       })(
    //         <div>作者<Input type="text" name="author" /><br/></div>
    //       )}
    //     </FormItem>
    //     <FormItem style={{marginBottom:"15px"}}>
    //       {getFieldDecorator('content', {
    //         rules: [{ required: true}],
    //       })(
    //         <div>正文<textarea name="content"></textarea><br/></div>
    //       )}
    //     </FormItem>
    //     <FormItem style={{marginBottom:"15px"}}>
    //       <Upload >
    //         <Button type="submit">
    //           <Icon type="upload" /> Click to Upload
    //         </Button>
    //       </Upload>
    //     </FormItem>
    //     <FormItem>
    //     <Button
    //       type="primary"
    //       htmlType="submit"
    //     >
    //       上传
    //     </Button>
    //   </FormItem>
    //   </Form>
    // </div>);
  }
}
export default SignInForm
