import { configure, addParameters, addDecorator  } from '@storybook/vue'
import { themes } from '@storybook/theming'
import { addReadme } from 'storybook-readme/vue'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Decorator
addDecorator(addReadme)

// Option global defaults.
addParameters({
  options: {
  	// theme 
    theme: themes.normal,
  },
  readme: {
  	// https://github.com/tuchk4/storybook-readme/tree/master/packages/storybook-readme/src/styles/prismCodeThemes
    codeTheme: 'atom-dark',
  }
})

function loadStories() {
  // You can require as many stories as you need.
  require('../src/index.stories.js')
}

configure(loadStories, module)