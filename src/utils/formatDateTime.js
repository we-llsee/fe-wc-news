function formatDateTime(date) {
    let createdAt = new Date(date)

    let dateTimeArr = [createdAt.getDate(),'/',createdAt.getMonth(),'/',createdAt.getFullYear(),
    ' - ',createdAt.getHours(),':',createdAt.getMinutes()]

    dateTimeArr = dateTimeArr.map(ele => {
        if(Number.isInteger(ele) && ele<10){
            ele = '0'+String(ele)
        }
        return ele;
    })

    return dateTimeArr.join('');
}

module.exports = formatDateTime;