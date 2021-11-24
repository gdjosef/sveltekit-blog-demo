<script context="module">
  export async function load({ page, fetch }) {
    const id = page.params.id;

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json());

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((res) => res.json());

    return {
      props: {
        post,
        user,
      },
    };
  }
</script>

<script>
  import { base } from "$app/paths";

  export let post;
  export let user;
</script>

<div class="post">
  <h2>{post.title}</h2>
  <p>{post.body}</p>
  <p>- Written by <a href="{base}/authors/{user.id}">{user.name}</a> ({user.username})</p>
</div>

<style>
  h2 {
    margin: 0;
  }

  .post {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
  }
</style>