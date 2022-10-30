import React, {useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZoneComponent = ({setFile}) => {
    const onDrop = useCallback((acceptedFile) => {
        console.log(acceptedFile);
        setFile(acceptedFile[0])
    }, []);

    const { getRootProps, getInputProps, isDragAccept, isDragReject } = 
        useDropzone({
            onDrop,
            multiple: false,
            accept: "image/jpeg,image/png",
    });
    return (
        <div>
            <div {...getRootProps()} style={{width:"100%", backgroundColor:"rgba(255, 141, 141, .5)", padding:"5px"}}>
                <div>
                    <input {...getInputProps()} />
                    {
                        isDragReject ? (
                            <div style={{textAlign:"center", border:"2px dashed #FF0000"}}>
                                <img src={require("../Icon/dropfotofile.png").default} alt="" />
                                <p className="fw-bold" style={{color:"#FF0000"}}>Sorry, the file you entered is wrong</p>
                            </div>
                        ) : (
                            <div style={{textAlign:"center", border:"2px dashed black"}}>
                                <img src={require("../Icon/dropfotofile.png").default} alt="" />
                                <p><span className="fw-bold">Drag & Drop files Here</span> <br />Only jpg and png files are supported</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default DropZoneComponent;