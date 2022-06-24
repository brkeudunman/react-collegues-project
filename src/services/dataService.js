import axios from 'axios'

export default class dataService {

    getArticleData(){
        return axios.get("https://gcris.iyte.edu.tr/gcris-api/report/makaleSayisi/")
    }

    getReferenceData = [

        {
            "name":'Demir,Durmuş Ali',
            "count":8845
        },
        {
            "name":'Şahin, Hasan',
            "count":2271
        },

        {
            "name":'Ülkü,Semra',
            "count":2266
        },

        {
            "name":'Talal,Shahwan',
            "count":2254
        },

        {
            "name":'Eroğlu,Ahmet Emin',
            "count":2233
        }
    ]

    getJournalData = [
        {
            "name":'Q1',
            "count":2501
        },
        {
            "name":'Q2',
            "count":1262
        },

        {
            "name":'Q3',
            "count":377
        },

        {
            "name":'Q4',
            "count":100
        },

    ]

    
}