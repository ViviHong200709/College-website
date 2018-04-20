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
} from 'react-bootstrap'
import $ from 'jquery'
import Request from './../../utils/request'
import {uploadApi} from './../../api/upload';
import upload from '../../utils/upload.js'

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
         signInForm( values )
      } else if ( result && result.message ){
        console.error(result.message);
      }
    } else {
      console.error( '系统繁忙，稍后再试！' );
    }
  }

  upload(){
    $('#uploadForm').show();
    $('#abandonUploadBtn').show();
    $('#uploadBtn').hide();
  }
  abandonUpload(){
    $('#uploadForm').hide();
    $('#abandonUploadBtn').hide();
    $('#uploadBtn').show();
  }
   getFormValues(e) {
    let form = e.target.elements;
    let title = form.title.value;
    let description = form.description.value;
    let author = form.author.value;
    let content=form.content.value;
    let file = this.fileUpload.files[0];
    upload(file);
    let filename= file.name;
    let formModel={title,description,author,content,filename};
    return formModel;
  }

  render() {
    return (
      <div style={{
        background: '#fff',
        padding: 24
      }}>
        <Button id='uploadBtn' onClick={this.upload.bind(this)}>上传文章</Button>
        <Button id='abandonUploadBtn' onClick={this.abandonUpload.bind(this)} style={{display:'none'}}>放弃上传</Button>
        <Form  id="uploadForm" method="POST" action="/api/article/fileupload.json"  encType="multipart/form-data" style={{display:'none'}}>
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

        <FormGroup className="row">
          <Col componentClass={ControlLabel} md={1}>
            附件
          </Col>
          <Col md={3}>
            <input
              type='file' label='Upload' name='file'
              // ref={(ref) => this.fileUpload = ref}
            />
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

      </Form>
      </div>
  );
  }
}
export default SignInForm
