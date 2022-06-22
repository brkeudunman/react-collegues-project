import axios from 'axios'

export default class articleService {

    getAllData(){
        return axios.get("https://gcris.iyte.edu.tr/gcris-api/report/makaleSayisi/")
    }

    
}