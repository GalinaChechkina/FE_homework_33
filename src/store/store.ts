import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";

//конфигурируем store, подключая productsSlice
const store = configureStore({
    reducer: {
      products: productsReducer,//в качестве reducer указываем name из productsSlice
    },
  });

//задаем тип для сущности в хранилище: возвращаем тип, кот. выдает метод getState- так лучше
//т.к. если мы добавим к типу какие-то свойства, метод getState вернет обновленный тип
//и экспортируем его
export type RootState = ReturnType<typeof store.getState>;

//объявили тип RootDispatch - тип ф-ии dispatch, кот. определен для конкретного хранилища
//хорошо, если надо передавать dispatch между компонентами, не импортируя напрямую из store
export type RootDispatch = typeof store.dispatch;
  
export default store;