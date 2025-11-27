const form = document.getElementById("todoForm");
const inputkegiatan = document.getElementById("todoInput");
const listkegiatan = document.getElementById("todoList");
const inputtanggal = document.getElementById("dueDateInput");
const listtanggal = document.getElementById("dueDatelist");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // mencegah reload halaman

    const text = input.value;

    // Buat elemen <li>
    const li = document.createElement("todolist");
    li.textContent = text;

    // Tambahkan ke <ul>
    list.appendChild(li);

    // Kosongkan input
    input.value = "";
});
