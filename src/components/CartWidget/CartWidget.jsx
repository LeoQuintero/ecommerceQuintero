import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'

export default function CartWidge() {
    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} />   
            <div><small>2</small></div>
    

        </div>
     
    )

}