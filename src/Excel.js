import PropTypes from "prop-types";
import React from "react";

class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.initialData };
    this.sort = this.sort.bind(this);
  }

  sort(e) {
    const data = this.clone(this.state.data);
    data.sort((a, b) => {
      return a[e.target.cellIndex] > b[e.target.cellIndex] ? 1 : -1;
    });
    this.setState({ data });
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
