<script>
  import LoadingScreen from "./LoadingScreen.svelte";
  import { makeAuthenticatedRequest, user } from "./auth/store.js";
  import { SERVER_URL } from "./utils/constants.js";

  function performLogout() {
    user.set(null);
    localStorage.clear();
    window.location.replace(SERVER_URL);
  }
</script>

{#await makeAuthenticatedRequest("user/get")}
    <LoadingScreen />
{:then userInfo}
  <br />
  <div class="card">
    <img src={userInfo.picture_url} alt="ProfilePicture" style="width:100%" />
    <h1>{userInfo.name}</h1>
    <p class="email">{userInfo.email}</p>
    <p><button on:click={performLogout}>Logout</button></p>
  </div>
{:catch someError}
  System error: {someError.message}.
{/await}

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    background-color: #f8f9fa; /* Light background color */
    border-radius: 15px;
    border: solid black 2px;
    overflow: hidden; /* Ensure the box-shadow is applied to the entire card */
  }

  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px 10px 0 0; /* Rounded corners for the top */
  }

  h1 {
    margin: 15px 0;
    color: #333;
  }

  .email {
    color: #555;
    font-size: 18px;
  }

  button {
    border: none;
    margin-bottom: -20px;
    outline: 0;
    display: inline-block;
    padding: 18px;
    color: #fff;
    background-color: black;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: rgb(80, 80, 80); /* Darker shade on hover */
  }
</style>
