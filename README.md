# Colorfly 🎨

### Tu generador de paletas al instante.

Aplicación web estática e interactiva que genera paletas de colores aleatorias con visualización en tiempo real, soporte para múltiples formatos de color y microfeedbacks visuales.

---

## Instrucciones de uso

1. Abrí `index.html` en tu navegador.
2. Seleccioná la **cantidad de colores** que querés generar (6, 8 o 9).
3. Elegí el **formato secundario** en el que querés ver los códigos de color (HEX, RGBA o HSL).
4. Hacé clic en el botón **GENERAR.** para crear una nueva paleta aleatoria.
5. Hacé clic sobre cualquier tarjeta de color para **copiar su código HEX** al portapapeles.

---

## Funcionalidades

- Generación aleatoria de paletas con colores vibrantes y equilibrados.
- Visualización del código HEX principal y un formato secundario a elección (HEX / RGBA / HSL).
- Clic en una tarjeta copia el código HEX al portapapeles automáticamente.
- 3 microfeedbacks visuales:
  - **Badge "¡Copiado!"** sobre la tarjeta al copiar un color.
  - **Barra de feedback** debajo del botón que confirma la paleta generada.
  - **Toast** en la parte inferior que informa la acción realizada.

---

## Estructura del proyecto

```
Proyecto-paleta-de-colores/
├── index.html     # Estructura semántica de la aplicación
├── style.css      # Estilos, variables CSS y animaciones
├── app.js         # Lógica de generación, DOM y eventos
└── README.md      # Documentación del proyecto
```

---

## Decisiones técnicas

**HTML semántico**
Se utilizaron etiquetas como `<header>`, `<main>`, `<section>`, `<article>` y `<footer>` para estructurar el contenido con sentido semántico real, mejorando la accesibilidad y legibilidad del código.

**JavaScript puro**
No se utilizaron librerías ni frameworks. Toda la lógica fue implementada con JavaScript vanilla: manipulación del DOM, generación de colores, eventos y feedback visual.

**Generación de colores mediante HSL**
Los colores se generan internamente en formato HSL con rangos controlados (saturación entre 45–90%, luminosidad entre 35–70%) para garantizar colores siempre vibrantes y visualmente equilibrados. Luego se convierten a HEX y RGBA según el formato seleccionado.

**Variables CSS**
Se definieron variables globales en `:root` para mantener consistencia visual (colores, tipografía, transiciones, border-radius) y facilitar cambios de diseño desde un único lugar.

**Separación de responsabilidades**
El proyecto está dividido en tres archivos independientes (HTML, CSS y JS) para respetar el principio de separación de responsabilidades y facilitar el mantenimiento del código.

**Sin dependencias externas de lógica**
La única dependencia externa es Google Fonts para la tipografía (`Space Mono` y `Dancing Script`). No se realiza ningún `fetch` ni llamada de red para la lógica de la aplicación.

---

## Pasos para ejecutar localmente

### Opción A — Abrir directamente en el navegador

No requiere instalación ni servidor.

1. Descargá o cloná el repositorio:

```bash
git clone https://github.com/TobiasMedina333/Proyecto-paleta-de-colores-Henry---TobiasMedina.git
```

2. Abrí la carpeta del proyecto en VS Code.
3. Hacé doble clic en `index.html` o usá la extensión **Live Server**:
   - Instalá la extensión `Live Server` desde el Marketplace de VS Code.
   - Click derecho sobre `index.html` → **Open with Live Server**.

### Opción B — Servidor local con Node.js

```bash
npx serve .
```

Luego abrí `http://localhost:3000` en tu navegador.

---

## Despliegue en producción

### GitHub Pages (recomendado)

1. Subí el proyecto a un repositorio público en GitHub:

```bash
git add .
git commit -m "deploy: versión final"
git push origin main
```

2. Ingresá al repositorio en GitHub.
3. Ir a **Settings → Pages**.
4. En **Source**, seleccioná la rama `main` y la carpeta `/ (root)`.
5. Hacé clic en **Save**.
6. En unos segundos GitHub te provee la URL pública, por ejemplo:

```
https://TobiasMedina333.github.io/Proyecto-paleta-de-colores-Henry---TobiasMedina/
```

### Netlify (alternativa)

1. Ingresá a [https://netlify.com](https://netlify.com) y creá una cuenta gratuita.
2. Desde el dashboard, arrastrá la carpeta del proyecto al área de deploy.
3. Netlify genera automáticamente una URL pública en segundos.

---

## Tecnologías utilizadas

| Tecnología       | Uso                                         |
| ---------------- | ------------------------------------------- |
| HTML5 semántico  | Estructura de la aplicación                 |
| CSS3 + Variables | Estilos, animaciones y responsividad        |
| JavaScript ES6+  | Lógica, DOM y eventos                       |
| Google Fonts     | Tipografías `Space Mono` y `Dancing Script` |
| Chrome DevTools  | Debugging y ajustes de estilos              |

---

## Autor

**Tobias Medina**
Proyecto final entregado en Henry Bootcamp.
[GitHub](https://github.com/TobiasMedina333)
