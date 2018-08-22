import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    alert('上传成功！')
    window.location.href='/check_own'
  }

  render() {
    return (<div></div>
    )
  }
}


export default App
