# 🎬 FilmSearch

Aplicación web interactiva tipo SPA (Single Page Application) para la exploración, búsqueda y consulta de catálogos cinematográficos en tiempo real, desarrollada con **Angular** y **TypeScript**.

🔗 **Demo en producción:** [FilmSearch en Vercel](https://film-search-git-master-manuelblancat00-1823s-projects.vercel.app/)

---

## 📌 Descripción

**FilmSearch** permite a los usuarios descubrir películas destacadas, buscar títulos específicos y acceder a información detallada de cada producción (sinopsis, fecha de estreno, géneros y póster oficial). 

El proyecto fue diseñado aplicando principios de **Domain-Driven Design (DDD)** para mantener una separación clara entre la lógica de negocio del dominio cinematográfico y los componentes/servicios transversales de la aplicación, garantizando escalabilidad, tipado estricto y alta cobertura de pruebas unitarias.

---

## 🚀 Características Técnicas

* **Arquitectura Modular por Dominios (DDD):** 
  * `domains/movies`: Agrupa las páginas (`movie-list`, `movie-details`), componentes visuales (`movie-item`, `movie-slider`) y modelos propios de la entidad película.
  * `shared`: Contiene componentes estructurales reutilizables (`header`, `layout`, `search`) y la capa de servicios comunes.
* **Consumo REST y Servicios Desacoplados:**
  * `MovieApi`: Abstracción HTTP centralizada para la comunicación con la API externa.
  * `SearchService`: Canal reactivo para la sincronización fluida entre la barra de búsqueda y las vistas de resultados.
  * `GenreService`: Consulta y categorización por géneros cinematográficos.
  * `HeaderService`: Control dinámico del estado de navegación en la cabecera.
* **Custom Pipes:** Implementación de `MoviesPosterPipe` para normalizar las URLs de imágenes, gestionar dimensiones y proporcionar un fallback visual ante recursos no disponibles.
* **Tipado Estricto con TypeScript:** Interfaces completas (`Movie`, `Genre`) para el tratamiento seguro de las respuestas de la API.
* **Testing Unitario:** Suite de pruebas unitarias (`*.spec.ts`) sobre componentes, páginas, pipes y servicios HTTP.
* **Calidad de Código:** Integración con ESLint y Prettier para asegurar consistencia de estilo y buenas prácticas.

---

## 🛠️ Stack Tecnológico

* **Framework:** Angular
* **Lenguaje:** TypeScript
* **Estilos:** CSS3 modular
* **Linter & Formateo:** ESLint, Prettier
* **Despliegue:** Vercel

---

## 📂 Estructura del Proyecto

```text
src/app/
├── domains/
│   └── movies/
│       ├── components/
│       │   ├── movie-item/         # Tarjeta individual de película
│       │   └── movie-slider/       # Carrusel / slider de títulos
│       ├── models/                 # Modelos de datos (Movie.ts, Genre.ts)
│       ├── pages/
│       │   ├── movie-details/      # Vista en profundidad de una película
│       │   └── movie-list/         # Vista principal y listado
│       └── Pipes/
│           └── movies-poster-pipe  # Pipe para formateo y fallback de pósteres
├── shared/
│   ├── components/
│   │   ├── header/                 # Barra de navegación principal
│   │   ├── layout/                 # Envoltorio estructural de la SPA
│   │   └── search/                 # Componente de búsqueda
│   └── services/                   # Servicios HTTP y reactivos
├── app.config.ts                   # Configuración global de la aplicación
└── app.routes.ts                   # Definición de rutas y navegación