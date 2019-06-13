import { configure, addParameters, addDecorator  } from '@storybook/vue'
import { themes } from '@storybook/theming'
import { addReadme } from 'storybook-readme/vue';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/index.stories.js')
}

addDecorator(addReadme);


// Option defaults.
addParameters({
  options: {
    theme: themes.normal,
  },
})

configure(loadStories, module)