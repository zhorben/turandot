import path from "path";
import axios from "axios";

const data = {
  getRoutes: async () => {
    // const { data: posts } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // )

    const certificates = [
      {
        id: 1,
        title: "Праздничные мероприятия 6, 7, 8 марта",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-karmen.png",
      },
      {
        id: 2,
        title: "Латино вечеринка 28 февраля 19:00",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-latino.jpg",
      },
      {
        id: 3,
        title: "Бранч 23 февраля",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-muzhskoj-branch.jpg",
      },
    ];

    return [
      // {
      //   path: "/blog",
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map((post) => ({
      //     path: `/post/${post.id}`,
      //     template: "src/containers/Post",
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        path: "/",
        getData: () => ({
          certificates,
        }),
        children: certificates.map((certificate) => ({
          path: `/certificate/${certificate.id}`,
          template: "src/containers/Certificate",
          getData: () => ({
            certificate,
          }),
        })),
      },
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};

export default data;
