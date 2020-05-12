class ProductList extends React.Component { // we create a class component called ProductList. it extends the Component from the React library
  constructor(props){
    super(props);

    this.state = {
      products: [],
    }

    this.handleProductUpVote = this.handleProductUpVote.bind(this)

  }

  componentDidMount() {
    this.setState({ products: Seed.products });
  }
    handleProductUpVote(productId) { // function that fires after a product has been upvoted. will handle updating the vote count.
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    })

  }

    render() { // the render method is what is called to generate the content.
      const products = this.state.products.sort((a,b) => ( // sorts the ProductList by number of votes.
        b.votes - a.votes
      ))
      const productComponents = products.map((product) => (
        <Product // This is how we pass props from a parent component to a child component.
          key={'product-' + product.id}
          id={product.id} // We use {} or 'delimiters' to identify a javascript expression as a value.
          title={product.title} // Each of these key value pairs can be found for each Product in the seed file.
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote} // we add an onVote method as a prop to Product. We call this.handleProductUpVote so each product has access to the handleProductUpVote function.
        /> 
      )); 
        return ( // the render method returns what will end up being seen by the client.
            <div className="ui unstackable items">
              {productComponents}
            </div>
        );
    }
}


class Product extends React.Component { // Create another class component. Must extend Component from the React library.

  // Refactored using Babel transform-class-properties (see script in head on index.html)
  handleUpVote = () => { // This is the function that handles the data when the the 'up vote' button has been clicked. 
    // calls this.props.onVote (the method that is in Product) with the.props.id (the key value pair in Product) as a parameter. 
    this.props.onVote(this.props.id);
  }

    render() { // render function we call to generate content.
        return( // when invoked, the render method will return the content seen.
          
            <div className='item'>
            <div className='image'>
              <img src={this.props.productImageUrl} /> {/* // We use delimiters to access the prop value of Product. By using this, we are specifying the scope of the data (locked to this component) */}

            </div>
            <div className='middle aligned content'>
              <div className="header">
                {/* We add an onClick listener on the caret icon. We call this.handleUpVote so we can update the product being upvoted. */}
                <a onClick={this.handleUpVote}> 
                  <i className='large caret up icon'/>              
                </a>
                  {this.props.votes}
              </div>
              <div className='description'>
                <a href={this.props.url}>
                  {this.props.title}
                </a>
                <p>{this.props.description}</p>
              </div>
              <div className='extra'>
                <span>Submitted by:</span>
                <img
                  className='ui avatar image'
                  src={this.props.submitterAvatarUrl}
                />
              </div>
            </div>
          </div>
        )
    }
}


ReactDOM.render(<ProductList />, document.getElementById('content')) // This is how we render a component to a specific div. Here, We access the ReactDOM and call the .render() method. We then call the ProductList component and select the 'content' div from index html. 