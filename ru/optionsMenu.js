// Класс списка аргументов
var ArgList = React.createClass({
  render: function() {
    var argsList = [];
    for (var i = 1; i <= this.props.count; ++i) {
      argsList.push(
        (<li key={i.toString()} className="arg row">
            <p className="text-center">Enter {i} operand</p>
            <input type="text" name={this.props.name + "_div_arg_" + i} className="col-sm-12 col-md-12 col-xs-12"></input>
            <br/><br/>
        </li>)
      );
    }
    return (
      <ul className="arglist col-sm-12 col-md-12">
        {argsList}
      </ul>
    );
  }
});

// Класс опции запуска. Включает в себя заголовок с названием выбранной опции,
// поля ввода аргументов и кнопку для старта вычисления.
var ExecutionOption = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    var optName = this.props.name;
    return (
      <div id={optName + "_div"} className="exec_opt_params container-fluid col-md-4 col-md-offset-4 col-sm-12 col-xs-12">
        <h3 className="opt_title text-center">Calculation of {optName}.</h3>
        <div className="exec_opt_list row">
          <ArgList name={optName} count={getCountArgs(optName)} />
        </div>
        <input type="hidden" name={optName + "_div_count_args"} value="2"/>
        <div className="row">
        	<div className="btn btn-primary button_div button_div_calc_req col-sm-12 col-md-12 col-xs-12" id={optName}>Calculate!</div>
        </div>
			</div>
    );
  }
});

var options = ['sum', 'diff', 'division', 'mult', 'square'];
var optionsJSX = [];

// Класс списка опций вычислений
var ExecutionOptions = React.createClass({
  render: function() {
    for (var i = 0; i < options.length; ++i) {
      optionsJSX.push((
        <li className="container-fluid" key={i.toString()}>
          <ExecutionOption name={options[i]}/>
        </li>)
      );
    }
    return (
      <ul>
        {optionsJSX}
      </ul>
    );
  }
});

// Рендеринг списка опций вычислений
ReactDOM.render(
  <ExecutionOptions />,
  $('#opts')[0]
);
