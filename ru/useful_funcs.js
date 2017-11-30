// Возвращает количество аргументов в зависимости от выбранной операции
function getCountArgs(calcMethod) {
  switch (calcMethod) {
    case 'sum':
    case 'diff':
    case 'division':
      return 2;
      break;
    case 'mult':
      return 3
      break;
    case 'square':
      return 1;
      break;
    default:
      return null;
  }
}

/*function hideChosenOption() {
  let checked_option = $("input:checked").val();
  $('#' + checked_option).css("display", "none");
}

function showOptions() {
  $("#execute_options_ul").addClass("active_div");
}

// Перечислимый тип действия
var stageType = {
  OPTION_SELECTION: 0,
  SETTING_PARAMS:   1
}

//Класс состояния навигации
class Stage {
  constructor(stage, stageArg) {
    this.stage = stage;
    if (stageArg === stageType.SETTING_PARAMS) {
      this.stageName = stageArg.name;
    }
  }
}

// Класс изменения текущего состояния
class StageChanger {
  static changeState(state) {
    if (state.stage == stageType.OPTION_SELECTION) {
      hideChosenOption();
      showOptions();
    }
    else if (state.stage == stageType.SETTING_PARAMS) {
      showChosenOption(state.stageName);
    }
  }
}*/
