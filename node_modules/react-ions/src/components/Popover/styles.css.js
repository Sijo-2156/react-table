import colors from '../../styles/common/colors.css'
import { zLayers } from '../../styles/common/functions.css'

const styles = ({
  showing,
  position,
  parent = { width: 0, height: 0 },
  child = { width: 0, height: 0 },
  width = '300px'
}) => {
  const caretCenter =
    position === 'top' || position === 'bottom' || position === 'right' || position === 'left'
      ? 'calc(50% - 10px)'
      : `${(child.width / 2)-10}px`
  const caretOffset = '-10px'
  const popoverOffset = `${Math.ceil(
    position === 'left' || position === 'right'
      ? parent.width
      : parent.height
  ) + 20}px`

  let popoverTransform
  if (position === 'left' || position === 'right') {
    popoverTransform = `translateY(calc(-50% + ${parent.height / 2}px))`
  }
  else if (position === 'top' || position === 'bottom') {
    popoverTransform = `translateX(calc(-50% + ${parent.width / 2}px))`
  }

  const caretPos = {
    left: { right: caretOffset, bottom: caretCenter },
    right: { left: caretOffset, bottom: caretCenter },
    top: { left: caretCenter, bottom: caretOffset },
    bottom: { left: caretCenter, top: caretOffset },
    topLeft: { right: caretCenter, bottom: caretOffset },
    topRight: { left: caretCenter, bottom: caretOffset },
    bottomLeft: { right: caretCenter, top: caretOffset },
    bottomRight: { left: caretCenter, top: caretOffset }
  }
  const popoverPos = {
    left: { right: popoverOffset, transform: popoverTransform },
    right: { left: popoverOffset, transform: popoverTransform },
    top: { bottom: popoverOffset, transform: popoverTransform },
    bottom: { top: popoverOffset, transform: popoverTransform },
    topLeft: { bottom: popoverOffset, right: 0 },
    topRight: { bottom: popoverOffset, left: 0 },
    bottomLeft: { top: popoverOffset, right: 0 },
    bottomRight: { top: popoverOffset, left: 0 }
  }

  return {
    display: 'inline-flex',
    position: 'relative',
    '> .popoverInner': {
      backgroundColor: colors.white,
      borderRadius: '3px',
      boxShadow: '0 8px 24px 0 rgba(27,37,47,0.16)',
      width,
      boxSizing: 'border-box',
      padding: '16px',
      position: 'absolute',
      ...popoverPos[position],
      transition: 'opacity .25s ease',
      visibility: showing ? 'visible' : 'hidden',
      opacity: showing ? 1 : 0,
      zIndex: zLayers.popover,

      '&:before': {
        backgroundColor: colors.white,
        borderRadius: '3px',
        content: '" "',
        height: '20px',
        position: 'absolute',
        transform: 'rotate(45deg)',
        width: '20px',
        ...caretPos[position]
      }
    },
    '.popoverContent': {
      overflowWrap: 'break-word',
      wordWrap: 'break-word',
      zIndex: 1,

      // Center the text on the popover-content buttons,
      // since we can't easily apply the `fill` class to each one
      // eg: buttons are implemented in a child component
      'button em': {
        display: 'block'
      },

      // Handle this automatically, to allow header to flow better      
      'h1, h2': {
        margin: '0 0 16px'
      }
    }
  }
}

export default styles
