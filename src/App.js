import logo from './logo.svg';
import './App.css';

function App (props) {
  let content;
  if (props.vip === "true") {
    content = <h1>VIP您好，欢迎回来</h1>
  } else {
    content = <h1>分享砍会员红包</h1>
  }
  return (
    <div className="App">
      {/* 条件渲染 */}
      {content}
      {/* 通过三元运算符实现条件渲染 */}
      {props.vip == "true" ? <h1>VIP等级s</h1> : <h1>充值领取VIP</h1>}
      <Listcon></Listcon>
    </div>
  );
}

// 列表组件
function Listcon (params) {
  let students = ["xiaoming", "xiaohong", "xiaohei"]
  let stars = [<li>魏晨</li>, <li>张云雷</li>, <li>meme</li>]
  let studentsJsx = students.map((ele, i) => {
    return <li key={i}>{ele}</li>
  })
  return (
    <div>
      {/* 数组渲染列表 */}
      {/* <ul>
        {students}
      </ul>
      <ul>
        {stars}
      </ul> */}
      <ul>
        {studentsJsx}
      </ul>
    </div>
  )
}
export default App;
