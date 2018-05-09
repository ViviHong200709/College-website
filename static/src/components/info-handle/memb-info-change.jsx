import React from 'react';
import $ from 'jquery';
import {Table,Button} from 'react-bootstrap';
import {getMembInfoApi} from './../../api/get-user-data.js';
import {deleteMembInfoApi,changeMembInfoApi} from './../../api/handle-memb-data.js';
import {uploadUserDataApi} from './../../api/upload-memb-data.js';
import {isUserLoginApi} from './../../api/validate-login.js';

import './index.less'

let values=[];

import MultiSelect from './../multi-select/multi-select.jsx'
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
         let dataResult = await this.getUserInfoData();
         this.setState({data: dataResult.data});
       }
     }
   }
   async getUserInfoData() {
     let result = await getMembInfoApi();
     if (result && result.success == true) {
       this.setState({ data: result.data});
     }
     console.log('getUserInfoData result');
   }

   handleDelete(id, e) {
     alert('确定删除吗？')
     e.preventDefault();
     let result=deleteMembInfoApi({'id':id});
     if (result) {
       alert('删除成功！')
       location.reload();
     }
   }



   async finishChange(item,e){
     e.preventDefault();
     let result=await deleteMembInfoApi({'id':item.id});
     if (result) {
         let values =  this.getFormValues(item)
         if ( values ) {
             let uploadResult =await  uploadUserDataApi( values )
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
     console.log(item,'item');
     let id = $("input[name='id']").val();
     let name =$("input[name='name']").val();
     let profession_title=values
     let research_area = $("input[name='research_area']").val();
     if (!id) {
       id=item.id;
     }
     if (!name) {
       name=item.name;
     }
     if (!research_area) {
       research_area=item.research_area;
     }
     console.log(id,name,profession_title,research_area);
     let formModel = {
       id,
       name,
       profession_title,
       research_area
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

   select(selectedOptions){
     if (selectedOptions) {
       values=selectedOptions
     }
   }

   render(){
     return(
       <div className="box">
         {(this.state.isAdminLogin==false)
           ?<div>管理员未登录</div>
           :<Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>工号</th>
              <th>姓名</th>
              <th>职称</th>
              <th>研究方向</th>
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
                        <font face="Verdana">{item.profession_title.map((pt_item)=>{
                          return (<span>{pt_item}  </span>)
                        })}</font>
                      </td>
                      <td>
                        <font face="Verdana">{item.research_area}</font>
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
                      <MultiSelect name="profession_title"  handleSelect={(selectedOptions)=>{this.select(selectedOptions)}}/>
                    </td>
                    <td>
                      <select id="city" name="research_area">
                        <option value="并行体系结构与算法">并行体系结构与算法</option>
                        <option value="网络与分布式计算">网络与分布式计算</option>
                        <option value="高性能与分布式计算应用">高性能与分布式计算应用</option>
                      </select>
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
