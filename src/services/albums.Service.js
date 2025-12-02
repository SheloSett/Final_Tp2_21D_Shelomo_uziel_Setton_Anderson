import axios from "axios";

export const getCsv = () => {
    const url = "https://jsonplaceholder.typicode.com/albums";
    const { data } = axios.get(url);
    console.log("first")
    console.log(data);
}