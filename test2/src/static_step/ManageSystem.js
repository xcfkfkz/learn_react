/**
 * 最外层的 应用容器
 */

import React from 'react'; // 包的重复引用没有问题，es6 会处理这个问题
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader.js'; // 下面分别引入 四个定义好的组件，注意引入语法和定义语法
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';
import './style.css'

// 模拟的数据，注意数据格式 类似 python dataFrame
// 最外层是数组，代表多行数据。每行数据是一个对象，代表一条记录。 这个定义方式也符合 orm 的定义。
var rawData = [{ info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'}},
               { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生'}},
               { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生'}},
               { info: {descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习'}},
               { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习'}},
               { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生'}},
               { info: {descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任'}},
               { info: {descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'}},
               { info: {descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'}},
               { info: {descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'}},
               { info: {descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}}];

// 定义 最外层的容易 App 包含上面的子元素               
class App extends React.Component {
    // 我们看到 有了上面的定义 这里非常简洁
    render(){
      return (
        <div>
          <StaffHeader/>
          <StaffItemPanel items={rawData} />
          <StaffFooter/>
          <StaffDetail/>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));