let a=0;
$(document).ready(function(){
    $("label1").css("font-weight","bold");
    $("label2").css("font-weight","bold");
    $("label3").css("font-weight","bold");
})
$(document).ready(function(){
    $("p1").click(function(){
        alert("About our site");
    });
    $("p3").click(function(){
        a++;
        if(a%2==0)
        {
            $("p3").css("color","grey");
        }
        else {
            $("p3").css("color","black");
        }
    });
});
$(document).ready(function(){
    $("p2").mouseover(function(){
        $("p2").css("background-color","grey");
    });
    $("p2").mouseout(function(){
        $("p2").css("background-color","transparent");
    })
});
$(document).ready(function(){
    $("p4").mouseover(function(){
        $("p4").css("background-color","grey");
    });
    $("p4").mouseout(function(){
        $("p4").css("background-color","transparent");     
    });
});
$(document).ready(function(){
    $("#form-submit").click(function(){
        let courses=$("#Course").val();
        let topics=$("#Topic").val();
        let Linkofvidoes=$("#Linkofvideo1").val();
        if(courses==""){
                alert("Should write about course");
                return false;
        }
        if(topics==""){
            alert("Should write about topic");
            return false;
        }
        if(Linkofvidoes==""){
            alert("Should write link for video");
            return false;
        }
    })
})
$(document).ready(function(){
    $("#LA1").mouseover(function(){
        $("#LA1").animate({height:"+=15px",
                          width:"+=15px"});
        $("#LA1").click(function(){
            window.open('https://youtube.com/playlist?list=PLGMM_XQcsS8fqakuqHPYDJ6Njs1LqB3_6');
        });
    });
    $("#LA1").mouseout(function(){
        $("#LA1").animate({height:"-=15px",
                          width:"-=15px"});
        })
    });
$(document).ready(function(){
    $("#DM1").mouseover(function(){
        $("#DM1").animate({height:"+=15px",
                          width:"+=15px"});
        $("#DM1").click(function(){
            window.open('https://youtube.com/playlist?list=PLGMM_XQcsS8fZzh0KydPPxzMh_gzTsdaT');
        });
    });
    $("#DM1").mouseout(function(){
        $("#DM1").animate({height:"-=15px",
                          width:"-=15px"});
    });
});
$(document).ready(function(){
    $("#c1").mouseover(function(){
        $("#c1").animate({height:"+=15px",
                          width:"+=15px"});
        $("#c1").click(function(){
            window.open('https://youtube.com/playlist?list=PLGMM_XQcsS8fZKU5V0EXg95Ny6DTAsLMA');
        });
    });
    $("#c1").mouseout(function(){
        $("#c1").animate({height:"-=15px",
                          width:"-=15px"});
    });
});
$(document).ready(function(){
    $("#Fe1").mouseover(function(){
        $("#Fe1").animate({height:"+=15px",
                          width:"+=15px"});
        $("#Fe1").click(function(){
            window.open('https://youtube.com/playlist?list=PLGMM_XQcsS8e8ErhlAoCfAXjXRfyqQo4f');
        });
    });
    $("#Fe1").mouseout(function(){
        $("#Fe1").animate({height:"-=15px",
                          width:"-=15px"});
    });
});