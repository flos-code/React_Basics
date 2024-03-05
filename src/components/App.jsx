import React from "react";

export class App extends React.Component {
  //   state = {
  //     counterValue: 3,
  //   };

  //   componentDidMount() {
  //     this.myInterval = setInterval(() => {
  //       this.setState((state) => {
  //         if (state.counterValue > 0) {
  //           return { counterValue: state.counterValue - 1 };
  //         } else {
  //           return { counterValue: 0 };
  //         }
  //       });

  //       //   this.setState({ counterValue: Math.max(0, this.state.counterValue - 1) });
  //     }, 1000);
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.myInterval);
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log(prevProps, prevState);
  //   }

  //   shouldComponentUpdate() {
  //     if (this.state.counterValue === 0) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }

  render() {
    // return <strong>Countdown = {this.state.counterValue}</strong>;
    return (
      <div>
        Hallo <strong>{this.props.name}!</strong>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
