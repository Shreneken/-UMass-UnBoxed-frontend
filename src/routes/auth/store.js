import { writable } from "svelte/store";
import { SERVER_URL } from "../utils/constants.js";

export const user = writable(null);

export async function makeAuthenticatedRequest(endpoint) {
    const [uid, token] = [
        localStorage.getItem("uid"),
        localStorage.getItem("token"),
    ];
    return fetch(`${SERVER_URL}/api/${endpoint}?uid=${uid}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((resp) => resp.json());
}
