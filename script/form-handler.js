const scriptURL = 'https://script.google.com/macros/s/AKfycbw25-N5UQN5qXjSTsrX6bOHO3p6FPuWzMX1NeaSAohw06ev5-gtg0xaoSH9hbXArPG6/exec'; // Ganti dengan URL Web App milikmu
const form = document.getElementById('aduanForm');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileInput = form.querySelector('input[name="foto"]');
  const file = fileInput.files[0];
  const fileName = file ? file.name : "Tidak ada file";

  const data = {
    nama: form.nama.value,
    hp: form.hp.value,
    kategori: form.kategori.value,
    aduan: form.aduan.value,
    lokasi: form.lokasi.value,
    foto: fileName
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => {
    responseMsg.innerHTML = "<p style='color:green;'>✅ Aduan berhasil dikirim!</p>";
    form.reset();
  })
  .catch((error) => {
    responseMsg.innerHTML = "<p style='color:red;'>❌ Gagal mengirim aduan.</p>";
    console.error('Error!', error.message);
  });
});
