function getNumOfClassesAndTags(sColor1,sColor2) {
   const tags = document.getElementsByClassName('p');
   const numOfTags = document.getElementsByTagName('p').length;
   const classes = document.getElementsByClassName('headertitle');
   const numOfClasses = document.getElementsByClassName('headertitle').length;
   
   window.document.title = `${numOfTags} параграфа, ${numOfClasses} елемента с клас <headertitle>`;

   for (let i = 0; i < numOfTags; i++) {
       tags[i].style.backgroundColor = sColor1;
   }

   for (let i = 0; i < numOfClasses; i++) {
       classes[i].style.backgroundColor = sColor2;
   }
   
   console.log(numOfTags);
   console.log(numOfClasses);
}

getNumOfClassesAndTags('red','blue');
