import blog from "https://deno.land/x/blog/blog.tsx";


blog({
  title: "Israel's Blog",
  author: "Israel",
  avatar: "./avatar.png",
  avatarClass: "full",
  dateStyle: "long",
  links: [
    { title: "Email", url: "mailto:imky171@gmail.com" },
    { title: "GitHub", url: "https://github.com/mordy-python" },
  ],
    favicon: "avatar.png",
  background: "#282a36"
});