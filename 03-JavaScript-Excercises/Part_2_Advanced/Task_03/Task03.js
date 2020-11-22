class Item {
   constructor(name, discount) {
      this.name = name;
      this.discount = discount;
      this.calculatePrice = function() {
        return this.getPrice() - this.getPrice() * (this.discount / 100);
     }
   }
    
   getPrice() {
      let price=1000;

      return price;
   }
}
 

item1 = new Item("Ferrari",10);

console.log(item1.calculatePrice());