import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Icon } from 'antd';
import axios from 'axios';

function FileUpload() {

    const [Images, setImages] = useState([]);
    // const [Images, setImages] = useState([ 'thankyou', 'thankyou', 'thankyou' ]);

    const dorpHandler = (files) => {

        let formData = new FormData();
        const config = {
            header : { 'content-type' : 'multipart/form-data' }
        }
        formData.append("file", files[0])

        axios.post('/api/product/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);

                    setImages([ ...Images, response.data.filePath ])
                } else {
                    alert('파일을 저장하는데 실패했습니다.');
                };
            });
    }

    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);

        // index [0] --> Index0, 1
        // > let newImages = [1,2,3]
        // < undefined
        // > newImages
        // < (3) [1, 2, 3] 하나만 지운다.
        // > newImages.splice(1, 1)
        // < [2]
        // > newImages
        // < (2) [1, 3]
        // > newImages.splice(0,2)
        // < (2) [1, 3]
        // > newImages
        // < []
        
        let newImages = [...Images]
        newImages.splice(currentIndex, 1);
        setImages(newImages);

        // [1, 2]
    }

    return(
        <div style={{ display : 'flex', justifyContent : 'space-between' }}>
            <Dropzone onDrop={dropHandler}>
            {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}> */}
                {({ getRootProps, getInputProps }) => (
                    <div 
                        style={{ 
                            width : 300, height : 240, border : '1px solid lightgray',
                            display : 'flex', alignItems : 'center', justifyContent : 'center'
                        }}
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Icon type="plus" style= {{ fontSize : '3rem' }} />
                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>
                
                {FaImages.map((image, index) => {
                    <div onClick={()} key={index}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }}
                            src={`http://localhost:5000/${image}`}
                        />
                    </div>
                })};
            </div>
        </div>
    )
}

export default FileUpload

