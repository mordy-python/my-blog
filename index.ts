import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  title: "Israel's Blog",
  author: "Israel",
  avatar: "./avatar.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:imky171@gmail.com" },
    { title: "GitHub", url: "https://github.com/mordy-python" },
  ],
  background: "#282a36"
});