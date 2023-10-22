import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d0dd179285874063aff5adf81ced9d27"
    }
})