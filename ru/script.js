// Возвращает массив аргументов, введеных пользователем
function getArguments(calcMethod, div_id) {
  var count_arguments = getCountArgs(calcMethod);

  var result = [];
  for (var i = 1; i <= count_arguments; ++i) {
    var selector = $('input[name ="' + div_id + '_arg_' + i + '"]');
    result.push(selector.val());
  }

  return result;
}

/*// Выбор типа вычислений
$(document).ready(function() {
  // Обработчик нажатия на кнопку
  $("#exec_opt_chosen").click(function() {
    showChosenOption();
    let checked_option = $("input:checked").val();
    history.pushState(
      new Stage(stageType.SETTING_PARAMS, checked_option),
      '',
      document.referrer
    );
    console.log("OPTIONS STATE PUSHED");
    console.log(history);
    // ReactDOM.render(
    //   <h1>Fuck</h1>,
    //   document.getElementById('test')
    // );
  });
});*/

// Асинхронный запрос серверу на вычисление результата
$(document).ready(function() {
  $('.button_div_calc_req').click(function() {
    var parent_div_id = $(this).parent().parent().attr('id');
    var calculationMethod = $(this).attr('id');

    var xmlRequest = $.ajax({
      method: 'POST',
      url: 'calculator.php',
      data: {
        calcMethod: calculationMethod,
        args: getArguments(calculationMethod, parent_div_id)
      }
    });

    xmlRequest.done(function(msg) {
      $('#result_div').html('<h1>Result is: ' + msg);
      $('#result_div').addClass('active_div');
    });

    xmlRequest.fail(function( jqXHR, textStatus ) {
      console.log( "Request failed: " + textStatus );
    });
  })
});
