// Ini file Javascript

// Validasi form input
function validateForm() {
  let inputBeratBadan = parseInt(document.getElementById('berat-badan-input').value);
  let inputUsia = document.getElementById('usia-input').value;
  let inputTinggiBadan = parseFloat(document.getElementById('tinggi-badan-input').value)/100;

  if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != '') {
      let calculate = (inputBeratBadan/(inputTinggiBadan * inputTinggiBadan)).toFixed(2);
      updateResult(calculate);
  } else {
      alert('Inputan Anda Kosong! Mohon Cek Kembali');
      document.getElementById('weight-result').textContent = '';
      document.getElementById('explanation-result').textContent = '';
  }
}

// Update hasil kalkulasi BMI
function updateResult(value) {
  document.getElementById('bmi-result').innerHTML = value;

  if (value < 18.5) {
    document.getElementById('weight-result').textContent = 'KURUS';
    document.getElementById('explanation-result').textContent = 'Anda berada di bawah berat badan normal';
  } else if (value >= 18.5 && value < 24.9) {
    document.getElementById('weight-result').textContent = 'NORMAL';
    document.getElementById('explanation-result').textContent = 'Anda memiliki berat badan normal';
  } else if (value >= 25 && value < 29.9) {
    document.getElementById('weight-result').textContent = 'GEMUK';
    document.getElementById('explanation-result').textContent = 'Anda berada di atas berat badan normal';
  } else {
    document.getElementById('weight-result').textContent = 'OBESITAS';
    document.getElementById('explanation-result').textContent = 'Anda berada dalam kategori obesitas';
  }

}

function displayChoice() {
  // Mendapatkan elemen radio button yang dipilih
  const selectedOption = document.querySelector('input[name="gender"]:checked');
  if (selectedOption) {
    console.log("Jenis Kelamin: " + selectedOption.value);
  }
}

// Tombol reset form dan hasil
function resetBmi(){
  document.getElementById('input-form').reset();
  document.getElementById('bmi-result').textContent = '';
  document.getElementById('weight-result').textContent = '';
  document.getElementById('explanation-result').textContent = '';
}
