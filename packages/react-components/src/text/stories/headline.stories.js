import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from '../headline'

export default {
  title: 'Text/Headline',
  component: H1,
}

const defaultText = '標題「標題」：標題，《標題》標題English標題123標題？'

export const h1 = args => <H1 {...args} />
h1.args = { text: defaultText, type: 'default' }

export const h2 = args => <H2 {...args} />
h2.args = { text: defaultText, type: 'default' }

export const h3 = args => <H3 {...args} />
h3.args = { text: defaultText, type: 'default' }

export const h4 = args => <H4 {...args} />
h4.args = { text: defaultText, type: 'default' }

export const h5 = args => <H5 {...args} />
h5.args = { text: defaultText, type: 'default' }

export const h6 = args => <H6 {...args} />
h6.args = { text: defaultText, type: 'default' }