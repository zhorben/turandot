import path from "path"

const data = {
  getRoutes: async () => {

    const certificates = [
      {
        id: 1,
        title: "Детская фотосессия",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-karmen.png",
      },
      {
        id: 2,
        title: "Свадебная фотосессия",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-latino.jpg",
      },
      {
        id: 3,
        title: "Бранч с алкоголем на 2 персоны",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-muzhskoj-branch.jpg",
      },
      {
        id: 4,
        title: "Бранч без алкоголя на 2 персоны",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-muzhskoj-branch.jpg",
      },
      {
        id: 5,
        title: "Сертификат на посещение Турандот",
        imageUrl:
          "https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-muzhskoj-branch.jpg",
      },
    ];

    return [
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
