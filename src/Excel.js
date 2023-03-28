import PropTypes from "prop-types";
import React from "react";

class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData,
      sortby: null,
      descending: false,
      edit: null,
    };
    this.sort = this.sort.bind(this);
    this.showEditor = this.showEditor.bind(this);
    this.save = this.save.bind(this);
  }

  sort(e) {
    const column = e.target.cellIndex;
    const data = this.clone(this.state.data);
    const descending = this.state.sortby === column && !this.state.descending;

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

  showEditor(e) {
    this.setState({
      edit: {
        row: parseInt(e.target.dataset.row, 10),
        column: e.target.cellIndex,
      },
    });
  }

  save(e) {
    e.preventDefault();
    const input = e.target.firstChild;
    const data = this.clone(this.state.data);
    data[this.state.edit.row][this.state.edit.column] = input.value;
    this.setState({
      edit: null,
      data,
    });
  }

  render() {
    const edit = this.state.edit;
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, idx) => {
              if (this.state.sortby === idx) {
                title += this.state.descending ? " \u2191" : " \u2193";
              }
              return (
                <th onClick={this.sort} key={idx}>
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, rowIndx) => (
            <tr key={rowIndx}>
              {row.map((cell, colIndex) => {
                if (edit && edit.row === rowIndx && edit.column === colIndex) {
                  cell = (
                    <form onSubmit={this.save}>
                      <input type="text" defaultValue={cell} />
                    </form>
                  );
                }
                return (
                  <td
                    onDoubleClick={this.showEditor}
                    data-row={rowIndx}
                    key={colIndex}
                  >
                    {cell}
                  </td>
                );
              })}
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
