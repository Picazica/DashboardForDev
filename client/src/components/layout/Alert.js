import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))
  );
};

Alert.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { alerts: state.alert };
};

export default connect(mapStateToProps)(Alert);
