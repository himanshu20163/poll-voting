const initialdata = {
    alldishdata:[],
 }
 
 const Reducer = (state=initialdata,action) => {
   switch(action.type){
      case "alldishdata" :
         state = {
            ...state,
            alldishdata:action.payload,
         }
         break;
   }
 return state;
 }
 
 export default Reducer