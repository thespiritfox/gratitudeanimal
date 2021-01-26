import axios from 'axios'

//action type
export const SINGLE_ANIMAL = 'SINGLE_ANIMAL'

//action creator
export const _singleAnimal = (animal) => ({
  type: SINGLE_ANIMAL,
  animal,
})

//thunk
export const fetchAnimal = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/animal/${id}`)
      dispatch(_singleAnimal(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const GET_ANIMAL = 'GET_ANIMAL'

export const getAnimal = (animal) => {
  return {type: GET_ANIMAL, animal}
}

export const createAnimal = (animal) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post('/api/animal', animal)
      dispatch(getAnimal(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const UPDATE_ANIMAL = 'UPDATE_ANIMAL'

export const _updateAnimal = (animal) => {
  return {
    type: UPDATE_ANIMAL,
    animal,
  }
}

export const updateAnimal = (animal) => {
  return async (dispatch) => {
    const {data} = await axios.put(`/api/animal/${animal.id}`, animal)
    dispatch(_updateAnimal(data))
  }
}

export default function animalReducer(state = {}, action) {
  switch (action.type) {
    case SINGLE_ANIMAL:
      return action.animal
    case UPDATE_ANIMAL: {
      return state.id === action.animal.id ? action.animal : state
    }
    default:
      return state
  }
}
