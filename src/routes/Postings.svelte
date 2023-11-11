<script>
    import { makeAuthenticatedRequest } from "./auth/store.js";

    async function dummyUserInfo() {
        return { name: "lw", email: "jdoe@gmail.com" };
    }
</script>

<!-- {#await makeAuthenticatedRequest("user")} -->
{#await dummyUserInfo("user")}
    Loading details...
{:then userInfo}
    <p>Name : {userInfo.name}</p>
    <p>Email : {userInfo.email}</p>
{:catch someError}
    System error: {someError.message}.
{/await}
