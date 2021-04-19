import React, { Component } from "react";


class MainScreenLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <h1>check</h1>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default MainScreenLayout;