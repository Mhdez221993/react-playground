import PropTypes from "prop-types";
import React from "react";

class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.initialData, sortby: null, descending: false };
    this.sort = this.sort.bind(this);
  }

  sort(e) {
    const column = e.target.cellIndex;
    const data = this.clone(this.state.data);
    const descending = this.state.sortby === column && !this.state.descending;
    console.log(column);

    data.sort((a, b) => {
      if (a[column] === b[column]) return 0;
      return descending
        ? a[column] > b[column]
          ? 1
          : -1
        : a[column] < b[column]
        ? 1
        : -1;
    });
    this.setState({ data, sortby: column, descending });
  }

  clone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, indx) => (
              <th onClick={this.sort} key={indx}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, rowIndx) => (
            <tr key={rowIndx}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Excel;

Excel.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
