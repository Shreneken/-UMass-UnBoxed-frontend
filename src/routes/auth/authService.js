import { createAuth0Client } from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "./store.js";
import { config } from "./auth_config.js";

export async function createClient() {
    let auth0Client = await createAuth0Client({
        domain: config.domain,
        clientId: config.clientId,
        useRefreshTokens: true,
        cacheLocation: "localstorage",
    });
    return auth0Client;
}

export async function loginWithPopup(client, options) {
    popupOpen.set(true);
    try {
        await client.loginWithPopup(options);

        user.set(await client.getUser());
        isAuthenticated.set(true);
    } catch (e) {
        // eslint-disable-next-line
        console.error(e);
    } finally {
        popupOpen.set(false);
    }
}

export function logout(client) {
    return client.logout();
}