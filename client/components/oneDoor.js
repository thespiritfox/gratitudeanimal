/* eslint-disable complexity */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CreateEntry from './createEntry'

import '../css-components/OneDoor.css'
import {createAnimal, fetchAnimal} from '../store/animal'

export class oneDoor extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.doorOneClick = this.doorOneClick.bind(this)
    this.doorTwoClick = this.doorTwoClick.bind(this)
    this.doorThreeClick = this.doorThreeClick.bind(this)
    this.state = {
      storyIndex: 0,
      doorIndex: 0,
      personalityOne: 0,
      personalityTwo: 0,
      personalityThree: 0,
      personalityFour: 0,
    }
    this.storyPoints = [
      'You awaken in a dark room',
      'You are alone',
      'You have this faint feeling that you have been alone...',
      '...for a very long time',
      'your eyes adjust and you see a door',
      '',
      `It's Okay`,
      `It's time for you to meet me`,
      'All doors lead to me',
      `Just follow your heart to find out which me you'll meet`,
      'Are you afraid?',
      'Choose your magical item',
      'What element are you?',
      'I just took a picture of you...what expression do you have?',
      'If this life is a musical thing, what will you do while the music is being played?',
      'You’re walking down the street-someone stops you with a knife. What do you do?',
      'What’s your ideal gift?',
      'What are you running away from?',
      'Where are you running away to?',
      'A voice appears in your head…it asks you: “what do you want?”',
      'Hey...',
      'I want you to know...',
      'I love you',
      'And Finally...',
      'What are you most grateful for?',
      "I'm so happy we can finally meet :)",
      "You're even more good looking in person",
      "I'm not a normal animal. I don't eat regular food",
      'I live off your gratitude',
      'So write your gratitude at the top left of the screen ',
      'Then see all your grateful for on the Diary Page',
      'then come back tomorrow and do the same :)',
      "I'll always be here for you",
    ]
    this.doorOnePrompts = [
      '',
      '',
      'yes',
      'Sword',
      'Fire',
      'A smile',
      'Sing',
      'Run',
      'Gab',
      'Someone Else',
      'An Island',
      'Wisdom',
      'Hey?',
      '',
      'I love you too',
      '',
      'Family',
    ]
    this.doorTwoPrompts = [
      '',
      '',
      'no',
      'Shield',
      'Water',
      'A frown',
      'Dance',
      'Beg',
      'A Gift Card',
      'Myself',
      'Hell',
      'Fame',
      'Hey',
      '',
      `I'm sorry`,
      '',
      'Health',
    ]
    this.doorThreePrompts = [
      '',
      '',
      `never`,
      'Staff',
      'Earth',
      'neutral',
      'Act',
      'Fight',
      'Something Handmade',
      'The World',
      'The Light',
      'Love',
      'Yes?',
      '',
      `I don't know you`,
      '',
      'Success',
    ]
    this.doorFourPrompts = [
      '',
      '',
      `I don't know`,
      `I don't know`,
      'Air',
      `I don't know`,
      `I don't know`,
      `I don't know`,
      `I don't know`,
      `I don't know`,
      `I don't know`,
      `I don't know`,
      '',
      '',
      `I don't know`,
      `I don't know`,
      `I don't know`,
    ]
  }

  doorButton() {}

  componentDidMount() {
    this.props.fetchAnimal()
  }

  doorOneClick() {
    let p = this.state.personalityOne
    let idx = this.state.storyIndex
    let doorIdx = this.state.doorIndex
    console.log('STATTTTEEE', this.state)

    p++
    idx++
    doorIdx++

    this.setState({storyIndex: idx, personalityOne: p, doorIndex: doorIdx})
  }

  doorTwoClick() {
    let idx = this.state.storyIndex
    let p = this.state.personalityTwo
    let doorIdx = this.state.doorIndex
    console.log('STATTTTEEE', this.state)

    p++
    idx++
    doorIdx++

    this.setState({storyIndex: idx, personalityTwo: p, doorIndex: doorIdx})
  }

  doorThreeClick() {
    let p = this.state.personalityThree
    let idx = this.state.storyIndex
    let doorIdx = this.state.doorIndex
    console.log('STATTTTEEE', this.state)

    p++
    idx++
    doorIdx++
    this.setState({storyIndex: idx, personalityThree: p, doorIndex: doorIdx})
  }

  doorFourClick() {
    let p = this.state.personalityFour
    let idx = this.state.storyIndex
    let doorIdx = this.state.doorIndex
    console.log('STATTTTEEE', this.state)

    p++
    idx++
    doorIdx++
    this.setState({storyIndex: idx, personalityFour: p, doorIndex: doorIdx})
  }

  onClick() {
    let idx = this.state.storyIndex

    console.log('STATTTTEEE', this.state)
    console.log(event.target.id)
    // if (this.state.storyIndex < this.storyPoints.length) {

    idx++
    this.setState({storyIndex: idx})
  }

  getText() {
    return this.storyPoints[this.state.storyIndex]
  }

  getDoorText1() {
    return this.doorOnePrompts[this.state.doorIndex]
  }
  getDoorText2() {
    return this.doorTwoPrompts[this.state.doorIndex]
  }
  getDoorText3() {
    return this.doorThreePrompts[this.state.doorIndex]
  }
  getDoorText4() {
    return this.doorFourPrompts[this.state.doorIndex]
  }

  render() {
    //down in the render have a variable that would change conditionally on a component
    //if index is at a certain point, render a specific component
    //once component flips all doors are rendered as buttons
    //move the functionality of the next button to the doors
    //and then if the logic is set up, it renders seamlessly for the users
    //keep in mind that you'll have to pass data between these components
    //every time it renders a new component pass state as props
    //or drop that value in a redux store to connect all of them to it
    //write a three door.js and pass it a prop that has an index value
    let text = this.getText()
    let index = this.state.storyIndex
    let p1 = this.state.personalityOne
    let p2 = this.state.personalityTwo
    let p3 = this.state.personalityThree
    let p4 = this.state.personalityFour

    let d1 = this.getDoorText1()
    let d2 = this.getDoorText2()
    let d3 = this.getDoorText3()
    let d4 = this.getDoorText4()

    if (index <= 4) {
      return (
        <div className="container">
          <img
            className="back-image"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Darkness.png"
          />
          <div id="text-container" className="hide" />
          <div className="controls" />

          <h1 className="center-text">
            <button
              type="button"
              id="next-btn"
              className="next-button"
              onClick={() => this.onClick()}
            >
              {text}
            </button>
          </h1>
        </div>
      )
    }
    if (index > 4 && index < 8) {
      return (
        <div className="container">
          <div className="button-text-container">
            {' '}
            <h1 className="center-text48">{text}</h1>
            <div className="button-container">
              <button
                type="button"
                id="next-btn"
                className="fourdoors"
                onClick={() => this.onClick()}
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU" />
              </button>
            </div>
          </div>
        </div>
      )
    }
    if (index >= 8 && index < 25) {
      return (
        <div className="darkroom">
          {' '}
          <div className="button-text-container">
            <h1 className="center-text">{text}</h1>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU" /> */}
            <div className="button-container">
              <div className="button-wrapper">
                <h3 className="answertext">{d1}</h3>
                <button
                  type="button"
                  id="door-1"
                  className="fourdoors"
                  onClick={() => this.doorOneClick()}
                >
                  <img
                    className="fourdoors"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU"
                  />
                </button>{' '}
              </div>
              <div className="button-wrapper">
                {' '}
                <h3 className="answertext">{d2}</h3>
                <button
                  type="button"
                  id="door-2"
                  className="fourdoors"
                  onClick={() => this.doorTwoClick()}
                >
                  <img
                    className="fourdoors"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU"
                  />
                </button>{' '}
              </div>
              <div className="button-wrapper">
                {' '}
                <h3 className="answertext">{d3}</h3>
                <button
                  type="button"
                  id="door-3"
                  className="fourdoors"
                  onClick={() => this.doorThreeClick()}
                >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU" />
                </button>
              </div>
              <div className="button-wrapper">
                <h3 className="answertext">{d4}</h3>
                <button
                  type="button"
                  id="door-4"
                  className="fourdoors"
                  onClick={() => this.doorFourClick()}
                >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLv7fhp3u3OM9Q1Yom4fnuprPsIGvPzzOrA&usqp=CAU" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if (index >= 25 && p1 >= p2 && p1 >= p3 && p1 >= p4) {
      console.log(this.props)
      return (
        <div>
          <h1 className="animal-header">
            Your animal is the dolphin of wisdom
          </h1>
          <div id="divLandscape">
            <div className="hill hill1"></div>
            <div className="hill hill2"></div>
            <div className="hill hill3"></div>
            <div className="hill hill4"></div>

            <div className="grass"></div>

            <div className="tree1">
              <div className="tree-leaves">
                <div className="tree-leaf-circle tree-leaf-circle1"></div>
                <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                <div className=" tree-leaf-circle tree-leaf-circle7"></div>
              </div>
              <div className="tree-trunk"></div>
            </div>

            <div className="tree2">
              <div className="tree-leaves">
                <div className="tree-leaf-circle tree-leaf-circle1"></div>
                <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                <div className=" tree-leaf-circle tree-leaf-circle7"></div>
              </div>
              <div className="tree-trunk"></div>
            </div>

            <div className="tree3">
              <div className="tree-leaves">
                <div className="tree-leaf-circle tree-leaf-circle1"></div>
                <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                <div className=" tree-leaf-circle tree-leaf-circle7"></div>
              </div>
              <div className="tree-trunk"></div>
            </div>

            <div className="tree4">
              <div className="tree-leaves">
                <div className="tree-leaf-circle tree-leaf-circle1"></div>
                <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                <div className=" tree-leaf-circle tree-leaf-circle7"></div>
              </div>
              <div className="tree-trunk"></div>
            </div>

            <div className="cloud cloud1">
              <div className="cloud-circle cloud-circle1"></div>
              <div className="cloud-circle cloud-circle2"></div>
              <div className="cloud-circle cloud-circle3"></div>
              <div className="cloud-circle cloud-circle4"></div>
              <div className="cloud-circle cloud-circle5"></div>
            </div>

            <div className="cloud cloud2">
              <div className="cloud-circle cloud-circle1"></div>
              <div className="cloud-circle cloud-circle2"></div>
              <div className="cloud-circle cloud-circle3"></div>
              <div className="cloud-circle cloud-circle4"></div>
              <div className="cloud-circle cloud-circle5"></div>
            </div>

            <div className="sky"></div>

            <div className="spinner">
              <div className="sun"></div>
              <div className="moon"></div>
            </div>

            <div id="divHillMain"></div>

            <div>
              <div className="frame frameLeft"></div>
              <div className="frame frameTop"></div>
              <div className="frame frameRight"></div>
              <div className="frame frameBottom"></div>
            </div>
          </div>
          <div>
            <button
              type="button"
              id="next-btn"
              className="next-button"
              onClick={() => this.onClick()}
            >
              {text}
            </button>
            <CreateEntry className="next-button" />
            <img
              className="grat-animal"
              src="https://i.pinimg.com/originals/86/b4/74/86b47418756ad03f5cff453ae2d9420c.png"
              width="250"
              height="200"
            />
          </div>
        </div>
      )
    }
    if (index >= 25 && p2 >= p1 && p2 >= p3 && p2 >= p4) {
      return (
        <div>
          <h1 className="animal-header">
            Your animal is the snake of ambition
          </h1>
          <div>
            <div id="divLandscape">
              <div className="hill hill1"></div>
              <div className="hill hill2"></div>
              <div className="hill hill3"></div>
              <div className="hill hill4"></div>

              <div className="grass"></div>

              <div className="tree1">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree2">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree3">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree4">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="cloud cloud1">
                <div className="cloud-circle cloud-circle1"></div>
                <div className="cloud-circle cloud-circle2"></div>
                <div className="cloud-circle cloud-circle3"></div>
                <div className="cloud-circle cloud-circle4"></div>
                <div className="cloud-circle cloud-circle5"></div>
              </div>

              <div className="cloud cloud2">
                <div className="cloud-circle cloud-circle1"></div>
                <div className="cloud-circle cloud-circle2"></div>
                <div className="cloud-circle cloud-circle3"></div>
                <div className="cloud-circle cloud-circle4"></div>
                <div className="cloud-circle cloud-circle5"></div>
              </div>

              <div className="sky"></div>

              <div className="spinner">
                <div className="sun"></div>
                <div className="moon"></div>
              </div>

              <div id="divHillMain"></div>

              <div>
                <div className="frame frameLeft"></div>
                <div className="frame frameTop"></div>
                <div className="frame frameRight"></div>
                <div className="frame frameBottom"></div>
              </div>
            </div>
            <div>
              <button
                type="button"
                id="next-btn"
                className="next-button"
                onClick={() => this.onClick()}
              >
                {text}
              </button>
              <CreateEntry />
              <img
                className="grat-animal"
                src="https://www.clipartmax.com/png/middle/195-1953506_cute-snake-gif-chinese-new-year-snake.png"
                width="250"
                height="200"
              />
            </div>
          </div>
        </div>
      )
    }
    if (index >= 25 && p3 >= p1 && p3 >= p2 && p3 >= p4) {
      return (
        <div>
          <h1 className="animal-header">Your animal is the dog of courage</h1>
          <div>
            <div id="divLandscape">
              <div className="hill hill1"></div>
              <div className="hill hill2"></div>
              <div className="hill hill3"></div>
              <div className="hill hill4"></div>

              <div className="grass"></div>

              <div className="tree1">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree2">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree3">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree4">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="cloud cloud1">
                <div className="cloud-circle cloud-circle1"></div>
                <div className="cloud-circle cloud-circle2"></div>
                <div className="cloud-circle cloud-circle3"></div>
                <div className="cloud-circle cloud-circle4"></div>
                <div className="cloud-circle cloud-circle5"></div>
              </div>

              <div className="cloud cloud2">
                <div className="cloud-circle cloud-circle1"></div>
                <div className="cloud-circle cloud-circle2"></div>
                <div className="cloud-circle cloud-circle3"></div>
                <div className="cloud-circle cloud-circle4"></div>
                <div className="cloud-circle cloud-circle5"></div>
              </div>

              <div className="sky"></div>

              <div className="spinner">
                <div className="sun"></div>
                <div className="moon"></div>
              </div>

              <div id="divHillMain"></div>

              <div>
                <div className="frame frameLeft"></div>
                <div className="frame frameTop"></div>
                <div className="frame frameRight"></div>
                <div className="frame frameBottom"></div>
              </div>
            </div>
            <div>
              <button
                type="button"
                id="next-btn"
                className="next-button"
                onClick={() => this.onClick()}
              >
                {text}
              </button>
              <CreateEntry />
              <img
                className="grat-animal"
                src="https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/edd/2015/07/dog_featured.png"
                width="250"
                height="200"
              />
            </div>
          </div>
        </div>
      )
    }
    if (index >= 25 && p4 >= p1 && p4 >= p2 && p4 >= p3) {
      return (
        <div>
          <h1 className="animal-header">
            Your animal is the platypus of indecisiveness
          </h1>
          <div>
            <div id="divLandscape">
              <div className="hill hill1"></div>
              <div className="hill hill2"></div>
              <div className="hill hill3"></div>
              <div className="hill hill4"></div>

              <div className="grass"></div>

              <div className="tree1">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree2">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree3">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="tree4">
                <div className="tree-leaves">
                  <div className="tree-leaf-circle tree-leaf-circle1"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle2"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle3"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle4"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle5"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle6"></div>
                  <div className=" tree-leaf-circle tree-leaf-circle7"></div>
                </div>
                <div className="tree-trunk"></div>
              </div>

              <div className="cloud cloud1">
                <div className="cloud-circle cloud-circle1"></div>
                <div className="cloud-circle cloud-circle2"></div>
                <div className="cloud-circle cloud-circle3"></div>
                <div className="cloud-circle cloud-circle4"></div>
                <div className="cloud-circle cloud-circle5"></div>
              </div>

              <div className="cloud cloud2">
                <div className="cloud-circle cloud-circle1"></div>
                <div className="cloud-circle cloud-circle2"></div>
                <div className="cloud-circle cloud-circle3"></div>
                <div className="cloud-circle cloud-circle4"></div>
                <div className="cloud-circle cloud-circle5"></div>
              </div>

              <div className="sky"></div>

              <div className="spinner">
                <div className="sun"></div>
                <div className="moon"></div>
              </div>

              <div id="divHillMain"></div>

              <div>
                <div className="frame frameLeft"></div>
                <div className="frame frameTop"></div>
                <div className="frame frameRight"></div>
                <div className="frame frameBottom"></div>
              </div>
            </div>
            <div>
              <button
                type="button"
                id="next-btn"
                className="next-button"
                onClick={() => this.onClick()}
              >
                {text}
              </button>
              <CreateEntry />
              <img
                className="grat-animal"
                src="https://www.clipartmax.com/png/middle/132-1327472_drawn-sunlight-cute-cartoon-cute-platypus-drawing.png"
                width="250"
                height="200"
              />
            </div>
          </div>
        </div>
      )
    }
  }
}
const mapState = (state) => {
  return {
    animal: state.animal,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAnimal: (id) => dispatch(fetchAnimal(id)),
    createAnimal: (animal) => dispatch(createAnimal(animal)),
  }
}

export default connect(mapState, mapDispatch)(oneDoor)
