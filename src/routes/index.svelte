<script context="module">
  export async function load({ fetch }) {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import { base } from "$app/paths";

  export let posts;
</script>

<h1>Posts</h1>

<div class="posts">
  {#each posts as post}
    <div class="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p class="link"><a sveltekit:prefetch href="{base}/blog/{post.id}">Read More</a></p>
    </div>
  {/each}
</div>

<style>
  h2 {
    font-size: 1.5em;
    margin: 0;
  }
  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  .post {
    padding: 1em;
    border: 1px solid #eee;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  }

  .link {
    text-align: right;
  }
</style>