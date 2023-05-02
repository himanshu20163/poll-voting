const initialdata = {
    alluserdata:[]
 }
 
 const Reducer = (storedata=initialdata,action) => {
   if (action.type === "alluserdata") {
     return {...storedata,
        alluserdata:action.payload
     }
   
 }
 
 return storedata;
 }
 
 export default Reducer