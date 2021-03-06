import auth0 from "auth0-js";
import history from "./history";

export default class Auth {
    // Please use your own credentials here
    auth0 = new auth0.WebAuth({
        domain: "brettjennaustin.auth0.com",
        clientID: "4eh1BTXS5nF5z6vjZn3c3aWtCDDKObVi",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://brettjennaustin.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid email"
    });

    login = () => {
        this.auth0.authorize();
    };

    // parses the result after authentication from URL hash
    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.getCurrentUser();
                history.replace("/");
            } else if (err) {
                history.replace("/");
                console.log(err);
            }
        });
    };

    // Sets user details in localStorage
    setSession = authResult => {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        // navigate to the home route
        history.replace("/");
    };

    // removes user details from localStorage
    logout = () => {
        // Clear access token and ID token from local storage
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("boi");
        // navigate to the home route
        history.replace("/");
    };

    // checks if the user is authenticated
    isAuthenticated = () => {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    };

    getCurrentUser() {
        return new Promise((resolve, reject) => {
            const boiId = localStorage.getItem("boi");

            if (boiId !== null) {
                resolve(boiId);
            } else {
                const accessToken = localStorage.getItem("access_token");
                this.auth0.client.userInfo(accessToken, (err, profile) => {
                    if (profile) {
                        fetch(`http://localhost:5002/users?sub=${profile.sub}`)
                            .then(u => u.json())
                            .then(users => {
                                if (users.length) {
                                    localStorage.setItem("boi", users[0].id);
                                    resolve(users[0].id);
                                } else {
                                    fetch(`http://localhost:5002/users`, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(profile)
                                    })
                                        .then(user => user.json())
                                        .then(user => {
                                            localStorage.setItem(
                                                "boi",
                                                user.id
                                            );
                                            resolve(user.id);
                                        });
                                }
                            });
                    }
                });
            }
        });
    }
}
