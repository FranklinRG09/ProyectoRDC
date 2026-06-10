# Sistema de Gestión de Clientes (proyectoRDC)

## Integrantes
- Brenda Michelle Iglesias Alfaro - IA22001
- Ruben Iglesias Alfaro - IA23005
- Joyser Leonel Barrera Romero - BR23021
- Franklin Imanol Ramírez Gómez - RG22059

## Descripción

**proyectoRDC** es una aplicación web desarrollada con JavaScript modular, HTML5, CSS3 y Bootstrap que permite administrar clientes de forma eficiente mediante operaciones CRUD, visualización de estadísticas, configuración personalizada y almacenamiento local del navegador.

El sistema está diseñado para ofrecer una experiencia moderna e intuitiva, incorporando funcionalidades como búsqueda en tiempo real, importación masiva de datos mediante archivos JSON, gráficos estadísticos, geolocalización, modo oscuro y validaciones de formularios.

---

## Características Principales

### Gestión de Clientes

* Registro de nuevos clientes.
* Edición de clientes existentes.
* Eliminación de registros.
* Validación de datos antes de guardar.
* Búsqueda dinámica en tiempo real.
* Persistencia de información mediante LocalStorage.

### Estadísticas

* Total de clientes registrados.
* Cantidad de clientes activos.
* Cantidad de clientes inactivos.
* Gráfico comparativo generado con Canvas API.
* Obtención de ubicación geográfica del usuario.

### Importación Masiva

* Carga de clientes desde archivos JSON.
* Procesamiento en segundo plano utilizando Web Workers.
* Barra de progreso durante la importación.
* Validación de formato JSON.

### Configuración

* Cambio entre tema claro y oscuro.
* Eliminación completa de datos almacenados.
* Preferencias persistentes mediante LocalStorage.

### Interfaz de Usuario

* Sidebar colapsable.
* Navegación dinámica entre módulos.
* Reloj en tiempo real.
* Diseño responsivo.
* Alertas visuales mediante SweetAlert2.

---

## Tecnologías Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript ES6 Modules

### Frameworks y Librerías

* Bootstrap 5.3
* Bootstrap Icons
* SweetAlert2

### APIs y Tecnologías Web

* LocalStorage API
* Geolocation API
* FileReader API
* Web Workers
* Canvas API

---

## Flujo de Funcionamiento

1. El usuario accede al módulo de clientes.
2. Registra o administra la información de los clientes.
3. Los datos se almacenan automáticamente en LocalStorage.
4. El módulo de estadísticas calcula métricas sobre los registros almacenados.
5. La configuración permite personalizar la apariencia y gestionar los datos.
6. Los archivos JSON pueden importarse para agregar múltiples clientes simultáneamente.

---

## Validaciones Implementadas

El sistema valida:

* Nombre obligatorio.
* Correo electrónico válido.
* Información de contacto obligatoria.
* Formato correcto de archivos JSON.
* Prevención de múltiples ediciones simultáneas.

---

## Funcionalidades Destacadas

### Persistencia Local

Los datos permanecen almacenados en el navegador incluso después de cerrar la aplicación.

### Importación Optimizada

La carga de grandes cantidades de clientes se realiza mediante Web Workers para evitar bloqueos de la interfaz.

### Experiencia de Usuario

Se utilizan ventanas modales y alertas amigables para informar errores, confirmaciones y acciones exitosas.

### Tema Dinámico

Los usuarios pueden alternar entre modo claro y oscuro sin perder sus preferencias.

---

## Posibles Mejoras Futuras

* Exportación de clientes a Excel y PDF.
* Integración con bases de datos.
* Sistema de autenticación de usuarios.
* Panel administrativo con roles.
* Gráficos avanzados con Chart.js.
* Reportes descargables.

---

## Licencia

Este proyecto puede utilizarse con fines académicos, educativos y de aprendizaje.
