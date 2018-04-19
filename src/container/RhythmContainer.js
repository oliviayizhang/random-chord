import React from 'react'

class RhythmContainer extends React.Component {
  render() {
    const rhythm_pic_name = `rhythms-${this.props.rhythm_pic_number}.png`
    let imgUrl = require (`../project-files/${rhythm_pic_name}`)

    return (

      <div>
        <h3>display random rhythm patterns</h3>

        <div className="rhythm">
          <img src={imgUrl} alt=""/>
          <img src={imgUrl} alt=""/>
          <img src={imgUrl} alt=""/>
          <img src={imgUrl} alt=""/>
        </div>
      </div>
    )
  }
}

export default RhythmContainer;
