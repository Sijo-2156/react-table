import React from 'react'
import DatePicker from '../src/components/DatePicker/DatePicker'
import SelectField from '../src/components/SelectField/SelectField'
import moment from 'moment'
const rewire = require('rewire')
const DateHelper = rewire('../src/components/DatePicker/DateHelper')

describe('DatePicker', () => {
  const oldDate = '2017-07-02'
  const newDate = '2019-03-03'
  const defaultFormat = 'YYYY-MM-DD'
  let wrapper, consoleErrorSpy

  beforeEach(() => {
    consoleErrorSpy = sinon.spy(console, 'error')
  })

  afterEach(() => {
    consoleErrorSpy.restore()
  })

  it('should shallow render itself', () => {
    wrapper = shallow(<DatePicker value={oldDate} />)
    expect(wrapper.find('.datepicker-component')).to.have.length(1)
    expect(wrapper.find('.datepicker')).to.have.length(1)

    const datepicker = wrapper.find('.datepicker').at(0)

    expect(datepicker.children()).to.have.length(3)
    expect(datepicker.childAt(0).props().placeholder).to.equal('Month')
    expect(datepicker.childAt(1).props().placeholder).to.equal('Day')
    expect(datepicker.childAt(2).props().placeholder).to.equal('Year')
  })

  it('should have current date by default', () => {
    DateHelper.__set__('_getDate', function () { return '20' })
    DateHelper.__set__('_getMonth', function () { return '10' })
    DateHelper.__set__('_getYear', function () { return '2012' })
    wrapper = shallow(<DatePicker dateHelper={DateHelper} />)

    expect(wrapper.find('.datepicker-component')).to.have.length(1)
    expect(wrapper.find('.datepicker')).to.have.length(1)
    expect(wrapper.childAt(0).children()).to.have.length(3)
    expect(wrapper.state('value')).to.equal('2012-11-20')
  })

  it('should have an extra class', () => {
    wrapper = shallow(<DatePicker optClass="test-class" />)
    expect(wrapper.find('.datepicker-component')).to.have.length(1)
    expect(wrapper.hasClass('test-class')).to.be.true
  })

  it('should have a label', () => {
    wrapper = shallow(<DatePicker label='Date Label' />)
    expect(wrapper.childAt(0).type()).to.equal('label')
    expect(wrapper.childAt(0).text()).to.equal('Date Label')
  })

  it('should update the state when the value property changes', () => {
    wrapper = mount(<DatePicker value={oldDate} />)

    expect(wrapper.state('value')).to.equal(oldDate)

    wrapper.setProps({ value: newDate })
    wrapper.update()

    expect(wrapper.state('value')).to.equal(newDate)
  })

  it('should run the changeCallback on changing a month', () => {
    let result = ''
    const callback = event => {
      result = event
    }

    wrapper = mount(<DatePicker value={oldDate} changeCallback={callback} />)
    const datepicker = wrapper.find('.datepicker').at(0)

    // open <ul>
    datepicker.find(SelectField).at(0).simulate('click')
    // click <li>
    datepicker.find(SelectField).at(0).find('li').at(0).simulate('click')

    const firstMonth = '2017-01-02'

    expect(result.target.value).to.equal(firstMonth)
    expect(wrapper.state('value')).to.equal(firstMonth)
  })

  it('should run the changeCallback on changing a day', () => {
    let result = ''
    const callback = event => {
      result = event
    }

    wrapper = mount(<DatePicker value={oldDate} changeCallback={callback} />)
    const datepicker = wrapper.find('.datepicker').at(0)

    // open <ul>
    datepicker.find(SelectField).at(1).simulate('click')
    // click <li>
    datepicker.find(SelectField).at(1).find('li').at(0).simulate('click')

    const firstDay = '2017-07-01'

    expect(result.target.value).to.equal(firstDay)
    expect(wrapper.state('value')).to.equal(firstDay)
  })

  // TODO: Fix this test https://trello.com/c/kmhQM4no/379-reactions-fix-datepicker-tests
  it.skip('should run the changeCallback on changing a year', () => {
    let result = ''
    const callback = event => {
      result = event
    }

    wrapper = mount(<DatePicker value={oldDate} changeCallback={callback} />)
    const datepicker = wrapper.find('.datepicker').at(0)

    // open <ul>
    datepicker.childAt(2).childAt(2).simulate('click')
    // click <li>
    datepicker.childAt(2).childAt(2).childAt(0).simulate('click')

    let firstDate = ''
    const daySelected = moment.utc(oldDate, defaultFormat).date()
    const dayToday = moment.utc().date()
    const monthSelected = moment.utc(oldDate, defaultFormat).month()
    const monthToday = moment.utc().month()

    // if trying to select the minimum year, if the day and month selected are less
    // then today's respective values, the datepicker will default to today's today - 10 years
    if (daySelected <= dayToday && monthSelected <= monthToday) {
      firstDate = moment.utc().subtract(10, 'year').format(defaultFormat)
    } else {
      firstDate = moment.utc().date(daySelected).month(monthSelected).subtract(10, 'year').format(defaultFormat)
    }

    expect(result.target.value).to.equal(firstDate)
    expect(wrapper.state('value')).to.equal(firstDate)
  })

  it('should not result in an error if changeCallback is not defined', () => {
    wrapper = mount(<DatePicker value={oldDate} />)
    const datepicker = wrapper.find('.datepicker').at(0)

    // open <ul>
    datepicker.find(SelectField).at(1).simulate('click')
    // click <li>
    datepicker.find(SelectField).at(1).find('li').at(0).simulate('click')

    expect(consoleErrorSpy.called).to.be.false
  })

  it('should change to max month & day if selected are greater than max value on selecting last year', () => {
    let result = ''
    const callback = event => {
      result = event
    }
    const maxCalc = { month: '5', day: '20', year: '+1'}
    const minCurrent = { month: 'current', day: 'current', year: 'current'}
    const date = moment.utc().month(11).date(31).format(defaultFormat)

    wrapper = mount(<DatePicker value={date} min={minCurrent} max={maxCalc} changeCallback={callback} />)
    const datepicker = wrapper.find('.datepicker').at(0)

    // open <ul>
    datepicker.find(SelectField).at(2).simulate('click')
    // select last year
    datepicker.find(SelectField).at(2).find('li').at(1).simulate('click')

    const firstYear = moment.utc().add(1, 'year').format('YYYY') + '-06-20'

    expect(result.target.value).to.equal(firstYear)
    expect(wrapper.state('value')).to.equal(firstYear)
  })

  it('should change to min month & day if selected are lower than min value on selecting first year', () => {
    let result = ''
    const callback = event => {
      result = event
    }
    const minCalc = { month: '5', day: '20', year: '-1'}
    const maxCurrent = { month: 'current', day: 'current', year: 'current'}
    const date = moment.utc().month(0).date(1).format(defaultFormat)

    wrapper = mount(<DatePicker value={date} min={minCalc} max={maxCurrent} changeCallback={callback} />)
    const datepicker = wrapper.find('.datepicker').at(0)

    // open <ul>
    datepicker.find(SelectField).at(2).simulate('click')
    // select first year
    datepicker.find(SelectField).at(2).find('li').at(0).simulate('click')

    const firstYear = moment.utc().subtract(1, 'year').format('YYYY') + '-06-20'

    expect(result.target.value).to.equal(firstYear)
    expect(wrapper.state('value')).to.equal(firstYear)
  })

  it('should show correct date when passing custom format and run the changeCallback on changing a year', () => {
    let result = ''
    const callback = event => {
      result = event
    }

    const format = 'DD-MM-YYYY'
    const date = moment.utc().format(format)
    const minCurrent = { month: 'current', day: 'current', year: 'current'}

    wrapper = mount(<DatePicker value={date} min={minCurrent} format={format} changeCallback={callback} />)
    const datepicker = wrapper.find('.datepicker').at(0)

    expect(wrapper.state('value')).to.equal(date)

    // open <ul>
    datepicker.find(SelectField).at(2).simulate('click')
    // select last year
    datepicker.find(SelectField).at(2).find('li').at(1).simulate('click')

    const newDate = moment.utc().add(1, 'year').format(format)

    expect(result.target.value).to.equal(newDate)
    expect(wrapper.state('value')).to.equal(newDate)
  })

  describe('Logic', () => {

    describe('_getYears', () => {

      it('should return years range', () => {
        wrapper = shallow(<DatePicker value={oldDate}/>)
        const years = wrapper.instance()._getYears(2010, 2015)

        expect(years).to.be.an.array
        expect(years).to.have.length(6)
        expect(years[0]).to.deep.equal({ value: '2010' })
        expect(years[1]).to.deep.equal({ value: '2011' })
        expect(years[2]).to.deep.equal({ value: '2012' })
        expect(years[3]).to.deep.equal({ value: '2013' })
        expect(years[4]).to.deep.equal({ value: '2014' })
        expect(years[5]).to.deep.equal({ value: '2015' })
      })
    })

    describe('_getMonths', () => {

      wrapper = shallow(<DatePicker value={oldDate} />)

      it('should return full months range', () => {
        let dateObj = {
          year: {
            min: 2010,
            value: 2015,
            max: 2020,
            options: []
          },
          month: {
            min: 0,
            value: 5,
            max: 11,
            options: []
          }
        }

        const months = wrapper.instance()._getMonths(dateObj)

        expect(months).to.be.an.array
        expect(months).to.have.length(12)
        expect(months[0]).to.deep.equal({ value: '0', display: 'Jan' })
        expect(months[5]).to.deep.equal({ value: '5', display: 'Jun' })
        expect(months[11]).to.deep.equal({ value: '11', display: 'Dec' })
      })

      it('should return months range limited by month.min and change month.value to month.min', () => {
        let dateObj = {
          year: {
            min: 2010,
            value: 2010,
            max: 2020,
            options: []
          },
          month: {
            min: 5,
            value: 2,
            max: 11,
            options: []
          }
        }

        const months = wrapper.instance()._getMonths(dateObj)

        expect(dateObj.month.value).to.equal(dateObj.month.min)
        expect(months).to.be.an.array
        expect(months).to.have.length(7)
        expect(months[0]).to.deep.equal({ value: '5', display: 'Jun' })
        expect(months[3]).to.deep.equal({ value: '8', display: 'Sep' })
        expect(months[6]).to.deep.equal({ value: '11', display: 'Dec' })
      })

      it('should return months range limited by month.max and change month.value to month.max', () => {
        let dateObj = {
          year: {
            min: 2010,
            value: 2020,
            max: 2020,
            options: []
          },
          month: {
            min: 0,
            value: 11,
            max: 6,
            options: []
          }
        }

        const months = wrapper.instance()._getMonths(dateObj)

        expect(dateObj.month.value).to.equal(dateObj.month.max)
        expect(months).to.be.an.array
        expect(months).to.have.length(7)
        expect(months[0]).to.deep.equal({ value: '0', display: 'Jan' })
        expect(months[3]).to.deep.equal({ value: '3', display: 'Apr' })
        expect(months[6]).to.deep.equal({ value: '6', display: 'Jul' })
      })
    })

    describe('_getDays()', () => {

      const getDateObj = () => {
        return {
          year: {
            min: 2010,
            value: 2015,
            max: 2020,
            options: []
          },
          month: {
            min: 0,
            value: 6,
            max: 11,
            options: []
          },
          day: {
            min: 1,
            value: 31,
            max: 31,
            options: []
          },
          value: '2015-07-31'
        }
      }

      wrapper = shallow(<DatePicker value={oldDate} />)

      it('should returns full days range of a 31-days month', () => {
        let dateObj = getDateObj()

        const days = wrapper.instance()._getDays(dateObj)

        expect(dateObj.day.value).to.equal(dateObj.day.max)
        expect(dateObj.value).to.equal('2015-07-31')
        expect(days).to.be.an.array
        expect(days).to.have.length(31)
        expect(days[0]).to.deep.equal({ value: '1' })
        expect(days[15]).to.deep.equal({ value: '16' })
        expect(days[30]).to.deep.equal({ value: '31' })
      })

      it('should returns full days range of a 30-days month and change day.value to day.max', () => {
        let dateObj = getDateObj()

        dateObj.month.value = 5
        dateObj.day.max = 30
        dateObj.value = '2015-05-31'

        const days = wrapper.instance()._getDays(dateObj)

        expect(dateObj.day.value).to.equal(dateObj.day.max)
        expect(dateObj.value).to.equal('2015-06-30')
        expect(days).to.be.an.array
        expect(days).to.have.length(30)
        expect(days[0]).to.deep.equal({ value: '1' })
        expect(days[15]).to.deep.equal({ value: '16' })
        expect(days[29]).to.deep.equal({ value: '30' })
      })

      it('should returns full days range of a 29-days month and change day.value to day.max', () => {
        let dateObj = getDateObj()

        dateObj.year.value = 2016
        dateObj.month.value = 1
        dateObj.day.max = 29
        dateObj.value = '2016-02-31'

        const days = wrapper.instance()._getDays(dateObj)

        expect(dateObj.day.value).to.equal(dateObj.day.max)
        expect(dateObj.value).to.equal('2016-02-29')
        expect(days).to.be.an.array
        expect(days).to.have.length(29)
        expect(days[0]).to.deep.equal({ value: '1' })
        expect(days[15]).to.deep.equal({ value: '16' })
        expect(days[28]).to.deep.equal({ value: '29' })
      })

      it('should returns full days range of a 28-days month and change day.value to day.max', () => {
        let dateObj = getDateObj()

        dateObj.month.value = 1
        dateObj.day.max = 28
        dateObj.value = '2015-02-31'

        const days = wrapper.instance()._getDays(dateObj)

        expect(dateObj.day.value).to.equal(dateObj.day.max)
        expect(dateObj.value).to.equal('2015-02-28')
        expect(days).to.be.an.array
        expect(days).to.have.length(28)
        expect(days[0]).to.deep.equal({ value: '1' })
        expect(days[15]).to.deep.equal({ value: '16' })
        expect(days[27]).to.deep.equal({ value: '28' })
      })
    })

    describe('_getValue()', () => {

      const getDateObj = () => {
        return {
          year: {
            min: 2010,
            value: 2015,
            max: 2020,
            options: []
          },
          month: {
            min: 0,
            value: 6,
            max: 11,
            options: []
          },
          day: {
            min: 1,
            value: 31,
            max: 31,
            options: []
          }
        }
      }

      wrapper = shallow(<DatePicker value={oldDate} />)

      it('should return date string in a default format', () => {
        let dateObj = getDateObj()

        const value = wrapper.instance()._getValue(dateObj, defaultFormat)

        expect(value).to.equal('2015-07-31')
      })

      it('should return date string in a custom format', () => {
        let dateObj = getDateObj()
        const customFormat = 'DD-MM-YYYY'

        const value = wrapper.instance()._getValue(dateObj, customFormat)

        expect(value).to.equal('31-07-2015')
      })
    })

    describe('_getMinOrMax()', () => {

      it('should return min values for year, month, day', () => {
        DateHelper.__set__('_getDate', function () { return '20' })
        DateHelper.__set__('_getMonth', function () { return '10' })
        DateHelper.__set__('_getYear', function () { return '2012' })

        wrapper = shallow(<DatePicker value={oldDate} dateHelper={DateHelper} />)

        const min = { month: '-0', day: '-0', year: '-10'}

        const minYear = wrapper.instance()._getMinOrMax(min, 'year')
        const minMonth = wrapper.instance()._getMinOrMax(min, 'month')
        const minDay = wrapper.instance()._getMinOrMax(min, 'day')

        expect(minYear).to.equal(2012)
        expect(minMonth).to.equal(10)
        expect(minDay).to.equal(20)
      })

      it('should return max values for year, month, day', () => {
        DateHelper.__set__('_getDate', function () { return '1' })
        DateHelper.__set__('_getMonth', function () { return '1' })
        DateHelper.__set__('_getYear', function () { return '2020' })

        wrapper = shallow(<DatePicker value={oldDate} dateHelper={DateHelper} />)

        const max = { month: '1', day: '1', year: '+10'}

        const minYear = wrapper.instance()._getMinOrMax(max, 'year')
        const minMonth = wrapper.instance()._getMinOrMax(max, 'month')
        const minDay = wrapper.instance()._getMinOrMax(max, 'day')

        expect(minYear).to.equal(2020)
        expect(minMonth).to.equal(1)
        expect(minDay).to.equal(1)
      })

      it('should disable', () => {
        wrapper = shallow(<DatePicker value={oldDate} disabled={true} />)
        expect(wrapper.childAt(0).childAt(0).props().disabled).to.be.true
        expect(wrapper.childAt(0).childAt(1).props().disabled).to.be.true
        expect(wrapper.childAt(0).childAt(2).props().disabled).to.be.true
      })
    })
  })
})
