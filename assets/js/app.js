/* ===================================== */
/* IMPORTS */
/* ===================================== */

import { renderClients } from "./crud/renderClients.js";
import { searchClients } from "./crud/searchClients.js";
import { getClients, saveClients, clearClients } from "./storage/localStorage.js";
import { calculateMetrics } from "./dashboard/metrics.js";
import { getLocation } from "./services/geolocation.js";
import { toggleTheme, loadTheme } from "./theme/theme.js";
import { clientesPage } from "./pages/clientes.js";
import { estadisticasPage } from "./pages/estadisticas.js";
import { configuracionPage } from "./pages/configuracion.js";
import { ayudaPage } from "./pages/ayuda.js";
import { validateClient } from "./utils/validateClient.js";

/* ===================================== */
/* STATE */
/* ===================================== */

let clientes = getClients();
let editandoId = null;

/* ===================================== */
/* ELEMENTS */
/* ===================================== */

const content = document.getElementById("content");
const pageTitle = document.getElementById("pageTitle");

/* ===================================== */
/* INIT */
/* ===================================== */

loadTheme();
loadPage("clientes");
startClock();

/* ===================================== */
/* NAVIGATION */
/* ===================================== */

document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
        loadPage(link.dataset.page);
    });
});

/* ===================================== */
/* LOAD PAGE */
/* ===================================== */

function loadPage(page) {

    switch (page) {

        case "clientes":
            pageTitle.textContent = "Clientes";
            content.innerHTML = clientesPage();
            initClientes();
            break;

        case "estadisticas":
            pageTitle.textContent = "Estadísticas";
            content.innerHTML = estadisticasPage();
            initStats();
            break;

        case "configuracion":
            pageTitle.textContent = "Configuración";
            content.innerHTML = configuracionPage();
            initConfig();
            break;

        case "ayuda":
            pageTitle.textContent = "Ayuda";
            content.innerHTML = ayudaPage();
            break;
    }
}

/* ===================================== */
/* CLIENTES */
/* ===================================== */

function initClientes() {

    renderClients(clientes);

    const btnGuardar = document.getElementById("btnGuardar");

    /* evitar duplicar eventos */
    btnGuardar.onclick = null;

    btnGuardar.addEventListener("click", () => {

        try {

            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const contacto = document.getElementById("contacto").value;
            const estado = document.getElementById("estado").value;

            validateClient(nombre, correo, contacto);

            if (editandoId !== null) {

                clientes = clientes.map(c =>
                    c.id === editandoId
                        ? { ...c, nombre, correo, contacto, estado }
                        : c
                );

                editandoId = null;

                btnGuardar.innerHTML = `
                    <i class="bi bi-save-fill"></i>
                    Guardar Cliente
                `;

                document.querySelectorAll(".btn-edit").forEach(btn => {
                    btn.disabled = false;
                    btn.style.opacity = "1";
                });

            } else {

                clientes.push({
                    id: Date.now(),
                    nombre,
                    correo,
                    contacto,
                    estado
                });
            }

            saveClients(clientes);
            renderClients(clientes);
            limpiarFormulario();

        } catch (error) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message
            });
        }

    });

    /* BUSCAR */
    const busqueda = document.getElementById("busqueda");

    if (busqueda) {
        busqueda.oninput = () => {

            const texto = busqueda.value.toLowerCase().trim();

            const filtrados = clientes.filter(c =>
                c.nombre.toLowerCase().includes(texto) ||
                c.correo.toLowerCase().includes(texto) ||
                c.contacto.toLowerCase().includes(texto)
            );

            renderClients(filtrados);
        };
    }

/* ===================================== */
/* IMPORTACIÓN MASIVA (FIX + DEBUG) */
/* ===================================== */

const btnImportar = document.getElementById("btnImportar");

