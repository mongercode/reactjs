window.onload= function(){

var Tasks = React.createClass({
  render: function(){
    return(
      <h1> This is working fine</h1>
    );
  }
});
ReactDOM.render(
  <Tasks />,
  document.getElementById('container')
);
}
