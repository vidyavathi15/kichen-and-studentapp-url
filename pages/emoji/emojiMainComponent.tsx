// import {Component} from 'react'
import {useState} from 'react'

import EmojiCard from '../emojiCard/emojiCard'
import NavBar from '../navbar/navbarPage'
import WinOrLoseCard from '../winOrLossCard/winOrLossCard'


const EmojiGame = (props: any) => {
  const [initialState, setInitialState] = useState<any>({
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  })
  const resetGame = () => {
    setInitialState({
      ...initialState,
      clickedEmojisList: [],
      isGameInProgress: true,
    })
  }
  const renderScoreCard = () => {
    const {emojisList} = props
    const {clickedEmojisList} = initialState
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  const finishGameAndSetTopScore = (currentScore: any) => {
    const {topScore} = initialState
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    setInitialState({
      ...initialState,
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  const clickEmoji = (id: any) => {
    const {emojisList} = props
    const {clickedEmojisList} = initialState
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        finishGameAndSetTopScore(emojisList.length)
      }
      setInitialState((previousState: any) => ({
        ...initialState,
        clickedEmojisList: [...previousState.clickedEmojisList, id]
      }))
    }
  }

  const getShuffledEmojisList = () => {
    const {emojisList} = props
    return  emojisList.sort(() => Math.random() - 0.5)
  }

  const renderEmojisList = () => {
    const shuffledEmojisList = getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map((emojiObject: any) => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={clickEmoji}
          />
        ))}
      </ul>
    )
  }
  return (
    <div className="app-container">
      <NavBar
        currentScore={initialState.clickedEmojisList.length}
        isGameInProgress={initialState.isGameInProgress}
        topScore={initialState.topScore}
      />
      <div className="emoji-game-body">
        {initialState.isGameInProgress ? renderEmojisList() : renderScoreCard()}
      </div>
    </div>
  )
}
export default EmojiGame
