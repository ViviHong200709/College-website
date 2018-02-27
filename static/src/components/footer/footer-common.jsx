import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'antd'
const {  Footer } = Layout

class FooterCommon extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        高性能计算网站©2017 Created by hyt
      </Footer>
    )
  }
}


export default FooterCommon
