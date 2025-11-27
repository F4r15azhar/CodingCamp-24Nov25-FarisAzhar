const form = document.getElementById("todoForm");
const namaInput = document.getElementById("namaKegiatan");
const tanggalInput = document.getElementById("tanggal");
const list = document.getElementById("todoList");

const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");
const completionEl = document.getElementById("completion");

function updateStats() {
    const rows = list.querySelectorAll("tr");
    const total = rows.length;
    const completed = list.querySelectorAll("tr.selesai").length;
    const pending = total - completed;

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    totalEl.textContent = "Total: " + total;
    completedEl.textContent = "Completed: " + completed;
    pendingEl.textContent = "Pending: " + pending;
    completionEl.innerHTML = "<b>Completion: " + percent + "%</b>";
}

function updateNumbering() {
    const rows = list.querySelectorAll("tr");
    rows.forEach((row, index) => {
        row.children[0].textContent = index + 1;
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = namaInput.value;
    const tanggal = tanggalInput.value;

    const tr = document.createElement("tr");

    const tdNo = document.createElement("td");
    tdNo.textContent = list.children.length + 1;

    const tdNama = document.createElement("td");
    tdNama.textContent = nama;

    const tdTanggal = document.createElement("td");
    tdTanggal.textContent = tanggal;

    const tdStatus = document.createElement("td");
    tdStatus.textContent = "Pending";

    const tdAksi = document.createElement("td");

    const btnSelesai = document.createElement("button");
    btnSelesai.innerHTML = '<i class="fa-solid fa-check"></i>';

    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = '<i class="fa-solid fa-trash"></i>';

    btnSelesai.onclick = function () {
        tr.classList.toggle("selesai");

        if (tr.classList.contains("selesai")) {
            tdStatus.textContent = "Completed";
            btnSelesai.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
        } else {
            tdStatus.textContent = "Pending";
            btnSelesai.innerHTML = '<i class="fa-solid fa-check"></i>';
        }

        updateStats();
    };

    btnHapus.onclick = function () {
        if (confirm("Yakin ingin menghapus kegiatan ini?")) {
            tr.remove();
            updateStats();
            updateNumbering();
        }
    };

    tdAksi.appendChild(btnSelesai);
    tdAksi.appendChild(btnHapus);

    tr.appendChild(tdNo);
    tr.appendChild(tdNama);
    tr.appendChild(tdTanggal);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAksi);

    list.appendChild(tr);

    updateStats();

    namaInput.value = "";
    tanggalInput.value = "";
});
