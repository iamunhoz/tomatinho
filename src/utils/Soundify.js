const beginSound = require('./../assets/beginChime.mp3')
const SuccessSound = require('./../assets/successChime.mp3')

export default function Soundify ({ type }) {
  switch (type.toLowerCase()) {
    case 'success':
      return <audio src={SuccessSound} autoPlay/>
    case 'begin':
      return <audio src={beginSound} autoPlay/>
    default:
      return ''
  }
}