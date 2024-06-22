import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { backend_url, currency } from '../../App'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={backend_url+props.image} alt="products" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}{currency}</div>
        <div className="item-price-old">{props.old_price}{currency}</div>
      </div>
    </div>
  )
}

export default Item
