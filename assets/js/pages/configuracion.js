export function configuracionPage(){

return `

<!-- ===================================== -->
<!-- CONFIGURACIÓN -->
<!-- ===================================== -->

<div class="card custom-card mb-4">

    <!-- HEADER -->
    <div class="card-header-custom">

        <div>

            <h3 class="section-title">
                Configuración del Sistema
            </h3>

            <p class="section-subtitle">
                Personalice el comportamiento de la aplicación
            </p>

        </div>

        <div class="section-icon">

            <i class="bi bi-gear-fill"></i>

        </div>

    </div>

    <!-- BODY -->
    <div class="card-body-custom">

        <!-- THEME -->
        <div class="config-box mb-4">

            <div class="config-info">

                <div class="config-icon theme-icon">

                    <i class="bi bi-moon-stars-fill"></i>

                </div>

                <div>

                    <h5 class="config-title">
                        Cambiar Tema
                    </h5>

                    <p class="config-text">

                        Active o desactive el modo oscuro
                        para mejorar la visualización del sistema.

                    </p>

                </div>

            </div>

            <div class="config-actions">

                <button
                    id="btnTema"
                    class="btn config-btn-primary"
                >

                    <i class="bi bi-palette-fill me-2"></i>

                    Cambiar Tema

                </button>

            </div>

        </div>

        <!-- DELETE STORAGE -->
        <div class="config-box">

            <div class="config-info">

                <div class="config-icon delete-icon">

                    <i class="bi bi-trash3-fill"></i>

                </div>

                <div>

                    <h5 class="config-title">
                        Borrar Datos
                    </h5>

                    <p class="config-text">

                        Elimina permanentemente todos los
                        clientes almacenados en el sistema.

                    </p>

                </div>

            </div>

            <div class="config-actions">

                <button
                    id="btnEliminarStorage"
                    class="btn config-btn-danger"
                >

                    <i class="bi bi-exclamation-triangle-fill me-2"></i>

                    Borrar Datos

                </button>

            </div>

        </div>

    </div>

</div>
`;
}