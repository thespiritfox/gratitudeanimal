import React from 'react'
import {connect} from 'react-redux'
import {fetchEntries} from '../store/entry'

import '../css-components/allEntries.css'
class AllEntries extends React.Component {
  componentDidMount() {
    this.props.getEntries()
  }

  render() {
    return (
      <div className="entry-container">
        <h1 id="entry-header">Gratitude Journal</h1>
        <div className="allEntries__item">
          {this.props.entries.map((entry) => {
            return (
              <div key={entry.id} className="allEntries">
                <div className="entry-text">
                  <h3 className="entry-text">
                    {entry.date}: <p>{entry.content}</p>
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    entries: state.entries,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getEntries: () => dispatch(fetchEntries()),
  }
}

export default connect(mapState, mapDispatch)(AllEntries)
