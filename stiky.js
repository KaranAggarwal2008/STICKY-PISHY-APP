// Configure module paths for require
require.config({
  paths: {
    jquery    : 'jquery.min',
    underscore: 'underscore.min',
    backbone  : 'backbone.min',
    localstore: 'backbone.localstorage.min',

    // Our own
    data      : 'data',
    stikyapp  : 'stikyapp',
    note      : 'stikynote',
    notes     : 'stikynotes',
    noteview  : 'noteview'
  }
});

require([
  'jquery',
  'stikyapp',
],

function (
  $,
  App
) {
  // Boot the app on DOM ready
  $(function(){
    var app = new App;
  });
});
