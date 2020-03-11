import React, { Component } from "react";


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            price: "",
            description: ""
        };
    }
    render() {
        return (
            <div className="listitem">
                <div className="listitem__row">
                    <div className="listitem__title">
                      <label htmlFor="title">Title:</label>
                      <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title"
                      value={this.state.title}
                      />
            <div className="listitem__author">
            <label htmlFor="title">Author:</label>
                      <input
                      type="text"
                      name="title"
                      id="author"
                      placeholder="author"
                      value={this.state.author}
                      />
      </div>
      <div className="listitem__price">
        {/* {props.description} */}
        price
      </div>
      <div className="listitem__description">
          Description
        {/* {props.description} */}
      </div>
    </div>
    </div>
    </div>
        );
    }
}

export default ListItem;
