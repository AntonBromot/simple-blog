import React from "react"
import {HashLoader} from "react-spinners";

const ASSETS = {
    SPINNER_COLOR: "#36D7B7"
}

const Spinner = () =>  <div className="spinnerWrapper"><HashLoader color={ASSETS.SPINNER_COLOR} className="spinner" /></div>

export default Spinner
