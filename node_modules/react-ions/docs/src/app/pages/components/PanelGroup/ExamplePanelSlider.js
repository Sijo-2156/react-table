import React from 'react'
import {PanelSlider, Panel, PanelContent} from 'react-ions/lib/components/PanelGroup'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExamplePanelSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    activePanel: 0
  }

  setActivePanel = (index, event) => {
    event.preventDefault()

    this.setState({
      activePanel: index
    })
  }

  render() {
    const currentlyActive = style[`custom-panel-slider-demo-slide-${this.state.activePanel + 1}`]

    return (
      <div className={style['custom-panel-slider-demo-wrapper']}>
        <PanelSlider activePanel={this.state.activePanel}>
          <Panel>
            <PanelContent optClass={style['custom-panel-slider']}>
              <h1>1</h1>
              <p>Bacon ipsum dolor amet sausage kielbasa pancetta turkey shankle, ball tip spare ribs meatball.</p>
            </PanelContent>
          </Panel>
          <Panel>
            <PanelContent optClass={style['custom-panel-slider']}>
              <h1>2</h1>
              <p>Bacon ipsum dolor amet corned beef short loin cupim short ribs. Jerky ground round drumstick sirloin burgdoggen chicken leberkas cupim, t-bone doner meatball short loin pork loin. Kielbasa chuck drumstick boudin kevin shank bresaola swine ham hock cow jerky pancetta capicola frankfurter. Bacon spare ribs shoulder ball tip picanha ham beef t-bone ribeye landjaeger cupim venison jerky pork.</p>
            </PanelContent>
          </Panel>
          <Panel>
            <PanelContent optClass={style['custom-panel-slider']}>
              <h1>3</h1>
              <p>Flank beef ribs ribeye andouille, sirloin pork belly salami swine. Porchetta beef short loin shank shankle jowl filet mignon turkey frankfurter meatloaf drumstick. Rump alcatra t-bone strip steak, meatball picanha cupim cow short ribs shoulder chicken ham hock turducken ribeye. Venison rump meatball shankle chuck corned beef ground round pig. Pig pork chop tenderloin ground round picanha. Flank brisket swine biltong shoulder shankle ribeye turkey fatback filet mignon kielbasa</p>
              <p>pancetta rump. Brisket beef venison, andouille beef ribs jowl cupim picanha.</p>
              <p>Burgdoggen ball tip frankfurter ribeye alcatra tail boudin chuck corned beef bresaola tongue venison fatback cow shoulder. Meatloaf burgdoggen pig pork loin drumstick. Jowl meatball pork loin, biltong short ribs andouille ham hock pastrami ball tip. Rump beef ribs flank biltong t-bone tail cupim salami pancetta meatloaf bresaola hamburger pastrami.</p>
            </PanelContent>
          </Panel>
        </PanelSlider>

        <span className={currentlyActive}>
          <a href="#" onClick={this.setActivePanel.bind(this, 0)} className={style['slide-1']}>Slide 1</a> <a href="#" onClick={this.setActivePanel.bind(this, 1)} className={style['slide-2']}>Slide 2</a> <a href="#" onClick={this.setActivePanel.bind(this, 2)} className={style['slide-3']}>Slide 3</a>
        </span>
      </div>
    )
  }
}

export default ExamplePanelSlider
