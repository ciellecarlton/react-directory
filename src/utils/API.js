import axios from "axios";

export default {
getUser : () => axios.get ('https://randomuser.me/api/?results=20')
}