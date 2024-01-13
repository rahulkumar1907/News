import { Component } from "react";
import loading from '../Spinner.gif'

 class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
                <img src={loading} alt="loading"></img>
            </div>
        )
    }
}
export default Spinner