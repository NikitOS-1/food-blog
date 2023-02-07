// import { Link } from "react-router-dom";
// import ArticalItem from "../../../componets/ArticalItem/ArticalItem";
// import { ArticalsProps } from "../../../state/articalsArray";
// import style from "./Fish.module.scss";

// type Props = {
//   articalsState: {
//     id: number;
//     category: string;
//     image: string;
//     title: string;
//     description: string;
//   }[];
//   getId: (id: number) => void;
// };

// const Fish = ({ articalsState, getId }: Props) => {
//   const fishCategory = articalsState.filter((category) =>
//     category.category === "fish" ? true : false
//   );

//   return (
//     <>
//       <div className={style.btnBack}>
//         <Link to="/portfolio">{"< Back"}</Link>
//       </div>
//       <div className={style.items}>
//         {fishCategory.map(
//           ({ id, category, image, title, description }: ArticalsProps, i) => (
//             <ArticalItem
//               key={i}
//               id={id}
//               category={category}
//               image={image}
//               title={title}
//               description={description}
//               getId={getId}
//             />
//           )
//         )}
//       </div>
//     </>
//   );
// };
// export default Fish;
