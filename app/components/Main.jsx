var React = require('react');

var Main = (props) => {
  return(
    <div>
      <div>
          <p>React Template</p>
          {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
