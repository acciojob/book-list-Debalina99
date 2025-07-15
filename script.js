//your JS code here. If required.
let heading1 = document.createElement("h1");
heading1.textContent="MyBookList";
document.body.appendChild(heading1);

let form = document.createElement("form");
form.setAttribute("class","form-group");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let btn = document.createElement("button");

input1.setAttribute("id","title");
input2.setAttribute("id","author");
input3.setAttribute("id","isbn");
btn.setAttribute("id","submit");
btn.textContent="Add Book";
btn.setAttribute("type", "submit");

form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);
form.appendChild(btn);

document.body.appendChild(form);


const table = document.createElement("table");
    table.className = "table table-striped";

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    ["Title", "Author", "ISBN#", "Action"].forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    tbody.id = "book-list";
    table.appendChild(tbody);

    document.body.appendChild(table);

    // Event Listener for form submit
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const title = input1.value.trim();
      const author = input2.value.trim();
      const isbn = input3.value.trim();

      if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
      }

      const tr = document.createElement("tr");

      [title, author, isbn].forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });

      const tdAction = document.createElement("td");
      const delBtn = document.createElement("button");
      delBtn.className = "delete";
      delBtn.textContent = "Clear";

      // Delete row on click
      delBtn.addEventListener("click", () => {
        tr.remove();
      });

      tdAction.appendChild(delBtn);
      tr.appendChild(tdAction);

      tbody.appendChild(tr);

      // Clear input fields
      input1.value = "";
      input2.value = "";
      input3.value = "";
    });















