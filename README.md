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
<MagicVueInput dataBack='dataBack' :data='msg' placeholder='type here' type='text' maxlength='23' theme='dark'></MagicVueInput>
```

``` javascript
methods: {
  dataBack(data){
    this.msg = data
  }
}
```
### Props

| Name | Value |
|--------|------|
| `data` | String,Number |
| `placeholder` | String,Number |
| `type` | String: 'text' or 'passwrod' |
| `maxlength` | Number |
| `theme` | String: 'dark' or 'light' |
