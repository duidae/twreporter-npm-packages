import { TimeContext, ControlsContext, StatusContext } from './audio-contexts'
import React from 'react'
import styled, { css } from 'styled-components'
import Slider, { Indicator, Rail, Progress } from '../slider'
import themeConst from '../../../constants/theme'

function getContainerStyles(themeName) {
  switch (themeName) {
    case themeConst.article.v2.pink:
      return css`
        ${Indicator} {
          background-color: #ef7ede;
        }

        ${Progress} {
          background-color: #fbafef;
        }
      `
    case themeConst.article.v2.photo:
      return css`
        ${Indicator} {
          background-color: #a67a44;
        }

        ${Progress} {
          background-color: #d0a67d;
        }
      `
    case themeConst.article.v2.default:
    default:
      return css`
        ${Indicator} {
          background-color: #a67a44;
        }
        ${Progress} {
          background-color: #d0a67d;
        }
      `
  }
}

const Container = styled.div`
  ${props => getContainerStyles(props.theme.name)}
  width: 100%;
  height: 4px;
  border-radius: 2px;
  position: relative;
  ${Indicator} {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
  ${Rail} {
    background: #d8d8d8;
  }
`
let resumePlayingAfterSeek = false
export default function SeekBar() {
  return (
    <Container>
      <ControlsContext.Consumer>
        {({ play, pause, setCurrent }) => (
          <StatusContext.Consumer>
            {({ isPlaying }) => (
              <TimeContext.Consumer>
                {({ duration, current }) => (
                  <Slider
                    defaultValue={0}
                    value={current}
                    min={0}
                    max={duration}
                    onSeekEnd={({ value }) => {
                      setCurrent(value)
                      if (resumePlayingAfterSeek) {
                        resumePlayingAfterSeek = false
                        play()
                      }
                    }}
                    onSeekStart={() => {
                      if (isPlaying) {
                        resumePlayingAfterSeek = true
                        pause()
                      }
                    }}
                    onSeeking={({ value }) => {
                      setCurrent(value)
                    }}
                  />
                )}
              </TimeContext.Consumer>
            )}
          </StatusContext.Consumer>
        )}
      </ControlsContext.Consumer>
    </Container>
  )
}
