var arr3 = [];

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

for (i in arr2) {
   arr3[i] = "Дата: " + arr1[i] + ", час: " + (datesArray[i].getHours() < 10 ? "0" + 
   datesArray[i].getHours() : datesArray[i].getHours()) + ":" + (datesArray[i].getMinutes() < 10 ? "0" + 
   datesArray[i].getMinutes() : datesArray[i].getMinutes()) + ":" + (datesArray[i].getSeconds() < 10 ? "0" + 
   datesArray[i].getSeconds() : datesArray[i].getSeconds()) + ", " + whichDay(arr2[i]) + ", дeн " + arr2[i]
}

console.log(arr3[0]);
console.log(arr3[1]);