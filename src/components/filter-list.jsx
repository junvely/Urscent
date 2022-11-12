// import React from "react";
// import styles from "../styles/filter-list.module.css";
// import CheckBox from "./checkBox";
// import Radio from "./radio";
// import { v4 as uuidv4 } from "uuid";

// const FilterList = ({ filters, handleInputChecked, displayType }) => {
//   const radio = displayType === "radio";

//   return (
//     <ul className={styles.filters}>
//       {radio
//         ? filters.map((filter) => (
//             <li className={getNotesStyles(filter)}>
//               <Radio
//                 key={uuidv4()}
//                 name={filter.name}
//                 value={filter.value}
//                 label={filter.label}
//                 handleInputChecked={handleInputChecked}
//                 displayPage={filter.displayPage}
//               ></Radio>
//             </li>
//           ))
//         : filters.map((filter) => (
//             <li className={getNotesStyles(filter)}>
//               <CheckBox
//                 key={uuidv4()}
//                 name={filter.name}
//                 value={filter.value}
//                 label={filter.label}
//                 handleInputChecked={handleInputChecked}
//                 displayPage={filter.displayPage}
//               ></CheckBox>
//             </li>
//           ))}
//     </ul>
//   );
// };

// function getNotesStyles(filter) {
//   switch (filter.name) {
//     case "gender":
//       return styles.genderNote;
//     case "weather":
//       return styles.weatherNote;
//     case "tpo":
//       return styles.tpoNote;
//     case "rating":
//       return styles.ratingNote;
//   }
// }

// export default FilterList;
