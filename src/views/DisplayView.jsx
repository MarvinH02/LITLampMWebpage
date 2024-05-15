import '../style.css';

function DisplayView (props) {

    // dynamically generate the categories array by automatically counting files and fetching the first few images from specific directories
    const stockImages = ['/src/images/hamster.jpg', '/src/images/snake.png','/src/images/brain.png'] 
        
    const stockGifs = ['/src/share/rgbmatrix/images/Alien.gif', '/src/share/rgbmatrix/images/angel2.gif','/src/share/rgbmatrix/images/beer.gif','/src/share/rgbmatrix/images/DancingSkeletons.gif']
    
    function handleCategoryClick(){
        props.onCategorySelect(categories);

    }

    // Function to handle file uploads
    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            //console.log(reader.result); //original image, too large for firebase
            const img = new Image();
            img.src = event.target.result;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                canvas.width = 64;
                canvas.height = 64;
                ctx.drawImage(img, 0, 0, 64, 64);
                canvas.toBlob(blob => {
                    const blobReader = new FileReader();
                    blobReader.readAsDataURL(blob);
                    blobReader.onloadend = () => {
                        console.log(blobReader.result);

                        console.log("Resized image to: " + blob.size + "bytes");
                        if (blob.size > 3000) {
                            console.log('Warning: Image size is too large');
                            console.log("This image was downscaled to " + blob.size + "bytes, the limit is 3000 bytes.")
                            return;
                        }
                        props.addToUserImagesCustomEvent(blobReader.result);
                    };
                }, 'image/jpeg', 0.6); // change between 0-1 to change quality, 1 takes up a lot more space
            };
        }
    }

    // Function to simulate uploading images to a server
    function uploadImages() {
       
    }

    function handleDragOver(e) {
        e.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    }
    
    function handleDrop(e) {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleImageUpload({ target: { files } });
        }
    }
    function showPersonalImagesCB(image, index){
        return(
            <div class="images">
                <v-card
                    class="mx-auto"
                    color="surface-variant"
                    min-height="110"
                    max-width="200"
                    min-width="200"
                    outlined
                    subtitle= ""
                    title= ""
                >
                    <v-img key={index} src={image} alt={`Gallery image ${index + 1}`}  />
                    <div class="imageButtons">
                        <v-btn variant="tonal" onClick={() => displayPersonalImageCB(image)}>Display Image</v-btn>
                        <v-btn
                            onClick={() => deleteImageCB(image)}
                            color="red"
                        >
                            <span class="material-symbols-outlined">delete</span>                
                        </v-btn>
                    </div>
                </v-card>
            </div>

        )
    }
    function showStockImagesOrGifsCB(image, index){
        return(
            <div class="images">
                <v-card
                    class="mx-auto"
                    color="surface-variant"
                    min-height="110"
                    max-width="200"
                    min-width="200"
                    outlined
                    subtitle= ""
                    title= ""
                >
                    <v-img key={index} src={image} alt={`Gallery image ${index + 1}`}  />
                    <div class="imageButtons">
                        <v-btn variant="tonal" onClick={() => displayImageOrGifCB(image)}>Display Image</v-btn>
                    </div>
                </v-card>
            </div>

        )
    }
    function deleteImageCB(image){
        props.deleteImageCustomEvent(image);
    }
    function displayPersonalImageCB(image){
        props.displayPersonalImageCustomEvent(image);
    }
    function displayImageOrGifCB(image){
        props.displayImageOrGifCustomEvent(image);
    }
    function showImagesList(){
        if (props.userImages.length > 0){
            return(
                <div>
                    {props.userImages.map(showPersonalImagesCB)}
                </div>
            );
        }
    }
    function showStockImagesList(){
        if (stockImages.length > 0){
            return(
                <div>
                    {stockImages.map(showStockImagesOrGifsCB)}
                </div>
            );
        }
    }
    function showStockGifsList(){
        if (stockGifs.length > 0){
            return(
                <div>
                    {stockGifs.map(showStockImagesOrGifsCB)}
                </div>
            );
        }
    }

   function stopShowingImage(){
        props.clearImageOrGifCustomEvent();
   }

    
    return (
        <div>
            <h1 class="center">Gallery</h1>
            <v-btn variant="tonal" onClick={stopShowingImage}>Stop displaying image</v-btn>
            <div className='Gallery'>
            <div>
                <h2>Personal Images</h2> 
                {showImagesList()}
                {props.userImages.length === 0 && <p>No images uploaded yet</p>}
                
            </div>
            <div>
                <h2>Stock Images</h2>
                {showStockImagesList()}
                {stockImages.length === 0 && <p>No images uploaded yet</p>}
            </div>
            <div>
                <h2>Stock Gifs</h2>
                {showStockGifsList()}
                {stockGifs.length === 0 && <p>No images uploaded yet</p>}
            </div>

            
            <section className='upload-area'>
                    <div className='drag-drop-box'  onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            
                        >
                        <div className='upload-content'>
                            <span className="material-icons-outlined upload-icon">Upload Image</span>
                            <p>Choose a file or drag it here.</p>
                        </div>
                        <input
                            type='file'
                            className='file-input'
                            multiple
                            onChange={handleImageUpload}
                             // Hide the file input but make it functional
                        />
                    </div>
            </section>
          </div>
           
        </div>
    );
}

export { DisplayView }