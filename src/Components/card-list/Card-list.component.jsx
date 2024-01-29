import { Component } from "react";
import CardTemplate from './../card-template/card-template.component'
class Cardlist extends Component{
    render(){
        const {monsters , searchfor }  = this.props
        return (
                <div className=" grid-container card-section">
                {monsters.map(item => {
                 return (<CardTemplate searchfor={searchfor} item={item}/>)
                })}
                </div>
        )
    }
}

export default Cardlist