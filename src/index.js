// 官方依赖
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// echarts 
window.echarts = require('echarts')

// 我的组件库
import BaseBar from './components/Bar/BaseBar'

// 左侧菜单
storiesOf('Echarts', module).add('BaseBar', () => ({
	components: { BaseBar },
	template: '<BaseBar />',
}))

