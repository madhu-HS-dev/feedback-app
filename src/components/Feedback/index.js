// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isDisplayed: true}

  onChangeCardContainer = () => {
    const {isDisplayed} = this.state
    if (isDisplayed === true) {
      this.setState({isDisplayed: false})
    } else {
      this.setState({isDisplayed: true})
    }
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isDisplayed} = this.state
    return (
      <div className="feedback-app-container">
        {isDisplayed ? (
          <div className="emojis-card-container">
            <h1 className="emoji-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <div className="emoji-image-container">
              {emojis.map(eachEmoji => (
                <ul className="emoji-image-container">
                  <div>
                    <li>
                      <img
                        src={eachEmoji.imageUrl}
                        className="emoji"
                        alt={eachEmoji.name}
                        onClick={this.onChangeCardContainer}
                        key={eachEmoji.id}
                      />
                    </li>
                    <li>
                      <p className="emoji-description">{eachEmoji.name}</p>
                    </li>
                  </div>
                </ul>
              ))}
            </div>
          </div>
        ) : (
          <div className="emojis-card-container">
            <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
            <h1 className="emoji-heading">Thank you!</h1>
            <p className="emoji-description">
              We will your feedback to improve our customer support performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
