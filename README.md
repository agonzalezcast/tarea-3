# Tarea 3 — Maratón de Series

**Curso:** SOFT-12 — Programación Web Avanzada  
**Estudiante:** Alexander González Castillo  
**Sección:** SCV2  
**Periodo:** III cuatrimestre 2026  
**Docente:** Álvaro Cordero Peña

## Descripción

Repositorio correspondiente a la Parte A de la Tarea 3 del curso Programación Web Avanzada.

Contiene los laboratorios guiados del proyecto **Maratón de Series**, desarrollados con React, Express, MongoDB, ASP.NET Core y Entity Framework Core.

El proyecto permite gestionar un listado de series, agregar nuevos registros, filtrar, cambiar estados, eliminar series y consultar sus detalles. Incluye dos servidores que utilizan diferentes tecnologías de persistencia.

## Tecnologías

- **Frontend:** React, Vite, React Router y Bootstrap.
- **Backend 1:** Node.js, Express y MongoDB.
- **Backend 2:** ASP.NET Core, Entity Framework Core y SQL Server.
- **Lenguajes:** JavaScript, C# y SQL.

## Estructura del repositorio

```text
tarea-3/
├── docs/
│   ├── capturas/
│   └── laboratorios.md
├── proyectos-base/
├── maraton-series/
│   ├── cliente/
│   ├── servidor/
│   └── servidor-net/
├── .gitignore
└── README.md
```

## Requisitos

- Node.js y npm.
- .NET SDK 10.
- SQL Server.
- Acceso a MongoDB Atlas.
- Variables de entorno configuradas para el cliente y el servidor Express.
- Cadena de conexión de SQL Server configurada mediante `user-secrets`.

## Instalación

Desde la carpeta `maraton-series`, instalar las dependencias del cliente y del servidor Express:

```bash
cd cliente
npm install

cd ../servidor
npm install
```

Restaurar las dependencias del servidor .NET:

```bash
cd ../servidor-net
dotnet restore
```

Configurar los archivos `.env` del cliente y Express utilizando los archivos `.env.example` correspondientes. Configurar también las conexiones de MongoDB Atlas y SQL Server.

Para el servidor .NET, guardar la cadena de conexión mediante `user-secrets` y aplicar las migraciones:

```bash
dotnet ef database update
```

## Ejecución

Los siguientes comandos se ejecutan desde la carpeta `maraton-series`, utilizando terminales independientes.

### 1. Servidor Express + MongoDB

```bash
cd servidor
npm run dev
```

API: `http://localhost:3000/api`

### 2. Servidor ASP.NET Core + SQL Server

```bash
cd servidor-net
dotnet run
```

API: `http://localhost:5080/api`

### 3. Cliente React

```bash
cd cliente
npm run dev
```

Aplicación: `http://localhost:5173`

## Seleccionar el API

El cliente React puede consumir cualquiera de los dos servidores mediante la variable `VITE_API_URL` del archivo `cliente/.env`.

**Express + MongoDB:**

```env
VITE_API_URL=http://localhost:3000/api
```

**ASP.NET Core + SQL Server:**

```env
VITE_API_URL=http://localhost:5080/api
```

Después de modificar el archivo `.env`, reiniciar el servidor de desarrollo de Vite.

El servidor .NET de esta etapa implementa las rutas de lectura GET. Para utilizar las funcionalidades de creación, actualización y eliminación desde React, se debe utilizar Express.

## Documentación

El archivo [docs/laboratorios.md](docs/laboratorios.md) contiene la documentación de los laboratorios realizados, incluyendo evidencias, experimentos, recorridos de ejecución y respuestas a las preguntas solicitadas.

Las capturas se encuentran en `docs/capturas/`.