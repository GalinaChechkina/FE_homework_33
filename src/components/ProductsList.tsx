import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, selectProducts } from '../store/slices/productsSlice'
import { RootDispatch, RootState } from '../store/store';

export default function ProductsList() {

    const productsList = useSelector(selectProducts);

    const dispatch = useDispatch<RootDispatch>();

    useEffect(()=> {
        dispatch(loadProducts());
    },
    [dispatch]);

  return (
    <div>
        <h3>ProductsList</h3>
        { 
            productsList.map(e=> 
                <div key={e.id}> 
                    <p>Title: {e.title}</p>
                    <p>Price: {e.price}</p>
                    <p>Rating: {e.rating.rate}, {e.rating.count}</p>
                </div>
            )
        }
    </div>
  )
}