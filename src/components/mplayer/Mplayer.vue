<template>
  <audio ref="audio" :src="currentItem.file" @loadedmetadata="loadedmetadata" @timeupdate="timeupdate"></audio>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Mplayer',
  computed: {
    ...mapState('player', ['paused', 'volume', 'changeTime']),
    ...mapGetters('list', ['currentItem']),
    audio () {
      return this.$refs.audio
    }
  },
  methods: {
    ...mapMutations('player', ['GET_DURATION', 'GET_CURRENT_TIME']),
    loadedmetadata () {
      this.GET_DURATION(this.audio.duration)
    },
    timeupdate () {
      this.GET_CURRENT_TIME(this.audio.currentTime)
    }
  },
  watch: {
    paused (val) {
      if (val) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
    },
    volume (val) {
      this.audio.volume = val
    },
    changeTime (val) {
      this.audio.currentTime = val
    }
  },
  mounted () {
    this.audio.oncanplay = () => {
      if (!this.paused) {
        this.audio.play()
        this.audio.volume = this.volume
      }
    }
  }
}
</script>
