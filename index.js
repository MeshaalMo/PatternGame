var boxes = ["red","green","blue","yellow"] ;
var pattern = [];
var level = 1;
var clicks = 0;


$("h1").click(function(){
    if (level == 1){
        $("h1").text("Level: "+level);
        genertePattern();
        generteAnim();
        addAction();
    }

});


function genertePattern(){
    var i = Math.random()*4|0 ; 
    pattern.push(boxes[i]);
    
}
function generteAnim(){
    $("."+pattern[level-1]).addClass("pressed");
    setTimeout(function(){
        $("."+pattern[level-1]).removeClass("pressed");
    },200);
}
function addAction(){
    
    $(".btn").on("click",function(e){
        $("#"+e.target.id).addClass("pressed");
        setTimeout(function(){
            $("#"+e.target.id).removeClass("pressed");
        },200);
        if(pattern[clicks] === e.target.id){
            clicks++;
            if(clicks == pattern.length){
                level++ ;
                clicks = 0; 
                setTimeout(function(){
                    $("h1").text("Level: "+level);
                    genertePattern();
                    generteAnim();
                },400);
            }
        }
        else{
            gameOver();
        } 
            
    });   
}

function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("GameOver☠☠");
}