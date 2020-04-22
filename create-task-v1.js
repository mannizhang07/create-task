var goal = 0;
var currentmoney = 0;
onEvent("start_btn", "click", function( ) {
  setScreen("inputGoal_screen");
});
onEvent("instructions_btn", "click", function( ) {
  setScreen("instructions_screen");
});
onEvent("start_button", "click", function( ) {
  setScreen("inputGoal_screen");
});
onEvent("done_btn", "click", function( ) {
  setScreen("welcome_screen");
});
onEvent("home_btn", "click", function( ) {
  setScreen("welcome_screen");
});
onEvent("submit_btn", "click", function( ) {
  goal = getNumber("goal_inputBox");
  setScreen("current_moneyScreen");
});
onEvent("next_btn", "click", function( ) {
  currentmoney = getNumber("currentmoney_input");
  setScreen("screen1");
});
