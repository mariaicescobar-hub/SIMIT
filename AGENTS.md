# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

Tailwind emits utility classes in `@layer utilities`, and CSS outside any cascade layer overrides every layer regardless of specificity. Put global element styles, such as resets and defaults for `body`, headings, `button`, or `input`, inside `@layer base { ... }` so utility classes on those elements still apply. Tailwind's Preflight already applies `box-sizing: border-box`, removes default margins, and sets `font: inherit` on form controls, so do not repeat those rules.

## Reglas del proyecto

Antes de crear o cambiar cualquier pantalla, lee y aplica `guidelines/Guidelines.md`. Si una instrucción de un prompt contradice esas reglas, ganan las reglas.

### Qué manda en cada caso (Semana 2)

1. **Contenido, flujo, pantallas, estados, textos y datos:** `guidelines/guidelines.md`. No cambian.
2. **Apariencia (color, tipografía, espaciado, radios y componentes):** el UI Kit de esta sección. Reemplaza la paleta en grises de la baja fidelidad (#1a1a1a, #595959, #d0d0d0, #f2f2f2, #e6e6e6, #bdbdbd) y cualquier otro valor visual de Guidelines.md.
3. Si un prompt pide un valor visual que no está en el UI Kit, no lo inventes: usa el token más cercano y avisa en tu respuesta cuál usaste.

Fuente del UI Kit: archivo de Figma «SIMIT · Proyecto», página `_UI Kit` (frames «Fundamentos» y «Componentes»).

## UI Kit · Tokens

### Color

Usa siempre el token, nunca el hexadecimal suelto en JSX.

| Token | Valor | Uso |
|---|---|---|
| `Color/Primary` | `#1F5FA8` | Acción principal: botón principal, día y horario elegidos, foco de campo |
| `Color/Primary-Hover` | `#184C87` | Hover del botón principal |
| `Color/Primary-Subtle` | `#E6EEF8` | Fondos suaves asociados a la acción principal |
| `Color/Secondary` | `#3D4A5C` | Borde del botón secundario, chips y horarios; íconos |
| `Color/Surface` | `#FFFFFF` | Fondo de pantallas y componentes |
| `Color/Surface-Subtle` | `#F2F4F7` | Tarjetas, hover de secundarios, franja «Tu cita actual» |
| `Color/Border` | `#D0D5DD` | Bordes de tarjetas, campos y divisores |
| `Color/Text-Primary` | `#1A1A1A` | Texto principal y anillo de foco |
| `Color/Text-Secondary` | `#595959` | Texto de apoyo |
| `Color/Text-On-Primary` | `#FFFFFF` | Texto sobre `Color/Primary` |
| `Color/Disabled` | `#BDBDBD` | Elementos deshabilitados |
| `Color/Error` | `#B3261E` | Errores: horario que se llenó, pago fallido |
| `Color/Error-Subtle` | `#FDECEA` | Fondo de avisos de error |
| `Color/Success` | `#1E7D32` | Éxito: cambio confirmado |
| `Color/Success-Subtle` | `#E8F5E9` | Fondo de avisos de éxito |
| `Color/Warning` | `#B25E00` | Advertencia: último día para el descuento |
| `Color/Warning-Subtle` | `#FFF4E5` | Fondo de avisos de advertencia |

### Tipografía · Inter

| Token | Peso | Tamaño / interlineado | Uso |
|---|---|---|---|
| `Text/Heading` | Semi Bold (600) | 24 / 32 px | Títulos de pantalla: «Confirma el cambio», «Citas» |
| `Text/Body` | Regular (400) | 16 / 24 px | Texto de lectura |
| `Text/Body-Strong` | Semi Bold (600) | 16 / 24 px | Etiquetas de botones, valores y datos clave |
| `Text/Caption` | Regular (400) | 13 / 18 px | Apoyo: cupos, ayudas de campos, motivos de deshabilitado |

Solo existen estos cuatro estilos. No uses Bold (700), ni 15 px, ni 17 px.

### Espaciado · escala de 8 pt

| Token | Valor | Uso |
|---|---|---|
| `Spacing/4` | 4 px | Entre ícono y texto |
| `Spacing/8` | 8 px | Entre un título y su texto |
| `Spacing/12` | 12 px | Entre botones |
| `Spacing/16` | 16 px | Márgenes laterales de la pantalla |
| `Spacing/24` | 24 px | Entre bloques |
| `Spacing/32` | 32 px | Entre secciones |

### Radio de borde

| Token | Valor | Uso |
|---|---|---|
| `Radius/Small` | 4 px | Etiquetas y sellos («Punto autorizado») |
| `Radius/Medium` | 8 px | Botones, chips, campos, horarios y avisos |
| `Radius/Large` | 16 px | Tarjetas y hoja inferior |

### Cómo declararlos en `src/index.css`

Pon este bloque después de `@import 'tailwindcss';` y usa las clases que genera (`bg-primary`, `text-text-secondary`, `rounded-md`, `p-4`, etc.):

```css
@theme {
  --font-sans: 'Inter', system-ui, sans-serif;

  --color-primary: #1f5fa8;
  --color-primary-hover: #184c87;
  --color-primary-subtle: #e6eef8;
  --color-secondary: #3d4a5c;
  --color-surface: #ffffff;
  --color-surface-subtle: #f2f4f7;
  --color-border: #d0d5dd;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #595959;
  --color-text-on-primary: #ffffff;
  --color-disabled: #bdbdbd;
  --color-error: #b3261e;
  --color-error-subtle: #fdecea;
  --color-success: #1e7d32;
  --color-success-subtle: #e8f5e9;
  --color-warning: #b25e00;
  --color-warning-subtle: #fff4e5;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

Tailwind ya usa una escala de 4 px (`p-1` = 4, `p-2` = 8, `p-3` = 12, `p-4` = 16, `p-6` = 24, `p-8` = 32). Usa solo esos seis pasos.

## UI Kit · Componentes

En el UI Kit no hay Variants: cada estado es un componente aparte (`Familia/Tipo/Estado`). En código, cada componente es uno solo con una prop `state`, y cada estado debe verse exactamente como su componente.

**Foco, para todos los componentes:** anillo de 3 px de `Color/Text-Primary` por fuera del borde (`outline: 3px solid; outline-offset: 0`), solo con `:focus-visible`.

### Button/Primary · Botón principal

Acción principal de la pantalla, por ejemplo «Confirmar el cambio». Hay uno solo por pantalla.

- **Medidas:** alto 48 px, ancho completo (343 px con márgenes de 16), padding horizontal 16, `Radius/Medium`, etiqueta en `Text/Body-Strong`.

| Estado | Fondo | Texto | Borde |
|---|---|---|---|
| Default | `Primary` | `Text-On-Primary` | — |
| Hover | `Primary-Hover` | `Text-On-Primary` | — |
| Focus | `Primary` | `Text-On-Primary` | anillo de foco |
| Disabled | `Disabled` | `Text-On-Primary` | — |
| Loading | `Primary` | `Text-On-Primary` | — |

- **Loading:** spinner de 16 px a la izquierda, separado 8 px de la etiqueta. La etiqueta pasa a gerundio y termina en «…» («Confirmando el cambio…»). Mientras carga no acepta otro toque.

### Button/Secondary · Botón secundario

Acción alternativa, por ejemplo «Agregar al calendario» o «Volver a elegir».

- **Medidas:** las mismas del botón principal.

| Estado | Fondo | Texto | Borde |
|---|---|---|---|
| Default | `Surface` | `Text-Primary` | 1 px `Secondary` |
| Hover | `Surface-Subtle` | `Text-Primary` | 1 px `Secondary` |
| Focus | `Surface` | `Text-Primary` | anillo de foco |
| Disabled | `Surface` | `Disabled` | 1 px `Disabled` |
| Loading | `Surface` | `Text-Primary` | 1 px `Secondary` |

- **Loading:** spinner de 16 px en `Text-Primary` y etiqueta en gerundio («Agregando…»).
- **Separación:** 12 px entre botones apilados (`Spacing/12`).

### Chip/Day · Selector de día

Se usa en «Nuevo día, hora o lugar» y en «Días y horas con cupo». Solo muestra días hasta el último día del descuento.

- **Medidas:** 72 × 56 px, `Radius/Medium`. Arriba va el día de la semana en `Text/Caption` y abajo el número en `Text/Body-Strong`, centrados.

| Estado | Fondo | Día / número | Borde |
|---|---|---|---|
| Default | `Surface` | `Text-Secondary` / `Text-Primary` | 1 px `Secondary` |
| Hover | `Surface-Subtle` | `Text-Secondary` / `Text-Primary` | 1 px `Secondary` |
| Focus | `Surface` | `Text-Secondary` / `Text-Primary` | anillo de foco |
| Selected | `Primary` | `Text-On-Primary` | — |
| Disabled | `Surface-Subtle` | `Disabled` | 1 px `Border` |

- **Disabled:** festivo o día sin atención. Se muestra, pero no se puede tocar.

### Slot/Time · Horario con cupos

Horario del curso con sus cupos.

- **Medidas:** 164 × 62 px (dos por fila con 15 px entre ellos), `Radius/Medium`. Arriba la hora en `Text/Body-Strong` y abajo los cupos en `Text/Caption`, centrados y separados 2 px.

| Estado | Fondo | Hora / cupos | Borde |
|---|---|---|---|
| Default | `Surface` | `Text-Primary` / `Text-Secondary` | 1 px `Secondary` |
| Hover | `Surface-Subtle` | `Text-Primary` / `Text-Secondary` | 1 px `Secondary` |
| Focus | `Surface` | `Text-Primary` / `Text-Secondary` | anillo de foco |
| Selected | `Primary` | `Text-On-Primary` | — |
| Disabled | `Surface-Subtle` | `Text-Secondary` | 1 px `Border` |
| Error | `Error-Subtle` | `Text-Primary` / `Error` | 2 px `Error` |

- **Disabled:** sin cupos («Sin cupos») o es tu cita actual («Tu cita actual»).
- **Error:** el cupo se llenó al tocar Continuar. Los cupos dicen «Se acaba de llenar» y va acompañado del `Banner/Feedback/Error`.

### Input/Text · Campo de texto

Campo «Otro barrio» del paso 1. Success y Error responden a la búsqueda del barrio.

- **Partes, de arriba abajo, con 6 px entre ellas:**
  - etiqueta en `Text/Caption` `Text-Primary`;
  - campo de 48 px de alto con padding horizontal 12, `Radius/Medium` y valor en `Text/Body`;
  - ayuda en `Text/Caption`.
- **Placeholder:** en `Text-Secondary`.

| Estado | Fondo del campo | Borde del campo | Valor | Ayuda |
|---|---|---|---|---|
| Default | `Surface` | 1 px `Border` | `Text-Secondary` (placeholder) | `Text-Secondary` |
| Focus | `Surface` | 2 px `Primary` | `Text-Primary` + cursor | `Text-Secondary` |
| Disabled | `Surface-Subtle` | 1 px `Border` | `Disabled` | `Text-Secondary` |
| Error | `Surface` | 2 px `Error` | `Text-Primary` | `Error` |
| Success | `Surface` | 2 px `Success` | `Text-Primary` | `Success` |

- **Textos de ayuda:**
  - Default/Focus: «Te mostramos los puntos autorizados más cercanos.»
  - Disabled: «Usas tu dirección guardada. Elige «Otro barrio» para escribir uno.»
  - Error: «No encontramos ese barrio en Cali. Revisa cómo está escrito.»
  - Success: «[n] puntos autorizados cerca de [barrio].»

### Banner/Feedback · Aviso del sistema

Respuesta del sistema dentro de la misma pantalla, nunca en una pantalla aparte. Siempre dice qué pasó y qué se conserva.

- **Medidas:** ancho 343 px, padding 12, `Radius/Medium`, ícono de 20 px separado 12 px del texto.
- **Texto:** título en `Text/Body-Strong` `Text-Primary` y mensaje en `Text/Caption` `Text-Secondary`, separados 2 px.

| Estado | Fondo | Borde 1 px | Ícono | Ejemplo |
|---|---|---|---|---|
| Error | `Error-Subtle` | `Error` | triángulo con «!» en `Error` | «Ese horario se acaba de llenar» / «…Tu cita actual sigue igual.» |
| Success | `Success-Subtle` | `Success` | círculo con chulo en `Success` | «Cambio confirmado» / «Tu cita quedó para el martes 10 de noviembre, 7:30 a. m., en la Sede Salomia.» |
| Warning | `Warning-Subtle` | `Warning` | reloj en `Warning` | «Hoy es el último día para el descuento» / «Si cancelas tu cita, pagarías $633.111 en vez de $316.556.» |
| Loading | `Surface-Subtle` | `Border` | spinner en `Primary` | «Cargando horarios…» / «Tu cita actual se mantiene mientras buscamos cupos.» |

## Reglas verificables del UI Kit

1. Todo color sale de un token `Color/*`. No hay hexadecimales escritos en JSX ni grises de la baja fidelidad.
2. `Color/Primary` solo aparece en la acción principal, en el día o horario elegido y en el borde de foco de un campo. Nunca se usa como decoración.
3. Hay un solo `Button/Primary` por pantalla. Las demás acciones usan `Button/Secondary` o un enlace.
4. Solo se usan los 4 estilos de texto, todos en Inter. No se usa Bold 700.
5. Todo margen, padding y separación es 4, 8, 12, 16, 24 o 32 px. Los márgenes laterales son siempre de 16 px.
6. Los radios son solo 4, 8 o 16 px, cada uno según su uso.
7. Todo elemento tocable mide al menos 44 px de alto. Los botones y campos miden 48 px.
8. Cada componente implementa todos sus estados del UI Kit, y cada estado usa exactamente los tokens de su tabla.
9. Todo elemento interactivo muestra el anillo de foco de 3 px en `Color/Text-Primary` con `:focus-visible`.
10. Loading desactiva el control, muestra el spinner y cambia la etiqueta a gerundio con «…». El resto de la pantalla se mantiene visible.
11. Error, éxito, advertencia y carga se comunican con `Banner/Feedback` dentro de la misma pantalla, y el aviso dice qué se conserva. Nunca se usa una pantalla aparte ni un `alert()`.
12. El color nunca es la única señal: Error, Success y Warning llevan ícono y texto. Disabled lleva un texto que explica el motivo («Sin cupos», «Festivo», «Tu cita actual»).
13. Todo texto activo cumple contraste AA (4.5:1) con su fondo. Lo cumplen todos los pares de las tablas, menos los textos en `Color/Disabled` (1.9:1), que WCAG exime por ser controles deshabilitados.
    - `Color/Warning` no se usa como color de texto sobre `Warning-Subtle` (4.3:1). Úsalo solo en el ícono y el borde, y escribe el texto en `Text-Primary` o `Text-Secondary`.
    - No combines pares que no estén en las tablas.
14. Ningún texto sale de su contenedor con los datos extremos de `guidelines/Stress-test.md`. El texto largo se divide en líneas: nunca se corta con «…» ni se sale de la caja.


## theme.json

- `theme.json` (raíz del repositorio) es la fuente de los tokens del UI Kit, en formato Design Tokens (W3C): grupos `color`, `typography`, `spacing`, `radius` y `focus`.
- Cada token se usa en CSS como variable con el nombre del grupo y del token: `color.primary` → `var(--color-primary)`, `radius.md` → `var(--radius-md)`.
- Si cambia un token en Figma, se cambia primero en `theme.json` y luego en el bloque `@theme` de `src/index.css`. Los dos deben tener los mismos valores.

## Nombres de los commits

Formato: `tipo(alcance): descripción en presente y en minúscula`.

| Tipo | Cuándo |
|---|---|
| `feat` | Pantalla, estado o componente nuevo |
| `fix` | Corrige un error del flujo o de los datos |
| `style` | Cambio visual que aplica tokens del UI Kit, sin cambiar comportamiento |
| `refactor` | Reorganiza código sin cambiar lo que se ve |
| `docs` | Cambios en AGENTS.md, guidelines o README |
| `chore` | Dependencias, configuración y deploy |

Alcances: `citas`, `multas`, `pagar`, `mas`, `ayuda`, `ui-kit`, `tokens`, `deploy`.

Ejemplos:
- `style(ui-kit): aplica Button/Primary y Button/Secondary en Cambiar fecha`
- `feat(ayuda): agrega preguntas frecuentes e interpretación de códigos`
- `fix(multas): recalcula el valor con descuento desde el estado compartido`
- `docs(tokens): agrega theme.json con los tokens del UI Kit`
