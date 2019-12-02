import DateHelper from '../src/components/DatePicker/DateHelper'
import moment from 'moment'

describe('DateHelper', () => {
  const date = moment.utc('2017-07-02')
  const today = moment.utc()

  it('should return the day', () => {
    expect(DateHelper.getDate()).to.equal(today.date())
    expect(DateHelper.getDate(date)).to.equal(2)
  })

  it('should return the month', () => {
    expect(DateHelper.getMonth()).to.equal(today.month())
    expect(DateHelper.getMonth(date)).to.equal(6)
  })

  it('should return the year', () => {
    expect(DateHelper.getYear()).to.equal(today.year())
    expect(DateHelper.getYear(date)).to.equal(2017)
  })
})
