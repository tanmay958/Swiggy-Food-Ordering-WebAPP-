import React from "react";
import Shimmer from "./Shimmer";

// the this variable is shared among all
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    this.setState({
      url: "https://avatars.githubusercontent.com/u/53569547?v=4",
      image: "true",
    });
  }
  componentWillUnmount() {}
  componentDidUpdate(prevProps, prevState) {}
  render() {
    let { count, count2, url, image } = this.state;

    return (
      <>
        <br />
        <h1>Sorry Not Built Yet</h1>
        {image === "false" ? <Shimmer /> : <img src={url} alt="img" />}
      </>
    );
  }
}
export default Order;
