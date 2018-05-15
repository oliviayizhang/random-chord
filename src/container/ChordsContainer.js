import React from 'react'

class ChordsContainer extends React.Component {
  render() {
    let music_key = this.props.music_key
    let chord_numeral_array = this.props.random_chords
    let chord_name = this.props.chordName[music_key]
    let chord_name_result = []

    for (let i = 0; i < chord_numeral_array.length; i++) {
      let current_chord = chord_numeral_array[i]
      chord_name_result.push (chord_name[current_chord])
    }

    let individual_chord_name = chord_name_result.map((chord_name, i) => {
      return <li key={i}>{chord_name}</li>
    })

    return (
      <div>
        <h3>display random chords progression</h3>
        <ul className="chord_name">
          {individual_chord_name}
        </ul>
      </div>
    )
  }
}

export default ChordsContainer
