
function fetchClientsData(referencesData) {

    var clientsData = []
    for (var i=0; i<referencesData?.length; i++) {
        clientsData.push({'key':i,'name':referencesData[i].name,'references':referencesData[i].count})
    }
    return clientsData
}

export default fetchClientsData