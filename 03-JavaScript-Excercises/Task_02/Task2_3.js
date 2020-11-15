var arr1 = [];
var arr2 = [];

for (i in datesArray) {
    arr1[i] = (datesArray[i].getDate() < 10 ? "0" + datesArray[i].getDate() : datesArray[i].getDate()) + "." + ((datesArray[i].getMonth() < 9 ? "0" + datesArray[i].getMonth(): datesArray[i].getMonth()) + 1) + "." + datesArray[i].getFullYear()
    arr2[i] = datesArray[i].getDay();
}

function whichDay(day) {
    switch (day) {
        case 0 :
            return "неделя";
        case 1 :
            return "понеделник";
        case 2 :
            return "вторник";
        case 3 :
            return "сряда";
        case 4 :
            return "четвъртък";
        case 5 :
            return "петък";
        case 6 :
            return "събота";
    }
}

console.log(arr1);
console.log(arr2);