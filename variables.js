var username = "Emre Senel";

console.log(username);

const message = document.getElementById("message");

message.innerHTML = username;

var firstname = "Emre";
var surname= "Senel";

var fullname= firstname+" "+surname;
console.log(fullname);

const message2 = document.getElementById("strings");

message2.innerHTML=fullname;

const sentence = "Yazılım Geliştirmek İçin Öğrenilecek Çok Şey Var.";

console.log(sentence);

console.log("Toplam karakter sayısı:"+ sentence.length);

const lowerCaseSentence = sentence.toLowerCase();

console.log("Küçük harfe çevrilmiş cümle: " + lowerCaseSentence);

const sentence2 = "Bu bir \"örnek\" cümledir. ' \\";

console.log(sentence2);

const name1 = "Emre";
const age = 30;
const job = "yazılımcı";

const introduction = `Merhaba, benim adım ${name1}. 
Ben ${age} yaşındayım ve bir ${job} olarak çalışıyorum.`;

console.log(introduction);

