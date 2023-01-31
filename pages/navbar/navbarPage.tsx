// import './navbar.css'

const NavBar = (props: any) => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav>
      <div className="title-with-score-container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div className="logo-and-title-container" style={{display:"flex", alignItems:"center"}}>
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 style={{color:"white"}}>Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div style={{display:"flex", alignItems:'center'}} >
            <p className="score" style={{marginRight:"2rem", color:"white"}}>Score: {currentScore}</p>
            <p className="score" style={{color:"white"}}>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
