import React, { useState } from 'react'
import Button from '@mui/material/Button';
import firebase from 'firebase/compat/app';
import { storage, db } from './firebase'
import './ImageUpload.css'

function ImageUpload({username}) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                //error function
                console.log(error);
                alert(error.message);
            },
            () => {
                //complete function
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    //post image to db
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                });
            }
        );
    };

    return (
        <div className='imageUpload'>
            <progress className='imageupload_progress' value={progress} max="10" />
            <input className='entercommend' type='text' placeholder='enter your commend' onChange={event => setCaption(event.target.value)} value={caption}/>
            <input className='chose' type='file' onChange={handleChange}/>
            <div>
                <Button className='uploadbuttom' onClick={handleUpload}>
                    upload
                </Button>
            </div>
        </div>
    )
}

export default ImageUpload