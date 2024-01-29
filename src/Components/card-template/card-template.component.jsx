import { Component } from "react";
import './card-template.styling.css'
class CardTemplate extends Component{
    render(){
        const {searchfor , item} = this.props
        return (
            item.name.toLowerCase().includes(searchfor) && (<div className="grid-item card-template">
                      <img src={`https://robohash.org/${item.id}`}/>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                 </div>)
        )
    }
}
export default CardTemplate