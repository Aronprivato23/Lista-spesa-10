npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM2FL1AnoT9uZ_SwSWOvSyZzYbvVeqif8",
  authDomain: "backup-lista-spesa.firebaseapp.com",
  projectId: "backup-lista-spesa",
  storageBucket: "backup-lista-spesa.firebasestorage.app",
  messagingSenderId: "438493716093",
  appId: "1:438493716093:web:c5b83f8a7e3cc84e871b14",
  measurementId: "G-NKZRKYCFDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Percorso segreto nel database (Sostituisci 'ricette_mia_chiave_123' con la tua parola segreta)
const recipesRef = db.ref('spesona');

// =========================================================
// 2. LE TUE 30 RICETTE DI BASE
// =========================================================
const BASE = {
  "1": [["Skyr", 300, "g"], ["Cereali", 80, "g"], ["Banana", 1, "pz"], ["Burro d'arachidi e toast integrale", 20, "g"], ["Latte", 250, "ml"]],
  "2": [["Uova", 3, "pz"], ["Gallette mais", 80, "g"], ["Avocado", 0.5, "pz"], ["Latte", 250, "ml"], ["Banana", 1, "pz"]],
  "3": [["Skyr", 300, "g"], ["Cereali", 80, "g"], ["Mirtilli", 100, "g"], ["Banana", 1, "pz"], ["Burro d'arachidi e toast integrale", 25, "g"], ["Latte", 250, "ml"]],
  "4": [["Skyr", 300, "g"], ["Cereali", 70, "g"], ["Banana", 1, "pz"], ["Burro d'arachidi e toast integrale", 20, "g"], ["Latte", 250, "ml"], ["Biscotti", 30, "g"]],
  "5": [["Uova", 3, "pz"], ["Gallette mais", 70, "g"], ["Avocado", 0.5, "pz"], ["Skyr", 300, "g"], ["Banana", 1, "pz"], ["Olio EVO", 10, "g"]],
  "6": [["Pasta", 120, "g"], ["Pollo", 180, "g"], ["Peperone", 1, "pz"], ["Olio EVO", 10, "g"], ["Insalata", 1, "pz"]],
  "7": [["Pasta", 120, "g"], ["Tonno sgocciolato", 160, "g"], ["Pomodoro", 1, "pz"], ["Avocado", 0.5, "pz"], ["Verdure", 1, "pz"]],
  "8": [["Pasta", 120, "g"], ["Carne macinata magra", 180, "g"], ["Peperone", 1, "pz"], ["Pomodoro", 1, "pz"]],
  "9": [["Pasta", 120, "g"], ["Pollo", 180, "g"], ["Broccoli", 1, "pz"], ["Pomodoro", 1, "pz"], ["Olio EVO", 10, "g"]],
  "10": [["Pasta", 120, "g"], ["Tonno", 160, "g"], ["Ceci", 150, "g"], ["Pomodoro", 1, "pz"], ["Insalata", 1, "pz"]],
  "11": [["Carne macinata magra", 180, "g"], ["Patate dolci", 350, "g"], ["Fagioli", 150, "g"], ["Pomodoro", 1, "pz"], ["Insalata", 1, "pz"]],
  "12": [["Pollo", 200, "g"], ["Patate dolci", 350, "g"], ["Ceci", 150, "g"], ["Insalata", 1, "pz"], ["Verdure", 1, "pz"]],
  "13": [["Pollo", 200, "g"], ["Rösti", 300, "g"], ["Insalata", 1, "pz"], ["Uova", 2, "pz"]],
  "14": [["Carne macinata magra", 180, "g"], ["Patate dolci", 300, "g"], ["Fagioli", 150, "g"], ["Avocado", 1, "pz"]],
  "15": [["Pollo", 200, "g"], ["Rösti", 300, "g"], ["Verdure", 1, "pz"], ["Fagioli", 150, "g"], ["Insalata", 1, "pz"]],
  "16": [["Skyr", 300, "g"], ["Avena", 80, "g"], ["Banana", 1, "pz"], ["Burro d'arachidi", 20, "g"], ["Latte", 150, "ml"]],
  "17": [["Uova", 3, "pz"], ["Pane integrale", 80, "g"], ["Skyr", 150, "g"], ["Frutti di bosco", 1, "pz"], ["Banana", 1, "pz"]],
  "18": [["Skyr", 300, "g"], ["Muesli/cereali", 80, "g"], ["Banana", 1, "pz"], ["Burro d'arachidi", 20, "g"], ["Latte", 250, "ml"]],
  "19": [["Avena", 80, "g"], ["Latte", 300, "ml"], ["Whey protein", 30, "g"], ["Banana", 1, "pz"], ["Burro d'arachidi", 20, "g"]],
  "20": [["Uova", 3, "pz"], ["Pane", 70, "g"], ["Avocado", 0.5, "pz"], ["Skyr", 250, "g"], ["Frutti di bosco", 1, "pz"]],
  "21": [["Pasta", 120, "g"], ["Pollo", 180, "g"], ["Pomodoro", 1, "pz"], ["Zucchine", 1, "pz"], ["Olio EVO", 10, "g"]],
  "22": [["Riso", 120, "g"], ["Tacchino", 180, "g"], ["Peperone", 1, "pz"], ["Olio EVO", 10, "g"]],
  "23": [["Pasta", 120, "g"], ["Tonno", 160, "g"], ["Pomodoro", 1, "pz"], ["Olive", 1, "pz"], ["Insalata", 1, "pz"]],
  "24": [["Cous cous", 120, "g"], ["Pollo", 180, "g"], ["Ceci", 1, "pz"], ["Peperone", 1, "pz"], ["Pomodoro", 1, "pz"]],
  "25": [["Macinata per hamburger", 180, "g"], ["Panini piccoli", 2, "pz"], ["Pomodoro", 1, "pz"], ["Insalata", 1, "pz"], ["Patate al forno", 250, "g"]],
  "26": [["Macinata", 180, "g"], ["Patate", 350, "g"], ["Broccoli", 1, "pz"], ["Avocado", 0.5, "pz"]],
  "27": [["Salmone magro", 180, "g"], ["Patate dolci", 350, "g"], ["Insalata", 1, "pz"], ["Pomodoro", 1, "pz"]],
  "28": [["Pollo", 200, "g"], ["Rösti", 300, "g"], ["Verdure", 1, "pz"], ["Uova", 2, "pz"]],
  "29": [["Macinata", 180, "g"], ["Patate", 300, "g"], ["Verdure", 1, "pz"], ["Avocado", 0.5, "pz"]],
  "30": [["Manzo magro", 180, "g"], ["Patate dolci", 300, "g"], ["Fagioli", 150, "g"], ["Verdure", 1, "pz"], ["Patate al forno", 250, "g"]]
};

