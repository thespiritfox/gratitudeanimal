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

export default function animalReducer(state = {}, action) {
  switch (action.type) {
    case SINGLE_ANIMAL:
      return action.animal
    default:
      return state
  }
}
