<script>
    import { onMount } from "svelte";
    import {
        createClient,
        loginWithPopup,
        logout,
    } from "./auth/authService.js";
    import { isAuthenticated, user } from "./auth/store.js";

    let auth0Client;

    onMount(async () => {
        auth0Client = await createClient();

        isAuthenticated.set(await auth0Client.isAuthenticated());
        user.set(await auth0Client.getUser());
    });

    function login() {
        loginWithPopup(auth0Client);
    }
</script>

<main>
    {#if !$isAuthenticated}
        <a
            class="btn btn-primary btn-lg mr-auto ml-auto"
            href="/#"
            role="button"
            on:click={login}>Log In</a
        >
    {:else}
        <p>Authenticated!</p>
    {/if}
</main>
