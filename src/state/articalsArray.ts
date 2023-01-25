export type ArticalsProps = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
};

const articalsArray: ArticalsProps[] = [
  {
    id: 1,
    category: "fish",
    image: "/images/fish/fish-1.jpg",
    title: "Baked salmon steak in foil",
    description:
      "Salmon steak baked in foil remains as tender, juicy and fragrant as possible. And all because all the juices do not flow anywhere and do not evaporate. In addition, fish in foil is always completely and evenly baked, even if you cook it for the first time.",
  },
  {
    id: 2,
    category: "fish",
    image: "/images/fish/fish-5.webp",
    title: "Salmon steaks on the grill",
    description:
      "It would seem that it could be easier than cooking a salmon steak on the grill. But here, as in any other recipe, there are a number of important nuances. For example, the heat must be strong, and the fish must be lubricated with oil from time to time.",
  },
  {
    id: 3,
    category: "fish",
    image: "/images/fish/fish-3.webp",
    title: "Red fish steaks in the oven",
    description:
      "Want to treat yourself to a delicious dinner, but absolutely no free time? Bake red fish steaks in the oven. It's very fast and simple. It will take five minutes to prepare the fish, and the oven will do the rest of the work. Watch the time carefully so that the steaks do not burn!",
  },
  {
    id: 4,
    category: "fish",
    image: "/images/fish/fish-4.webp",
    title: "Pink salmon steak in the oven",
    description:
      "Pink salmon steak will be an amazing decoration for a home dinner or a festive table. This is a beautiful and spectacular dish that goes well with any vegetable side dish and cereals. Of course, the steak can be fried, but it is even easier to bake it in the oven, and there is practically no need for oil.",
  },
  {
    id: 5,
    category: "fish",
    image: "/images/fish/fish-2.jpg",
    title: "Pink salmon steak in a pan",
    description:
      "Pink salmon is a very tasty fish, which belongs to the category of 'Delicatessen'. To make a steak from it delicious, it is important to follow a few rules. Marinate pink salmon before cooking, watch the fire and be sure to add lemon juice.",
  },
  {
    id: 6,
    category: "fish",
    image: "/images/fish/fish-6.webp",
    title: "Tuna steak in sesame",
    description:
      "For a long time I was afraid to take on tuna steaks, so as not to spoil the expensive delicacy. But it turned out that everything is not so scary! Therefore, if you, too, are still staring at tuna in fish stores - catch a recipe that even beginners will succeed!",
  },
  {
    id: 7,
    category: "meat",
    image: "/images/steak/steak-2.webp",
    title: "Chicken breast steaks",
    description:
      "It seems to me that steaks are easiest to cook from chicken breast. Tender meat does not require long heat treatment and any special spices. The only point - do not overdo the bird in the pan, otherwise it will become too dry.",
  },
  {
    id: 8,
    category: "meat",
    image: "/images/steak/steak-1.jpg",
    title: "Beef steak in a pan",
    description:
      "To cook juicy and tender beef steak in a pan, use chilled rather than frozen meat. It is best to fry the steak in a grill pan, however, in the absence of such, you can use dishes with a flat but thick bottom.",
  },
  {
    id: 9,
    category: "meat",
    image: "/images/steak/steak-3.webp",
    title: "Beef steak baked with rosemary",
    description:
      "Can't cook the perfect steak? Try this recipe. Pre-marinated beef is baked under a double layer of foil. But the main highlight of the dish is the fragrant rosemary. It's very simple and delicious!",
  },
  {
    id: 10,
    category: "meat",
    image: "/images/steak/steak-4.webp",
    title: "Turkey steaks",
    description:
      "Turkey meat is considered dietary, so it is often chosen by those who follow the diet. You can cook the bird as you like: fry, boil, stew and bake in the oven. Turkey steaks are especially tasty. I'm telling you the recipe!",
  },
  {
    id: 11,
    category: "meat",
    image: "/images/steak/steak-5.webp",
    title: "Pork steak with rosemary and lemon",
    description:
      "Imagine a juicy pork steak with fragrant rosemary! No, you don't have to follow him to a restaurant. You can cook such a delicious dish at home. Now I will tell you a simple recipe. The roast is perfect, and the meat is soft and juicy.",
  },
  {
    id: 12,
    category: "meat",
    image: "/images/steak/steak-6.webp",
    title: "Pork steak on the grill",
    description:
      "Make this weekend special. Cook mouth-watering steaks on the grill and arrange cozy gatherings by the fire. This is very good for pork. And to make the meat juicy and soft, marinate it first.",
  },
  {
    id: 13,
    category: "meat",
    image: "/images/steak/steak-7.webp",
    title: "Steak Chateaubriand",
    description:
      "France has given the world many culinary masterpieces. Among them is the very popular Chateaubriand steak. It is prepared from high quality beef tenderloin. In general, the recipe is quite simple. Try the dish and see for yourself.",
  },
  {
    id: 14,
    category: "meat",
    image: "/images/steak/steak-8.webp",
    title: "Juicy beef steak",
    description:
      "The taste and juiciness of the steak directly depend on the quality of the meat and the degree of roasting. The most common is considered Medium rare - in the context, the color is bright red, but there is no more blood. Let's try to cook such a beef steak.",
  },
  {
    id: 15,
    category: "desserts",
    image: "/images/desserts/des-1.jpg",
    title: "PP cottage cheese pancakes",
    description:
      "In the simplest recipe for the “correct” cheesecakes, you can add a certain zest. Try frying them in coconut oil! Your syrniki will acquire a slight aftertaste of coconut, and the house will be filled with a wonderful aroma. It's healthy and very tasty!",
  },
  {
    id: 16,
    category: "desserts",
    image: "/images/desserts/des-2.jpg",
    title: "Meringue 'Christmas Trees'",
    description:
      "A great idea is to make meringues on the occasion of the New Year, giving them the shape of a Christmas tree, deer or snowflake. This dessert based on Italian meringue is prepared quite simply, but it is worth considering such important nuances as the weight of the products and temperature.",
  },
  {
    id: 17,
    category: "desserts",
    image: "/images/desserts/des-3.webp",
    title: "Avocado chocolate mousse",
    description:
      "Avocado chocolate mousse - sounds peculiar and looks very unusual. But at the same time, it is an original, tasty, healthy, and also the simplest dessert. So I advise you to take a chance and try at least once. Perhaps you will like it too!",
  },
  {
    id: 18,
    category: "desserts",
    image: "/images/desserts/des-4.webp",
    title: "Tiramisu with cream",
    description:
      "Italy is famous for its calmness and regularity. Even the popular Italian tiramisu is prepared without too much fuss. It is enough to prepare a simple cream, smear cookies moistened with coffee, and wait until it all soaks.",
  },
  {
    id: 19,
    category: "desserts",
    image: "/images/desserts/des-5.webp",
    title: "Cheesecakes in the oven",
    description:
      "Cheesecakes can be prepared for dessert, breakfast or dinner. Cottage cheese of any fat content is suitable, and if it has a bright sourness, it can always be adjusted with sugar. If the cottage cheese is too dry, you can add sour cream or a little milk.",
  },
  {
    id: 20,
    category: "desserts",
    image: "/images/desserts/des-6.webp",
    title: "Macarons with mascarpone",
    description:
      "Macaron is a popular French dessert made with almond flour and meringue. Fruit and berry curd, chocolate ganache, caramel, cottage cheese cream and much more can be used as a filling.",
  },
];
export default articalsArray;
