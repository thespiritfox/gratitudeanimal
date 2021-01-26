import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEntry} from '../store/entry'

export class CreateEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const content = event.target.content.value
    const date = Date.now()
    this.props.createEntry({content: content, date: date})
    this.setState({
      content: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="content">What are you grateful for today?: </label>
        <input
          name="content"
          type="text"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    )
  }
}
const mapState = (state) => {
  return {
    entries: state.entries,
  }
}

const mapDispatch = (dispatch) => {
  return {createEntry: (entry) => dispatch(createEntry(entry))}
}

export default connect(mapState, mapDispatch)(CreateEntry)
