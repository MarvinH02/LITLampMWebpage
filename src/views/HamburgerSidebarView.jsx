
function HamburgerSidebarView (props){
    function accountPageHandler(){window.location.hash = "#/"; }
    function homePageHandler(){window.location.hash = "#/home"; }
    function aboutUsPageHandler(){window.location.hash = "#/about"; }

    if(props.user){
        return(
            <div>
                <v-app>
                    <v-navigation-drawer
                        expand-on-hover
                        rail
                    >
                        <v-list>
                        <v-list-item
                            prepend-avatar={props.user.photoURL}
                            subtitle={props.user.email}
                            title={props.user.displayName}
                        ></v-list-item>
                        </v-list>
    
                        <v-divider></v-divider>
    
                        <v-list density="compact" nav>
                        <v-list-item onClick={accountPageHandler} prepend-icon="" title="My Account" value="account"></v-list-item>
                        <v-list-item onClick={homePageHandler} prepend-icon="" title="Home" value="boomba"></v-list-item>
                        <v-list-item prepend-icon="" title="Devices" value="bombaclat"></v-list-item>
                        <v-list-item prepend-icon="" title="Statistics" value="gabagoo"></v-list-item>
                        <v-list-item onClick={aboutUsPageHandler} prepend-icon="" title="About us" value="gooba"></v-list-item>
                        </v-list>
                </v-navigation-drawer>
                </v-app>
                
            </div>
        ); 
    }
    else{
        return(
            <div>
                <v-app>
                    <v-navigation-drawer
                        expand-on-hover
                        rail
                    >
                        <v-list>
                        <v-list-item
                            title="Sign In Required"
                        ></v-list-item>
                        </v-list>
    
                        <v-divider></v-divider>
    
                        <v-list density="compact" nav>
                        <v-list-item onClick={accountPageHandler} prepend-icon="" title="My Account" value="account"></v-list-item>
                        <v-list-item onClick={homePageHandler} prepend-icon="" title="Home" value="boomba"></v-list-item>
                        <v-list-item onClick={aboutUsPageHandler} prepend-icon="" title="About us" value="gooba"></v-list-item>
                        </v-list>
                </v-navigation-drawer>
                </v-app>
                
            </div>
        ); 
    }

}
    


export {HamburgerSidebarView}