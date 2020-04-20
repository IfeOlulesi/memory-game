$(function() {
    // dialog box
    $("#dialog").dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        buttons: {
            "Yes, I do" : function () { 
                $("#dialog-response").text("You clicked YES")
                $("#dialog").dialog("close");
            },
            "No" : function () {
                $("#dialog-response").text("You clicked NO")
                $("#dialog").dialog("close");
             }
        }
    });
    $("#dialog-link").click(function() {
        $("#dialog").dialog("open");
    })

    // countdown timer
    $("#countdown-progress-bar").progressbar({value: 100, slide: function (event, ui) {
        somethinhere = ui.value;
        $("#colored-box").css("backgroundColor", `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`)
        console.log()
    }});
    $("#start-timer").click( function () {
        value = 100;

        countdown();
        
        function countdown() {
            value --;

            if (value >= 0) {
                setTimeout(countdown, 100)
                $("#countdown-progress-bar").progressbar("option", "value", value);
                $("#countdown-value").text(value)
            } else {
                $("#countdown-progress-bar").progressbar("disable");
                $("#countdown-value").text("COMPLETED!!");
            }
        }
    });
    // slider
    $("#slider").slider({min: 0, max: 1000, range: true, values: [200,600], slide: function(event, ui) {
        $("#lower-price").text(`${ui.values[0]}$`);
        $("#higher-price").text(`${ui.values[1]}$`);
    } }); 

    var colors = [100,100,100]
    // sliders 2
    $("#slider-1").slider({min: 0, max: 255, value: 100, slide: function (event, ui) {
        colors[0] = ui.value;
        $("#colored-box").css("backgroundColor", `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`)
        
    }});
    $("#slider-2").slider({min: 0, max: 255, value: 100, slide: function (event, ui) {
        colors[1] = ui.value;
        $("#colored-box").css("backgroundColor", `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`)
    }});
    $("#slider-3").slider({min: 0, max: 255, value: 100, slide: function (event, ui) {
        colors[2] = ui.value;
        $("#colored-box").css("backgroundColor", `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`)
    }});

    // tabs
    $("#tabs").tabs();
    
    // accordion
    $("#accordion").accordion({heightStyle : false, collapsible: true,
        /*activate: function(event, ui) {
            console.log(event);
            console.log(ui);
        }*/
    });

    $("#accordion").accordion("option", "active", false);  

    // auto complete
    // come back and learn about 
     var classes =  [
        "AJAX", "Python", "Ruby",
        "C++", "C#", "C", "JavaScript",
        "Java", "Kotlin", "PHP"
    ]
    $("#auto-complete").autocomplete({
        source: classes
    });

    // buttons
    $("a").controlgroup();

    // date seletor
    $("#dateSelector").datepicker({
        showAnim: "blind"
    });

    // draggables
    $("#drag-item-1").draggable({//containment: "#draggables"
            handle: "header", 
            helper: function() {
                return `<div id="drag-item-1" 
                        class="drag-items helpers">
                        <header>BOX 1</header></div>`;
    }});

    // work on the snapping :- wrong-code: snap: "#drag-item-1 #drag-item-3
    $("#drag-item-2").draggable({handle: "header", helper: function() {
        return `<div id="drag-item-2" class="drag-items helpers"><header>BOX 2</header></div>`;
    }});
    $("#drag-item-3").draggable({handle: "header", helper: function() {
        return `<div id="drag-item-3" class="drag-items helpers"><header>BOX 3</header></div>`;
    }});

    $("#drag-item-1, #drag-item-2, #drag-item-3").draggable("option", "stack", ".ui-draggable");

    // droppables
    $("#droppables").droppable({
        accept: "#drag-item-1",
        drop: function(event, ui) {
            ui.draggable.fadeOut();
            $("#drop-zone").css("opacity", 1);
        },
        over: function() {
            $("#drop-zone").css("opacity", 0.5);
        },
        out: function() {
            $("#drop-zone").css("opacity", 1);
        }
    });

    // sortables
    $("#sort-list").sortable({
        placeholder: "placeholder",
        axis: "y",
        containment: "#sortables"
    });

    // resizables
    $(".resizable-boxes").resizable({aspectRatio: true});

    // effects and animations
    $("#run-anim-1").click(function () {
        $("#box-anim-1").animate({
            "margin-left": "+=200"
        }, 1500, "easeInOutElastic")
    })

    $("#run-anim-2").click(function() {
        $("#box-anim-2").effect("explode", {pieces: 14}, 1000)
    })

    // memory game
    function memGame() {
        colorClasses = {
            1: "blue-box", 2: "green-box", 3: "pink-box",
            4: "red-box", 5: "brown-box", 6: "orange-box"
        }
        /*  IDEA 2
            generate a random num between 1 and 6
            check if the num is in colorClassGetter
            if (num is in colorClassGetter) {
                call the corresponding color class and
                assign to box
            } else {
                continue generating the random number until
                we arrive at one in the array
            }
            continue generating the random no until you
        
        let x = 12;
        const t = 0;
        for (let e = 0; e <= 12; e++) {    
        // loop for each box
            
            colorClassGetter = [1,2,3,4,5,6,1,2,3,4,5,6];
            while (t < colorClassGetter.length || x > 1) {
                // until cCG is empty, generate a ran no 
                // perform check operation
                let ranNum = Math.round(Math.random() * 6)
                if ($.inArray(ranNum, colorClassGetter) > -1) {
                    $(`#game-box-${e}`).addClass(colorClasses[ranNum]);
                    colorClassGetter.splice(ranNum, 1);
                }
                console.log(x);
                x = x - 1;
            }
        }*/
    }

    //memGame();
});

//C:\Users\Anchor05\Documents\UG48\CODING & COMP. SCIENCE\WEB. DEV\Others\jQuery-UI\js\index.js
