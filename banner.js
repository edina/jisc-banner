'use strict'

var jiscbanner = {};
    
jiscbanner.main = function () {
//   var banner = document.getElementById('jisc-banner');
//   if (!banner) {
  var banner = document.createElement('div');
  banner.id = 'jisc-banner';
  banner.style = 'height: 3em; width: 100% background-color: green;';
    
  var body = document.body;
  body.insertBefore(banner, body.firstChild);
//   }
};
