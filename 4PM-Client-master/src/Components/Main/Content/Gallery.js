import React, { Component } from 'react';
import axios from 'axios';
import "../../../CSS/Content/gallery.css"
import {  ClipLoader } from 'react-spinners';
import "../../../CSS/Common/Loading.css";

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            loading: true
        }
    }
    componentDidMount(props) {
        axios({
            method: 'GET',
            url:'https://localhost:44332/image/getimages/'+ this.props.categoryID,
            data: null,
        }).then(res => {
            //console.log(res.data);
            this.setState({
                images: res.data,
            });
            debugger
            if(res.data.length !== 0)
            this.setState({loading:false});
        }).catch(err => {
            console.log(err);
        });
    }

    
    
    loadImagesByCategory = () => {
        var images = this.state.images;
        return images.map((item) => {
            var url = "https://nthieu.blob.core.windows.net" + item.url;
            return(
                <div className="image">
                    <h1>Xem chi tiết</h1>
                    <img src = {url} alt =""/>
                </div>
            );
        });
    }
             
    
    render() {
        
        return(
            <div className= "container">
                <ClipLoader
                    size={100}
                    color={"#123abc"}
                    loading={this.state.loading}
                />
                {
                    this.loadImagesByCategory()
                }
                {/* {
                    this.loadImagesByCategory()
                } */}
            </div>
        )
    }
    
}

export default Gallery;