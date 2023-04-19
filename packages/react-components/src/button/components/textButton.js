import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// util
import {
  getDisabledTextButtonTheme,
  getActiveTextButtonTheme,
  getPrimaryTextButtonTheme,
  getSecondaryTextButtonTheme,
} from '../utils/theme'
import { getSizeStyle } from '../utils/size'
// component
import { P1, P2 } from '../../text/paragraph'
// enums
import { Type } from '../enums'
import { Size } from '../../shared-enum'
// @twreporter
import mq from '@twreporter/core/lib/utils/media-query'
import { TEXT_BUTTON_THEME } from '@twreporter/core/lib/constants/theme'

const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  svg {
    height: ${props => props.iconSize};
    width: ${props => props.iconSize};
    background-color: ${props => props.color};
  }

  ${mq.desktopAndAbove`
    &:hover {
      color: ${props => props.hoverColor};
      svg {
        background-color: ${props => props.hoverColor};
      }
    }
  `}
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => (props.isLeft ? '0 4px 0 0' : '0 0 0 4px')};
`

const TextButton = ({
  text = '',
  leftIconComponent = null,
  rightIconComponent = null,
  size = Size.S,
  theme = TEXT_BUTTON_THEME.normal,
  type = Type.PRIMARY,
  active = false,
  disabled = false,
  ...props
}) => {
  let themeFunc
  if (disabled) {
    themeFunc = getDisabledTextButtonTheme
  } else if (active) {
    themeFunc = getActiveTextButtonTheme
  } else {
    themeFunc =
      type === Type.PRIMARY
        ? getPrimaryTextButtonTheme
        : getSecondaryTextButtonTheme
  }
  const { color, hoverColor } = themeFunc(theme, active)
  const { iconSize } = getSizeStyle(size)
  const textJSX =
    size === Size.S ? (
      <P2 text={text} weight="bold" />
    ) : (
      <P1 text={text} weight="bold" />
    )

  return (
    <ButtonContainer
      color={color}
      hoverColor={hoverColor}
      iconSize={iconSize}
      {...props}
    >
      {size === Size.L ? (
        <IconContainer isLeft={true}>{leftIconComponent}</IconContainer>
      ) : (
        leftIconComponent
      )}
      {textJSX}
      {size === Size.L ? (
        <IconContainer>{rightIconComponent}</IconContainer>
      ) : (
        rightIconComponent
      )}
    </ButtonContainer>
  )
}
TextButton.propTypes = {
  leftIconComponent: PropTypes.element,
  rightIconComponent: PropTypes.element,
  text: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Size)),
  theme: PropTypes.oneOf(Object.values(TEXT_BUTTON_THEME)),
  type: PropTypes.oneOf(Object.values(Type)),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}
TextButton.THEME = TEXT_BUTTON_THEME
TextButton.Size = Size
TextButton.Type = Type

export default TextButton
