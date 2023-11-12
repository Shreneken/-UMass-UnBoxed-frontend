import { writable } from "svelte/store";
import { SERVER_URL } from "../utils/constants.js";

export const user = writable(null);

export async function makeAuthenticatedRequest(endpoint, reqBody, queryBody) {
    const [uid, token] = [
        localStorage.getItem("uid"),
        localStorage.getItem("token"),
    ];

    let response;
    queryBody = queryBody || {};
    queryBody["uid"] = uid;

    if (reqBody === undefined) {
        response = fetch(
            `${SERVER_URL}/api/${endpoint}?` + queryBody.join("&"),
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
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
