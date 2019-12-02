// Using this file instead of the karma conf, to handle
// shallow rendering components in Jest tests
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

window.Enzyme = Enzyme;
window.shallow = Enzyme.shallow;
window.mount = Enzyme.mount;
window.render = Enzyme.render;
window.sinon = sinon;
