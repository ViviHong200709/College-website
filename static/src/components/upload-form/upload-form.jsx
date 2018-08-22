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
import {isUserLoginApi} from './../../api/validate-login';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTeacherLogin: false,
      author: ''
    };

  }

  componentDidMount() {
    this.isTeacherLogin();
  }

  async isTeacherLogin() {
    let result = await isUserLoginApi();
    if (result && result.success == true) {
      if (result.data.role === 'teacher') {
        //教师已登录
        let username=result.data.userName;
        this.setState({isTeacherLogin: true, author:username});
      }
    }
  }
  async handleSubmit(e) {
    var imgSize = document.getElementById("userfile").files[0].size;
    if (imgSize > 1024 * 1024 * 5) {
      e.preventDefault();
      alert("文件大小超过了5M")
    }
    // e.preventDefault()
    // let values = await this.getFormValues(e)
    // console.log(values);
    // if ( values ) {
    //   let result = await uploadApi( values )
    //   if ( result && result.success === true ) {
    //     console.log('申请成功');
    //      signInForm( values )
    //   } else if ( result && result.message ){
    //     console.error(result.message);
    //   }
    // } else {
    //   console.error( '系统繁忙，稍后再试！' );
    // }
  }

  //  getFormValues(e) {
  //   let form = e.target.elements;
  //   let title = form.title.value;
  //   let description = form.description.value;
  //   let author = form.author.value;
  //   let content=form.content.value;
  //   let file = this.fileUpload.files[0];
  //   upload(file);
  //   let filename= file.name;
  //   let formModel={title,description,author,content,filename};
  //   return formModel;
  // }

  render() {
    return (<div style={{
        background: '#fff',
        padding: '20px'
      }}>
      {
        this.state.isTeacherLogin == false
          ? <div>教师未登录</div>
          : <Form id="uploadForm" method="POST" action="/api/article/fileupload.json" encType="multipart/form-data">
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
                  <FormControl type="text" name="author" value={this.state.author}/>
                </Col>
              </FormGroup>

              <FormGroup className="row">
                <Col componentClass={ControlLabel} md={1}>
                  附件
                </Col>
                <Col md={3}>
                  <input type='file' id="userfile" label='Upload' name='file' accept='application/msword'/>
                </Col>
              </FormGroup>

              <FormGroup className="row">
                <Col md={1}></Col>
                <Col md={3}>
                  <Button type="submit" onClick={this.handleSubmit.bind(this)}>
                    提交
                  </Button>
                </Col>
              </FormGroup>

            </Form>
      }
    </div>);
  }
}
export default SignInForm
