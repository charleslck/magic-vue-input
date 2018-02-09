<template>
  <div class="magic_input_wapper" v-if="unActive!=null">
    <div class="placeholder" :class="{placeholder_active:unActive}">{{placeholder}}</div>
    <input style="display:none">
    <input autocomplete="off" v-if="type=='text'" ref='input' type="text" :maxlength="maxlength" v-model="inputValue" @focus="handleInputFocus(false)" @blur="handleInputFocus(true)">
    <input autocomplete="off" v-if="type=='password'" ref='input' type="password" :maxlength="maxlength" v-model="inputValue" @focus="handleInputFocus(false)" @blur="handleInputFocus(true)">
    <i :class="{light:theme=='light'}" v-if="closeShow" @click="handleClear"></i>
  </div>
</template>

<script>
export default {
  name: 'MagicInput',
  data () {
    return {
      unActive: null,
      inputValue: '',
      closeShow: false
    }
  },
  props: ['placeholder', 'data', 'maxlength', 'type','theme'],
  watch: {
    inputValue: function (value) {
      this.$emit('dataBack', value)
      this.handleCloseBtn(value)
    }
  },
  mounted () {
    this.inputValue = this.data
    this.handleCloseBtn(this.inputValue)
    this.unActive = this.inputValue === ''
  },
  methods: {
    handleInputFocus (flag) {
      this.unActive = this.inputValue === '' && flag
    },
    handleCloseBtn (data) {
      this.closeShow = (data !== '')
    },
    handleClear () {
      this.inputValue = ''
      this.$refs.input.focus()
    }
  }
}
</script>

<style scoped>
  .magic_input_wapper{
  }
  .magic_input_wapper i {
    position: relative;
    z-index: 3;
    margin-right: 0;
    margin-top: -30px;
    margin-right: 5px;
    float: right;
    display: block;
    height: 16px;
    width: 16px;
    transition: .3s all ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACx0lEQVRYR81XzW3bMBTmk3yzgDobqDfbItBkgiYT1J2gyQRNJ4g9QdwJ6k5Qd4K4E9QFSPlYb1AZkI7mKx5LCbIiSpTcAuVReuT38Xu/BNZhTSaTmed5bwAgRMQRAFzSdkTcAkCCiHtEXMdx/NX1WGgzHI/Hoe/7DwAwY4yN2uzNfyKzzrLsw36/T5r2NBLgnM8ZY+87AFexCHwphFjYSNQSCMNwNBwOn3KJHW9tNSMXZVl2U6fGMwJRFF0CwNMZt7YRIbfcSCm3ZYMTAnTzIAh+/gPwHDNJ0/RlWYmCwN+W3SYDuUNKeZX/LwiYgHs419+O+xdCCApwpglQqg0Gg+8N0i8QMQGARxcARPyhlJr7vn/PGHtds6dwhSYQRdEKAN7ZDk/T9IL8FkXRLQB8aiJB4FmWXbfZI+JnKeWtJsA5p3x90eC3lZTyztiSdLWuKoM7xFQihLgAKq++739pk1Yp9TGOY5K0VrGO4BrueDy+hTb5y8QQ8U5KuaqS6ANOZ9ClgHO+sQRKrSg5CSMx7WW5zx1kr575jRSgTvaqzQUVJa6oohEgfaeA6wH+p4tyzrELuLE9Kat9wItC1IdA2ecmHqh/kDusmWS7ZGcXVAMud4FpYlTMnBed1SkI66LdBKFutS6FqsJOB2FjFcw3NKUaIhaFqgsJnYYuhcglz8skptPp0vM8mqQaly5EprxaS7ELeAml6HIOyh6EEKPWZlQpPK1jWtk+CIJfNglOmpGZhPaWNNoopZYAMO8wI1LPoCKle37NOqRpGlLg/h8DSc6wT1luC7Tqf4opKaV+0NCqG0ptruiK1Sh9LQH6aCpar7LawvCAiNeNY3l+QN5qu3bJhogvxrSqjcvTjCK6c5MxQAfzNLNlw2kM1N3AqEFpSI9TVyIkNz1O7896nFYJmef5rPQ814OM7moAiVJqi4ib3W63do3Y3wtV9xEwyZs7AAAAAElFTkSuQmCC');
  }
  .magic_input_wapper .light{
     background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPklEQVRYR8WX/VECMRDF31agdqAVKBWIFYgVKBWIFYgViBUIFQgVqBWIFWgHagXrvJsc5o7dJAfOkBn455K8X/YrG8GOh3TVV9UBgGMAh+HHLT7Dbykiiy57FgGoah/ANQCKl4w5gAcReclNTgKoKk9530G4rTcFcCcitJA5XIBw6icA+7lTZL5/A7jwrGECqOoVgMcthdvLhyJCizTGGkA4+fM/i9fbnbUt0QAIPn/7B7N7/HRHL46JNgCj99xYPQMwBsDvTMHUeA9By/mX1l4iQhdXYwWQMP2sXqCqDEimlgdB8b6I8KRQVfrcgli5IgbwTn9Qbxg29SAa4tHcL8MKCxGpakoMoI5dlwBIXJ3KgfDEGcwn1r4iUmlXf6G8Mue9kYLgmpXZI0BXPIiwNsxrAAbMbSa4PAgY1smJU4oVclwDeMHSZlqDiCeEIC0R5zLeFaMagJF9mrFA/Zk3Xs+aq6oEzKVpvfRVRPqbAKwFXBScGwOUusAVz6SoZbCGC0qCMCmeSFHPs40gZFFIpWEqzymQqxMWxF8aBvN5haikyJQUqwZEoxAFAK8UH8W3VyLVLAh2VB/G8c1SzL7P6gOmIjIsrHANiE6XUcYKzJKbAGjW9uiUFQSASafrOADQZNxgr7AodZ32w8vJbUgChOeKrmLW/HRLFuXy7prSCIKWYGZs6w6afdCpLY8gGBNeb1fikqqX3Ohh0rpmaY2R07BaIHwfTrZ+mjlXLss2U9F7nNJtxaPocVq82wYTfwGbgCkwX7GEvQAAAABJRU5ErkJggg==')
  }
  .magic_input_wapper i:hover {
    transform: rotateZ(90deg);
  }
  .magic_input_wapper input {
    font-size: 25px;
    text-indent: 0;
    letter-spacing: 1px;
  }
  .placeholder {
    transition: .3s all ease-in-out;
    position: absolute;
    transform: translateY(-20px);
    z-index: 1;
    color: royalblue;
    font-style: italic;
  }
  .placeholder_active {
    transform: translateY(-10px);
    font-size: 30px;
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
