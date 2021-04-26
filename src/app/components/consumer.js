import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import FooterBar from "../FooterBar";
import Navfooter from "../footer";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consumer: [],
    };
  }

  componentDidMount() {
    //var userid = JSON.parse(localStorage.getItem("user")).userid;
    axios.get("http://localhost:4000/admin/getConsumer/").then((res) => {
      this.setState({ consumer: res.data });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="home "
          style={{
            marginTop: 50,
            marginLeft: 80,
            marginRight: 80,
            marginBottom: 50,
          }}
        >
          <center className="my-5">
            <h1>Inventory</h1>
          </center>
          <table className="table table-bordered table-hover">
            <thead className="mb-5 thead-dark">
              <tr>
                <th scope="col">consumer Id</th>
                <th scope="col">consumer Name</th>
                <th scope="col">Price</th>
                <th scope="col">Profit</th>
                <th scope="col">Stock</th>
                <th scope="col">
                  {" "}
                  <button
                    className="btn btn-primary px-3"
                    onClick={() => {
                      this.props.history.push("/addproducts");
                    }}
                  >
                    Add products
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.consumer.length > 0 ? (
                this.state.consumer.map((item, index) => (
                  <tr key={item.productid}>
                    <th scope="row">{item.productid}</th>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>{item.price - item.costPrice}</td>
                    <td>{item.stock}</td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={(x = item.productid) =>
                          this.props.history.push("/updateProducts/" + x)
                        }
                      >
                        <i className="fas fa-pen"></i>
                      </button>
                      <button
                        className="btn btn-danger mx-3"
                        onClick={() => {
                          var x = item.productid;
                          this.deleteHandler(x);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No products</p>
              )}
            </tbody>
          </table>
        </div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default Product;
