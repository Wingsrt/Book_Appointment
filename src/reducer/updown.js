
const init={

    list:false,
    counter:true
}

//const counter=false


const ch=(state=init,action)=>{
 
    switch(action.type){
        case 'INC':{
              
             return{
               
                ...state,

                counter: state.counter==false?state.counter=true:state.counter=false
             }
                
               
            

           

           // console.log(state)
       
        

        }
        case'DEL':{


            return{
               
                ...state,

                list: state.list==false?state.list=true:state.list=false
             }

          
           
       } 
        default:return state
    }

    
  

   
}

export default ch