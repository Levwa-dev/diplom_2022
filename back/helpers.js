export async function insertAgencyName (arr, table) {
    let list = []
    for(let item of arr){
        let agency = await table.findByPk(item.agencyId)
        item.dataValues.agencyName = agency.name
        list.push(item)
    }
    return list
}