import axios from 'axios';
let guid = '2';

export default function generationGuid() {
  guid = `f${(+new Date()).toString(16)}`;
  return guid;
}

 const URL = 'http://localhost:5002';


export const getClient = axios.get(`${URL}/api/client`);

export const createClient = values => axios.post(`${URL}/api/client`, values);
export const editClient = values => {console.log('putvalues',values);
return(axios.put(`${URL}/api/client`, values));
};


export const removeClient= guid =>
    axios.delete(`${URL}/api/client?guid=${guid}`);


export const getGoods  = axios.get(`${URL}/api/goods`);

export const createGoods = values => axios.post(`${URL}/api/goods`, values);

export const editGoods  = values => {console.log('putvalues',values);
    return(axios.put(`${URL}/api/goods`, values));
};


export const removeGoods = guid =>
    axios.delete(`${URL}/api/goods?guid=${guid}`);
