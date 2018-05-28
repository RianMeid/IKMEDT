window.onload = function () {
    var table_meat_pickedup = false;
    var table_cheese_pickedup = false;
    var table_bread_pickedup = false;
    var cooked = false;
    var box = document.querySelector('#box');
    var meat_table = document.querySelector("#meat-table");
    var cheese_table = document.querySelector("#cheese-table");
    var bread_table = document.querySelector("#bread-table");
    var meat_pan = document.querySelector("#meat-pan");
    var box_meat = document.querySelector("#box-meat");
    var box_cheese = document.querySelector("#box-cheese");
    var box_bread = document.querySelector("#box-bread");
    var box_cooker = document.querySelector("#box-cooker");
    var box_finishd = document.querySelector("#box-finish");
    var burger_done = document.querySelector("#burger-table");

    meat_pan.setAttribute("visible",false);



    console.log(box);
    box.addEventListener('click', function () {
        meat_pan.setAttribute("visible",true);
        console.log("test");
        console.log("new test");
        box.removeAttribute();


    })

    box_meat.addEventListener('click', function () {
        console.log("meat click");
        meat_table.setAttribute('visible',false);
        table_meat_pickedup = true;

    })
    box_cheese.addEventListener('click', function () {
        console.log("meat click");
        cheese_table.setAttribute('visible',false);
        table_cheese_pickedup = true;

    })
    box_bread.addEventListener('click', function () {
        console.log("meat click");
        bread_table.setAttribute('visible',false);
        table_bread_pickedup = true;

    })

    box_cooker.addEventListener('click', function () {
        if (table_meat_pickedup == true){
            meat_pan.setAttribute("visible",true);
        }
        setTimeout(cooking, 10000)
    })

    box_finishd.addEventListener('click', function () {
        if (cooked == true && table_bread_pickedup == true && table_cheese_pickedup == true ){
            console.log("mburger made");
            burger_done.setAttribute("visible",true);
        }


    })

    function cooking() {
        console.log("cooking");

        meat_pan.setAttribute('visible',false);
        cooked = true;
    }

};


