/* ============ Gran Muralla II · carta ============ */

// ---- Alérgenos (nombre, color de la etiqueta) ----
const ALERGENOS = {
  gluten:     { nombre: "Gluten",             color: "#d9822b" },
  crustaceos: { nombre: "Crustáceos",         color: "#2a7fc1" },
  huevos:     { nombre: "Huevos",             color: "#f0a020" },
  pescado:    { nombre: "Pescado",            color: "#1d4e9e" },
  cacahuetes: { nombre: "Cacahuetes",         color: "#a86a3a" },
  soja:       { nombre: "Soja",               color: "#3a9a4a" },
  lacteos:    { nombre: "Lácteos",            color: "#5b3a29" },
  cascara:    { nombre: "Frutos de cáscara",  color: "#a8442e" },
  apio:       { nombre: "Apio",               color: "#6aa33a" },
  mostaza:    { nombre: "Mostaza",            color: "#b88a1a" },
  sesamo:     { nombre: "Granos de sésamo",   color: "#8c8a70" },
  sulfitos:   { nombre: "Dióxido de azufre y sulfitos", color: "#6a2a6e" },
  moluscos:   { nombre: "Moluscos",           color: "#4aa8d8" },
  altramuces: { nombre: "Altramuces",         color: "#e8c95a" }
};

