import React from 'react';
import Work from './Work';
import Works from "../data";


function WorkList () {
    console.log(Works);
    function renderWorks() {
        return Works.map(work =>{ return <Work key={work.id} work={work}/> })
    }
    return (
        <div className="grid grid-cols-2">
          {renderWorks()}
        </div>
    );
}
export default WorkList