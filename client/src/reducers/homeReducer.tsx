import {IDay, IMax, State} from '../types/maxRepsType';

const SET_HOME = 'SET_HOME';
const SET_GOALS = 'SET_GOALS';

type Action = 
| {type: 'SET_HOME', allDays:IDay[]}
| {type: 'SET_GOALS', currentProgress:IMax[]}

export const homeReducer = (state: State, action: Action):State => {
  
  switch (action.type) {
    case SET_HOME:
      return {
        ...state,
        allDays: action.allDays
      }
    case SET_GOALS:
      return {
        ...state,
        currentProgress:action.currentProgress
      }
    default:
      throw new Error('Tried to reduce with unsupported action type');
  }
}

export {SET_HOME, SET_GOALS};