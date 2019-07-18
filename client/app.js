import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCart: false
    };
  }

  componentDidMount() {
    window.addEventListener('showCart', e =>
      this.setState({ showCart: e.detail.showCart })
    );
  }

  render(){
    return( 
    <div>
      <Search/>
      <Cart showCart={this.state.showCart} />
      <ItemDetail showCart={this.state.showCart}/>
      <Carousel showCart={this.state.showCart} />
      <ReviewsList showCart={this.state.showCart} />
    </div>
    )
  }
}