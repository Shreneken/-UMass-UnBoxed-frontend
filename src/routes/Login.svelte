<script>
    import { onMount } from "svelte";
    import { user } from "./auth/store.js";
    import { goto } from "$app/navigation";
    import Main from "./Main.svelte";
    import { browser } from "$app/environment";
    import LoadingScreen from "./LoadingScreen.svelte";

    let isAuthenticated = false;

    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has("token") && urlParams.has("email")) {
            user.update((_) => ({
                token: urlParams.get("token"),
                uid: urlParams.get("email"),
            }));
        } else if (localStorage.getItem("uid") !== null) {
            isAuthenticated = true;
        }

        // TODO - fix this later
        goto("?");
    });

    let isLoading = true;

    // Simulate some asynchronous loading
    setTimeout(() => {
        isLoading = false;
    }, 3000);

    user.subscribe((updatedUser) => {
        if (updatedUser !== null) {
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
        <LoadingScreen />
    {/if}
</main>
