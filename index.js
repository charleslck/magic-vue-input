import MagicInput from './src/MagicInput';

/* istanbul ignore next */
MagicInput.install = function(Vue) {
  Vue.component(MagicInput.name, MagicInput);
};

export default MagicInput;
