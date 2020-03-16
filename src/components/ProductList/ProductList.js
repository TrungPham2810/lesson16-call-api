import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h2 className="panel-title">List Product</h2>
                </div>
                <div className="panel-body">

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                        {this.props.children}
                        </tbody>
                    </table>

                </div>
            </div>

        );
    }

}

export default ProductList;
