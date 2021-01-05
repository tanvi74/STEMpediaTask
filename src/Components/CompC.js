import React from 'react'
import {useSelector} from 'react-redux';

export default function CompC() {
    const inputText = useSelector(state => state.inputText)
        return (
            <div>
                <span style={{fontWeight: 600, fontSize: 20}}>Text Entered :</span> <br />
                {inputText}
            </div>
        )
    }
