export default {
  name: "app",
  data() {
    return {
      msg: 123,
      isShow: true,
      arr: [4, 5, 6]
    }
  },
  render() {
    return (
      <div>
        <div v-show={this.isShow}>{this.msg}</div>
        <input type="text" v-model={this.msg} />
        {
          this.arr.map(element => <div>{element}</div>)
        }
      </div>
    )
  }
}