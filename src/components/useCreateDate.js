import React from 'react'

export const useCreateDate = () => {

    let dateObj = new Date();
    let currentMonth = dateObj.getMonth();
    let monthInWords;

    switch(currentMonth){
        case 0: monthInWords = 'Jan'
        break;

        case 1: monthInWords = 'Feb'
        break;

        case 2: monthInWords = 'Mar'
        break;

        case 3: monthInWords = 'April'
        break;

        case 4: monthInWords = 'May'
        break;

        case 5: monthInWords = 'June'
        break;

        case 6: monthInWords = 'July'
        break;

        case 7: monthInWords = 'Aug'
        break;

        case 8: monthInWords = 'Sept'
        break;

        case 9: monthInWords = 'Oct'
        break;

        case 10: monthInWords = 'Nov'
        break;

        case 11: monthInWords = 'Dec'
        break;

    }
    
    const date = `${monthInWords} ${dateObj.getDate()} ${dateObj.getFullYear()}, ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    return date;
}
