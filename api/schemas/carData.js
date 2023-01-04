export default {
  title: "Car Data",
  name: "carData",
  type: "object",
  fields: [
    {
      title: "VIN",
      name: "vin",
      type: "string",
    },
    {
      title: "Mileage",
      name: "mileage",
      type: "number",
    },
    {
      title: "Miles Per Gallon (MPG)",
      name: "mpg",
      type: "number",
    },
    {
      title: "Engine",
      name: "engine",
      type: "string",
    },
    {
      title: "Transmission",
      name: "transmission",
      type: "string",
    },
    {
      title: "Drivetrain",
      name: "drivetrain",
      type: "string",
    },
    {
      title: "Exterior Color",
      name: "exteriorColor",
      type: "string",
    },
    {
      title: "Interior Color",
      name: "interiorColor",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
