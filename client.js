/*jslint browser:true */
/*global data, variables, css, console, customcss */

//Wrapper object for banner JS

var jiscbanner = {};
    
jiscbanner.main = function () {
    
    "use strict";
    
    if (!window.postMessage) {
        
        return false;
        
    }
    
    
    //Add placeholder to be removed later
    
 document.body.insertAdjacentHTML("afterBegin", "<div id='banner_placeholder' style='height:25px; position:relative; width:100%; background-color:#e4e9ec;'></div>");
    
    //Add frame
    
    document.body.insertAdjacentHTML("afterBegin", "<iframe title='Jisc masthead' id='banner' frameborder='0' style='overflow:hidden; transition: margin-top 200ms; display:block; position:relative; margin-top:0px; z-index:99999; position:absolute; margin-left:-99999px; height:0px; width:100%' src=./banner.html></iframe>");
    
    
    jiscbanner.bannerframe = document.getElementById("banner");


   var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
        eventer = window[eventMethod],
        messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
    
    // Listen to message from child window
    eventer(messageEvent, function (e) {

        //If message contains the height set the height variable locally

        if (e.data.indexOf("HEIGHT") !== -1) {

            jiscbanner.bannerheight = parseInt(e.data.replace("HEIGHT=", ""), 10);
            jiscbanner.rowbannerheight = jiscbanner.bannerheight + 25;

            // Row height
            
            
                
                jiscbanner.bannerframe.style.height = jiscbanner.rowbannerheight + "px";
                jiscbanner.bannerframe.style.marginTop = "-" + jiscbanner.bannerheight + "px";
                
                window.setTimeout(function () {
                    jiscbanner.bannerframe.style.marginLeft = "0px";
                    jiscbanner.bannerframe.style.position = "relative";
                    document.getElementById("banner_placeholder").style.display = "none";
                    
                }, 300);

        }

        // If message is an open banner message (this applies to the row version)

        if (e.data === "OPEN") {

            jiscbanner.bannerframe.style.marginTop = "0px";

        }

        if (e.data === "CLOSE") {

            jiscbanner.bannerframe.style.marginTop = "-" + jiscbanner.bannerheight + "px";

        }

    }, false);
    
    //Open tab version
    
    jiscbanner.toggletab = function () {
      
        if (jiscbanner.bannerframe.style.marginTop !== "0px") {
        
            jiscbanner.bannerframe.style.marginTop = "0px";
            
            document.getElementById("jiscbannertab").style.backgroundPosition = "0 0px";
            
        } else {
            
            jiscbanner.bannerframe.style.marginTop = "-" + jiscbanner.tabmargin + "px";
            document.getElementById("jiscbannertab").style.backgroundPosition = "0 -93px";

            
        }
        
        return true;
        
    };
};


jiscbanner.main();
