import React from 'react'
import pic from './cgl.png'
import './index.less'

class App extends React.Component {
  render() {
    return (
      <div className="box">
          <span className="title">院士简介</span>
          <span className="sub-title">陈国良院士</span>
        <table width="100%" cellSpacing="3" cellPadding="3">
          <tbody>
            <tr>
              <td >
                <img alt="" src={pic} style={{
                    height: '278px',
                    width: '196 px',
                    marginRight:'15px'
                  }}/>
              </td>
              <td>
                <p >
                  陈国良，深圳大学和中国科学技术大学教授、博士生导师，中国科学院院士，全国首届高等学校教学名师。1938年6月生于安徽省颍上县，1961年毕业于西安交通大学计算数学与计算仪器专业。现任深圳大学计算机与软件学院和中国科学技术大学软件学院院长，国家高性能计算中心（合肥）主任，教育部高等学校计算机基础课程教学指导委员会主任，国际高性能计算（亚洲）常务理事，中国计算机学会理事和高性能计算专业委员会主任等。
                </p>
                <p >
                  陈国良教授主要研究领域为并行算法和高性能计算及其应用等。先后承担了国家863计划、国家攀登计划、国家973计划、国家自然科学基金等10多项科研项目。取得了多项被国内外广泛引用、达国际先进水平的研究成果。发表论文200多篇，出版学术著作和教材10部。曾获国家科技进步二等奖、教育部科技进步一等奖、中科院科技进步二等奖、国家级教学成果二等奖、水利部大禹一等奖、安徽省科技进步二等奖、2009年度安徽省重大科技成就奖等共20项，并获863计划15周年先进个人重要贡献奖和宝钢教育基金优秀教师特等奖以及安徽省劳动模范光荣称号。
                </p>
                <p >
                  多年来，陈国良教授围绕着并行算法的教学与研究，逐渐形成了“算法理论－算法设计－算法实现－算法应用”一套完整的并行算法学科体系，提出了“并行机结构－并行算法－并行编程”一体化的并行计算研究方法，建立了我国第一个国家高性能计算中心，营造了我国并行算法类的科研和教学基地，培养了100多名研究生，是我国非数值并行算法研究的学科带头人，在国内外学术界和教育界有一定的影响和地位。
                </p>
              </td>
            </tr>
          </tbody>
        </table>

    </div>)
  }
}

export default App;
