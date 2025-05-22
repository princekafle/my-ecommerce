function getFormattedParams(searchParams) {
  let query = "";

//  suruma searchparms const searchParams = {
//   min: 100,
//   max: 1000,
//   sort: "price-asc",
//   brands: "acer,dell",
//   category: "laptops",
//   emptyField: "",
// }; hunxa

  //Object.entries(searchParams) le as a array ma   [["min", 100], ["max", 1000], ["sort", "price-asc"]] convert garxa search params lai   
  // console.log(Object.entries(searchParams))
  Object.entries(searchParams).map((params) => {
    const [key, value] = params;
// if value xa vane array ma yaniki user le kei na kei filter lagako xa vane query ma tyo key ra value pathaidinxa in below format so that backend le bujos
    if (value) query = `${query == "" ? "" : query + "&"}${key}=${value}`;
    // if params ma value xaina vane kei add nagarney query ma othrwise xa vane chai purano query ma $ le jodera key value lekhne for ex: query = "min=100&max=1000"
  });

  return query;
}

export default getFormattedParams;

// yo chai search gareko params lai formatted garna ko lagi kinaki backend ma data pathauda milayera backend ma vayeko jsari pathaunu parxa so 