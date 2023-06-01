



var pen1 = 0, pencil1 = 0, amount1 = 0, pen2 = 0, pencil2 = 0, amount2 = 0;
var first_unknown_value = 0;  //x
var second_unknown_value = 0; //y


function get_user_inputs(){
    pen1 = $("#pen1").val();
    pencil1 = $("#pencil1").val();
    amount1 = $("#amount1").val();
    pen2 = $("#pen2").val();
    pencil2 = $("#pencil2").val();
    amount2 = $("#amount2").val();
}
function calculate_x_y_values(){
    get_user_inputs();
   var obj =  new Calculator(pen1, pencil1, amount1, pen2, pencil2, amount2, first_unknown_value, second_unknown_value);
   obj.find_second_unknown_value();
   obj.find_first_unknown_value();
   obj.set_resulted_unknown_values();
}
