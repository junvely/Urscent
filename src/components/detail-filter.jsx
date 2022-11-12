// import React from "react";
// import { useState } from "react";
// import styles from "../styles/detail-filter.module.css";
// import CheckBox from "./checkBox";
// import FilterList from "./filter-list";
// import Radio from "./radio";
// import { v4 as uuidv4 } from "uuid";

// const DetailFilter = (props) => {
//   const [detailFormData, setDetailFormData] = useState({
//     gender: [
//       {
//         name: "gender",
//         value: "male",
//         label: "남성용",
//         displayPage: "home",
//       },
//       {
//         name: "gender",
//         value: "female",
//         label: "여성용",
//         displayPage: "home",
//       },
//       {
//         name: "gender",
//         value: "unisex",
//         label: "남녀공용",
//         displayPage: "home",
//       },
//     ],
//     tpo: [
//       {
//         name: "tpo",
//         value: "casual",
//         label: "캐쥬얼",
//         displayPage: "home",
//       },
//       {
//         name: "tpo",
//         value: "business",
//         label: "비즈니스",
//         displayPage: "home",
//       },
//       {
//         name: "tpo",
//         value: "sporty",
//         label: "스포티",
//         displayPage: "home",
//       },
//       {
//         name: "tpo",
//         value: "vacation",
//         label: "바캉스",
//         displayPage: "home",
//       },
//       {
//         name: "tpo",
//         value: "party",
//         label: "파티",
//         displayPage: "home",
//       },
//       {
//         name: "tpo",
//         value: "date",
//         label: "데이트",
//         displayPage: "home",
//       },
//     ],
//     weather: [
//       {
//         name: "weather",
//         value: "spring",
//         label: "Spring",
//         displayPage: "home",
//       },
//       {
//         name: "weather",
//         value: "summer",
//         label: "Summer",
//         displayPage: "home",
//       },
//       {
//         name: "weather",
//         value: "autumn",
//         label: "Autumn",
//         displayPage: "home",
//       },
//       {
//         name: "weather",
//         value: "winter",
//         label: "Winter",
//         displayPage: "home",
//       },
//     ],
//     rating: [
//       {
//         name: "rating",
//         value: 9,
//         label: "9.0 이상",
//         displayPage: "home",
//       },
//       {
//         name: "rating",
//         value: 8,
//         label: "8.0 이상",
//         displayPage: "home",
//       },
//       {
//         name: "rating",
//         value: 7,
//         label: "7.0 이상",
//         displayPage: "home",
//       },
//       {
//         name: "rating",
//         value: 6,
//         label: "6.0 이상",
//         displayPage: "home",
//       },
//       {
//         name: "rating",
//         value: 6,
//         label: "6.0 이상",
//         displayPage: "home",
//       },
//       {
//         name: "rating",
//         value: 5,
//         label: "5.0 이상",
//         displayPage: "home",
//       },
//       {
//         name: "rating",
//         value: 4,
//         label: "5.0 미만",
//         displayPage: "home",
//       },
//     ],
//     notes: [
//       {
//         name: "notes",
//         value: "aldehydes",
//         label: "Aldehydes",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "animalic",
//         label: "Animalic",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "aquatic",
//         label: "Aquatic",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "balsamic",
//         label: "Balsamic",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "Citric",
//         label: "Citric",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "earthy",
//         label: "Earthy",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "floral",
//         label: "Floral",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "fragrance ingredients",
//         label: "Fragrance ingredients",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "fruity",
//         label: "Fruity",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "gourmandy",
//         label: "Gourmandy",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "green",
//         label: "Green",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "herbaceous",
//         label: "Herbaceous",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "mineral",
//         label: "Mineral",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "mossy",
//         label: "Mossy",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "musk",
//         label: "Musk",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "oriental",
//         label: "Oriental",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "powdery",
//         label: "Powdery",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "resinous",
//         label: "Resinous",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "smoky",
//         label: "Smoky",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "spicy",
//         label: "Spicy",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "textile",
//         label: "Textile",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "tobacco",
//         label: "Tobacco",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "woody",
//         label: "Woody",
//         displayPage: "home",
//       },
//       {
//         name: "notes",
//         value: "etc",
//         label: "etc",
//         displayPage: "home",
//       },
//     ],
//   });

//   const { gender, tpo, weather, rating, notes } = detailFormData;

//   const handleInputChecked = (event) => {
//     const { name, checked, value } = event.target;

//     setDetailFormValue({
//       ...detailFormValue,
//       [name]: value,
//     });
//   };

//   return; // <section className={styles.detailFilter}>
//   //   <h2 className={styles.title}>상세검색</h2>
//   //   <form method="" action="" name="detailSearch">
//   //     <table className={styles.table}>
//   //       <tbody>
//   //         <tr>
//   //           <th className={styles.filterType}>성별</th>
//   //           <td className={styles.filterListHalf}>
//   //             <FilterList
//   //               filters={gender}
//   //               handleInputChecked={handleInputChecked}
//   //               displayType="radio"
//   //             ></FilterList>
//   //           </td>
//   //           <th className={styles.filterType}>계절감</th>
//   //           <td className={`${styles.filterListHalf} ${styles.weather}`}>
//   //             <FilterList
//   //               filters={weather}
//   //               handleInputChecked={handleInputChecked}
//   //             ></FilterList>
//   //           </td>
//   //         </tr>
//   //         <tr>
//   //           <th className={styles.filterType}>TPO</th>
//   //           <td className={styles.filterList} colSpan="3">
//   //             <FilterList
//   //               filters={tpo}
//   //               handleInputChecked={handleInputChecked}
//   //             ></FilterList>
//   //           </td>
//   //         </tr>
//   //         <tr>
//   //           <th className={styles.filterType}>향</th>
//   //           <td className={styles.filterList} colSpan="3">
//   //             <FilterList
//   //               filters={rating}
//   //               handleInputChecked={handleInputChecked}
//   //             ></FilterList>
//   //           </td>
//   //         </tr>
//   //         <tr>
//   //           <th className={styles.filterType}>Notes</th>
//   //           <td className={styles.filterList} colSpan="3">
//   //             <table>
//   //               <tbody>
//   //                 <tr className={styles.notes}>
//   //                   {notes.map((filter) => (
//   //                     <td
//   //                       className={`${
//   //                         styles.notesList
//   //                       } ${getFragranceNoteStyles(filter)} `}
//   //                     >
//   //                       <CheckBox
//   //                         key={uuidv4()}
//   //                         name={filter.name}
//   //                         value={filter.value}
//   //                         label={filter.label}
//   //                         handleInputChecked={handleInputChecked}
//   //                         displayPage={filter.displayPage}
//   //                       ></CheckBox>
//   //                     </td>
//   //                   ))}
//   //                 </tr>
//   //               </tbody>
//   //             </table>
//   //           </td>
//   //         </tr>
//   //       </tbody>
//   //     </table>
//   //   </form>
//   // </section>
// };

// function getFragranceNoteStyles(filter) {
//   if (filter.value === "fragrance ingredients") {
//     return styles.fragranceNote;
//   }
// }

// export default DetailFilter;
