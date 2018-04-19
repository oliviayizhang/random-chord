import React from 'react';
import KeyContainer from './container/KeyContainer'
import ChordsContainer from './container/ChordsContainer'
import RhythmContainer from './container/RhythmContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music_key: [],
      random_chords: "",
      rhythm_pic_number: ""
    }
    this.getRandomChords = this.getRandomChords.bind(this)
    this.getRandomKey = this.getRandomKey.bind(this)
    this.getRandomRhythm = this.getRandomRhythm.bind(this)
  }

  componentDidMount() {
    this.getRandomKey()
    this.getRandomChords()
    this.getRandomRhythm()
  }

  getRandomKey() {
    let allKeys = ['C', 'F', 'G']
    let randomMusicKey = allKeys[Math.floor(Math.random()*allKeys.length)]
    this.setState({
      music_key: randomMusicKey
    })
  }

  getRandomChords() {
    let arrayOfKeys = Object.keys(this.props.chordProgressionsData)
    let randomKey = arrayOfKeys[Math.floor(Math.random()*arrayOfKeys.length)]
    this.setState({
      random_chords: this.props.chordProgressionsData[randomKey]
    })
  }

  getRandomRhythm() {
    let randomNumber = Math.floor(Math.random()*9 + 1)
    this.setState({
      rhythm_pic_number: randomNumber
    })
  }

  render() {
    console.log(this.state.random_chords)
    let container = this.state.rhythm_pic_number? <RhythmContainer
      rhythm_pic_number={this.state.rhythm_pic_number}
    /> : null

    return (
      <div>
        <h1>Practice reading chord charts</h1>
        <KeyContainer
          music_key={this.state.music_key}
        />
        <ChordsContainer
          music_key={this.state.music_key}
          random_chords={this.state.random_chords}
          chordName={this.props.chordName}
        />
        {container}

        <div className="nextArrow" onClick={() => {this.getRandomChords() ; this.getRandomKey() ; this.getRandomRhythm()}}>
          {/* <i className="fas fa-arrow-right"></i> */}
          <button>Next</button>
        </div>

      </div>
    );
  }
}

export default App;
