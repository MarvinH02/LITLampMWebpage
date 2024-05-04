import '../style.css';

function AboutUsView(props) {
    return (
        <div className='centerAbout'>
            <div className="about-text">
                <h2>About Us</h2>
                <p>Welcome to The LIT Lamp M, where innovation meets accessibility. Brought forth by a team of six dedicated students enrolled in the Projects and Project Methods course at KTH, The LIT Lamp M stands as a testament to our collaborative vision. Our aim was to create a Internet of Things product, and thus, The LIT Lamp M came into being. Driven by our passion for innovation, we embarked on this journey to redefine the landscape of LED matrix customization.</p>
            </div>
            <div className="about-text">
                <h2>Our Mission</h2>
                <p>At The LIT Lamp M, our mission is simple yet profound: to empower individuals with the ability to personalize their surroundings effortlessly. We believe that technology should be inclusive, bridging the gap between complexity and accessibility. With this principle at our core, we set out to design a device that not only redefines customization but also embodies simplicity and user-friendliness.</p>
                <p></p>
                <p>What sets The LIT Lamp M apart is the passion and dedication infused into every aspect of its creation. From the meticulous design process to the seamless integration of features, each element of The LIT Lamp M reflects our commitment to creating a user-friendly product.</p>
            </div>
            <div className="about-text">
                <h2>Meet the Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        {/* <img src="person1.jpg" alt="Marvin" /> */}
                        <p><strong>Marvin</strong></p>
                        <p>Project Coordinator</p>
                        <p>Responsibilities: Breaking down the project into tasks, assigning responsibilities, and project documentation. </p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person2.jpg" alt="Gor" /> */}
                        <p><strong>Gor</strong></p>
                        <p>System Architect</p>
                        <p>Responsibilities: Creating system designs, selecting appropriate platforms, and creating prototypes. </p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person3.jpg" alt="Suhaib" /> */}
                        <p><strong>Suhaib</strong></p>
                        <p>Software Developer</p>
                        <p>Responsibilities: Creating detailed designs for software components, coding, and testing.</p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person4.jpg" alt="Viktor" /> */}
                        <p><strong>Viktor</strong></p>
                        <p>Software Developer</p>
                        <p>Responsibilities: Creating detailed designs for software components, coding, and testing.</p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person5.jpg" alt="William" /> */}
                        <p><strong>William</strong></p>
                        <p>UX Designer</p>
                        <p>Responsibilities: Creating wireframes, visual website design, and prototype testing. </p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person6.jpg" alt="Lakshana" /> */}
                        <p><strong>Lakshana</strong></p>
                        <p>Hardware Developer</p>
                        <p>Responsibilities: Defining hardware requirements and specifications, component selection and research, and creating a hardware prototype. </p>
                    </div>
                </div>
            </div>
            <div className="about-text">
                <h2>Join Us On Our Journey</h2>
                <p>We invite you to join us on this exciting journey as we push the boundaries of innovation and redefine the future of customization. Whether you're a tech enthusiast or simply curious about the possibilities of IoT, there's a place for you in our community.</p>
            </div>
        </div>
    );
}

export { AboutUsView };

