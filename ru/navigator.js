$(document).ready(function(){
  history.pushState({
      page: $('#main').html()
    },
    document.title,
    window.location.pathname
  );
});

// Показывает параметры для выбранной опции
function showChosenOption(checked_option = $("input:checked").val()) {
  $("#execute_options_ul").removeClass("active_div");
  $('#' + checked_option).css("display", "block");
}

// Выбор типа вычислений
$(document).ready(function() {
  // Обработчик нажатия на кнопку
   $("#main").on("click", "#exec_opt_chosen", function() {
  //$("#exec_opt_chosen").live("click", function() {
    showChosenOption();
    let checked_option = $("input:checked").val();
    history.pushState({
      //new Stage(stageType.SETTING_PARAMS, checked_option),
        page: $('#main').html()
      },
      '',
      document.referrer
    );
    console.log("OPTIONS STATE PUSHED");
    console.log(history);
  });
});

$(document).ready(function(){
  //if (history.pushState) {
    window.onpopstate = function(event) {
      //if (event.state.page.length > 0) {
        if (event.state && event.state.page) {
          console.log(JSON.stringify(event.state));

          //$.post({ ajaxLoad: true }, function() {
            $('#main').html(event.state.page);
          //});
        }
        else {
          //alert("Leaving website!!!");
          window.history.back();
        }
      //}
    }
  //}
});