if (btnImportar) {

    btnImportar.addEventListener("click", () => {

        const archivo = document.getElementById("jsonFile").files[0];

        if (!archivo) {

            Swal.fire({
                icon: "warning",
                title: "Seleccione un archivo JSON"
            });

            return;
        }

        const progressContainer = document.getElementById("importProgressContainer");
        const progressBar = document.getElementById("importProgress");
        const progressText = document.getElementById("progressText");

        /* RESET UI */
        progressContainer.classList.remove("d-none");
        progressBar.style.width = "0%";
        progressText.innerText = "0%";

        btnImportar.disabled = true;
        btnImportar.innerHTML = `
            <span class="spinner-border spinner-border-sm"></span>
            Importando...
        `;

        const reader = new FileReader();

        reader.onload = function (event) {

            let data;

            try {
                data = JSON.parse(event.target.result);
            } catch (e) {

                Swal.fire({
                    icon: "error",
                    title: "JSON inválido"
                });

                btnImportar.disabled = false;
                btnImportar.innerHTML = `
                    <i class="bi bi-cloud-upload-fill"></i>
                    Importar Clientes
                `;

                progressContainer.classList.add("d-none");
                return;
            }

            /* WORKER INIT */

            const worker = new Worker("/assets/js/workers/importWorker.js");

            worker.postMessage(JSON.stringify(data));

            worker.onmessage = function (e) {

                if (e.data.type === "progress") {

                    progressBar.style.width = `${e.data.progress}%`;
                    progressText.innerText = `${e.data.progress}%`;
                }

                if (e.data.type === "complete") {

                    const nuevos = Array.isArray(e.data.data)
                        ? e.data.data
                        : [];

                    clientes = [...clientes, ...nuevos];

                    saveClients(clientes);
                    renderClients(clientes);

                    progressBar.style.width = "100%";
                    progressText.innerText = "100%";

                    btnImportar.disabled = false;
                    btnImportar.innerHTML = `
                        <i class="bi bi-cloud-upload-fill"></i>
                        Importar Clientes
                    `;

                    document.getElementById("jsonFile").value = "";

                    setTimeout(() => {
                        progressContainer.classList.add("d-none");
                    }, 1000);

                    worker.terminate();
                }

                if (e.data.type === "error") {

                    btnImportar.disabled = false;
                    btnImportar.innerHTML = `
                        <i class="bi bi-cloud-upload-fill"></i>
                        Importar Clientes
                    `;

                    progressContainer.classList.add("d-none");

                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: e.data.message
                    });

                    worker.terminate();
                }
            };
        };

        reader.readAsText(archivo);
    });
}

    /* CANCELAR EDICIÓN */

    const btnCancelar = document.getElementById("btnCancelar");

    if (btnCancelar) {

        btnCancelar.addEventListener("click", () => {

            editandoId = null;

            limpiarFormulario();

            document.querySelectorAll(".btn-edit").forEach(b => {
                b.disabled = false;
                b.style.opacity = "1";
            });

            const btnGuardar = document.getElementById("btnGuardar");

            btnGuardar.innerHTML = `
                <i class="bi bi-save-fill"></i>
                Guardar Cliente
            `;
        });
    }
}

/* ===================================== */
/* EDIT CLIENT */
/* ===================================== */

