document.addEventListener("DOMContentLoaded", function() {
    // Cek apakah ada data yang disimpan di local storage
    if (localStorage.getItem("emailFormData")) {
      var savedData = JSON.parse(localStorage.getItem("emailFormData"));
      document.getElementById("to").value = savedData.to;
      document.getElementById("message").value = savedData.message;
    }
  
    // Tambahkan event listener untuk form submission
    document.getElementById("emailForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah pengiriman form default
  
      // Ambil data dari form
      var formData = {
        to: document.getElementById("to").value,
        message: document.getElementById("message").value
      };
  
      // Simpan data ke local storage
      localStorage.setItem("emailFormData", JSON.stringify(formData));
  
      // Reset form
      this.reset();
  
      alert("Data email berhasil disimpan di local storage!");
    });
  });