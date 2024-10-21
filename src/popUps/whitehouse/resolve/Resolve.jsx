import React from 'react'
import Style from '../escalateQuery/Escalate_Query.module.css'


const Resolve = () => {
  return (
    <div>
        <div id={Style.Escalate_Query_mainDiv}>
        <div id={Style.Escalate_Query_wrapperDiv}>
            <p>Has a resolution been giving to this query and is the user satisfied with the resolution?</p>

            <div id={Style.btnDiv}>
                <button>Yes</button>
                <button>Cancel</button>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default Resolve