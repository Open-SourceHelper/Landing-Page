# Kinemo — Landing Page

Landing informativa independiente de la aplicación Kinemo, iniciativa de NeuroSync.

## Estructura
- `index.html`: contenido, navegación y footer.
- `terms.html`: términos y condiciones.
- `styles.css`: estilos adaptables a escritorio y móvil.
- `script.js`: menú móvil.
- `translations.js`: textos en español e inglés.
- `i18n.js`: cambio de idioma (ES / EN).

## Enlaces
- Landing page: https://open-sourcehelper.github.io/Landing-Page/
- Aplicación web: https://kinemo-neurosync.web.app

Los call-to-action de cada segmento llevan a su vista en la aplicación:

| Segmento | Vista |
|---|---|
| Padres y madres | `/child-profile` |
| Familiares y cuidadores | `/routine-activity/routines` |
| Psicólogos | `/clinical-guidance` |
| Planes | `/subscription-payment/plans` |

## Desarrollo
Abre `index.html` en el navegador. No requiere instalar paquetes ni iniciar un backend.

## Publicación en GitHub Pages
En el repositorio, entra a **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`, y guarda.

## Internacionalización (i18n)
La landing está disponible en español e inglés. El botón **ES / EN** de la cabecera cambia el idioma; la elección se guarda en el navegador y, en la primera visita, se usa inglés si el navegador está en inglés.

- El contenido en español está escrito directamente en el HTML.
- Cada texto traducible tiene un atributo `data-i18n="clave"` (o `data-i18n-aria` para `aria-label`).
- Para agregar o cambiar un texto, edita la misma clave en `es` y `en` dentro de `translations.js`.

## GitFlow
- `main`: versión publicada en GitHub Pages.
- `develop`: integración de cambios.
- `feature/<nombre>`: nuevas funcionalidades, se integran a `develop`.

## Diseño de referencia
https://www.figma.com/design/vt1v9OvUphIXLI6A9MGjKd/

Proyecto académico — UPC, 2026.
