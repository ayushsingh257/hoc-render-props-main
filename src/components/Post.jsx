import React, {Component} from "react";
import HOC from "./Hoc";

class Post extends Component {
    render(){
        const {count,likeCount} = this.props
        return(
            <button onClick={likeCount}>Like Post {count}</button>
        )

    }
}

export default HOC(Post)