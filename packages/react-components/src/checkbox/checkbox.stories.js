import React from 'react'
import Badge from '.'
import { colorBrand } from '@twreporter/core/lib/constants/color'

export default {
  title: 'Badge',
  component: Badge,
}

const Template = args => <Badge {...args} />
export const badge = Template.bind({})
badge.args = {
  text: '不定期',
  textColor: colorBrand.heavy,
  backgroundColor: 'white',
}
