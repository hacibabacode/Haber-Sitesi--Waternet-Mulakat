const cors = require('cors');
app.use(cors());


const db = new sqlite3.Database('haberler.db');

db.all('SELECT * FROM haberler', (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(rows);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var veriFormu = document.getElementById('veriFormu');
    veriFormu.addEventListener('submit', function(event) {
        event.preventDefault();

        var ad = document.getElementById('ad').value;
        var soyad = document.getElementById('soyad').value;
        var email = document.getElementById('email').value;

        // Veritabanına veri eklemek için AJAX kullanabilirsiniz
        // Bu örnekte AJAX kullanımını göstermiyorum, ama gerçek bir uygulamada kullanmanız önerilir.

        // Bu örnekte AJAX kullanımını basitleştirmek için bir konsol logu yapılıyor.
        console.log('Ad: ' + ad + ', Soyad: ' + soyad + ', E-posta: ' + email);
        // Bu noktada gerçek bir veritabanına ekleme işlemi yapmanız gerekecektir.
    });
});
