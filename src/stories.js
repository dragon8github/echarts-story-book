import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

window.echarts = require('echarts')
import BaseBar from './components/Bar/BaseBar'

storiesOf('Echarts', module).add('Bar', () => ({
	components: { BaseBar },
	template: '<BaseBar />',
}))

