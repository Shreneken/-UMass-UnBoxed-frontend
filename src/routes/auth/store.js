import { writable } from "svelte/store";
import { SERVER_URL } from "../utils/constants.js";

export const user = writable(null);

export async function makeAuthenticatedRequest(
    endpoint,
    reqBody,
    queryBody,
    isFormData
) {
    const [uid, token] = [
        localStorage.getItem("uid"),
        localStorage.getItem("token"),
    ];

    let response;
    queryBody = queryBody || {};

    if (reqBody === undefined) {
        response = fetch(
            `${SERVER_URL}/${endpoint}` +
                (Object.keys(queryBody).length !== 0
                    ? "?" + new URLSearchParams(queryBody).toString()
                    : ""),
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } else {
        response = fetch(`${SERVER_URL}/${endpoint}?uid=${uid}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: isFormData === true ? reqBody : JSON.stringify(reqBody),
        });
    }

    return response.then((r) => r.json());
}
