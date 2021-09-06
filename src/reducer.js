export const initialState= {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
  /*  token: 'BQBDUjTQEFfNJNOVbrZSf4l-CWa1CoJuDTr8oJRsNCx_YSY3KHKTXKEH_tF82df25oVuqcqet5WI9WZyjyOyvSebK0kCejORlM1XkVOePPhaZJBxuN8Y8W0jPQ5ZtOzgWw_GvEWGjG4pNbnwpZL-j6Rn41cwysZy-bw09QfQ-rPPPhja0Ecu' 
 */}


const reducer= (state,action) =>{
     console.log(action);

     switch(action.type){
         case 'SET_USER':
               return {
                   ...state,
                   user:action.user
               }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
     }
}

export default reducer;