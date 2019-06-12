import React, { Component } from 'react';
import './uploadpicture.css';
import { ImagePicker,WingBlank } from 'antd-mobile';

class uploadpicture extends Component {
    state = {
        files:  [],
        multiple: false,
    }
    render() {
        
        return (
             <div className="photo_div_add_big">
                                
                <span className='iconfont iconplus-add'></span>
                <span>上传图片</span>
                <input type='file'></input>
            </div>
            // <WingBlank>
            //     <ImagePicker
            //         files={this.state.files}
            //         onChange={this.onChange}
            //         onImageClick={(index, fs) => console.log(index, fs)}
            //         selectable={this.state.files.length < 3}
            //         multiple={this.state.multiple}
            //     ></ImagePicker>
            // </WingBlank>
           
        );
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }
}

export default uploadpicture;
