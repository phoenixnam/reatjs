import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: '',
      searchResults: [],
      cartItems: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const json = await response.json();
      this.setState({ data: json, searchResults: json });
    } catch (error) {
      console.log(error);
    }
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchButton = () => {
    const { data, searchTerm } = this.state;
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ searchResults: results });
  };

  addToCart = (item) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, item],
    }));
    alert('Đã thêm vào giỏ hàng');
  };

  removeFromCart = (itemId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item.id !== itemId),
    }));
  };

  render() {
    const { searchResults, searchTerm, cartItems } = this.state;

    return (
      <div className="container">
        <br />
        <h3 className="colection">SẢN PHẨM NỔI BẬT</h3>
        <br />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={this.handleSearch}
          className="input"
        />
        <button className="button" onClick={this.handleSearchButton}>
          Tìm kiếm
        </button>
        <br />
        <br />
        <div className="row">
          {searchResults.map((e) => (
            <div className="col-md-3" key={e.id}>
              <div className="card">
                <img src={e.image} alt={e.name} className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title">{e.name}</h4>
                  <p className="card-text">{e.color}</p>
                  <p className="card_price"> {e.materrial}</p>
                  <p className="card_price"> {e.expiry_date}</p>
                  <p className="card_price"> {e.origin}</p>
                  <p className="card_price"> {e.description}</p>
                  <p className="card_price"> {e.tinhtranghang}</p>
                  <div className="function">
                    <button
                      className="button1"
                      onClick={() => this.addToCart(e)}
                    >
                      THÊM GIỎ HÀNG
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Cart cartItems={cartItems} removeFromCart={this.removeFromCart} />
      </div>
    );
  }
}

export default Show;
