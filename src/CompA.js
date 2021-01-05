import React from 'react';
import CompB from './Components/CompB';
import CompC from './Components/CompC';

function CompA() {
    return (
        <div className="container" style={{marginTop: 50}}>
            <div className="row">
                <div className="col s12">
                    <CompB/>
                </div>
                <div className="col s12">
                    <CompC/>
                </div>
            </div>
        </div>
    )
}

export default CompA;
