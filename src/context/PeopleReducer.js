import { GET_DATA, SET_DATA } from './PeopleTypes'
import mockData from '../data/mockData.json'

export const PeopleReducer = (state, action) => {
    const {data} = mockData;

    switch(action.type){
        case GET_DATA:
            return{...state, newdata:data?.filter((e)=> e[0]?.toLowerCase().includes(action.payload?.id?.toLowerCase())) }
        case SET_DATA:
            return{...state, resultData:action.payload}
        default:
        break;
    }
}
