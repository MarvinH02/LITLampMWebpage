import '../style.css';

function HomeView(props) {
    function goToSignInPageACB() {
        window.location.hash = "#/";
    }

    if (props.user) { //2 views for home, this one for when signed in, shows same stuff as when not signed in but also shows global leaderboard of scores and your own scores in games
        return (
            <div className='center'>
                <h1>Home page</h1>
            </div>
        );
    } else { //this one for when not signed in, shows info about product and features
        return (
            <div>
                <div className='center'>
                    <h1>Home</h1>
                </div>
                <div className='center'>
                    <div>
                        <v-btn onClick={goToSignInPageACB}>
                            Sign In To Get Started!
                        </v-btn>
                    </div>
                </div>
                {props.user ? (
                    <div>
                        {/* Additional components for signed-in users */}
                    </div>
                ) : (
                    <div className='center'>
                        <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', padding: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                            Welcome to The LIT Lamp M, where innovation meets accessibility. Our LED matrix redefines customization, putting the power of personalization in the hands of everyone. Designed with user-friendliness at its core, The LIT Lamp M offers a seamless interface tailored to individuals with little to no programming experience. Our intuitive system empowers users to effortlessly adapt the matrix to suit their unique preferences and daily routines. Say goodbye to complexity and hello to a world of endless possibilities with The LIT Lamp M.
                        </p>
                    </div>
                )}
                <h2 className='center'>Why The LIT Lamp M</h2>
                <div className='center'>
                    <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', padding: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                        The LIT Lamp M embodies a sophisticated user-interface via a dedicated website, facilitating secure access through Google sign-in authentication. Our platform empowers users with remote control capabilities, enabling them to seamlessly toggle the device ON and OFF for enhanced energy efficiency. Our innovative system allows for extensive customization of the matrix display, offering a myriad of options including varied colors, patterns, and the integration of real-time data such as date, time, weather conditions, and room temperature. Additionally, users can engage in interactive experiences by accessing games like Snake and Tic Tac Toe directly on the matrix display.
                    </p>
                </div>
                <div className='center'>
                    <h2 className='center' style={{ fontWeight: 'bold', fontSize: '24px' }}>Features</h2>
                </div>
                <div className='center'>
                    <ul style={{ fontSize: '18px' }}>
                        <li>Remote ON/OFF</li>
                        <li>Colors</li>
                        <li>Patterns</li>
                        <li>Time/Date</li>
                        <li>Images</li>
                        <li>Timer for ON/OFF</li>
                        <li>Games</li>
                        <li>Weather/Temperature</li>
                        <li>Room Temperature </li>
                        <li>QR Code Sharing</li>
                        <li>Adaptive Lighting</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export { HomeView };
