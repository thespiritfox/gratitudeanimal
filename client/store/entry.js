import axios from 'axios'

const SET_ENTRIES = 'SET_ENTRIES'

export const setEntries = (entries) => {
  return {type: SET_ENTRIES, entries}
}

export const fetchEntries = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/entry')
      dispatch(setEntries(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const GET_ENTRY = 'GET_ENTRY'

export const getEntry = (entry) => {
  return {type: GET_ENTRY, entry}
}

export const createEntry = (entry) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post('/api/entry', entry)
      dispatch(getEntry(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = []

export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ENTRIES:
      return action.entries
    case GET_ENTRY:
      return [...state, action.robot]
    default:
      return state
  }
}
