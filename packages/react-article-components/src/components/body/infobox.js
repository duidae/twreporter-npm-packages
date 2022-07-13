import mq from '@twreporter/core/lib/utils/media-query'
import PropTypes from 'prop-types'
import predefinedPropTypes from '../../constants/prop-types/body'
import React, { PureComponent } from 'react'
import cssConsts from '../../constants/css'
import styled, { css } from 'styled-components'
import themeConst from '../../constants/theme'
import typography from '../../constants/typography'
import color from '../../constants/color'
// lodash
import get from 'lodash/get'

const _ = {
  get,
}

const widthCSS = css`
  ${mq.mobileOnly`
    width: calc(248/300*100%);
  `}

  ${mq.tabletOnly`
    width: 445px;
  `}

  ${mq.desktopOnly`
    width: 480px;
  `}

  ${mq.hdOnly`
    width: 580px;
  `}
`

const Title = styled.div`
  ${widthCSS}
  color: ${color.gray85};
  line-height: 1.9;
  letter-spacing: 0.7px;
  font-weight: ${typography.font.weight.bold};
  font-size: ${props => props.theme.fontSizeOffset + 20}px;
  margin: 0 auto 21px auto;
`

const Content = styled.div`
  ${widthCSS}

  color: ${color.gray85};
  line-height: 1.75;
  letter-spacing: 0.5px;
  font-weight: ${typography.font.weight.normal};
  font-size: ${props => props.theme.fontSizeOffset + 16}px;
  margin: 0 auto;
`

function getContainerStyles(themeName) {
  switch (themeName) {
    case themeConst.article.v2.photo:
      return css`
        &::before,
        &::after {
          background: ${color.brown};
        }
      `
    case themeConst.article.v2.pink:
      return css`
        &::before,
        &::after {
          background: ${color.pink};
        }
      `
    case themeConst.article.v2.default:
    default:
      return css`
        &::before,
        &::after {
          background: ${color.milkTea};
        }
      `
  }
}

const Container = styled.div`
  ${props => getContainerStyles(props.theme.name)}

  ${cssConsts.linkChildren}

  /* line breaks */
  white-space: pre-wrap;

  background: ${color.white};
  position: relative;
  margin: 60px auto 0 auto;
  ${mq.tabletAndBelow`
    padding-top: 30px;
    padding-bottom: 30px;
  `}
  ${mq.desktopAndAbove`
    padding-top: 40px;
    padding-bottom: 40px;
  `}
  &::before {
    /* sides of the triangle: 58 48 33 */
    content: '';
    display: block;
    width: 58px;
    height: 1px;
    transform: rotate(34.51deg);
    transform-origin: right center;
    position: absolute;
    right: -15px;
    top: 28px;
  }
  &::after {
    /*
      sides of the triangle: 58 48 33 (px)
      translate hori: -6, verti: 11 (px)
    */
    content: '';
    display: block;
    width: 58px;
    height: 1px;
    transform: rotate(34.51deg);
    transform-origin: left center;
    position: absolute;
    left: -6px;
    bottom: 22px;
  }
`

// NOTE:
// In order to scroll quickly to avoid triggering embeds loading,
// here we apply custom smooth scroll effect(duration) to internal anchors inside infobox.
// code ref: https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js
const smoothScrollDuration = 100
const customSmoothScrollFuncName = 'twreporterSmoothScroll'
const customSmoothScrollScript = `
  <script type='text/javascript'>
    function ${customSmoothScrollFuncName}(e) {
      e.preventDefault();
      var position = function(start, end, elapsed, duration) {
        if (elapsed > duration) return end;
        return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
        // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
      }
      var getTop = function(element, start) {
        // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
        if(element.nodeName === 'HTML') return -start
        return element.getBoundingClientRect().top + start
      }
      var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
      var smoothScroll = function(el, duration, callback, context){
        duration = duration || 500;
        context = context || window;
        var start = context.scrollTop || window.pageYOffset;

        if (typeof el === 'number') {
          var end = parseInt(el);
        } else {
          var end = getTop(el, start);
        }

        var clock = Date.now();
        var requestAnimationFrame = window.requestAnimationFrame ||
          window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
          function(fn){window.setTimeout(fn, 15);};

        var step = function(){
          var elapsed = Date.now() - clock;
          if (context !== window) {
            context.scrollTop = position(start, end, elapsed, duration);
          }
          else {
            window.scroll(0, position(start, end, elapsed, duration));
          }

          if (elapsed > duration) {
              if (typeof callback === 'function') {
                  callback(el);
              }
          } else {
              requestAnimationFrame(step);
          }
        }
        step();
      }
      const id = e.target.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        smoothScroll(element, ${smoothScrollDuration}, function (el) {
          location.replace('#' + el.id)
          // this will cause the :target to be activated.
        });
      }
      return false;
    }
  </script>
`

export default class Infobox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    data: predefinedPropTypes.elementData.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const { className, data } = this.props
    const contentHtmlString = _.get(data, ['content', 0, 'body'], '')
    const title = _.get(data, ['content', 0, 'title'], '')

    // Legacy <a> tags inside infobox contain target="_blank" prop,
    // so that a new tab is opened when an anchor is clicked, we need to
    // replace those props of internal anchors with a custom smooth scroll.
    const anchorRegex = /<a[^>]*>/g
    const fixedContentHtmlString = contentHtmlString?.replace(
      anchorRegex,
      anchorString => {
        const hashRegex = /href="#/ // TODO: href={"#"}
        const newTabRegex = /target="_blank"/ // TODO: target={"_blank"}
        return hashRegex.exec(anchorString) && newTabRegex.exec(anchorString)
          ? anchorString.replace(
              newTabRegex,
              `onclick="${customSmoothScrollFuncName}(event)"`
            )
          : anchorString
      }
    )

    return fixedContentHtmlString ? (
      <Container className={className}>
        {title ? <Title>{title}</Title> : null}
        <Content
          dangerouslySetInnerHTML={{
            __html: customSmoothScrollScript + fixedContentHtmlString,
          }}
        />
      </Container>
    ) : null
  }
}
