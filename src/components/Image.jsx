import React, {Component} from "react";
import HOC from "./Hoc";

class Image extends Component {
    render(){
        const {count,likeCount} = this.props
        return(
            <button onClick={likeCount}>Like Image {count}</button>
        )

    }
}

export default HOC(Image)