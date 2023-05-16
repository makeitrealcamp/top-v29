import { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    // yo deberia hacer un fetch a una API
  }

  // useEffect(() => {}, [])

  componentDidUpdate() {
    // cada vez que se actualiza el componente
  }

  // useEffect(() => {})

  componentWillUnmount() {
    // cuando el componente se desmonta
  }

  // useEffect(() => {
  //   return () => {}
  // }, [])

  render() {
    return (
      <div>
        <h1>My Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

export default MyClassComponent;
