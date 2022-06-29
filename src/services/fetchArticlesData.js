

export default async function fetchArticlesData() {
    
    const res = await fetch("https://gcris.iyte.edu.tr/gcris-api/report/makaleSayisi/");
    return res.json()

  

}
