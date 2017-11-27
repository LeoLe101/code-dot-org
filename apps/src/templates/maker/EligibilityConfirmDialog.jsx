/** @file Confirm Dialog for Maker Discount Codes */
import React, {Component, PropTypes} from 'react';
import i18n from "@cdo/locale";
import BaseDialog from "../BaseDialog";
import DialogFooter from "../teacherDashboard/DialogFooter";
import Button from "../Button";

const styles = {
  subtitle: {
    fontSize: 16,
  },
  form: {
    margin: '10px 0',
  },
  signature: {
    margin: '5px 0'
  },
  signatureBox: {
    height: 40,
    width: '100%',
    boxSizing: 'border-box',
    padding: 10,
  },
  checkboxes: {
    paddingLeft: 5,
    marginBottom: 20
  },
  checkboxLabel: {
    marginLeft: 25,
  },
  checkbox: {
    marginLeft: -25,
    width: 25,
  },
};

export default class EligibilityConfirmDialog extends Component {
  static propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    signature: "",
    activeButton: false,
  };

  verifyResponse = () => {
    this.setState({
      activeButton: this.check1.checked
        && this.check2.checked
        && this.check3.checked
        && /\S/.test(this.state.signature)
    });
  }

  setSignature = (event) => {
    this.setState({signature: event.target.value}, this.verifyResponse);
  }

  render() {
    return (
      <BaseDialog
        useUpdatedStyles
        uncloseable
        isOpen
        style={{padding:20}}
      >
        <h2>{i18n.getCode()}</h2>
        <div style={styles.subtitle} >{i18n.verifyStatementsforCode()}</div>
        <form style={styles.form}>
          <div style={styles.checkboxes}>
            <label style={styles.checkboxLabel}>
              <input
                style={styles.checkbox}
                type="checkbox"
                ref={input => this.check1 = input}
                onChange={this.verifyResponse}
              />
              {i18n.verifyStudentCount()}
            </label>
            <label style={styles.checkboxLabel}>
              <input
                style={styles.checkbox}
                type="checkbox"
                ref={input => this.check2 = input}
                onChange={this.verifyResponse}
              />
              {i18n.verifyYear()}
            </label>
            <label style={styles.checkboxLabel}>
              <input
                style={styles.checkbox}
                type="checkbox"
                ref={input => this.check3 = input}
                onChange={this.verifyResponse}
              />
              {i18n.verifySingleCode()}
            </label>
          </div>
          <label>
            <div>{i18n.verifySignature()}</div>
            <div style={styles.signature}>
              <b>Elecontric Signature</b> {i18n.typeName()}
            </div>
            <input
              value={this.state.signature}
              style={styles.signatureBox}
              onChange={this.setSignature}
            />
          </label>
        </form>
        <div>{i18n.contactSupport()}</div>
        <DialogFooter>
          <Button
            text={i18n.dialogCancel()}
            onClick={this.props.handleCancel}
            color={Button.ButtonColor.gray}
          />
          <Button
            text={i18n.getCode()}
            onClick={this.props.handleSubmit}
            disabled={!this.state.activeButton}
          />
        </DialogFooter>
      </BaseDialog>
    );
  }
}
