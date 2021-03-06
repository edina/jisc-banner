'use strict'

var jiscBanner = {};

var html = '<div class="jisc-banner panel-group" id="accordion"> <div class="panel panel-default" id="panel1"> <div class="panel-heading"> <span>Explore &raquo; <a class="banner-link" href="http://www.jisc.ac.uk/content" target="_blank">Digital content</a> </span> <a id="expandBtn" class="banner-link pull-right" data-toggle="collapse" data-target="#jisc-banner-content" href="#jisc-banner-content" name="expandBtn"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAZBAMAAABawcpVAAAAMFBMVEXsagb////2tYPtcxb62sHzoGD+9vDxj0T75NH4x6L3vpPwhjXufSX97eH50bL0q3NCA1HEAAAAtklEQVQoz2MYQLALixiToE7iBGzCyo1YhRXsGbAKA0nzAiDBXoAiLKhgIij4msEqUXAxqrCjoKA8Q6OgoASqsOB1nhhWwTfsXWjCqQYMLGIGDMzohkgEMIoAeajCloKCkqjCLCBhBtOJgryyCME1DIWCBYIKGxi4BHcKBjBUQ0RZBTsEZRkElXMnLRPjSZTUg2pgBjo4m0FQB+hkUYZtIAKqfMl7AwalAlYVpw0MzP+cDjDQFgAAAMwhlV8bOAUAAAAASUVORK5CYII="/> <i id="jisc-chevron" class="glyphicon glyphicon-menu-right"></i> </a> </div> <div id="jisc-banner-content" class="panel-collapse collapse"> <div class="panel-body"> <div class="row"> <div class="col-xs-2 col-xs-offset-2"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAABLBAMAAACl/fmxAAAAMFBMVEXsagb////62sHxj0T0pWntcxb2tYP+9vD97eHufSXwhjX75NH4x6L3vpP50bLymVTjIiUUAAACX0lEQVRYw+2WzWsTQRjGH0xW3VIaH43daGo19aCXQiRor+mltSAloKD4ARWlfpyMlII9CBHrQVDqf7DePLoHL3oxJxEPaqHgTXv2It4L7r4zmV1qiJPsQcH9HRLCwI953nfemSAjI+N/Y+Y60vGCfI3BOFur1U7CaZGlBgbiBMl9yDOknsYwzJC3aQwjDPn2d1M4TdJLVUlMkStIZXDXJ9dSGYTMAMwsLspwOmcC8ults3zuA3l/zsZQIfci5AaFJ7oxl5uMeG9vuETNmCjyTSoWbA1OwA6fosU2NeWGpWGEBh/AMA2vLA3PGfLgOMlStDbNiIlmlMrS8FlVzTlVKQJwpSA+3JvkQUuDfEY4UQN3RAXwVYcWLA0BOQqNyrSKiKE3tr1okePQqExVCBdhn4IbZinpszVskvQ+QpBCHu7ToNs3ruagQHJPv4bzVDyMzvROki/7NRTisVCGI/0aMEvN0qAGd5Oa+oAGuO+oOGBtuJowCFuBqgTylr1oJw2CM88QDzn2HKjkweP+2CBcYciaQ/IQ/oj0705siKNVEfR+S/PqLr0gz/52wzMxTMtlJ7jderAkmdvSuY7BbcRzXZUTWlSl+d41/yMfOE3KVrVh97LsTCZMjpTYgVn5SqJWvYkKI0YRT1b5mg/nJ8ky5O8ZS3PIfSHvYTu7GLNqDC0aihLGMPZ7IWnwfG2IB0tPZb7nbT/FDiswe2gntJK/14vjVjqLfmwomBiP1Q0bULGBLuSUolRHbEBBz+ZyQ4dVyqPoijvfojf5A4J5/beOkXe/osPQevjzFjIyMv55fgGVBJEC8XMenAAAAABJRU5ErkJggg=="/> </div> <div class="col-xs-5 pull-left"> We provide secure, cost-effective access to the UK&rsquo;s richest collection of <a class="banner-link" href="http://www.jisc.ac.uk/content" target="_blank">digital content</a>; giving you access to the latest data and content from leading international publishers and providers.<br/><br/> <a class="banner-link" href="http://jisc.ac.uk" target="_blank">Find out more at jisc.ac.uk</a> </div> <div class="col-xs-3"> <div class=""> <ul class="nav nav-pills nav-stacked content-text"> <li> <span>Explore &raquo; <a class="banner-link" href="http://www.jisc.ac.uk/content" target="_blank">Digital content</a></span> </li> <li> <span><a class="banner-link" href="http://www.jisc.ac.uk/content/maps" target="_blank">Maps and spatial data</a></span> </li> <li> <span><a class="banner-link" href="https://www.jisc.ac.uk/content/open-access" target="_blank">Open access</a></span> </li> <li> <span><a class="banner-link" href="https://www.jisc.ac.uk/content/library" target="_blank">Library support</a></span> </li> <li> <span><a class="banner-link" href="https://www.jisc.ac.uk/content/resources" target="_blank">Learning and research resources</a></span> </li> </ul> </div> </div> </div> </div> </div> </div> </div>';

var getHref = function(url, text) {
  var textNode = document.createTextNode(text);
  var href = document.createElement('a');
  href.setAttribute('href', url);
  href.appendChild(textNode);

  return href;
};

jiscBanner.main = function() {
  var banner = document.createElement('div');
  banner.innerHTML = html;

  var body = document.body;
  body.insertBefore(banner, body.firstChild);

  // Change chevron icon when expanded.
  var action = document.getElementById('expandBtn');
  action.addEventListener('click', function(event) {
    var chevron = document.getElementById('jisc-chevron')

    if (chevron.className.indexOf('glyphicon-menu-right') !== -1) {
      chevron.className = 'glyphicon glyphicon-menu-down';
    } else if (chevron.className.indexOf('glyphicon-menu-right') === -1) {
      chevron.className = 'glyphicon glyphicon-menu-right';
    }
  });

};

jiscBanner.main();
