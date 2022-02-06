import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// ); 

//jsx的本质是语法糖，能够将html代码转换成js对象
var word = <h1>hello word</h1>
console.log('word', word)
var rootDiv = document.querySelector('#root')

function Dfr () {
  return (
    <div>
      <h1>hello dfr</h1>
      {/* 加注释  */}
      <p>厉害的小姑娘</p>
    </div>
  )
}
let style = {
  width: "200px",
  height: "200px",
  backgroundColor: "orange"
}
let title = 'dfr love meme '

// 函数式组件
let Header = (props) => {
  return (
    <h1>这是{props.type}头部</h1>
  )
}

// 类组件，有状态
class Footer extends React.Component {
  // 渲染函数调用后，渲染返回的是什么jsx对象，就显示什么内容

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  // }

  state = {
    count: 0
  }

  static defaultProps = {
    type: "meme"
  }

  change () {
    // 修改数据，并渲染页面
    this.setState({ count: ++this.state.count })
  }
  render () {
    return (
      <h1 onClick={this.change.bind(this)}>这是{this.props.type}底部,点击了{this.state.count}</h1>
    )
  }
}



let meme = (
  <div>
    <Header type="首页"></Header>
    <Header type="内容"></Header>
    <Dfr />
    <div style={style}> {title} snowman</div>
    <Footer type="首页"></Footer>
    <Footer type="内容"></Footer>
    <Footer ></Footer>
  </div>
)
ReactDOM.render(meme, rootDiv)



// If you want to start measuring performance in your app, pass a function
// to log results (fo+          r example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 展示网页整体性能
reportWebVitals();
