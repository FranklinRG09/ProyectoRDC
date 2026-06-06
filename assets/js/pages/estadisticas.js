export function estadisticasPage(){

return `

<!-- ===================================== -->
<!-- ESTADÍSTICAS -->
<!-- ===================================== -->

<div class="card custom-card mb-4">

    <!-- HEADER -->
    <div class="card-header-custom">

        <div>

            <h3 class="section-title">
                Resumen General de Clientes
            </h3>

            <p class="section-subtitle">
                Información estadística del sistema
            </p>

        </div>

        <div class="section-icon">

            <i class="bi bi-bar-chart-fill"></i>

        </div>

    </div>

    <!-- BODY -->
    <div class="card-body-custom">

        <!-- STATS -->
        <div class="row g-4">

            <!-- TOTAL -->
            <div class="col-lg-4">

                <div class="stats-card stats-primary">

                    <div>

                        <h5>
                            Total Clientes
                        </h5>

                        <h2 id="totalClientes">
                            0
                        </h2>

                    </div>

                    <i class="bi bi-people-fill"></i>

                </div>

            </div>

            <!-- ACTIVOS -->
            <div class="col-lg-4">

                <div class="stats-card stats-success">

                    <div>

                        <h5>
                            Clientes Activos
                        </h5>

                        <h2 id="clientesActivos">
                            0
                        </h2>

                    </div>

                    <i class="bi bi-person-check-fill"></i>

                </div>

            </div>

            <!-- INACTIVOS -->
            <div class="col-lg-4">

                <div class="stats-card stats-danger">

                    <div>

                        <h5>
                            Clientes Inactivos
                        </h5>

                        <h2 id="clientesInactivos">
                            0
                        </h2>

                    </div>

                    <i class="bi bi-person-x-fill"></i>

                </div>

            </div>

        </div>

    </div>

</div>

<!-- ===================================== -->
<!-- GRÁFICA -->
<!-- ===================================== -->

<div class="card custom-card mb-4">

    <!-- HEADER -->
    <div class="card-header-custom">

        <div>

            <h3 class="section-title">
                Distribución de Clientes
            </h3>

            <p class="section-subtitle">
                Comparación entre clientes activos e inactivos
            </p>

        </div>

        <div class="section-icon">

            <i class="bi bi-pie-chart-fill"></i>

        </div>

    </div>

    <!-- BODY -->
    <div class="card-body-custom">

        <div class="chart-container">

            <canvas id="clientesChart"></canvas>

        </div>

    </div>

</div>

<!-- ===================================== -->
<!-- GEOLOCALIZACIÓN -->
<!-- ===================================== -->

<div class="card custom-card">

    <!-- HEADER -->
    <div class="card-header-custom">

        <div>

            <h3 class="section-title">
                Ubicación Actual
            </h3>

            <p class="section-subtitle">
                Datos obtenidos mediante geolocalización
            </p>

        </div>

        <div class="section-icon">

            <i class="bi bi-geo-alt-fill"></i>

        </div>

    </div>

    <!-- BODY -->
    <div class="card-body-custom">

        <div class="location-box">

            <div class="location-icon">

                <i class="bi bi-globe-americas"></i>

            </div>

            <div>

                <h5 class="mb-2">
                    Coordenadas
                </h5>

                <p id="ubicacion" class="location-text">

                    Obteniendo ubicación...

                </p>

            </div>

        </div>

    </div>

</div>
`;
}