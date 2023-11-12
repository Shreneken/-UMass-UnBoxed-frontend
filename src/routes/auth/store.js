import { writable } from "svelte/store";
import { SERVER_URL } from "../utils/constants.js";

export const user = writable(null);

export async function makeAuthenticatedRequest(endpoint, reqBody) {
    const [uid, token] = [
        localStorage.getItem("uid"),
        localStorage.getItem("token"),
    ];

    let response;
    if (reqBody === undefined) {
        response = fetch(`${SERVER_URL}/api/${endpoint}?uid=${uid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } else {
        response = fetch(`${SERVER_URL}/api/${endpoint}?uid=${uid}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(reqBody),
        });
    }

    return response.json();
}
