import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb,Input } from 'antd'
import 'antd/lib/layout/style/css';
// import LoginForm from './../components/sign-in-form.jsx';
import LoginForm from './../components/login-form.jsx';
// import './../bootstrap/css/bootstrap.min.css';

const { Header, Content, Footer } = Layout

class App extends React.Component {
  render() {
    return (
      <div  style={{margin:"150px auto"}}>
        <LoginForm/>
      </div>
    )
  }
}


export default App