// ---- Carta. Cada plato: [nombre, precio, [alérgenos], descripción opcional] ----
const CARTA = [
  { id: "entremeses", titulo: "Entremeses y sopas", platos: [
    ["Ensalada china", 5.50, ["soja","huevos","lacteos","sulfitos"]],
    ["Ensalada de brotes de soja", 5.95, ["soja","huevos","lacteos","sulfitos"]],
    ["Rollos de primavera", 2.80, ["gluten","sulfitos"]],
    ["Sopa de aleta de tiburón", 4.95, ["huevos","pescado"]],
    ["Sopa de fideos chinos con pollo", 4.95, []],
    ["Sopa de maíz y huevo", 4.95, ["huevos"]],
    ["Sopa de tomate", 4.95, ["huevos"]],
    ["Sopa de champiñones con pollo", 4.95, ["huevos"]],
    ["Sopa de agripicante", 5.50, ["huevos","sulfitos"]],
    ["“Wan Tan” fritos", 5.50, ["gluten","huevos"]]
  ]},
  { id: "especiales-entremeses", titulo: "Entremeses especiales",
    nota: "Platos de la portada de la carta.", platos: [
    ["Pan chino frito", 5.75, ["gluten"], "Relleno de verdura y lomo."],
    ["Jade", 7.25, ["gluten","sulfitos","crustaceos"], "Empanadilla rellena de gamba, al vapor."],
    ["Caprichos", 6.50, ["gluten","sulfitos","crustaceos"], "Rellenos de lomo y gamba."],
    ["Raviolis chinos", 9.25, ["gluten"], "Empanadilla frita rellena de carne y verdura."],
    ["Bola de dragón", 6.50, ["gluten"], "Bola de pan chino con centro de lomo."],
    ["Las cuatro estaciones", 7.50, ["gluten","sulfitos","crustaceos"], "De pollo, sembrado con verdura, setas, zanahorias y cangrejo."],
    ["Entremeses variados · 2 personas", 10.75, ["gluten","sulfitos","crustaceos"], "Jade, Caprichos, Bola de dragón y Cuatro estaciones."],
    ["Entremeses variados · 3 personas", 15.95, ["gluten","sulfitos","crustaceos"], "Jade, Caprichos, Bola de dragón y Cuatro estaciones."]
  ]},
  { id: "arroces", titulo: "Arroces y tallarines", platos: [
    ["Arroz frito con tres delicias", 5.75, ["huevos","sulfitos"]],
    ["Arroz frito con gambas", 6.75, ["huevos","sulfitos","crustaceos"]],
    ["Arroz frito con huevo", 5.50, ["huevos"]],
    ["Arroz horno oriental", 5.75, []],
    ["Arroz con gambas al curry", 7.25, ["sulfitos","crustaceos","lacteos"]],
    ["Arroz con pollo al curry", 7.10, ["lacteos"]],
    ["Arroz blanco", 2.95, []],
    ["Tallarines fritos con gambas", 6.75, ["sulfitos","gluten","huevos","crustaceos"]],
    ["Tallarines fritos con pollo", 6.50, ["gluten","huevos"]],
    ["Tallarines fritos con cerdo", 6.50, ["gluten","huevos"]],
    ["Tallarines fritos con ternera", 6.75, ["gluten","huevos"]],
    ["Tallarines fritos con tres delicias", 6.95, ["sulfitos","gluten","huevos","crustaceos"]]
  ]},
  { id: "verduras", titulo: "Verduras y tortillas", platos: [
    ["Bambú con setas chinas salteadas", 6.25, []],
    ["Brotes de soja fritos", 6.10, ["soja"]],
    ["Mezcla de verduras fritas", 6.10, ["soja"]],
    ["Familia feliz (Fantasía china)", 7.50, ["sulfitos","crustaceos","moluscos"]],
    ["Tortilla “Fu Yun”", 5.80, ["sulfitos","crustaceos","huevos","soja","lacteos"]],
    ["Tortilla con gambas", 6.25, ["sulfitos","crustaceos","huevos"]],
    ["Tortilla con pollo", 5.75, ["huevos"]],
    ["Tortilla con jamón", 5.75, ["sulfitos","huevos","lacteos"]]
  ]},
  { id: "pollo", titulo: "Pollo", platos: [
    ["Bolas de pollo fritas", 6.50, ["gluten"]],
    ["Pollo con bambú y setas chinas", 7.25, []],
    ["Pollo con salsa agridulce", 6.55, ["gluten","sulfitos"]],
    ["Pollo con salsa picante", 6.55, ["sulfitos"]],
    ["Pollo con almendras", 7.05, ["cascara"]],
    ["Pollo con nueces", 7.05, ["cascara"]],
    ["Pollo al curry", 6.55, ["lacteos"]],
    ["Pollo con piña", 6.55, ["sulfitos"]],
    ["Pollo al limón", 7.25, ["gluten","sulfitos"]],
    ["Pollo con brotes de soja", 6.55, ["soja"]],
    ["Chop-suey de pollo", 6.55, []]
  ]},
  { id: "ternera", titulo: "Carne de ternera", platos: [
    ["Ternera con bambú y setas chinas", 8.95, []],
    ["Ternera con salsa de ostras", 8.65, ["sulfitos","moluscos","pescado"]],
    ["Ternera con salsa picante", 8.50, ["sulfitos"]],
    ["Ternera con champiñones", 8.50, []],
    ["Ternera con salsa de tomate", 8.50, []],
    ["Ternera al curry", 8.50, ["lacteos"]],
    ["Ternera con salsa de cebolla", 8.50, []],
    ["Ternera con pimientos verdes", 8.50, []],
    ["Ternera con brotes de soja", 8.60, ["soja"]],
    ["Chop-suey de ternera", 8.50, []]
  ]},
  { id: "cerdo", titulo: "Carne de cerdo", platos: [
    ["Cerdo con bambú y setas chinas", 6.95, []],
    ["Cerdo con salsa agridulce", 6.75, ["sulfitos","gluten"]],
    ["Cerdo con salsa picante", 6.50, ["sulfitos"]],
    ["Cerdo con brotes de soja", 6.50, ["soja"]],
    ["Chop-suey de cerdo", 6.50, []],
    ["Costillas asadas de cerdo", 8.95, []]
  ]},
  { id: "marisco", titulo: "Marisco y pescado", platos: [
    ["Langostinos con salsa china", 12.75, ["sulfitos","crustaceos"]],
    ["Gambas al estilo chino", 10.25, ["sulfitos","crustaceos"]],
    ["Gambas con bambú y setas chinas", 10.75, ["sulfitos","crustaceos"]],
    ["Gambas al curry", 10.25, ["sulfitos","crustaceos","lacteos"]],
    ["Gambas con salsa agridulce", 10.50, ["sulfitos","crustaceos","gluten"]],
    ["Chop-suey de gambas", 10.25, ["sulfitos","crustaceos"]],
    ["Gambas con brotes de soja", 10.25, ["sulfitos","crustaceos","soja"]],
    ["Langostinos fritos", 10.25, ["sulfitos","crustaceos","gluten"]],
    ["Buñuelos de gambas", 10.20, ["sulfitos","crustaceos","gluten"]],
    ["Calamares con salsa picante", 8.50, ["sulfitos","crustaceos","pescado"]],
    ["Calamares con bambú y setas chinas", 8.95, ["sulfitos","crustaceos","pescado"]],
    ["Pescado con verduras fritas", 7.75, ["pescado","gluten","sulfitos"]],
    ["Pescado con salsa agridulce", 7.75, ["pescado","gluten"]],
    ["Pescado frito estilo chino", 7.75, ["pescado","gluten"]]
  ]},
  { id: "patos", titulo: "Patos", platos: [
    ["Pato con bambú y setas chinas", 13.50, []],
    ["Pato frito oriental", 13.50, []],
    ["Pato con piña", 13.50, ["sulfitos"]]
  ]},
  { id: "especial", titulo: "Platos especiales", platos: [
    ["Berenjena con carne", 8.25, []],
    ["Costilla con salsa agridulce", 8.95, ["sulfitos"]],
    ["Pan chino", 2.95, ["gluten"]],
    ["Gambas al “Ti-Pan”", 11.55, ["sulfitos","crustaceos"]],
    ["Ternera al “Ti-Pan”", 10.25, []],
    ["Fideos de arroz con gambas", 7.75, ["sulfitos","crustaceos"]],
    ["Fideos de arroz con ternera", 7.50, []],
    ["Fideos de arroz con cerdo", 7.40, []],
    ["Cuba delicia", 8.50, ["sulfitos","crustaceos","huevos","lacteos"]],
    ["Rollito de marisco", 2.90, []],
    ["Arroz de la casa", 7.25, ["sulfitos","crustaceos"]]
  ]}
];

