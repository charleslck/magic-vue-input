<template>
  <div class="magic_input_wapper" v-if="unActive!=null">
    <div class="placeholder" :style="{'color': placeholderColor, 'fontSize': unActive? fontSize+'px':'', 'marginTop': unActive? textOffsetBot +'px':''}" :class="{placeholder_active:unActive}">{{placeholder}}</div>
    <input style="display:none">
    <input :style="{'color': textColor, borderColor: lineColor, fontSize: fontSize +'px'}" autocomplete="off" v-if="type=='text'" ref='input' type="text" :maxlength="maxlength" v-model="inputValue" @focus="handleInputFocus(false)" @blur="handleInputFocus(true)">
    <input :style="{'color': textColor, borderColor: lineColor, fontSize: fontSize +'px'}" autocomplete="off" v-if="type=='password'" ref='input' type="password" :maxlength="maxlength" v-model="inputValue" @focus="handleInputFocus(false)" @blur="handleInputFocus(true)">
    <i :style="{'color': closeBtnColor}" v-if="closeShow" @click="handleClear">×</i>
  </div>
</template>

<script>
export default {
  name: 'MagicVueInput',
  data() {
    return {
      unActive: null,
      inputValue: '',
      closeShow: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: 'Type here',
    },
    value: {},
    maxlength: {
      type: Number,
      default: 11,
    },
    type: {
      type: String,
      default: 'text',
    },
    textColor: {
      type: String,
      default: 'blue',
    },
    lineColor: {
      type: String,
      default: 'blue',
    },
    closeBtnColor: {
      type: String,
      default: 'blue',
    },
    placeholderColor: {
      type: String,
      default: 'blue',
    },
    fontSize: {
      type: Number,
      default: 30,
    },
    textOffsetBot: {
      type: Number,
      default: 18,
    },
  },
  watch: {
    inputValue(value) {
      this.$emit('input', value);
      this.handleCloseBtn(value);
    },
  },
  mounted() {
    this.inputValue = this.value;
    this.handleCloseBtn(this.inputValue);
    this.unActive = this.inputValue === '';
  },
  methods: {
    handleInputFocus(flag) {
      this.unActive = this.inputValue === '' && flag;
    },
    handleCloseBtn(data) {
      this.closeShow = (data !== '');
    },
    handleClear() {
      this.inputValue = '';
      this.$refs.input.focus();
    },
  },
};
</script>

<style scoped>
  .magic_input_wapper i {
    cursor: pointer;
    position: relative;
    z-index: 3;
    margin-top: -35px;
    transform: translateX(0px);
    float: right;
    display: block;
    height: 16px;
    width: 16px;
    font-size: 22px;
    transition: .3s all ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;
    font-style: normal;
    background-position: center center;
  }
  .magic_input_wapper input {
    font-size: 25px;
    padding-right: 30px;
    text-indent: 0;
    letter-spacing: 1px;
  }
  .placeholder {
    transition: .3s all ease-in-out;
    position: absolute;
    transform: translateY(-20px);
    z-index: 1;
    color: royalblue;
    opacity: .7;
    font-style: normal;
  }
  .placeholder_active {
    opacity: 1;
  }
  input:-webkit-autofill {
    background-color: transparent !important;
  }
  input[type="text"],
  input[type="password"] {
      display: block;
      border: none;
      background-color: transparent;
      border-bottom: 2px solid royalblue;
      width: 100%;
      color: royalblue;
      outline: none;
      z-index: 2;
      position: relative;
  }
</style>
