import React from 'react'

const ProductList = ({proData}) => {
    return (
        <div className='col-md-4'>
            
            <div  >
                <div className="card" style={{ width: '18rem' }}>
                     <img src="download.jpg" className="card-img-top" alt="..." width={200} height={150} /> 
                    <div className="card-body">
                        <h5 className="card-title">{proData.title}</h5>
                        <p> Price : ${proData.price}</p>
                        <p className="card-text">{proData.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
