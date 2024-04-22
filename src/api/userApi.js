// import axios from "../axios";

import axios from "../axios/axios";

// import axios from "../axios";

class UserApi{
    createUser(data){
        return axios.post("/users", data, {
            headers:{
                "Content-Type": "application/json"
            },
        });     
    }
    loginUser(){

    }
    getUser(){

    }
}

export default new UserApi();