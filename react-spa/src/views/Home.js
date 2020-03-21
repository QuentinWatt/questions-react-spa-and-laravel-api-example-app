import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

class Home extends React.Component{
    state = {
        paginatedProducts: {},
        loading: true
    };

    componentDidMount(){
        axios.get('http://api.mrsgearing.test/products').then(response => {
            this.setState({
                paginatedProducts: response.data,
                loading: false
            })
        });
    }

    render(){
        let products = null
        if(this.state.paginatedProducts && this.state.paginatedProducts.data){
            products = this.state.paginatedProducts.data.map((product, key) =>
                <div className="border shadow-lg mb-4 p-3 rounded">
                    <Link
                        to={`products/${product.id}`}
                    >
                        <h3 className="font-bold text-xl mb-3">{product.title}</h3>
                    </Link>
                    <div className="font-bold mb-3">
                        $ { product.price / 100 }
                    </div>
                    <div>{product.description}</div>
                </div>
            )
        }

        return (
            <main className="container mx-auto px-3 pb-16">
                <h1 className="text-3xl font-bold">Home</h1>
                { !this.state.loading ? products : 'loading' }
            </main>
        )
    }
}

export default Home;