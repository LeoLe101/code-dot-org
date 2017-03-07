import React from 'react';
import us from 'us';

function getAllUSStates() {
  const statesArray = [];
  for (const s in us.states) {
    statesArray.push({
      code: us.states[s].abbr,
      name: us.states[s].name
    });
  }
  return statesArray;
}

function SchoolState(props) {
  const states = getAllUSStates();
  return (
    <div className="itemblock">
      <div className="labelblock">State</div>
      <select className="form-control fieldblock" id="school-state" name="user[school_info_attributes][school_state]" type="select" value={props.schoolState} onChange={props.onChange}>
        <option disabled="true" value=""/>
        {
          states.map(stateInfo =>
            <option value={stateInfo.code} key={stateInfo.code}>{stateInfo.name}</option>
          )
        }
      </select>
    </div>
  );
}

SchoolState.propTypes = {
  schoolState: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default SchoolState;
