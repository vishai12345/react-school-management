import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

import FormControl from '@material-ui/core/FormControl';

export default class CustomActionButton extends React.Component {
    render() {
      const { value, index } = this.props;
      return (
        <FormControl>
            <IconButton onClick={() => this.props.handleClick(value, index)}>
                <AddIcon />
            </IconButton>
        </FormControl>
      );
    }
}