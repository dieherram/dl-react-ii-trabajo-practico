
const ButtonCTA = ({ clases, texto, icono, value, onClickFunction }) => {

  const classes = `btn ${clases}`;

  return (
    <button type="button" className={classes} value={value} onClick={onClickFunction}> {texto} <img src={icono} style={{ width: '1em' }} /> </button>
  )
}

export default ButtonCTA