import colorLuminance from '../src/components/internal/ColorLuminance'

describe('ColorLuminance', () => {
  it('should calculate a new color', () => {
    let newColor = colorLuminance('#ffffff', -0.20)

    expect(newColor).to.be.equal('#cccccc')
  })

  it('should calculate a new color when the hex length is less than 6 characters', () => {
    let newColor = colorLuminance('#fff', -0.20)

    expect(newColor).to.be.equal('#cccccc')
  })

  it('should return the same color if luminance is not provided', () => {
    let newColor = colorLuminance('#ffffff')

    expect(newColor).to.be.equal('#ffffff')
  })

  it('should return false when the hex length is less than 3 characters', () => {
    let newColor = colorLuminance('#FF', -0.20)

    expect(newColor).to.be.false
  })

  it('should return false when the hex undefined', () => {
    let newColor = colorLuminance(undefined, -0.20)

    expect(newColor).to.be.false
  })

  it('should return false when the hex null', () => {
    let newColor = colorLuminance(null, -0.20)

    expect(newColor).to.be.false
  })
})
