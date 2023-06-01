class Calculator{
   constructor(pen1, pencil1, amount1, pen2, pencil2, amount2, first_unknown_value, second_unknown_value){
    this.pen1 = pen1; //a
    this.pencil1 = pencil1; //b
    this.amount1 = amount1; //c
    this.pen2 = pen2; //p
    this.pencil2 = pencil2; //q
    this.amount2 = amount2; //r
    this.first_unknown_value = first_unknown_value;   //x
    this.second_unknown_value = second_unknown_value; //y
   }
    
   find_second_unknown_value(){
      let eq_2_LHS = this.pen2 * this.pencil1 - this.pen1 * this.pencil2;  //p(b) - a(q)

      let eq_3_RHS = this.pen2 * this.amount1  - this.pen1 * this.amount2;  //p(c) - a(r)

      this.second_unknown_value = eq_3_RHS / eq_2_LHS ;

      
      console.log( 
                   "value of p(b) - a(q)  = " +  eq_2_LHS + "  LHS \n" +
                   "value of p(c) - a(r)  = " +  eq_3_RHS + "  RHS \n" +
                   "second unknown value is (y) " + this.second_unknown_value + " \n " 
                  );

   }

   find_first_unknown_value(){
      this.first_unknown_value = 
                            (this.amount1 - this.pencil1 * this.second_unknown_value) / this.pen1;
      console.log("first unknown value is (x) " + this.first_unknown_value + " \n ");
   }

   set_resulted_unknown_values(){
      $("#first_unknown_value").text(this.first_unknown_value + " Rs.");
      $("#second_unknown_value").text(this.second_unknown_value + " Rs.");
   }
}