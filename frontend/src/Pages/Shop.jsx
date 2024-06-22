import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'

const Shop = () => {

  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('https://projeto-final-etic-api.onrender.com/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <Hero/>
      <NewCollections data={newcollection}/>
    </div>
  )
}

export default Shop
