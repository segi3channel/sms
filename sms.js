/* coded by ibnu syawall */
/* Subscribe : Youtube.com/segi3channel */

// ---------- module ----------

var req = require('request');    // npm install --save request
var she = require('shelljs');    // npm install --save shelljs
var war = require('colors') ;    // npm install --save colors
var per = require('readline');   // npm install --save readline

// ---------- warna ----------

war.setTheme({
    k : 'yellow',
    h : 'green',
    b : 'blue',
    m : 'red'
});

// ---------- banner ----------

she.echo('');
she.echo(' █▀▀ █▀▀ █▀▄▀█ █▀▀'.h + "  C" + " : " + "I".m + "bnu " + "Syawall");
she.echo(' █▀▀ ▀▀█ █░▀░█ ▀▀█'.b + "  E" + " : " + "h".h + "ttps://t.me/ibnusyawall");
she.echo(' ▀░░ ▀▀▀ ▀░░░▀ ▀▀▀'.m + "  T" + " : " + "4".b + "07AuthenticExploit");
she.echo(' -------------------- ');

// ---------- prompt ----------

const tanya = per.createInterface({
    input : process.stdin,
    output: process.stdout
}); tanya.question(' ['.k + '!'.m + '] '.k + ' Masukan Nomor : ', (no) => {
    tanya.question(' ['.k + '?'.m + '] '.k + ' Masukan Pesan : ', (pe) => {
    tanya.close(); tanya.close();she.echo(' -------- ' + ' Harap Tunggu ' + '---------- ');

// ---------- request ----------

req(`http://scid.ga/api/sms.php?send=1&no=${no}&msg=${pe}&sender=SP`, function(error, response, body){
    she.echo(' ['.k + '√'.b + '] '.k +` Sukses        : ${no}`);
    she.echo(' ['.k + '√'.b + '] '.k +` Pesan         : ${pe}`);she.echo('');
});
    }); });

// ---------- done ----------
