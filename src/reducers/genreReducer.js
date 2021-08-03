export default function(state=[],action){
    switch(action.type){
        case 'FETCH_GENRE':
          return action.payload
        default:
          return state
    }
}