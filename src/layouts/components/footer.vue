<template>
  <div style="padding:20px;">
    <div style="margin-bottom:20px;">
      <strong><span>Store 데이터 기록하기</span></strong> <br>
      <a href="https://bethbang1004.github.io">bethbang1004.github.io</a>
    </div>
    <router-view />
    <div style="width:30%;">
      <div class="locate" @click="test1()" v-if="footerBtnStatus == 0">
        <vs-button class="buttonStyle">test1_on</vs-button>
      </div>
      <div class="locate" @click="test1()" v-if="footerBtnStatus != 0">
        <vs-button color="dark" class="buttonStyle">test1_off</vs-button>
      </div>
      <div class="locate" @click="test2()" v-if="footerBtnStatus == 1">
        <vs-button class="buttonStyle">test2_on</vs-button>
      </div>
      <div class="locate" @click="test2()" v-if="footerBtnStatus != 1">
        <vs-button color="dark" class="buttonStyle">test2_off</vs-button>
      </div>
      <div class="locate" @click="test3()" v-if="footerBtnStatus == 2">
        <vs-button class="buttonStyle">test3_on</vs-button>
      </div>
      <div class="locate" @click="test3()" v-if="footerBtnStatus != 2">
        <vs-button color="dark" class="buttonStyle">test3_off</vs-button>
      </div>
      <div class="locate" @click="test4()" v-if="footerBtnStatus == 3">
        <vs-button class="buttonStyle">test4_on</vs-button>
      </div>
      <div class="locate" @click="test4()" v-if="footerBtnStatus != 3">
        <vs-button color="dark" class="buttonStyle">test4_off</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    footerBtnStatus () {
      return this.$store.state.footerBtnStatus
    }
  },
  methods: {
    test1 () {
      this.$store.commit('SET_FOOTER_STATUS', 0)
      this.$router.push('/')
    },
    test2 () {
      this.$store.commit('SET_FOOTER_STATUS', 1)
      this.$router.push('/views/test2')
    },
    test3 () {
      this.$store.commit('SET_FOOTER_STATUS', 2)
      this.$router.push('/views/test3')
    },
    test4 () {
      this.$store.commit('SET_FOOTER_STATUS', 3)
      this.$router.push('/views/test4')
    }
  }
}
</script>

<style>
.buttonStyle{
  width: 75px;
  margin-right: 5px;
}

.locate{
  float: left;
  width: 25%;
}
</style>
