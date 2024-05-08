import axios from 'axios';
import DisplayView from '../views/DisplayView.jsx';

function DisplayPresenter(props) {
  
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
        //skriv kod för att visa personal bild på led-matrix, image är en bas 64 binär string
    }
    function displayImageOrGifCustomEventHandlerACB(image) {
        //skriv kod för att visa bild eller gif på led-matrix, image är path till bild eller gif
    }

    return (
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
        />
    );
}

export default DisplayPresenter;