// ---- Menús para compartir ----
const MENUS = [
  { personas: 2, precio: 26, platos: ["2 Rollos de primavera","1 Ensalada china","1 Arroz frito tres delicias","1 Pollo con almendras","1 Ternera con champiñones"] },
  { personas: 3, precio: 39, platos: ["3 Rollos de primavera","1 Ensalada china","Pan chino","1 Arroz frito tres delicias","1 Pollo con almendras","1 Cerdo agridulce","1 Ternera con champiñones"] },
  { personas: 4, precio: 52, platos: ["4 Rollos de primavera","1 Ensalada china","2 Arroz frito tres delicias","1 Pollo con almendras","1 Ternera con champiñones","1 Cerdo agridulce","1 Bolitas de pollo"] },
  { personas: 5, precio: 65, platos: ["5 Rollos de primavera","2 Ensaladas chinas","Pan chino","2 Arroz frito tres delicias","1 Pollo con almendras","1 Ternera con champiñones","1 Pollo al limón","1 Bolitas de pollo","1 Cerdo agridulce"] },
  { personas: 6, precio: 78, platos: ["6 Rollos de primavera","2 Ensaladas chinas","3 Arroz frito tres delicias","1 Pollo con almendras","1 Ternera con champiñones","1 Pollo al limón","1 Bolitas de pollo","1 Cerdo agridulce","1 Chop-suey de gambas"] }
];

// ---- Utilidades ----
const euros = n => n.toFixed(2).replace(".", ",") + " €";
const quitarTildes = t => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const $contenido = document.getElementById("contenidoCarta");
const $cats = document.getElementById("categorias");
const $buscar = document.getElementById("buscar");
const $sinRes = document.getElementById("sinResultados");
const $alerLista = document.getElementById("alergenosLista");

let categoriaActual = "todo";
const evitar = new Set();

// ---- Construir la carta ----
function crearEtiquetas(lista) {
  if (!lista.length) return "";
  return '<div class="etiquetas">' + lista.map(a =>
    `<span class="etiqueta" style="--c:${ALERGENOS[a].color}">${ALERGENOS[a].nombre}</span>`
  ).join("") + "</div>";
}

