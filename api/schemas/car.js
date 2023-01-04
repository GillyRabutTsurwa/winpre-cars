export default {
  name: "car",
  title: "Car",
  type: "document",
  fields: [
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "model",
      title: "Model",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      /**
       * NOTE:
       * the slug field will only show if the current user is an administrator
       * found this solution thanks to these two links:
       * https://www.sanity.io/docs/slug-type
       * https://www.sanity.io/docs/conditional-fields
       */
      hidden: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === "administrator");
      },
      //NOTE: bien que ce soit qq'chose de très utile d'utiliser, j'en ai pas besoin
      // options: {
      //   source: "title",
      //   maxLength: 96,
      // },
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "Car Data",
      name: "defaultCarData",
      type: "carData",
    },
    // {
    //   title: "Variants",
    //   name: "variants",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Variant",
    //       type: "productVariant",
    //     },
    //   ],
    // },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    // NOTE: jusqu'à je sache à quoi ça sert localeString, je vais pas l'enlever. je vais le decommenter pour le moment
    // {
    //   name: "blurb",
    //   title: "Blurb",
    //   type: "localeString",
    // },

    // NOTE: je vais pareil ici, je vais le decommenter pour le moment
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "localeBlockContent",
    // },
    // NEW: field added par moi
    {
      title: "Car Sold?",
      name: "sold",
      type: "boolean",
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
