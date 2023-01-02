export default {
  title: "Intro Text",
  name: "introText",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      title: "Description",
      // type: "blockContent", //NOTE: will j'y reviendrai plus tard, mais pour le moment...
      type: "text",
    },
  ],
};
