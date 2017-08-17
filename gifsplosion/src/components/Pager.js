import React, {Component} from 'react';
import _ from 'lodash';

// Pager controls the behavior of the pagination component. It will update whenever the getGifs() function is called so that the source of truth is at the highest possible level

class Pager extends Component {
    constructor(props) {
        super(props);
        this.state = {
          first: this.props.page,
          second: this.props.page + 1,
          third: this.props.page + 2,
          fourth: this.props.page + 3,
          fifth: this.props.page + 4,
          next: this.props.page + 1,
          prev: this.props.page
         };
    }

    // setPager is designed to ensure that the correct options for pagination are allowed 

    setPager(){
      if(this.props.page === 2){
        this.setState({
          first: this.props.page - 1,
          second: this.props.page,
          third: this.props.page + 1,
          fourth: this.props.page + 2,
          fifth: this.props.page + 3,
          next: this.props.page + 1,
          prev: this.props.page - 1
        })
      } else if(this.props.page > 2){
        this.setState({
          first: this.props.page - 2,
          second: this.props.page - 1,
          third: this.props.page,
          fourth: this.props.page + 1,
          fifth: this.props.page + 2,
          next: this.props.page + 1,
          prev: this.props.page - 1
        })
      } else {
        this.setState({
          first: this.props.page,
          second: this.props.page + 1,
          third: this.props.page + 2,
          fourth: this.props.page + 3,
          fifth: this.props.page + 4,
          next: this.props.page + 1,
          prev: this.props.page
        });
      }
    }

    handlePageChange(newPage){
      this.props.pageController(newPage)
      this.setPager();
    }

    componentDidMount(){
      this.setPager();
    }

    render(){
      return (
        <div className={this.props.display + " row"}>
          <div className="col-md-12 text-center">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className={this.props.page === this.state.first ? "page-item disabled": "page-item"}>
                  <a aria-label="Previous" onClick={() => this.handlePageChange(this.state.prev)}>
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className={this.props.page === this.state.first ? "page-item active": "page-item"}>
                  <a href="#" onClick={() => this.handlePageChange(this.state.first)}>
                    {this.state.first}
                  </a>
                </li>
                <li className={this.props.page === this.state.second ? "page-item active": "page-item"}>
                  <a href="#" onClick={() => this.handlePageChange(this.state.second)}>
                    {this.state.second}
                  </a>
                </li>
                <li className={this.props.page === this.state.third ? "page-item active": "page-item"}>
                  <a href="#" onClick={() => this.handlePageChange(this.state.third)}>
                    {this.state.third}
                  </a>
                </li>
                <li className={this.props.page === this.state.fourth ? "page-item active": "page-item"}>
                  <a href="#" onClick={() => this.handlePageChange(this.state.fourth)}>
                    {this.state.fourth}
                  </a>
                </li>
                <li className={this.props.page === this.state.fifth ? "page-item active": "page-item"}>
                  <a href="#" onClick={() => this.handlePageChange(this.state.fifth)}>
                    {this.state.fifth}
                  </a>
                </li>
                <li>
                  <a aria-label="Next" onClick={() => this.handlePageChange(this.state.next)}>
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
    }
}
export default Pager;
