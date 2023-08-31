const url = "http://localhost/educom/";
const SelectElement = x => document.querySelector(x)
fetch(url, {
  method: "POST",
  body: JSON.stringify({
    "type": "getAllUsers"
  })
}).then(res => res.json())  // Add a return statement here
  .then(data => {
    tableBody = SelectElement('#AllUserTable');
    const tableRows = data.map((user, index) => {
      return `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${user.name}</td>
      <td><a href="tel:${user.phone}" style="text-decoration: none; color: inherit;">${user.phone}</a></td>
      <td><a href="mailto:${user.email}" style="text-decoration: none; color: inherit;">${user.email}</a></td>
      <td>${user.join_date}</td>
    </tr>
  `;
    }).join('');
    tableBody.innerHTML = tableRows;
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });
