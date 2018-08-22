import React from 'react';
import $ from 'jquery';
import {Table,Button} from 'react-bootstrap';
import {getCopyrightInfoApi} from './../../api/get-copyright-data.js';
import {deleteCopyrightInfoApi} from './../../api/handle-copyright-data.js';
import {uploadCopyrightDataApi} from './../../api/upload-copyright-data.js';
import {isUserLoginApi} from './../../api/validate-login.js';
import './index.less'

let values=[];

 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       isAdminLogin: false,
       data: []
     };
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
         let dataResult = await this.getCopyrightInfoData();
       }
     }
   }
   async getCopyrightInfoData() {
     let result = await getCopyrightInfoApi();
     if (result && result.success == true) {
       this.setState({ data: result.data});
     }
   }

   handleDelete(id, e) {
     alert('确定删除吗？')
     e.preventDefault();
     let result=deleteCopyrightInfoApi({'id':id});
     if (result) {
       alert('删除成功！')
       location.reload();
     }
   }



   async finishChange(item,e){
     e.preventDefault();
     let result=await deleteCopyrightInfoApi({'id':item.id});
     if (result) {
         let values =  this.getFormValues(item)
         if ( values ) {
             let uploadResult =await  uploadCopyrightDataApi( values )
             if ( uploadResult&&uploadResult.success==true) {
               alert('修改成功');
               location.reload();
             } else{
               alert('修改失败')
             }
           } else {
             console.error( '系统繁忙，稍后再试！' );
           }
     }
   }

   getFormValues(item) {
     let id = $(`#change_${item.id} input[name='id']`).val();
     let name =$(`#change_${item.id} input[name='name']`).val();
     let reg_id=$(`#change_${item.id} input[name='reg_id']`).val();
     if (!id) {
       id=item.id;
     }
     if (!name) {
       name=item.name;
     }
     if (!reg_id) {
       reg_id=item.reg_id;
     }
     console.log(id,name,reg_id);
     let formModel = {
       id,
       name,
       reg_id
     };
     return formModel;
   }
   handleChange(id,e) {
     e.preventDefault();
     $(`#display_${id}`).hide();
     $(`#change_${id}`).show();
   }

   abandonChange(id,e){
     e.preventDefault();
     $(`#change_${id}`).hide();
     $(`#display_${id}`).show();
   }

   render(){
     return(
       <div className="box">
         {(this.state.isAdminLogin==false)
           ?<div>管理员未登录</div>
           :<Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>序号</th>
              <th>著作权名称</th>
              <th>申请号</th>
              <th>操作</th>
            </tr>
          </thead>
              {
                this.state.data.map(item => {
                  return (
                  <tbody key={item.id} >
                    <tr id={`display_${item.id}`}>
                      <td>
                        <font face="Verdana">{item.id}
                        </font>
                      </td>
                      <td>
                        <font face="Verdana">{item.name}
                        </font>
                      </td>
                      <td>
                        <font face="Verdana">{item.reg_id}
                        </font>
                      </td>
                      <td>
                        <Button bsStyle="primary" style={{
                          marginRight: '20px'
                        }} onClick={this.handleDelete.bind(this, item.id)}>
                        删除
                      </Button>
                      <Button onClick={this.handleChange.bind(this, item.id)}>
                        修改
                      </Button>
                    </td>
                  </tr>
                  <tr id={`change_${item.id}`} style={{display:'none'}}>
                    <td>
                      <input name="id" placeholder={item.id}/>
                    </td>
                    <td>
                        <input name="name" placeholder={item.name}/>
                    </td>
                    <td>
                        <input name="reg_id" placeholder={item.reg_id}/>
                    </td>
                    <td>
                      <Button bsStyle="primary" style={{
                        marginRight: '20px'
                      }} onClick={this.abandonChange.bind(this, item.id)}>
                      放弃修改
                    </Button>
                    <Button onClick={this.finishChange.bind(this, item)}>
                      完成修改
                    </Button>
                  </td>
                </tr>
              </tbody>);})}
        </Table>}
       </div>
     )
   }
 }

 export default App;
