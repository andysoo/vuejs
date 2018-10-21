import './progress.scss'
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handlerClick (e) {
      let progress = (e.clientX - this.$refs.progressbar.getBoundingClientRect().left) / this.$refs.progressbar.clientWidth
      this.$emit('changeProgress', progress)
      console.log(progress)
    }
  },
  render () {
    return (
      <div ref='progressbar' class="components-progress" onClick={this.handlerClick}>
        <div class="progress" style={{ width: `${this.value}%` }}></div>
      </div>
    )
  }
}
