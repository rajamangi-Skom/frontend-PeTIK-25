import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor: Komponen dibuat");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("2. componentDidMount: komponen sudah dirender ke DOM");

    document.getElementById("btn").textContent = "Klik untuk tambah";
    document.getElementById("btn").style.backgroundColor = "#367485";
    document.getElementById("btn").style.color = "#fff";

    this.interval = setInterval(() => {
      console.log("Count sekarang", this.state.count);
    }, 10000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "3. componentDidUpdate: Komponen diperbarui",
      prevState.count,
      "->",
      this.state.count
    );
  }

  componentWillUnmount() {
    console.log("4. componentWillUnmount: Komponen dihapus");
    clearInterval(this.interval)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("render : Komponen sedang dirender");
    
    return (
      <div>
        <h2>React Lifecycle</h2>
        <p>Count : {this.state.count}</p>
        <button id="btn" onClick={this.increment}>
          Tambah
        </button>
      </div>
    );
  }
}

export default LifeCycle;
