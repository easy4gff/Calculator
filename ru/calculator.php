<?php
  function getArgumentsString($arguments) {
    $string_result = '';
    foreach ($arguments as $arg)
      $string_result .=  $arg . ' ';
    return $string_result;
  }

  function requestCalculation($execution_method, $arguments) {
    $execution_string = "calc " .  $execution_method . " " .
      getArgumentsString($arguments);
    return exec($execution_string);
  }

  // Запуск экзешника с переданными аргументами и типом операции
  echo requestCalculation($_POST['calcMethod'], $_POST['args']);
?>
