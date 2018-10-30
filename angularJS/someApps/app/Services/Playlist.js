angular.module("myApp").factory("Playlist", [
  function() {
    var playlist = [
      "The Miracle (Of Joey Ramone)",
      "Raised By Wolves",
      "Every Breaking Wave",
      "Cedarwood Road",
      "California (There Is No End to Love)",
      "Sleep Like a Baby Tonight",
      "Song for Someone",
      "This Is Where You Can Reach Me Now",
      "Iris (Hold Me Close)",
      "The Troubles",
      "Volcano",
      "asda",
      "asdasd"
    ];
    for(i=0; i<9999; i++){
        playlist.push(i.toString());
    }
    var list = function() {
      return playlist;
    };
    var deleteItem = function(id) {
      playlist.splice(id, 1);
    };
    return {
      list: list,
      deleteItem: deleteItem
    };
  }
]);
