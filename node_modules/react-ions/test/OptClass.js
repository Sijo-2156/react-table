import optclass, { mapOptClass } from '../src/components/internal/OptClass'

describe('OptClass', () => {
  it('should return a single class', () => {
    const style = {
      'test-class': 'test-class-45554'
    }
    let testClasses = optclass(style, 'test-class')

    expect(testClasses).to.be.equal('test-class-45554')
  })

  it('should return multiple classes', () => {
    const style = {
      'test-class': 'test-class-45554',
      'test-class-2': 'test-class-hdh8'
    }
    let testClasses = optclass(style, ['test-class', 'test-class-2'])

    expect(testClasses).to.be.equal('test-class-45554 test-class-hdh8')
  })

  it('should return an array of pure classes', () => {
    const style = {}
    let testClasses = optclass(style, ['test-class', 'test-class-2'])

    expect(testClasses).to.be.equal('test-class test-class-2')
  })

  it('should handle an undefined arg', () => {
    const style = {}
    let testClasses = optclass(style, ['test-class', undefined])

    expect(testClasses).to.be.equal('test-class')
  })

  it('should handle className', () => {
    const style = {}
    let testClasses = optclass(style, ['test-class', 'test-class-2'], 'optClass', 'className')

    expect(testClasses).to.be.equal('test-class test-class-2 optClass className')
  })
})

describe('mapOptClass', () => {
  const styles = {
    success: {
      color: 'white'
    },
    'plain-light': {
      color: '#7b96b5'
    },
    default: {
      color: 'white'
    }
  }

  it('should return the default styles', () => {
    expect(mapOptClass(null, styles)).to.deep.equal(styles.default)
  })

  it('should return the success styles', () => {
    expect(mapOptClass('success', styles)).to.deep.equal(styles.success)
  })

  it('should return the plain-light styles', () => {
    expect(mapOptClass(['not-a-class', 'plain-light'], styles))
      .to.deep.equal(styles['plain-light'])
  })

})
