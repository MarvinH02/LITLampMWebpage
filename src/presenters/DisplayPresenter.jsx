import axios from 'axios';

import { DisplayView } from '../views/DisplayView.jsx';

export default function DisplayPresenter (props){

    // Function to handle image upload logic
    function onImageUpload(event) {
        const files = event.target.files;
        if (files && files.length > 0) {
            const formData = new FormData();
            formData.append('file', files[0]); // Only handling the first file

            axios.post('http://localhost:3000/upload-image', formData)
                .then(response => {
                    console.log('Upload successful:', response.data);
                    displayMatrix(response.data.filePath);
                })
                .catch(error => console.error('Error uploading image:', error));
        }
    };
    

    // Function to request the server to display an image on the LED matrix
    function displayMatrix(imagePath) {
        axios.post('http://localhost:3000/display-image', { imagePath })
            .then(response => console.log('Image displayed:', response.data))
            .catch(error => console.error('Error displaying image:', error));
    }

    function handleDragOver(e) {
        e.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    }

    function handleDrop(e) {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            onImageUpload({ target: { files } });
        }
    }
    function addToUserImagesCustomEventHandlerACB(image) {
        props.model.addToUserImages(image);
    }
    function deleteImageCustomEventHandlerACB(image) {
        props.model.deleteImage(image);
    }
    function displayPersonalImageCustomEventHandlerACB(image) {
     
    }
    function displayImageOrGifCustomEventHandlerACB(imagePath) {
        // Extract just the filename
        const imageName = imagePath.split('/').pop();
    
        // Check if props and model or activeDevice is defined
        const deviceIP = props && props.model && props.model.activeDevice && props.model.activeDevice.ip;
        if (!deviceIP) {
            console.error('Device IP is not defined');
            return;
        }
        props.model.setPowerState(true);
    
        axios.get(`http://${props.model.activeDevice.ip}:3000/image-stock?image=${imageName}`)
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error calling the server:', error);
            });

            console.log(imageName); // the output is /src/share/rgbmatrix/images/Alien.gif

    }
    function clearImageOrGifCustomEventHandlerACB(){
        props.model.turnOffStockImage();
    }

    return(
        <div>
            <DisplayView
                user={props.model.user}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
                onImageUpload={onImageUpload}
                displayMatrix={displayMatrix}
                addToUserImagesCustomEvent={addToUserImagesCustomEventHandlerACB}
                userImages={props.model.userImages}
                deleteImageCustomEvent={deleteImageCustomEventHandlerACB}
                displayPersonalImageCustomEvent={displayPersonalImageCustomEventHandlerACB}
                displayImageOrGifCustomEvent={displayImageOrGifCustomEventHandlerACB}
                clearImageOrGifCustomEvent={clearImageOrGifCustomEventHandlerACB}
        
            />
        </div>
        
    )






}
