// 官方依赖
import { storiesOf, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// echarts 
window.echarts = require('echarts')

// 我的组件库
import BaseBar from './components/Bar/BaseBar'
import BaseBarMD from './components/Bar/BaseBar.md'

// 左侧菜单
storiesOf('Bar', module).addParameters({
	readme: {
		sidebar: BaseBarMD
	}
}).add('BaseBar', () => ({
    components: { BaseBar },
    template: `<BaseBar />`,
}))