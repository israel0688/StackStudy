import React from 'react';
import Sub2 from './sub2';

import Login from './login'
import Signup from './signup'
//import Navbar from '../navbar'


//import { QUERY_CARDS } from '../utils/queries';
//import { useQuery } from '@apollo/react-hooks';
function CardBody(props) {
    
  //  const { loading, data} = useQuery(QUERY_USER);
  //const {  data} = useQuery(QUERY_CARDS);
  // const user = data?.users || [];
  // const subject = data?.subjects || [];
 // console.log(subject)
   
     function renderCard (tab)  {
          switch(tab){
            case 'Your Cards':
                return <Sub2/>
           case 'login':
                return <Login/>
            case 'signup':
                return <Signup/>
                default:
                  return <Login/>
        }
    } 
     
    
    return(
        <div className="bodycontainer"> 
            <div classname="cardContainer">
            {renderCard(props.currentPage)}
            </div>
             </div>
    )
}

export default CardBody;