window.editClient = function (id) {

    if (editandoId !== null && editandoId !== id) {

        Swal.fire({
            icon: "warning",
            title: "Edición en progreso",
            text: "Primero termine de editar el cliente actual"
        });

        return;
    }

    const cliente = clientes.find(c => c.id === id);

    if (!cliente) return;

    editandoId = id;

    document.getElementById("nombre").value = cliente.nombre;
    document.getElementById("correo").value = cliente.correo;
    document.getElementById("contacto").value = cliente.contacto;
    document.getElementById("estado").value = cliente.estado;

    document.querySelectorAll(".btn-edit").forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.4";
    });

    document.getElementById("btnGuardar").innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        Actualizar Cliente
    `;
};

/* ===================================== */
/* DELETE CLIENT */
/* ===================================== */

window.deleteClient = function (id) {

    Swal.fire({
        title: "¿Eliminar cliente?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then(result => {

        if (result.isConfirmed) {

            clientes = clientes.filter(c => c.id !== id);

            saveClients(clientes);
            renderClients(clientes);
        }
    });
};

/* ===================================== */
/* STATS (FIX GRAFICA) */
/* ===================================== */

function initStats() {

    const metrics = calculateMetrics(clientes);

    document.getElementById("totalClientes").textContent = metrics.total;
    document.getElementById("clientesActivos").textContent = metrics.activos;
    document.getElementById("clientesInactivos").textContent = metrics.inactivos;

    getLocation();
    renderChart(metrics);
}

function renderChart(metrics) {

    const canvas = document.getElementById("clientesChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = 700;
    canvas.height = 420;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const total = metrics.activos + metrics.inactivos || 1;

    const activos = metrics.activos;
    const inactivos = metrics.inactivos;

    const activosPct = Math.round((activos / total) * 100);
    const inactivosPct = Math.round((inactivos / total) * 100);

    const chartBaseY = 300;
    const chartHeight = 220;

    const activosH = (activos / total) * chartHeight;
    const inactivosH = (inactivos / total) * chartHeight;

    /* ===================== */
    /* BACKGROUND CARD */
    /* ===================== */

    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(50, 40, 600, 340);

    ctx.strokeStyle = "#e5e7eb";
    ctx.strokeRect(50, 40, 600, 340);

    /* ===================== */
    /* TITULO */
    /* ===================== */
    ctx.textAlign = "center";

    /* ===================== */
    /* BARRA ACTIVOS */
    /* ===================== */

    ctx.fillStyle = "#10b981";
    ctx.fillRect(180, chartBaseY - activosH, 120, activosH);

    /* porcentaje dentro de barra */
    ctx.fillStyle = "white";
    ctx.font = "bold 16px Arial";
    ctx.fillText(`${activosPct}%`, 240, chartBaseY - activosH + 25);

    /* etiqueta */
    ctx.fillStyle = "#111827";
    ctx.font = "14px Arial";
    ctx.fillText("Activos", 240, chartBaseY + 25);

    /* valor */
    ctx.fillText(`${activos} clientes`, 240, chartBaseY + 45);

    /* ===================== */
    /* BARRA INACTIVOS */
    /* ===================== */

    ctx.fillStyle = "#ef4444";
    ctx.fillRect(400, chartBaseY - inactivosH, 120, inactivosH);

    /* porcentaje dentro */
    ctx.fillStyle = "white";
    ctx.font = "bold 16px Arial";
    ctx.fillText(`${inactivosPct}%`, 460, chartBaseY - inactivosH + 25);

    /* etiqueta */
    ctx.fillStyle = "#111827";
    ctx.font = "14px Arial";
    ctx.fillText("Inactivos", 460, chartBaseY + 25);

    /* valor */
    ctx.fillText(`${inactivos} clientes`, 460, chartBaseY + 45);
}

/* ===================================== */
/* CONFIG (FIX TEMA) */
/* ===================================== */

function initConfig() {

    const btnTema = document.getElementById("btnTema");

    if (btnTema) {

        btnTema.onclick = () => {
            toggleTheme();
        };
    }

    const btnEliminarStorage = document.getElementById("btnEliminarStorage");

    if (btnEliminarStorage) {

        btnEliminarStorage.onclick = () => {

            Swal.fire({
                title: "¿Borrar datos?",
                text: "Esta acción eliminará todos los clientes",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, borrar",
                cancelButtonText: "Cancelar"
            }).then(result => {

                if (result.isConfirmed) {

                    clearClients();
                    clientes = [];

                    Swal.fire({
                        icon: "success",
                        title: "Datos eliminados"
                    });
                }
            });
        };
    }
}

/* ===================================== */
/* HELPERS */
/* ===================================== */

function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("estado").value = "Activo";
}

/* ===================================== */
/* CLOCK */
/* ===================================== */

function startClock() {

    const reloj = document.getElementById("clock");

    setInterval(() => {
        if (reloj) reloj.textContent = new Date().toLocaleTimeString();
    }, 1000);
}