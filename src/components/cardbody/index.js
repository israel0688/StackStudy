import React, {useState} from 'react';
import Sub1 from './sub1';
import Sub2 from './sub2';
import Sub3 from './sub3';
import Sub4 from './sub4';
import Sub5 from './sub5';
import Navbar from '../navbar'

function CardBody() {
    const [currentPage, handlePageChange] = useState('About');
     
    /* const renderCard = () => {
          switch(currentPage){
            case 'Sub1':
                return <Sub1/>
            case 'Sub2':
                return <Sub2/>
            case 'Sub3':
                return <Sub3/>
            case 'Sub4':
                return <Sub4/>
            case 'Sub5':
                return <Sub5/>
                default:
                  return <Sub1/>
        }
    } */
    return(
        <div className="container">
            <p>parent</p>
            <div classname="cardContainer">
               {(() => {
                   switch(currentPage){
                    case 'Sub1':
                        return <Sub1/>
                    case 'Sub2':
                        return <Sub2/>
                    case 'Sub3':
                        return <Sub3/>
                    case 'Sub4':
                        return <Sub4/>
                    case 'Sub5':
                        return <Sub5/>
                        default:
                          return <Sub1/>
                   }
               })()}
                
            </div>
             </div>
    )
}

export default CardBody;