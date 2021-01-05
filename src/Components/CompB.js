import React from 'react';
import {useDispatch} from 'react-redux';
import InputText from "../Actions/InputText";

export default function CompB() {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.value);
        dispatch(InputText(e.target.value));
    }

        return (
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="input_text" type="text" className="validate" onChange={handleChange}/>
                                <label htmlFor="input_text">Enter Text</label>
                            </div>
                        </div>
                    </form>
                </div>
        )
}
