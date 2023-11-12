<script>
    import { makeAuthenticatedRequest, user } from "./auth/store.js";

    function performLogout() {
        user.set(null);
        localStorage.clear();
        location.reload();
    }
</script>

{#await makeAuthenticatedRequest("user/get")}
    Loading details...
{:then userInfo}
    <br />
    <center>
        <p><b>Name</b> : {userInfo.name}</p>
        <p><b>Email</b> : {userInfo.email}</p>
        <button on:click={performLogout}>Logout</button>
    </center>
{:catch someError}
    System error: {someError.message}.
{/await}
