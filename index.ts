import blog, { ga } from "https://deno.land/x/blog/blog.tsx";


blog({
  title: "Izzy's Blog",
  author: "Izzy",
  avatar: "./avatar.png",
  avatarClass: "full",
  dateStyle: "long",
  links: [
    { title: "Email", url: "mailto:imky171@gmail.com" },
    { title: "GitHub", url: "https://github.com/mordy-python" },
  ],
  background: "#282a36",
  favicon: "avatar.png",
  middlewares: [
      ga("G-S5NPJWFP61"),
  ],
  style: "em { color: #7ac9dc; font-style: normal; } ul, ol { list-style-type: disc; }"
});