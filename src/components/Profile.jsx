import React from "react";
import Shimmer from "./Shimmer";
// the this variable is shared among all
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 5,
      image: "false",
      url: "nothing",
    };
    console.log("constructor ", this.props.name);
  }
  async componentDidMount() {
    // do the api call here
    // const res = await fetch("https://api.github.com/users/tanmay958");
    // const data = await res.json();
    this.timer = setInterval(() => {
      console.log("hello tanmay");
    }, 1000);

    this.setState({
      url: "https://avatars.githubusercontent.com/u/53569547?v=4",
      image: "true",
    });
    console.log("component did mount", this.props.name);
  }
  componentWillUnmount() {
    console.log("it is unmounted");
    clearInterval(this.timer);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) console.log("state chenged");
  }
  render() {
    let { count, count2, url, image } = this.state;
    console.log("render", this.props.name);

    return (
      <>
        <br />
        <h2>this is {this.props.name} </h2>
        <p>{count}</p>
        <p>{count2}</p>
        {image === "false" ? (
          ((<Shimmer />), console.log("not loaded"))
        ) : (
          <img src={url} alt="this is a readlly bg toLowerCase" />
        )}

        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          click me
        </button>
      </>
    );
  }
}
export default Profile;
