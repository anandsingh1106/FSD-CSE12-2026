const button = document.getElementById("btn");
const container = document.getElementById("container");

async function fetchData() {
  try {
    container.innerHTML = "<h2>Loading Data...</h2>";

    const serverData = await fetch("https://fakestoreapi.com/products");

    const jsonData = await serverData.json();

    console.log(jsonData);

    let table = `
            <table border="4px">
                <tr>
                    <th>ITEM_ID</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>RATING</th>
                    <th>RATING COUNT</th>
                </tr>

                ${jsonData
                  .map(
                    (ele) => `
                    <tr>
                    <td><img src=
                        <td>${ele.id}</td>
                        <td>${ele.title}</td>
                        <td>${ele.price}</td>
                        <td>${ele.rating.rate}</td>
                        <td>${ele.rating.count}</td>
                    </tr>
                `,
                  )
                  .join("")}

            </table>
        `;

    container.innerHTML = table;
  } catch (e) {
    console.error(e);
    container.innerHTML = "<h2>Loading Error</h2>";
  }
}

button.addEventListener("click", fetchData);
