window.onload = function () {
    var table_meat_pickedup = false;
    var table_cheese_pickedup = false;
    var table_bread_pickedup = false;
    var cooked = false;
    var cheese_cutted = false;
    var burger_table = document.querySelector('#burger_bread');
    var button1 = document.querySelector('#first_ingredient_button');
    var button2 = document.querySelector('#second_ingredient_button');
    var button3 = document.querySelector('#third_ingredient_button');
    var box = document.querySelector('#box');
    var meat_table = document.querySelector("#meat-table");
    var cheese_table = document.querySelector("#cheese-table");
    var tomato_table = document.querySelector("#tomato_table");
    var bread_table = document.querySelector("#bread-table");
    var meat_pan = document.querySelector("#meat-pan");
    var box_meat = document.querySelector("#box-meat");
    var box_cheese = document.querySelector("#box-cheese");
    var box_bread = document.querySelector("#box-bread");
    var box_cooker = document.querySelector("#box-cooker");
    var box_finishd = document.querySelector("#box-finish");
    var burger_done = document.querySelector("#burger-table");
    var box_cutting = document.querySelector('#box-cutting');
    var knife = document.querySelector('#knife');
    var cheese_cutting = document.querySelector('#cheese-cutting');
    var sound_meat = document.querySelector('#cooking-sound').pause();
    var sound_meat_new = document.querySelector('#cooking_sound_new');
    var audio = new Audio('Sound/frying-steak-sound-effect-UrUQlApo.mp3');
    var cutting_sound = new Audio('Sound/14288_1459962718.mp3');
    var intro_img =  document.querySelector('#img_intro');
    var meat_img =  document.querySelector('#img_cooking');
    var cutting_img =  document.querySelector('#img_cheese');
    var img_progess =  document.querySelector('#img_setup');
    var meat_click = document.getElementById('meat_click');
    cheese_cutting.setAttribute('visible',false);
    meat_pan.setAttribute("visible",false);
    meat_img.setAttribute("visible",false);
    cutting_img.setAttribute("visible",false);
    button1.setAttribute("visible",false);
    button2.setAttribute("visible",false);
    button3.setAttribute("visible",false);
    burger_table.setAttribute("visible",false);




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
        intro_img.setAttribute('visible',false);
        meat_img.setAttribute('visible',true);

    })
    box_cheese.addEventListener('click', function () {
        console.log("meat click");
        cheese_table.setAttribute('visible',false);
        tomato_table.setAttribute('visible',false);
        console.log(tomato_table);
        table_cheese_pickedup = true;
        cutting_img.setAttribute('visible',true);

    })
    box_bread.addEventListener('click', function () {
        console.log("meat click");
        bread_table.setAttribute('visible',false);
        table_bread_pickedup = true;
        if (cooked == true && cheese_cutted == true && table_bread_pickedup == true){
            button1.setAttribute("visible",true);
            button2.setAttribute("visible",true);
            button3.setAttribute("visible",true);
            burger_table.setAttribute("visible",true);
            img_progess.setAttribute("visible",true);
        }
    })

    box_cooker.addEventListener('click', function () {
        if (table_meat_pickedup == true){
            meat_pan.setAttribute("visible",true);
            //sound_meat.play();
            sound_meat_new.play();
            audio.play();
            setTimeout(cooking, 10000)
        }
        if (cooked == true && cheese_cutted == true && table_bread_pickedup == true){
            button1.setAttribute("visible",true);
            button2.setAttribute("visible",true);
            button3.setAttribute("visible",true);
            burger_table.setAttribute("visible",true);
            img_progess.setAttribute("visible",true);
        }

    })



    box_cutting.addEventListener('click', function () {
        console.log('cutting');
        if (table_cheese_pickedup == true){
            knife.setAttribute('visible',true);
            cheese_cutting.setAttribute('visible',true);
            cutting_sound.play();
            setTimeout(cutting, 10000)
        }

        if (cooked == true && cheese_cutted == true && table_bread_pickedup == true){
            button1.setAttribute("visible",true);
            button2.setAttribute("visible",true);
            button3.setAttribute("visible",true);
            burger_table.setAttribute("visible",true);
            img_progess.setAttribute("visible",true);
        }

    })

    function cooking() {
        console.log("cooking");

        meat_pan.setAttribute('visible',false);
        cooked = true;
        meat_img.setAttribute("visible",false);
        if (cooked == true && cheese_cutted == true && table_bread_pickedup == true){
            button1.setAttribute("visible",true);
            button2.setAttribute("visible",true);
            button3.setAttribute("visible",true);
            burger_table.setAttribute("visible",true);
            img_progess.setAttribute("visible",true);
        }

    }
    function cutting() {
        console.log("cutting");
        knife.setAttribute('visible',false);
        cutting_sound.pause();

        cheese_cutting.setAttribute('visible',false);
        cheese_cutted = true;
        cutting_img.setAttribute("visible",false);
        if (cooked == true && cheese_cutted == true && table_bread_pickedup == true){
            button1.setAttribute("visible",true);
            button2.setAttribute("visible",true);
            button3.setAttribute("visible",true);
            burger_table.setAttribute("visible",true);
            img_progess.setAttribute("visible",true);
        }
    }
    function animation() {
        console.log("cooking");
    }

    function meat_first() {
        console.log("meat clicked")

    }

};