function construirCarta() {
  let html = "";

  // Menús
  html += `<section class="seccion-carta" id="sec-menus" data-cat="menus">
    <h3>Menús para compartir <small>precio total del menú</small></h3>
    <div class="menus">` +
    MENUS.map(m => `
      <article class="menu-tarjeta">
        <h4>Para ${m.personas} personas <span>${euros(m.precio).replace(",00","")}</span></h4>
        <ul>${m.platos.map(p => `<li>${p}</li>`).join("")}</ul>
      </article>`).join("") +
    `</div></section>`;

  // Secciones
  CARTA.forEach(sec => {
    html += `<section class="seccion-carta" id="sec-${sec.id}" data-cat="${sec.id}">
      <h3>${sec.titulo}</h3>
      ${sec.nota ? `<p class="nota-seccion">${sec.nota}</p>` : ""}
      <ul class="platos">` +
      sec.platos.map(([nombre, precio, alers, desc]) => `
        <li class="plato" data-alers="${alers.join(",")}" data-texto="${quitarTildes(nombre + " " + (desc || ""))}">
          <div>
            <span class="plato-nombre">${nombre}</span>
            ${desc ? `<span class="plato-desc">${desc}</span>` : ""}
            ${crearEtiquetas(alers)}
          </div>
          <span class="precio">${euros(precio)}</span>
        </li>`).join("") +
      `</ul></section>`;
  });

  $contenido.innerHTML = html;
}

function construirBotones() {
  const items = [["todo", "Toda la carta"], ["menus", "Menús"]]
    .concat(CARTA.map(s => [s.id, s.titulo]));
  $cats.innerHTML = items.map(([id, t]) =>
    `<button type="button" data-cat="${id}" aria-pressed="${id === "todo"}">${t}</button>`).join("");
  $cats.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    categoriaActual = b.dataset.cat;
    $cats.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    aplicarFiltros();
    if (categoriaActual !== "todo") {
      document.getElementById("contenidoCarta").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function construirAlergenos() {
  $alerLista.innerHTML = Object.entries(ALERGENOS).map(([id, a]) =>
    `<label><input type="checkbox" value="${id}"> ${a.nombre}</label>`).join("");
  $alerLista.addEventListener("change", e => {
    if (e.target.checked) evitar.add(e.target.value); else evitar.delete(e.target.value);
    aplicarFiltros();
  });

  document.getElementById("leyendaLista").innerHTML = Object.values(ALERGENOS).map(a =>
    `<li><span class="punto" style="--c:${a.color}"></span>${a.nombre}</li>`).join("");
}

// ---- Filtros: categoría + búsqueda + alergias ----
function aplicarFiltros() {
  const q = quitarTildes($buscar.value.trim());
  let visiblesTotal = 0;

  document.querySelectorAll(".seccion-carta").forEach(sec => {
    const esMenus = sec.dataset.cat === "menus";
    const coincideCat = categoriaActual === "todo" || categoriaActual === sec.dataset.cat;
    let visibles = 0;

    if (esMenus) {
      // Los menús solo se ocultan si hay búsqueda o alergias activas
      visibles = (q || evitar.size) ? 0 : 1;
    } else {
      sec.querySelectorAll(".plato").forEach(p => {
        const alers = p.dataset.alers ? p.dataset.alers.split(",") : [];
        const tieneAlergeno = alers.some(a => evitar.has(a));
        const coincideTexto = !q || p.dataset.texto.includes(q);
        const mostrar = coincideTexto && !tieneAlergeno;
        p.classList.toggle("oculto", !mostrar);
        if (mostrar) visibles++;
      });
    }

    const mostrarSec = coincideCat && visibles > 0;
    sec.classList.toggle("oculta", !mostrarSec);
    if (mostrarSec) visiblesTotal++;
  });

  $sinRes.hidden = visiblesTotal > 0;
}

$buscar.addEventListener("input", aplicarFiltros);

// ---- Tamaño de letra ----
let tam = 20;
try { tam = parseInt(localStorage.getItem("gm-tam")) || 20; } catch (e) {}
function ponerTam(n) {
  tam = Math.max(16, Math.min(32, n));
  document.documentElement.style.setProperty("--tam", tam + "px");
  try { localStorage.setItem("gm-tam", tam); } catch (e) {}
}
ponerTam(tam);
document.getElementById("letraMas").addEventListener("click", () => ponerTam(tam + 3));
document.getElementById("letraMenos").addEventListener("click", () => ponerTam(tam - 3));

// ---- Botón volver arriba ----
const $subir = document.getElementById("subir");
window.addEventListener("scroll", () => { $subir.hidden = window.scrollY < 600; });
$subir.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---- Iniciar ----
construirCarta();
construirBotones();
construirAlergenos();
aplicarFiltros();
