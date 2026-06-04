export function clientesPage(){

return `

<!-- ===================================== -->
<!-- REGISTRAR CLIENTE -->
<!-- ===================================== -->

<div class="card custom-card mb-4">

    <!-- HEADER -->
    <div class="card-header-custom">

        <div>

            <h3 class="section-title">
                Registrar Nuevo Cliente
            </h3>

            <p class="section-subtitle">
                Complete la información del cliente
            </p>

        </div>

        <div class="section-icon">

            <i class="bi bi-person-plus-fill"></i>

        </div>

    </div>

    <!-- BODY -->
    <div class="card-body-custom">

        <!-- FORM -->
        <div class="row g-4">

            <!-- NOMBRE -->
            <div class="col-lg-3">

                <label class="custom-label">

                    Nombre Completo

                </label>

                <input
                    id="nombre"
                    type="text"
                    class="form-control custom-input"
                    placeholder="Ingrese nombre"
                >

            </div>

            <!-- CORREO -->
            <div class="col-lg-3">

                <label class="custom-label">

                    Correo Electrónico

                </label>

                <input
                    id="correo"
                    type="email"
                    class="form-control custom-input"
                    placeholder="Ingrese correo"
                >

            </div>

            <!-- CONTACTO -->
            <div class="col-lg-3">

                <label class="custom-label">

                    Número de Contacto

                </label>

                <input
                    id="contacto"
                    type="text"
                    class="form-control custom-input"
                    placeholder="Ingrese contacto"
                >

            </div>

            <!-- ESTADO -->
            <div class="col-lg-3">

                <label class="custom-label">

                    Estado

                </label>

                <select
                    id="estado"
                    class="form-select custom-input"
                >

                    <option value="Activo">
                        Activo
                    </option>

                    <option value="Inactivo">
                        Inactivo
                    </option>

                </select>

            </div>

        </div>

        <!-- BUTTON -->
        <div class="mt-4">

            <button
                id="btnGuardar"
                class="btn custom-btn-primary"
            >

                <i class="bi bi-floppy-fill me-2"></i>

                Guardar Cliente

            </button>

            <button id="btnCancelar" class="custom-btn-secondary">
                <i class="bi bi-x-circle"></i>
                Cancelar
            </button>

        </div>

    </div>

    <!-- IMPORTACIÓN MASIVA -->

    <div class="custom-card mt-4">

        <div class="card-header-custom">

            <div>

                <h3 class="section-title">

                    Importación Masiva

                </h3>

                <p class="section-subtitle">

                    Importa múltiples clientes desde JSON

                </p>

            </div>

            <div class="section-icon">

                <i class="bi bi-upload"></i>

            </div>

        </div>

        <div class="card-body-custom">

            <div class="row g-3 align-items-end">

                <div class="col-md-8">

                    <label class="form-label">

                        Archivo JSON

                    </label>

                    <input
                        type="file"
                        id="jsonFile"
                        accept=".json"
                        class="form-control custom-input"
                    >

                </div>

                <div class="col-md-4">

                    <button
                        id="btnImportar"
                        class="btn custom-btn-primary w-100"
                    >

                        <i class="bi bi-cloud-upload-fill"></i>

                        Importar Clientes

                    </button>

                </div>

            </div>

            <!-- PROGRESS -->

            <div
                id="importProgressContainer"
                class="mt-4 d-none"
            >

                <div class="d-flex justify-content-between mb-2">

                    <span>
                        Procesando clientes...
                    </span>

                    <span id="progressText">
                        0%
                    </span>

                </div>

                <div class="progress">

                    <div
                        id="importProgress"
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style="width:0%"
                    ></div>

                </div>

            </div>

        </div>

    </div>

<!-- ===================================== -->
<!-- CLIENTES REGISTRADOS -->
<!-- ===================================== -->

<div class="card custom-card">

    <!-- HEADER -->
    <div class="card-header-custom">

        <div>

            <h3 class="section-title">
                Clientes Registrados
            </h3>

            <p class="section-subtitle">
                Administración y búsqueda de clientes
            </p>

        </div>

        <div class="section-icon">

            <i class="bi bi-people-fill"></i>

        </div>

    </div>

    <!-- BODY -->
    <div class="card-body-custom">

        <!-- SEARCH -->
        <div class="row mb-4">

            <div class="col-lg-15">

                <input
                    id="busqueda"
                    type="text"
                    class="form-control custom-input"
                    placeholder="Buscar por nombre, correo o contacto"
                >

            </div>

            <div class="col-lg-2">

            </div>

        </div>

        <!-- TABLE -->
        <div class="table-responsive">

            <table class="table custom-table align-middle">

                <thead>

                    <tr>

                        <th>Nombre</th>

                        <th>Correo</th>

                        <th>Contacto</th>

                        <th>Estado</th>

                        <th class="text-center">
                            Acciones
                        </th>

                    </tr>

                </thead>

                <tbody id="tablaClientes">

                </tbody>

            </table>

        </div>

    </div>

</div>
`;
}