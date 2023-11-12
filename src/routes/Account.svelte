<script>
    import { makeAuthenticatedRequest, user } from "./auth/store.js";

    async function dummyUserInfo() {
        return { name: "lw", email: "jdoe@gmail.com" };
    }

    function performLogout() {
        user.set(null);
        localStorage.clear();
        location.reload();
    }
</script>

<!-- {#await makeAuthenticatedRequest("user")} -->
{#await dummyUserInfo("user")}
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
