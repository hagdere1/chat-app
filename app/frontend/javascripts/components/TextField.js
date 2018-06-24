import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class TextField extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{display: "inline-block"}} className={classes.container}>
        <FormControl error={this.props.error} className={classes.formControl}>
          <InputLabel htmlFor="text-simple">{this.props.inputLabel}</InputLabel>
          <Input type={this.props.type} style={{width: this.props.width}} id="text-simple" value={this.props.value} onChange={this.props.handleTextChange} />
        </FormControl>
      </div>
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextField);
