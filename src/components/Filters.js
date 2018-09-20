import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            ref="filterz"
            onChange={this.props.onChangeType}
          >
            <option value="all">All</option>
            <option value="sortname">Sort Name</option>
            <option value="sortweight">Sort Weight</option>
            <option value="filtergrease">Filter Greased</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={this.props.onFilterPigsClick}
            className="ui secondary button"
          >
            Sort/Filter Pigs
          </button>
        </div>
      </div>
    );
  }
}
