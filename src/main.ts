import { createApp } from 'vue';
// import eval5 from 'eval5';
import App from './App.vue';
import store from './store/index';

const Form = {
  install() {
  },
};

const app = createApp(App);
app.use(store);
app.use(Form);

app.mount('#app');

// const ret = eval5('A.getStr()', {
//   A: App,
// });
// console.log(ret, getApp());
