import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { calendarReducer } from '../reducers/calendarReducer';

const intialState = {
  allWorkouts:[]
}
export const useCalendarData = () => {
  
  const [state, dispatch] = useReducer(calendarReducer, intialState);

  useEffect(() => {
    axios.get('/api/calendars')
      .then(res => {
        dispatch({type:'SET_CALENDARWORKOUT', allWorkouts:res.data})
      })
      .catch(err => console.log(err))
  }, [])
  
  return state.allWorkouts ;
}