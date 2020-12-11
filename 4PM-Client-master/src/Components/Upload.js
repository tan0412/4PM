import axios from 'axios';
import React, { Component } from 'react';
// import FormDialog from './Test';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../CSS/Common/dialog.css";
import { BarLoader } from 'react-spinners';
import "../CSS/Common/Loading.css";
import "../CSS/Upload.css"

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: null,
            albumClient: null,
            categoryClient: null,
            categoryData:[],
            albumData:[],
            checkBox:false,
            open:false,
            loading:false
        }
        
    }
    
    componentDidMount(){
        axios({
            method: 'GET',
            url:"https://localhost:44332/album/getalbums",
            data: null,
        }).then(res => {
            //console.log(res.data);
            this.setState({
                albumData: res.data,
            });
            debugger
        }).catch(err => {
            console.log(err);
        });

        axios({
            method: 'GET',
            url:"https://localhost:44332/category/getcategories",
            data: null,
        }).then(res => {
            //console.log(res.data);
            this.setState({
                categoryData: res.data,
            });
        }).catch(err => {
            console.log(err);
        });
    }

    


    handleFile(e){
        //gán giá trị file
        let files = e.target.files;
        this.setState({images:files});
    }

    //Xự kiện khi thay đổi Input Album
    handleChangeAlbum(val){
        this.setState({albumClient:val});
    }
    //Xự kiện khi thay đổi Input Category
    handleChangeCategory(val){
        this.setState({categoryClient:val});
    }


    /**
     * Xử lý upload
     * Created by : Hiếu
     */
    postImage = (e) => {
        this.setState({loading:true});
        //Lấy giá trị album trong input
        let albumName = document.getElementById("album").value;
        let albumID = this.state.albumClient.albumID;
        let checkBox = this.state.checkBox;
        debugger
        //Lấy giá trị category trong input
        let categoryName = this.state.categoryClient.categoryName;
        debugger
        let categoryID = this.state.categoryClient.categoryID;

        //Lấy giá trị Image trong Input 
        let images = this.state.images;
        //add giá trị vào form data trước khi đẩy lên API
        if(albumName != null && categoryName !=null && images != null){
            var formData = new FormData();
            for (let index = 0; index < images.length; index++) {
                formData.append('images', images[index]);
            }
            formData.append('albumName',albumName);
            formData.append('categoryName',categoryName);
            formData.append('checkBox',checkBox);
            debugger
            formData.append('categoryID',categoryID);
            if(this.state.checkBox === false){
                formData.append('albumID',albumID);

            }
            
            axios({
                method: 'post',
                url: 'https://localhost:44332/image/postimages',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
              }).then(res => {
                    console.log(res);
                    this.setState({loading:false})
              }).catch(res=>{
                    console.log(res);
              });
        }
        else alert("album hoặc category không được để trống");
    }


    //------------------------ Xử lý form dialog -------------------------------------------------------
    handleClickOpen = () => {

        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    CancelOnClick = () => {
        this.setState({checkBox:false});
        this.handleClose();
    }

    SubcribeOnClick = () => {
        let album = {
            albumName:"",
            description:"",
        }
        album.albumName = document.getElementById("create-album").value;
        this.setState(prevState => ({ 
            albumData: [...prevState.albumData, album] 
        }))
        document.getElementById("album").value = document.getElementById("create-album").value;
        this.setState({checkBox: true});
        debugger
        this.handleClose();
    };
    //-----------------------------------------------------------------------------------------------------------

    render() {
        return (
            <div className="Form-Upload">
                <h1>The Form</h1>
                <form>
                    <div>
                        <label>Select File: &emsp;</label>
                        <input type="file" name="files" /*encType="multipart/form-data"*/  multiple onChange={(e)=>this.handleFile(e)}/>
                    </div>
                    <div> <br/>
                        <div>
                        <label>Album:</label>
                        <Autocomplete 
                            id="album"
                            options={this.state.albumData}
                            getOptionLabel={(option) => option.albumName}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField className="text-field-custom" name= "album" {...params} label="Album" variant="outlined" />}
                            onChange = {(event,value) => this.handleChangeAlbum(value)} 
                        />
                        {/* <input type="hidden" id="check-box" name="check-box" value="false" onChange={this.handleCheckBox}></input> */}
                    </div><br/>
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                        Tạo mới album
                    </Button>
                
                

                    <div><br/>
                        <label className="hangmoi">Category:</label>
                        <Autocomplete 
                            id="category"
                            options={this.state.categoryData}
                            getOptionLabel={(option) => option.categoryName}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField className="text-field-custom" name= "category" {...params} variant="outlined" />}
                            onChange = {(event,value) => this.handleChangeCategory(value)} 
                        />
                    </div>
                    </div>
                </form>
                <br />
                <button type="button" onClick={()=>this.postImage()} >Upload</button>

                {/* 
                * --- Xử lý các Dialog
                * ---
                * --- */}
                <div className="my-dialog">
                        
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle className="dialog-header" id="form-dialog-title">Tạo album mới cho những ảnh này</DialogTitle> {/*---- TIêu đề của thẻ dialog ----*/}
                        <DialogContent>
                        {/* Nội dung của thẻ dialog */}
                            <div>
                                <label className="hang">Tiêu đề album</label>
                                <input type = "text" id="create-album" name ="albumName"></input><br/>
                            </div>
                            <div>
                                <label className="hang">Ghi chú</label>
                                <textarea id="ghichu" name="ghichu"> </textarea>
                                <br/>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.SubcribeOnClick} color="primary">
                            Subscribe
                            </Button>
                            <Button onClick={this.CancelOnClick} color="primary">
                            Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <div id="Loading">
                    <BarLoader
                        size={100}
                        color={"#123abc"}
                        loading={this.state.loading}
                    />
                </div>
            </div>
            
        );
    }
    
    
}

export default Upload;