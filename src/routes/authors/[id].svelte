<script context="module">
  export async function load({ page, fetch }) {
    const id = page.params.id;

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json());
    
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json());

    return {
      props: {
        user,
        posts,
      },
    };
  }
</script>

<script>
  export let user;
  export let posts;
</script>

<div class="author">
  <h2>{user.username}</h2>
  <h3><em>{user.email}</em></h3>
  <p><em>{user.company.catchPhrase}</em></p>
  <div class="posts">
    {#each posts as post}
      <div class="post">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  h4 {
    margin: 0;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  .post {
    padding: 1em;
    border: 1px solid #eee;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  }
</style>