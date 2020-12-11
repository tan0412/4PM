import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../CSS/Common/dialog.css";

//Tạo mới form dialog
class FormDialog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  

   handleClickOpen = () => {

    this.setState({open: true});
  };

   handleClose = () => {
    this.setState({open: false});
  };

  CancelOnClick = () => {
    document.getElementById("check-box").value = "false";
    this.handleClose();
  }

   SubcribeOnClick = () => {
    document.getElementById("album").value = document.getElementById("create-album").value;
    document.getElementById("check-box").value = "true";
    debugger
    this.handleClose();
  };
  render() {
    return (
      <div className="my-dialog">
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Tạo mới album
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle className="dialog-header" id="form-dialog-title">Tạo album mới cho những ảnh này</DialogTitle> {/*---- TIêu đề của thẻ dialog ----*/}
          <DialogContent>
            {/* Nội dung của thẻ dialog */}
            <div>
              <label>Tiêu đề album</label>
              <input type = "text" id="create-album" name ="albumName"></input>
            </div>
            <div>
              <label>Ghi chú</label>
              <textarea />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.CancelOnClick} color="primary">
              Cancel
            </Button>
            <Button onClick={this.SubcribeOnClick} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default FormDialog;