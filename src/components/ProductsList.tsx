import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, selectProducts } from '../store/slices/productsSlice'
import { RootDispatch} from '../store/store';

export default function ProductsList() {
    //хук, кот. позволяет функциональным компонентам получать доступ к состоянию
    //и извлекать данные из хранилища
    //аргумент- функция селектора, кот. принимает глобальное состояние и возвращает необходимые данные
    //при изменении состояния компонент будет перерисовываться только в случае, когда
    //возвращаемое значение селектора изменяется 
    const productsList = useSelector(selectProducts);

    const dispatch = useDispatch<RootDispatch>();//- проводник, кот. ничего не меняет
    
    //хук, кот. позволяет выполнять побочные эффекты (у нас- запрос к серверу) 
    //в функциональных компонентах, принимает функцию-эффект и массив зависимостей 
    //(ф-я будет выполняться каждый раз, когда произойдут изменения, указанные в массиве зависимостей)
    //если массив отсутствует, ф-я будет выполняться каждый раз при перерисовке компонента
    //если массив пуст, ф-я выполнится один раз при монтировании компонента
    //если массив не пуст, ф-я будет выполняться каждый раз, когда произойдут изменения,
    //указанные в массиве зависимостей
    useEffect(()=> {
        dispatch(loadProducts());
    }, [dispatch]
    );

  return (
    <div>
        <h2 style={{margin:"50px"}}>ProductsList</h2>
        
        {productsList.map((e)=> (
           <div style={{border:"1px solid black", width: "500px", margin: "50px"}} key={e.id}>
                <p>Title: {e.title}</p>
                <p>Price: {e.price}</p>
                <p>Rating: rate: {e.rating.rate}, count: {e.rating.count}</p>
            </div>
        ))}
    </div>
  )
}