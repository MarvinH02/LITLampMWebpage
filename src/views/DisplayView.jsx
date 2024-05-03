import '../style.css';

//https://primevue.org/galleria/

function DisplayView (props) {

    // dynamically generate the categories array by automatically counting files and fetching the first few images from specific directories
    const categories = [
        { name: 'Images', count: 12, images: ['/src/images/brain.png', '/src/images/snake.png', '/src/images/tic.png', '/src/images/tic.png' ] }, 
        { name: 'Gifts', count: 15, images: ['/src/share/rgbmatrix/images/Alien.gif', '/src/share/rgbmatrix/images/angel2.gif','/src/share/rgbmatrix/images/beer.gif','/src/share/rgbmatrix/images/DancingSkeletons.gif'] }
    ];
    
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

   

    
    return (
        <div className='Gallery'>
          <h1>Gallery</h1>
            <div>
                Personal Images
                {props.userImages.map((image, index) => (
                    <img key={index} src={image} alt={`Gallery image ${index + 1}`} style={{width: '100px', height: '100px'}} />
                ))}
            </div>
          {categories.map((category, index) => (
                <section key={index} className='Category_Gallery' onClick={()=>handleCategoryClick(category.name)}>
                    <h1>{category.name} Gallery</h1>
                    <div className="display_images_catalog">
                    {category.images.slice(0, 4).map((image, idx) => (
                                <img key={idx} src={image} alt={`${category.name} preview`} style={{width: '100px', height: '100px'}} />
                            ))}
                            <div className="category-info">
                                <h2>{category.name}</h2>
                                <p>{category.count} photos</p>
                                <button className="button">View {category.name}</button>

                        </div>
                    </div>
                    <button onClick={() => handleCategoryClick(category)}>Display All in {category.name}</button>
                </section>
            ))}

            
            <section className='upload-area'>
                    <div className='drag-drop-box'  onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            onClick={() => document.querySelector('.file-input').click()}
                        >
                        <div className='upload-content'>
                            <span className="material-icons-outlined upload-icon">Image_Upload</span>
                            <p>Choose a file or drag it here.</p>
                        </div>
                        <input
                            type='file'
                            className='file-input'
                            multiple
                            onChange={handleImageUpload}
                            style={{ display: 'none' }} // Hide the file input but make it functional
                        />
                        <button className="view-demo">View Demo</button>
                    </div>
            </section>
        </div>
    );

  }

  export default DisplayView;



  //https://www.youtube.com/watch?v=tgDXBCEN3hI&t=23s&ab_channel=OracleLearning