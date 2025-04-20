import PropTypes from "prop-types";
import React from "react";
const TestComponent = ({
  id,
  name
}) => {
  return (
    <div >
      {`hi ${name}-${id}`}
    </div>
  );
};
TestComponent.defaultProps = {
  name: "esraa",
  id: 1,
};
TestComponent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
export default TestComponent;










