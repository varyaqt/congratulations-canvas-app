import "./Greet.scss"

const Greet = (props) => {
  const { text } = props
  return <div className="greet">{text}</div>
}

export default Greet
