// const Child = {
//     functional: true,
//     render(createElement) {
//         return createElement("div", "Child")
//     }
// }
// 还可以写成一个函数
const arr = [1, 2, 3, 4, 5, 6]
const Child = ({ props }) => {
  return <div>{props.prop1}-{arr}</div>
}

export default {
  render () {
    return <Child prop1="test2"></Child>
  }
}