const KEY = 'ricette-complete-v4';
const $ = x => document.getElementById(x);
let edits = {}, custom = {};

// Caricamento locale offline
function loadLocal(){
  try{
    let x = JSON.parse(localStorage.getItem(KEY) || '{}');
    edits = x.edits || {};
    custom = x.custom || {};
  }catch(e){}
}

// Salvataggio sia su memoria locale che su Firebase
function save(){
  localStorage.setItem(KEY, JSON.stringify({edits, custom}));
  recipesRef.set({edits, custom}).catch(err => console.error("Errore salvataggio Cloud:", err));
}

// Sincronizzazione in Tempo Reale con Firebase
recipesRef.on('value', (snapshot) => {
  const val = snapshot.val();
  const statusEl = $('sync-status');
  if (val) {
    edits = val.edits || {};
    custom = val.custom || {};
    localStorage.setItem(KEY, JSON.stringify({edits, custom}));
    render();
    if(statusEl) statusEl.textContent = '☁️ Sincronizzato';
  } else {
    // Se il database cloud è vuoto al primo avvio, salviamo le ricette di base nel cloud
    save();
  }
}, (error) => {
  console.warn("Offline/Errore connessione Cloud:", error);
  const statusEl = $('sync-status');
  if(statusEl) statusEl.textContent = '📱 Locale (Offline)';
});

