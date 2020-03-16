import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';
class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            txtStatus: false
        }
    }

    componentDidMount() {

        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            if (id) {
                this.props.onEditProduct(id)
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                txtStatus: itemEditing.status
            })
        }

    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        var { id, txtName, txtPrice, txtStatus } = this.state;
        var { history } = this.props;
        if (id) {
            this.props.onUpdateProduct(id, {
                id: id,
                name: txtName,
                price: txtPrice,
                status: txtStatus
            })

        } else {

            this.props.onAddProduct({
                name: txtName,
                price: txtPrice,
                status: txtStatus
            })
        }
        history.goBack();
    }
    render() {
        var { txtName, txtPrice, txtStatus } = this.state;
        return (

            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <form onSubmit={this.onSubmit}>
                        <legend>Add New Product</legend>

                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" name="txtName" value={txtName || ""} className="form-control" onChange={this.onHandleChange} placeholder="Input field" />
                        </div>

                        <div className="form-group">
                            <label >Price</label>
                            <input type="number" min='1' name="txtPrice" value={txtPrice} className="form-control" onChange={this.onHandleChange} placeholder="Input field" />
                        </div>


                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value={txtStatus} checked={txtStatus} onChange={this.onHandleChange} name="txtStatus" />
                                Con Hang
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary mr-10">Add</button>

                        <Link to="/product-list" className="btn btn-danger">
                            Back
                        </Link>
                    </form>

                </div>
            </div>


        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actEditProductRequest(id))
        },
        onUpdateProduct: (id, product) => {
            dispatch(actUpdateProductRequest(id, product))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
