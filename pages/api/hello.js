import axios from "axios";

const URL = `http://localhost:8000/product`

export const getProducts = async(event) =>{return await axios.get(URL ) }
export const getProductById = async(event) =>{return await axios.get(URL+`/${event}` ) }
export const getSearchProducts = async(event) =>{return await axios.get(URL +`?search=${event}` ) }
export const addProducts = async(event) =>{return await axios.post(URL ,event) }

const URL2 = `http://localhost:8000/category`
export const getAllCategory = async(event) =>{return await axios.get(URL2 ) }
export const addCategory = async(event) =>{return await axios.post(URL2 ,event).then(res => console.log(res.data)) }