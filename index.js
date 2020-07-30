
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function display() {

}
display.prototype.add = function (book) {
    tablebody = document.getElementById('tablebody');
    let uistring =
        `<tr>

    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr> `;
    tablebody.innerHTML += uistring;

}
display.prototype.clear = function () {
    let lform = document.getElementById('lform');
    lform.reset();
}
display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2)
        return false;
    else
        return true;
}
display.prototype.show = function (type, showmessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: </strong>${showmessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
 `
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);
}

let lform = document.getElementById('lform');
lform.addEventListener('submit', lformsubmit);

function lformsubmit(e) {

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;

    let java = document.getElementById('java');
    let c = document.getElementById('c');
    let other = document.getElementById('other');
    let type;
    if (java.checked) {
        type = java.value;
    }
    else if (c.checked) {
        type = c.value;
    }
    else if (other.checked) {
        type = other.value;
    }
    console.log(name);
    let books = new Book(name, author, type);
    let displays = new display();
    if (displays.validate(books)) {
        displays.add(books);
        displays.clear();
        displays.show('success', 'your book has been successfully added');
    }
    else {
        displays.show('danger', 'soory you cannot add this book');
    }
    e.preventDefault();
}
