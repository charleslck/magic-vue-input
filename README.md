### Install
```shell
npm install magic-vue-input -s
```
### Quick Start
``` javascript
import MagicVueInput from 'magic-vue-input'
```
### Preview
![preivew][1]


  [1]: https://github.com/charleslck/magic-vue-input/raw/master/preview/preview.gif
  
### How to use
``` javascript
<MagicVueInput v-model='msg' placeholder='Name' type='password' color='red'></MagicVueInput>
```

### Props

| Name | Value | Des |
|--------|------|------|
| `value` | Any | The value of your input |
| `placeholder` | String,Number | The placeholder when your input value is none |
| `type` | String: 'text' or 'passwrod' | Only support text & password |
| `maxlength` | Number | Longest number of your input text |
| `textColor` | String: hash string color | Color of input text |
| `lineColor` | String: hash string color | Color of bottom line |
| `closeBtnColor` | String: hash string color | Color of the colse button |
| `placeholderColor` | String: hash string color | Color of placeholder |
| `fontSize` | Number | Font size of text |
| `textOffsetBot` | Number | Vertical offset of text |
