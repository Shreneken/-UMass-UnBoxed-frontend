<script>
    import { onMount } from "svelte";
    import { SERVER_URL } from "./utils/constants.js";
    import { goto } from "$app/navigation";
    import { user } from "./auth/store.js";
    import Main from "./Main.svelte";
    import { browser } from "$app/environment";

    let isAuthenticated = false;

    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has("token") && urlParams.has("uid")) {
            user.update((_) => ({
                token: urlParams.get("token"),
                uid: urlParams.get("uid"),
            }));
        } else if (localStorage.getItem("uid") !== null) {
            isAuthenticated = true;
        }

        // TODO - fix this later
        goto("?");
    });

    user.subscribe((updatedUser) => {
        if (updatedUser !== null) {
            console.log("User updated: " + updatedUser.uid);

            if (browser) {
                localStorage.setItem("uid", updatedUser.uid);
                localStorage.setItem("token", updatedUser.token);
                isAuthenticated = true;
            }
        }
    });
</script>

<main>
    {#if isAuthenticated === true}
        <Main />
    {:else}
        <button on:click={() => goto(`${SERVER_URL}/login`)}>Log in</button>
    {/if}
</main>
