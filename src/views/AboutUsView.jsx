
import '../style.css';

function AboutUsView(props) {
    return (
        <div className='center'>
            <div className="about-text">
                <h2>About Us</h2>
                <p> Welcome to The LIT Lamp M, where innovation meets accessibility. Our LED matrix redefines customization, putting the power of personalization in the hands of everyone. Designed with user-friendliness at its core, The LIT Lamp M offers a seamless interface tailored to individuals with little to no experience in programming experience. Our intuitive system empowers users to effortlessly adapt the matrix to suit their unique preferences and daily routines. Say goodbye to complexity and hello to a world of endless possibilities with The LIT Lamp M.</p>
            </div>
            <div className="about-text">
                <h2>Why The LIT Lamp M</h2>
                <p>The LIT Lamp M embodies a sophisticated user-interface via a dedicated website, facilitating secure access through Google sign-in authentication. Our platform empowers users with remote control capabilities, enabling them to seamlessly toggle the device ON and OFF for enhanced energy efficiency.</p>
                <p> </p>
                <p>Furthermore, our innovative system allows for extensive customization of the matrix display, offering a myriad of options including varied colors, patterns, and the integration of real-time data such as date, time, weather conditions, and room temperature. Additionally, users can engage in interactive experiences by accessing games like Snake and Tic Tac Toe directly on the matrix display.</p>
                <p> </p>
                <p>In addition to these features, our platform streamlines QR code sharing, providing users with the convenience of effortlessly displaying QR codes on the matrix. Moreover, the LIT Lamp M incorporates weather-adaptive lighting technology, dynamically adjusting the display to reflect current weather conditions. For instance, during a thunderstorm, the matrix will aptly showcase an image of thunder, enhancing the ambiance. The brightness levels are intelligently calibrated to adapt to the time of day, ensuring optimal visibility and comfort for users at all times.</p>
            </div>
            <div className="about-text">
                <h2>Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        {/* <img src="person1.jpg" alt="Marvin" /> */}
                        <p><strong>Marvin</strong></p>
                        <p>Project Coordinator</p>
                        <p>Resposibilities: Breaking down the project into tasks, assigning responsibilities,and project documentation. </p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person2.jpg" alt="Gor" /> */}
                        <p><strong>Gor</strong></p>
                        <p>System Architect</p>
                        <p>Resposibilities: Creating system designs, selecting appropriate platforms, and creating prototypes. </p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person3.jpg" alt="Suhaib" /> */}
                        <p><strong>Suhaib</strong></p>
                        <p>Software Developer</p>
                        <p>Resposibilities: Creating detailed designs for software components, coding, and testing.</p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person4.jpg" alt="Viktor" /> */}
                        <p><strong>Viktor</strong></p>
                        <p>Software Developer</p>
                        <p>Resposibilities: Creating detailed designs for software components, coding, and testing.</p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person5.jpg" alt="William" /> */}
                        <p><strong>William</strong></p>
                        <p>UX Designer</p>
                        <p>Resposibilities: Creating wireframes, visual website design, and prototype testing. </p>
                    </div>
                    <div className="team-member">
                        {/* <img src="person6.jpg" alt="Lakshana" /> */}
                        <p><strong>Lakshana</strong></p>
                        <p>Hardware Developer</p>
                        <p>Resposibilities: Defining hardware requirements and specifications, component selection and research, and creating a hardware prototype. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { AboutUsView };
