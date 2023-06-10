import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Lazada.css'

class Lazada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            name: '',
            price: '',
            image: '',
            origin: '',

        };
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/get-lazada");
            this.setState({ products: response.data });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { products, name, image, price, shopowner } = this.state;

        try {
            // Make a POST request to add the product
            const response = await axios.post("http://127.0.0.1:8000/api/addsp", {
                name,
                price,
                image,
                shopowner,

            });

            // Display success toast notification
            toast.success(response.data.message);

            // Clear the form inputs
            this.setState({
                name: '',
                price: '',
                image: '',
                shopowner: '',

            });

            // Fetch the updated product list
            this.getProducts();
        } catch (error) {
            // Display error toast notification
            toast.error(error.response.data.message);
        }
    };

    render() {
        const { products, name, image, price, shopowner } = this.state;

        return (
            <Router>
                <div>
                    <div id="wrapper">
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="contentt">
                                <div className="btn-group mt-2 float-left a">
                                    <NavLink className="navbar-brand mb-5 ml-4" to="/Add">
                                        <button type="button" className="btn btn-primary">
                                            Thêm Sản Phẩm
                                        </button>
                                    </NavLink>
                                </div>
                                {/* <div className="mt-3 float-left">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      className="form-control mb-3 ml-5"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Tên Sản Phẩm"
                      required
                    />
                    <input
                      className="form-control mb-3 ml-5"
                      name="price"
                      value={price}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Gia"
                     
                    />
                    <input
                      className="form-control mb-3 ml-5"
                      name="image"
                      value={image}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="URL Hình ảnh"
                      required
                    />
                    <input
                      className="form-control mb-3 ml-5"
                      name="shopowner"
                      value={shopowner}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Xuất xứ"
                      required
                    />
                   
                    <button type="submit" className="btn btn-primary ml-5">
                      Thêm
                    </button>
                  </form>
                </div> */}
                                <div className="card-container">
                                    {products.map((product, index) => (
                                        <div className="card" key={index}>
                                            <img src={product.image} alt="Product" className="card-image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text">Giá: {product.price}</p>
                                                <p className="card-text">Chủ cửa hàng: {product.shopowner}</p>
                                            </div>
                                            <span>
                                                <NavLink className="navbar-brand mb-5 ml-4" to="/Add">
                                                    <button type="button" className="btn btn-primary">
                                                        Sửa
                                                    </button>
                                                </NavLink>
                                            </span>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </Router>
        );
    }
}

export default Lazada;
