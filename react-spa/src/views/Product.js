import React from 'react'
import axios from 'axios'

class Product extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            product: {},
        }
    }

    componentDidMount(){
        axios.get(`http://api.mrsgearing.test/products/${this.props.match.params.id}`).then(response => {
            this.setState({ product: response.data })
        });
    }

    render(){
        return (
            <main className="container mx-auto px-3 pb-16">
                <h1 className="text-3xl font-bold mb-3">
                    {this.state.product.title}
                </h1>

                <div className="font-bold text-xl mb-3">
                    ${ this.state.product.price / 100 }
                </div>

                <div>
                    {this.state.product.description}
                </div>
            </main>
        )
    }
}

export default Product;