function esc(s){
  return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function all(){
  return Object.entries(BASE).map(([id, items]) => ({
    id: 'd' + id,
    name: edits['d' + id]?.name || 'Giorno ' + id,
    items: edits['d' + id]?.items || items
  })).concat(Object.values(custom));
}

function fmt(n){
  return Number.isInteger(n) ? n : n.toLocaleString('it-IT', {maximumFractionDigits: 2});
}

function render(){
  let q = $('search').value.toLowerCase(),
      rs = all().filter(r => r.name.toLowerCase().includes(q) || r.items.some(x => x[0].toLowerCase().includes(q)));
  $('recipes').innerHTML = rs.map(r => `<div class="recipe" data-id="${r.id}"><label class="pickrow"><input class="pick" type="checkbox"><span><b>${esc(r.name)}</b><small>${r.items.map(x => esc(x[0])).join(', ')}</small></span></label><span class="mult">× <input class="factor" type="number" min=".25" step=".25" value="1"></span><button class="edit" data-edit="${r.id}">Modifica</button></div>`).join('') || '<p>Nessun risultato</p>';
  $('total').textContent = rs.length + ' ricette';
  document.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => openEdit(b.dataset.edit));
}

function generate(){
  let s = {};
  document.querySelectorAll('.recipe').forEach(c => {
    if(!c.querySelector('.pick').checked) return;
    let r = all().find(x => x.id === c.dataset.id),
        f = Number(c.querySelector('.factor').value) || 1;
    r.items.forEach(([n, q, u]) => {
      let k = n.trim().toLowerCase() + '|' + u;
      s[k] = (s[k] || 0) + q * f;
    });
  });
  $('result').innerHTML = Object.entries(s).sort().map(([k, q]) => {
    let [n, u] = k.split('|');
    return `<label class="item"><input type="checkbox"><span>${esc(n.replace(/\b\w/g, x => x.toUpperCase()))}</span><strong>${fmt(q)} ${u}</strong></label>`;
  }).join('') || '<p>Seleziona le ricette e premi Crea lista.</p>';
  $('count').textContent = Object.keys(s).length + ' prodotti';
}

function row(item = ['', '', 'g']){
  let d = document.createElement('div');
  d.className = 'ing';
  d.innerHTML = `<input class="in" value="${esc(item[0])}" placeholder="Alimento"><input class="iq" type="number" min="0" step=".1" value="${item[1] || ''}" placeholder="Qtà"><select class="iu"><option ${item[2]=='g'?'selected':''}>g</option><option ${item[2]=='ml'?'selected':''}>ml</option><option ${item[2]=='pz'?'selected':''}>pz</option><option ${item[2]=='kg'?'selected':''}>kg</option><option ${item[2]=='l'?'selected':''}>l</option></select><button type="button">×</button>`;
  d.querySelector('button').onclick = () => d.remove();
  $('ings').append(d);
}

function openEdit(id){
  let r = all().find(x => x.id === id);
  $('editId').value = id;
  $('rname').value = r.name;
  $('ings').innerHTML = '';
  r.items.forEach(row);
  $('editbox').open = true;
  scrollTo(0, $('editbox').offsetTop);
}

$('search').oninput = render;
$('generate').onclick = generate;
$('select').onclick = () => document.querySelectorAll('.pick').forEach(x => x.checked = true);
$('none').onclick = () => document.querySelectorAll('.pick').forEach(x => x.checked = false);
$('addrow').onclick = () => row();
$('copy').onclick = () => {
  navigator.clipboard?.writeText([...document.querySelectorAll('.item')].map(x => x.innerText.replace('\n', ' — ')).join('\n'));
  $('copy').textContent = 'Copiata!';
  setTimeout(() => $('copy').textContent = 'Copia lista', 1300);
};

$('form').onsubmit = e => {
  e.preventDefault();
  let id = $('editId').value,
      items = [...document.querySelectorAll('.ing')].map(x => [x.querySelector('.in').value.trim(), +x.querySelector('.iq').value, x.querySelector('.iu').value]).filter(x => x[0] && x[1] > 0),
      name = $('rname').value.trim();
  if(!name || !items.length) return alert('Inserisci nome e almeno un ingrediente');
  if(id === 'new') custom['c_' + Date.now()] = {id: 'c_' + Date.now(), name, items};
  else if(id.startsWith('d')) edits[id] = {name, items};
  else custom[id] = {id, name, items};
  save();
  render();
  $('editbox').open = false;
};

$('new').onclick = () => {
  $('editId').value = 'new';
  $('rname').value = '';
  $('ings').innerHTML = '';
  row();
  $('editbox').open = true;
};

loadLocal();
render();
