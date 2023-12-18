// Fetch
// const loadSWPerson = async (id) => {
//    try {
//       const result = await fetch(`https://swapi.dev/api/people/${id}`);
//       const json = await result.json();
//       console.log(json);
//    } catch (error) {
//       console.log(error);
//    }
// }

// Axios library
// https://axios-http.com/docs/intro
// const loadSWPerson = async (id) => {
   // try {
   //    const result = await axios.get(`https://swapi.dev/api/people/${id}`);
   //    console.log(result.data);
   // } catch (error) {
   //    console.log(error);
   // }
// }

//http://api.tvmaze.com/search/shows?q={searchTerm}
const form = document.querySelector("#searchForm");
form.addEventListener("submit", async e => {
   e.preventDefault();

   try {
      // Get Results
      const searchTerm = form.elements.query.value;
      //const result = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
      const config = { params: {q: searchTerm} };
      const result = await axios.get(`http://api.tvmaze.com/search/shows`, config);
      console.log(result.data);

      // Clear prev result
      const containerRow = document.querySelector("#resultsRow");
      removeAllChildNodes(containerRow);
      form.elements.query.value = "";

      // Add results to page
      for (const movie of result.data) {
         // Create column div
         const column = document.createElement("div");
         column.classList.add("col-4", "p-1", "d-flex", "flex-column", "mt-3");
         
         // Create image and add to column div
         if (movie.show.image.medium) {
            const image = document.createElement("img");
            image.src = movie.show.image.medium;
            image.classList.add("w-100");
            column.appendChild(image);
         }

         // Create title and add to column div
         const title = document.createElement("h3");
         title.classList.add("text-center");
         title.innerText = movie.show.name;
         column.appendChild(title);

         // Add column div to row
         containerRow.appendChild(column);
      }
   } catch (error) {
      console.log(error);
   }
})

function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}
