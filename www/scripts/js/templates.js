function load_form_page(){
  $("#content").html($("#form_page").html());
}

function load_welcome_page(){
  $("#content").html($("#welcome_page").html());
  $("#gameplay_link").on("touchstart click", function(){
    match_height_maps();
    load_game_page();
  });
}

function load_game_page(){
  $("#content").html($("#gameplay_page").html());
  initMap();
  
}

function match_height_maps(){
  $("#google_map").css("height", $(document).height());
}

function load_sign_in_page(callback) {
  $("#content").html($("#sign_in_form_page").html());
  callback();
}

function load_attack_page(monsterId){
  $("#content").html($("#attack_page").html());
  attack_page_height();
  // var id = monsterId;
  // $("div#monster_id").text(id);
  // console.log("MonsterId is: " + monsterId);

  initAttackPage(monsterId);
  // updateAttackPage();
}
