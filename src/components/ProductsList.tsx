import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, selectProducts } from '../store/slices/productsSlice'
import { RootDispatch} from '../store/store';

export default function ProductsList() {

    const productsList = useSelector(selectProducts);

    const dispatch = useDispatch<RootDispatch>();//- проводник, кот. ничего не меняет

    useEffect(()=> {
        dispatch(loadProducts());
    }, [dispatch]
    );

  return (
    <div>
        <h3>ProductsList</h3>
        
        {productsList.map((e)=> (
           <div key={e.id}>
                <p>Title: {e.title}</p>
                <p>Price: {e.price}</p>
                <p>Rating: rate: {e.rating.rate}, count: {e.rating.count}</p>
            </div>
        ))}
    </div>
  )
}