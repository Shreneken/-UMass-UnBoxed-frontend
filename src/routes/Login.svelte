<script>
    import { onMount } from "svelte";
    import { SERVER_URL } from "./utils/constants.js";
    import { goto } from "$app/navigation";
    import { user } from "./auth/store.js";

    let isAuthenticated = false;

    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has("token") && urlParams.has("uid")) {
            user.update((_) => ({
                token: urlParams.get("token"),
                uid: urlParams.get("uid"),
            }));
        }
    });

    user.subscribe((updatedUser) => {
        if (updatedUser !== null) {
            console.log("User updated: " + updatedUser.uid);
            isAuthenticated = true;
        }
    });
</script>

<main>
    {#if isAuthenticated}
        <p>Authenticated!</p>
    {:else}
        <button on:click={() => goto(`${SERVER_URL}/login`)}>Log in</button>
    {/if}
</main>
