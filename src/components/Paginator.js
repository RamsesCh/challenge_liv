import React, { Component } from 'react';
import ReactPaginate from "react-paginate";
import '../styles/components/paginator.scss'


export class Paginator extends Component {
    state={
        fPage:0
    }

  handlePageClick = (page) => {
    this.props.newPage(page.selected + 1);
  };

  setStartPage = () => {
    this.props.newPage(1);
    this.setState({fPage: 0})
  };

  setLastPage = () => {
    this.props.newPage(this.props.pageCount);
    this.setState({ fPage: this.props.pageCount - 1 });
  };

  render() {
    return (
      <div className="d-flex align-items-center justify-content-end py-3">
        <button
          onClick={this.setStartPage}
          type="button"
          className="btn btn-outline-primary"
        >
          {"<<"}
        </button>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={this.handlePageClick}
          pageRangeDisplayed={0}
          pageCount={this.props.pageCount}
          forcePage={this.state.fPage}
          previousLabel="<"
          className="pagination justify-content-center mb-0"
          previousClassName="btn btn-outline-primary"
          nextClassName="btn btn-outline-primary"
          activeClassName="active"
          pageClassName="page-item mx-1"
          pageLinkClassName="page-link"
        />
        <button
          onClick={this.setLastPage}
          type="button"
          className="btn btn-outline-primary"
        >
          {">>"}
        </button>
      </div>
    );
  }
}

export default Paginator;