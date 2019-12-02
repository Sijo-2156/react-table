import { keyframes, css } from 'styled-components'
import colors from '../../styles/common/colors.css'
import { zLayers } from '../../styles/common/functions.css'

const dotsRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dotsBounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
`

const bounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`

const sharedSpinnerSettings = `
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
`

const loadingStyles = loading => loading ? `display: flex;` : ``
const hiddenStyles = hidden => hidden ? `display: none;` : ``
const positionStyles = position => {
  if (position === 'inline') return `display: inline-flex;`
  if (position === 'fixed') {
    return `
      ${sharedSpinnerSettings}
      position: fixed;
      z-index: ${zLayers['spinner-fixed']};
    `
  }
  if (position === 'absolute') {
    return `
      ${ sharedSpinnerSettings }
      position: absolute;
      z-index: ${zLayers['spinner-absolute']};
    `
  }
}

const styles = ({ backgroundColor, color, hidden, loading, position, size }) => {
  return css`
    background-color: ${backgroundColor || colors.white};
    display: none;
    ${loadingStyles(loading)}
    ${positionStyles(position)}
    ${hiddenStyles(!loading)}

    .spinner-dots {
      animation: ${dotsRotate} 2.0s infinite linear;
      height: ${size || 40}px;
      position: relative;
      width: ${size || 40}px;
    }

    .spinner-dots .dot1, .dot2 {
      animation: ${dotsBounce} 2.0s infinite ease-in-out;
      border-radius: 100%;
      display: inline-block;
      height: 60%;
      position: absolute;
      top: 0;
      width: 60%;
    }

    .spinner-dots .dot1 {
      background-color: ${color || colors.primary_1};
      height: 60%;
      top: 0;
    }

    .spinner-dots .dot2 {
      animation-delay: -1.0s;
      background-color: ${color || colors.danger};
      bottom: 0;
      height: 60%;
      top: auto;
    }

    .spinner-bounce .bounce1, .bounce2, .bounce3 {
      animation: ${bounceDelay} 1.4s infinite ease-in-out both;
      background-color: ${color || colors.neutral_4};
      border-radius: 100%;
      display: inline-block;
      height: ${size || 12}px;
      margin-right: 3px;
      width: ${size || 12}px;
    }

    .spinner-bounce .bounce1 {
      animation-delay: -0.32s;
    }

    .spinner-bounce .bounce2 {
      animation-delay: -0.16s;
    }

    .spinner-bounce .bounce3 {
      margin-right: 0;
    }

    .spinner-circular {
      display: inline-block;
      position: relative;
      width: ${size || 16}px;
      height: ${size || 16}px;
    }

    .spinner-circular .sc-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
      vertical-align: middle;
    }

    .spinner-circular .sc-inner-animation {
        animation: ${ring} .5s linear infinite;
    }

    .spinner-circular .sc-inner svg {
        display: block;
    }

    .spinner-circular .sc-inner path {
        fill-opacity: 0;
    }

    .spinner-circular .sc-inner-head {
        transform-origin: center;
        transition: stroke-dashoffset .2s cubic-bezier(.4, 1, .75, .9);
        stroke: ${color || colors.neutral_4};
        stroke-linecap: round;
    }

    .spinner-circular .sc-inner-track {
        stroke: rgba(92, 112, 128, .2);
    }
  `
}

export default styles