export function ayudaPage(){

return `

<!-- ===================================== -->
<!-- AYUDA -->
<!-- ===================================== -->

<div class="card custom-card">

    <!-- HEADER -->
    <div class="card-header-custom">

        <div>

            <h3 class="section-title">
                Centro de Ayuda
            </h3>

            <p class="section-subtitle">
                Información y guía del sistema
            </p>

        </div>

        <div class="section-icon">

            <i class="bi bi-question-circle-fill"></i>

        </div>

    </div>

    <!-- BODY -->
    <div class="card-body-custom">

        <!-- CRUD -->
        <div class="help-box mb-4">

            <div class="help-icon">

                <i class="bi bi-people-fill"></i>

            </div>

            <div>

                <h5 class="help-title">
                    Gestión de Clientes
                </h5>

                <p class="help-text">

                    Desde el módulo de clientes puede
                    registrar, editar, eliminar y buscar
                    clientes almacenados localmente.

                </p>

            </div>

        </div>

        <!-- DASHBOARD -->
        <div class="help-box mb-4">

            <div class="help-icon stats-help">

                <i class="bi bi-bar-chart-fill"></i>

            </div>

            <div>

                <h5 class="help-title">
                    Estadísticas
                </h5>

                <p class="help-text">

                    El sistema genera métricas automáticas
                    y gráficos dinámicos basados en los
                    clientes registrados.

                </p>

            </div>

        </div>

        <!-- STORAGE -->
        <div class="help-box mb-4">

            <div class="help-icon storage-help">

                <i class="bi bi-database-fill"></i>

            </div>

            <div>

                <h5 class="help-title">
                    Almacenamiento Local
                </h5>

                <p class="help-text">

                    Los datos se guardan usando LocalStorage
                    y SessionStorage para mantener la
                    información incluso al cerrar el navegador.

                </p>

            </div>

        </div>

        <!-- GEO -->
        <div class="help-box mb-4">

            <div class="help-icon geo-help">

                <i class="bi bi-geo-alt-fill"></i>

            </div>

            <div>

                <h5 class="help-title">
                    Geolocalización
                </h5>

                <p class="help-text">

                    El sistema puede obtener la ubicación
                    actual del usuario utilizando la API
                    de Geolocalización del navegador.

                </p>

            </div>

        </div>

        <!-- THEME -->
        <div class="help-box">

            <div class="help-icon theme-help">

                <i class="bi bi-moon-stars-fill"></i>

            </div>

            <div>

                <h5 class="help-title">
                    Modo Oscuro
                </h5>

                <p class="help-text">

                    Puede cambiar entre modo claro y oscuro
                    desde la sección de configuración para
                    mejorar la experiencia visual.

                </p>

            </div>

        </div>

    </div>

</div>
`;
}