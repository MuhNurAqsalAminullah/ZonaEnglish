import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZoneComponentCV = ({setFileCV}) => {
    const onDrop = useCallback((acceptedFile) => {
        console.log(acceptedFile);
        setFileCV(acceptedFile[0])
    }, []);

    const {  getRootProps, getInputProps, isDragAccept, isDragReject } =
        useDropzone({
            onDrop,
            multiple: false,
            accept: "image/jpeg,image/png",
        })
    return (
        <div style={{width:"140px"}}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <div >
                    <button type="button" class="btn fw-bold" style={{color:"#FF0404", border:"1px solid #FF0404"}}>Upload CV 
                    <img style={{marginLeft:"5px"}} src={require("../Icon/upload.png").default} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DropZoneComponentCV;