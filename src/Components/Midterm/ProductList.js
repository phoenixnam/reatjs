import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      this.setState({ products: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      alert("Product deleted successfully");
      this.getProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.log(error);
      alert("Failed to delete product");
    }
  };
  
  editProduct = (productId) => {
    // Redirect or perform other actions to edit the product with the given ID
    console.log("Edit product with ID:", productId);
  };

  render() {
    const { products } = this.state;

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
                <div className="mt-3 float-left">
                  {/* <input className="form-control search mb-3 ml-5" name="keyword" value={keyword} onChange={this.onChange} type="search" placeholder="Search" aria-label="Search" /> */}
                </div>
                <table className="table table-bordered table-hover mt-6 ml-5">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên Sản Phẩm</th>
                      <th className="text-center">Loại Sản Phẩm</th>
                      <th className="text-center">Hình ảnh</th>
                      <th className="text-center">Xuất xứ</th>
                      <th className="text-center">Tình Trạng</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center">{product.name}</td>
                        <td className="text-center">{product.name_category}</td>
                        <td className="text-center">
                          <img src={product.image} alt="Product" />
                        </td>
                        <td className="text-center">{product.origin}</td>
                        <td className="text-center">{product.tinhtranghang}</td>
                        <td className="text-center">
                          <button type="button" onClick={() => this.editProduct(product.id)}>Sửa</button>
                          <button type="button">Xóa</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Router>
    );
  }
}

export default ProductList;
