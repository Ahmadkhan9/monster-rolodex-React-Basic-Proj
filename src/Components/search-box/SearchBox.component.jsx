import { Component } from "react";
import './search-box.styling.css'
class SearchBox extends Component{
    render(){
        const {searchfor , placeholder , className} = this.props
        return(
            <input className={`search-box ${className}`} onChange={searchfor} placeholder={placeholder}/>
        )
    }
}
export default SearchBox