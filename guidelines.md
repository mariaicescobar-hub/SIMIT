---
name: simit-curso-para-el-descuento
description: Reglas para generar el prototipo navegable de la app SIMIT renovada (flujo principal Sacar cita para el curso y flujo secundario Paz y salvo). Cárgalo antes de pedir cualquier pantalla y respétalo en cada prompt.
---

# Skill del proyecto · App SIMIT: curso para el descuento y paz y salvo

Equipo: Katherine Morales Artunduaga y María Isabel Collazos Escobar · Universidad Icesi · Prototipado

## Cómo usar este skill

- Cada regla tiene un ID, un enunciado que se puede comprobar en lo generado (**Verifica**) y el hallazgo de Semana 1 que la respalda (**Respaldo**). Los códigos de respaldo están en la sección 0.
- Si un prompt contradice una regla, gana la regla. Solo se rompe una regla cuando el prompt dice "excepción a R…" y explica por qué.
- Todo lo que aparece en pantalla sale de la sección 5: etiquetas (5.1), formatos (5.2), datos (5.3) y textos de error (5.4). No inventes datos.
- Las pantallas se nombran con los IDs de la sección 3 (S01 a S31).

---

## 0. Hallazgos de Semana 1 que respaldan las reglas

Fuente: *Entrega 1 – Prototipado. Construcción de prototipo de baja fidelidad: estructura y validación* (páginas entre paréntesis).

| ID | Hallazgo | Sección (pág.) |
| --- | --- | --- |
| U1 | Proto-persona: Juan Sebastián, 26 años, ingeniero civil en Cali, trabaja remoto 11 horas diarias, tiene carro, nivel digital alto (Nequi, Rappi), prefiere hacer trámites en apps porque su tiempo es limitado. | 1.1 (2) |
| P1 | No hay validación visible de los puntos autorizados: puede agendar y pagar en un sitio no autorizado, ser estafado y perder el descuento y el dinero. | 1.2 (2) |
| P2 | El plazo de 5 días hábiles no tiene contador ni recordatorios: con una jornada de 11 horas Juan pospone la gestión y el plazo vence. | 1.2 (2) |
| P3 | No se ven cupos ni horarios dentro del plazo; los horarios compiten con su jornada y puede perder el descuento por falta de cupo. | 1.2 (2) |
| O1 | Task Success Rate mayor a 85 % desde la consulta de la multa hasta la cita confirmada. | 1.3 (2) |
| O2 | Más del 90 % identifica sin ayuda la fecha límite para el 50 %. | 1.3 (2) |
| O3 | Menos de 3 minutos desde la consulta de la multa hasta la cita confirmada. | 1.3 (2) |
| O4 | Confianza después de la tarea mayor o igual a 4,5 sobre 5 ("puedo agendar sin miedo a ser estafado"). | 1.4.4 (4) |
| C1 | La app actual consulta y paga, pero no muestra curso, plazo, puntos autorizados ni agendamiento; sus puntos de atención son para trámites. Juan sale a Google y se expone a estafas. | 1.4.1 (3) |
| C2 | Secretaría de Movilidad de Cali: canal oficial, agendar es obligatorio, dos sedes (Salomia y C.C. Aventura Plaza), lunes a sábado, cursos de 2 horas. Está separada del SIMIT y no muestra cuánto tiempo queda. | 1.4.2 (3–4) |
| C3 | Benchmark Bogotá: la cita llega por correo hasta 24 horas después y no se elige sede ni horario en el momento. | 1.4.2 (4) |
| G1 | Espacio en blanco: en un solo lugar y al consultar la multa, mostrar tiempo restante para el 50 %, solo puntos autorizados, cupos dentro del plazo y la cita confirmada al instante. | 1.4.3 (4) |
| A1 | Inventario de contenidos (31 ítems), incluido el mensaje de canal oficial: el SIMIT no agenda ni cobra por WhatsApp ni por terceros. | 2.1 (4–5) |
| A2 | Agrupación por modelo mental: A ¿Qué debo?, B ¿Cuánto me ahorro y hasta cuándo?, C ¿Dónde hago el curso sin que me estafen?, D ¿Cuándo puedo ir?, E Sacar la cita, F Mi cita, G Pagar. | 2.2 (6–7) |
| A3 | Etiquetado: términos internos reemplazados por etiquetas para Juan (curso para el descuento, multa en la vía, multa por cámara, punto autorizado, "Tienes hasta el [fecha]", "Pagas $X en vez de $Y"). | 2.3 (7) |
| V1 | Validación ronda 1: pagar en persona no existía donde lo buscaban; "Puntos de atención" sonaba a servicio al cliente. | 2.5 (10) |
| V2 | El lugar del curso solo aparecía dentro de Sacar cita; lo buscaron en el menú Más. | 2.5 (10) |
| V3 | "Sacar cita" no decía para qué era; un usuario fue a Mis citas a pedir una cita nueva. | 2.5 (10) |
| V4 | Un usuario quiso pagar antes de consultar: fue a Pagar buscando el descuento y la fecha. | 2.5 (10) |
| V5 | Etiquetas confusas: "Mis multas", "Fecha límite" (¿del descuento o del pago?), "Cerca de ti", "Reprogramar", "Cancelar" (en Colombia también es pagar) y "PSE" sin Nequi a la vista. | 2.5 (10–11) |
| V6 | Confianza: el bloque del descuento se parecía a los mensajes falsos y la prueba de que la app es oficial estaba lejos, en Más. | 2.5 (11) |
| V7 | Sitemap v2: primeros clics en una rama equivocada de 8/21 a 0/21; tareas directas de 6 a 17. | 2.5 (9–10) |
| V8 | Ronda 2 (documento del tree test del sitemap v2): el paso 0 frena a quien no tiene sesión; falta aviso de cita existente; Elegir qué pagar no dice que el descuento exige el curso; no hay salida si no hay cupo antes del último día; desde Pagar los sitios para pagar quedan a 4 toques. | Anexo validación v2 |
| D1 | Decisión: no hay pestaña "Curso"; se suman entradas secundarias (botón en Citas y Más › Dónde hacer el curso). | 2.5 (12) |
| D2 | Decisión: el lugar del curso y el lugar para pagar en persona siguen separados, con etiquetas que nombran la acción. | 2.5 (12) |
| D3 | Decisión: "Comprobante de pago" se mantiene; "recibo" queda solo para el documento que se lleva al banco. | 2.5 (12–13) |
| D4 | Decisión: no se muestra un segundo descuento cuando vence el plazo; el sitemap muestra el último día y un aviso claro cuando ya no aplica. | 2.5 (13) |
| D5 | Decisión: quedan por definir el momento del pago del curso, el costo de cambiar la cita y el curso virtual. | 2.5 (13) |
| F1 | Flujo principal: entradas IN1 a IN5, decisiones D0 a D11, errores E1 a E7, salida OK1 y alternativas ALT1 a ALT5, con texto específico para cada error. | 3 (14–16) |
| F2 | Flujo secundario Paz y salvo: decisiones D0 a D6, errores E1 a E5, salida OK1 y alternativas ALT1 a ALT5. | 3 (17–19) |
| F3 | Prototipo en papel: barra Inicio · Mis multas · Pagar · Mis citas · Más; stepper "Lugar · Horario · Confirma" en Sacar cita. | 4 (20–22) |
| F4 | Criterios del prototipo en Figma: cobertura completa de ambos recorridos, navegación consistente, un único dispositivo, contenido realista y zonas interactivas. | 4 (22) |
| F5 | Regla de error definida en el diseño de flujos: texto empático y específico, nunca "Error. Reintentar."; el usuario nunca debe quedar preguntándose "¿ya terminé?". | Declaración de IA (23) |

### Requisitos de la etapa (Entrega 2: prototipo navegable del flujo de mayor riesgo)

Las reglas de la etapa citan el hallazgo de Semana 1 que respaldan y, además, el requisito de la entrega que cumplen.

| ID | Requisito |
| --- | --- |
| T1 | Fidelidad: escala de grises, sin marca ni decisiones de color, tipografía estándar y placeholders de imagen con la proporción real. |
| T2 | Formato mobile a 402 px. |
| T3 | Estados Normal, Cargando, Error y Deshabilitado en cada elemento interactivo clave, resueltos en la misma pantalla. |
| T4 | Transiciones instantáneas: se valida navegación, no animación. |
| T5 | Flujo de mayor riesgo completo sin dead ends, con errores, que un evaluador externo pueda completar sin instrucciones; texto real; enlace público. |

---

## 1. Producto y usuario

**R1.1** Genera un solo dispositivo: celular iphone 17 de 402 px de ancho (marco de 402 × 874 px, centrado en el navegador). Ninguna versión de escritorio. 
Deja 62 px libres arriba (barra de estado y Dynamic Island) y 34 px libres abajo (indicador de inicio); la barra inferior de la app va encima de esos 34 px.
Verifica: en el navegador la app mide 402 px de ancho. · Respaldo: F4 · Etapa: T2

**R1.2** El usuario es siempre Juan Sebastián López Vallejo, con los datos de 5.3. Inicio lo saluda: "Hola, Juan Sebastián".
Verifica: ningún "Usuario", "Nombre" o nombre distinto en pantalla. · Respaldo: U1, F4

**R1.3** El camino feliz desde Inicio (S01) hasta Cita confirmada (S11) se completa en máximo 7 toques y sin escribir, con la sesión ya iniciada.
Verifica: contar los toques en el prototipo: Sacar cita para el curso (tarjeta de la multa A) › Casa › tarjeta de la sede › horario › Continuar › Confirmar cita = 6. · Respaldo: O1, O3, U1

**R1.4** Inicio muestra sin desplazar la multa A, su valor y el último día del 50 %, en una tarjeta con el botón "Sacar cita para el curso". La multa D va debajo, con "Pagar con descuento".
Verifica: en 402 × 874 la tarjeta y el botón se ven completos sin scroll. · Respaldo: G1, P2, F3

**R1.5** Todo lo que Juan necesita para decidir (días que quedan, punto autorizado, cupo, duración, costo y ahorro) aparece dentro de la app. Ningún paso del flujo principal lo manda a una web, a llamar o a WhatsApp para completar la tarea.
Verifica: no hay enlaces externos en S01 a S11. Única excepción: el teléfono del error E7 (5.4). · Respaldo: C1, C2, G1

---

## 2. Hipótesis y riesgos

Cada supuesto dice qué tiene que existir en el prototipo para poder probarlo en las pruebas moderadas.

### Supuestos que el prototipo pone a prueba

**S1** Si el último día del 50 % aparece igual en todas las pantallas del flujo, más del 90 % lo identifica sin ayuda.
**R2.1** La frase "Tienes hasta el jueves 12 de noviembre para el descuento" aparece con las mismas palabras en S01, S03, S04, S08 y S09, junto con "Te quedan 5 días hábiles".
Verifica: buscar la frase en esas cinco pantallas; mismas palabras, misma fecha. · Respaldo: P2, O2, A3

**S2** Si solo se muestran puntos autorizados con un sello visible, la confianza llega a 4,5 o más.
**R2.2** Todo lugar del curso lleva el sello "Punto autorizado" (ícono de escudo con chulo + texto) en la lista, el mapa, el detalle, el resumen y la cita confirmada. En la app no existe ningún lugar del curso sin sello.
Verifica: el sello aparece en S06, S07, S09, S11 y S14; ninguna tarjeta de lugar sin él. · Respaldo: P1, O4, C1

**S3** Si los cupos se muestran filtrados al plazo, Juan no pierde el descuento por falta de cupo.
**R2.3** El paso 2 (S08) solo muestra días entre hoy y el último día del 50 %, con el número de cupos de cada horario.
Verifica: S08 no muestra el viernes 13 de noviembre ni días posteriores. · Respaldo: P3, G1

**S4** Si la cita se confirma al instante con número de reserva, Juan termina en menos de 3 minutos.
**R2.4** Al tocar "Confirmar cita" se abre S11 de inmediato con el número de reserva. No hay pantalla de "te llegará un correo" ni de espera.
Verifica: S09 › Confirmar cita › S11 en un toque. · Respaldo: C3, G1, O3

**S5** Varias entradas al curso, sin pestaña nueva, mantienen en cero los primeros clics en una rama equivocada.
**R2.5** "Sacar cita para el curso" se alcanza desde cuatro lugares: la tarjeta de la multa (S01 y S02), Detalle de la multa (S03), el botón de Citas (S12) y Más › Dónde hacer el curso (S25).
Verifica: los cuatro caminos llegan al paso 1 o al paso 0. · Respaldo: D1, V2, V3, V7

### Riesgos y cómo los mitiga el prototipo

**K1** Que el descuento parezca un mensaje falso.
**R2.6** El bloque del descuento lleva, en la misma pantalla, el sello "Información oficial SIMIT", el título "Descuento de ley por hacer el curso" y el enlace "¿Este mensaje es real?" hacia S27.
Verifica: los tres elementos están en S03 y en S04. · Respaldo: V6, C1, A1

**K2** Que el paso 0 frene a quien no tiene una multa elegida.
**R2.7** El paso 0 (S05) muestra las multas de Juan ya cargadas. Si no hay sesión, primero abre S31 (Ingreso) y vuelve al paso 0. La lista nunca aparece vacía ni pide buscar la multa.
Verifica: entrar por Citas o por Más sin sesión › S31 › S05 con las multas visibles. · Respaldo: V8, F1 (D0)

**K3** Que Juan saque una segunda cita para la misma multa.
**R2.8** Si la multa ya tiene cita, todo botón "Sacar cita para el curso" de esa multa cambia a "Ver mi cita · lunes 9 de noviembre, 10:00 a. m." y abre S14.
Verifica: con el estado "con cita" (5.3), ningún botón de esa multa dice "Sacar cita". · Respaldo: V8

**K4** Que Juan crea que pagar ya le da el descuento.
**R2.9** En Pagar › Elegir qué pagar (S19), una multa sin curso muestra "El descuento exige hacer el curso antes del jueves 12 de noviembre", el botón "Sacar cita para el curso" y la opción "Pagar $633.111 sin descuento". El pago con descuento solo se activa cuando el curso está hecho.
Verifica: multa A en S19 sin opción de pagar $316.556. · Respaldo: V4, V8

**K5** Que el prototipo dé por resuelto algo que el negocio no ha decidido.
**R2.10** Los tres puntos por definir no se diseñan (ver R4.5).
Verifica: no hay pantalla de pago del curso, ni costo de cambio, ni opción virtual. · Respaldo: D5

---

## 3. Flujos y arquitectura

**R3.1** Barra inferior fija en todas las pantallas, con 5 ítems en este orden: Inicio · Multas · Pagar · Citas · Más. Pagar va al centro. El ítem activo se marca con texto en negrita y una línea gris oscura de 2 px encima.
Verifica: la misma barra en todas las pantallas. · Respaldo: F3, V5, D1

**R3.2** No existe una pestaña "Curso" ni un sexto ítem en la barra.
Verifica: la barra tiene exactamente 5 ítems. · Respaldo: D1

**R3.3** Sacar cita usa un stepper fijo arriba: "1 Lugar · 2 Horario · 3 Confirmar", con el paso actual resaltado. El paso 0 (Elegir la multa) aparece solo al entrar desde Citas o Más y no tiene número en el stepper.
Verifica: el stepper está en S06, S08 y S09; no aparece en S05. · Respaldo: F3, V8

**R3.4** Cada pantalla tiene "‹ Volver" arriba a la izquierda, que lleva a la pantalla anterior sin perder lo elegido (sede, día y hora quedan marcados al volver). Menos la home, esta pantalla no debe llevar el volver
Verifica: S09 › Volver › S08 con el horario aún marcado. · Respaldo: F1, F5

**R3.5** Inventario de pantallas. Se generan todas; las marcadas como **clave** son las que van al registro de prompts (mínimo 2 iteraciones cada una).

| ID | Pantalla | Se llega desde | Lleva a | Grupo (A2) |
| --- | --- | --- | --- | --- |
| S00 | Notificación en la pantalla bloqueada (entrada IN2) | Inicio de la prueba | S03 (o S31 sin sesión) | A |
| S01 | Inicio | Barra | S03, S06, S02 | A |
| S02 | Multas: lista + "Consultar por cédula, placa o número de comparendo" | Barra | S03 | A |
| S03 | **Detalle de la multa** (con bloque "Descuento de ley por hacer el curso") | S01, S02, S00 | S04, S06, S19 | A, B |
| S04 | Beneficio y requisitos (el descuento explicado) | S03 | S06 | B |
| S05 | Paso 0 · Elegir la multa | S12, S25 | S06 | E |
| S06 | **Paso 1 · Dónde hacer el curso** (lista y mapa, filtros) | S03, S04, S05 | S07, S08 | C |
| S07 | Detalle del punto autorizado | S06 | S08 | C |
| S08 | **Paso 2 · Días y horas con cupo** | S06, S07 | S09 | D |
| S09 | **Paso 3 · Resumen de tu cita** (el botón Confirmar cita tiene sus estados Cargando y Error) | S08 | S11 | E |
| S11 | **Cita confirmada** | S09 | S12, S01 | E |
| S12 | Citas: lista + botón "Sacar cita para el curso" | Barra, S11 | S14, S05 | F |
| S14 | Detalle de la cita | S12 | S15, S18 | F |
| S15 | **Cambiar fecha › Nuevo día, hora o lugar** | S14 | S16 | F |
| S16 | Confirmar el cambio | S15 | S17 | F |
| S17 | Cambio confirmado | S16 | S12 | F |
| S18 | Cancelar cita (confirmación) | S14 | ALT4 | F |
| S19 | Pagar › Elegir qué pagar | Barra, S03 | S20 | G |
| S20 | Elegir medio de pago | S19 | S21, S22 | G |
| S21 | **Comprobante de pago** | S20 | S23, S01 | G |
| S22 | Pagar en persona: recibo para pagar en el banco | S20 | S26 | G |
| S23 | Historial de pagos | S19, S21 | S21 | G |
| S24 | Más | Barra | S25, S26, S27, S28 | — |
| S25 | Más › Dónde hacer el curso | S24 | S05 | C |
| S26 | Más › Dónde pagar en persona | S24, S22 | — | G |
| S27 | Más › ¿Este mensaje es real? | S24, S03, S04 | — | C |
| S28 | Paz y salvo › ¿De qué multa? | S24 | S29, E2 de F2 | — |
| S29 | Datos del paz y salvo (el botón Generar tiene sus estados Cargando y Error) | S28 | S30 | — |
| S30 | **Paz y salvo listo** (descargar, compartir, ver después) | S29 | OK1 de F2 | — |
| S31 | Ingreso y verificación (cédula + código al celular) | S00, S05 sin sesión | Pantalla de origen | — |

Verifica: existen las 31 pantallas con estos IDs y nombres, y cada uno se conecta como dice la tabla. · Respaldo: A2, F1, F2, V7 (sitemap v2)

**R3.6** "Dónde hacer el curso" (S25) y "Dónde pagar en persona" (S26) están en Más, uno debajo del otro, cada uno con una línea que nombra la acción: "Puntos autorizados para el curso" y "Sedes y bancos para pagar en efectivo".
Verifica: en S24 las dos opciones son distintas y empiezan por "Dónde". · Respaldo: D2, V1, V2

**R3.7** Pagar en persona se alcanza en 2 toques por Más (S24 › S26) y desde el medio de pago "En persona" (S20 › S22 › S26).
Verifica: los dos caminos existen. · Respaldo: V1, V8

---

## 4. Reglas de la etapa

Etapa: prototipo navegable de fidelidad media para pruebas moderadas (Google Meet o Teams) y no moderadas (Maze o Useberry) con las métricas O1 a O4.

**R4.1** Escala de grises completa: fondo #FFFFFF, superficies #F2F2F2, bordes #D0D0D0, texto secundario #595959, texto principal y botón principal #1A1A1A con texto blanco. Sin color de marca ni de estado: error, plazo y éxito se distinguen con ícono, texto y peso de letra (error: ícono de alerta; plazo: ícono de reloj; éxito: ícono de chulo). Sin logo: "SIMIT" va como texto.
Verifica: ningún color con saturación en toda la app. · Respaldo: F3, F4 · Etapa: T1

**R4.1b** Tipografía estándar: Inter, con la fuente del sistema como respaldo. Tamaños: 24 títulos, 17 subtítulos, 15 texto, 13 apoyo. Ningún texto de lectura por debajo de 13 px.
Verifica: una sola familia tipográfica. · Respaldo: U1, F4 · Etapa: T1

**R4.1c** Las imágenes son placeholders: rectángulos #E6E6E6 con un ícono de línea y una etiqueta, en su proporción real. Mapa de la sede 16:9 (370 × 208 px); código QR de la reserva 1:1 (160 × 160 px). Sin fotos ni ilustraciones.
Verifica: medir los dos placeholders. · Respaldo: A1 (ítem 15: mapa del punto), F3 · Etapa: T1

**R4.2** Se cubren completos los dos flujos de la entrega: Sacar cita para el curso (con Cambiar fecha y Cancelar cita) y Paz y salvo. Pagar llega hasta Comprobante de pago e Historial de pagos.
Verifica: existen las pantallas de 3.5 y los errores de 5.4 aparecen dentro de ellas. · Respaldo: F1, F2, F4

**R4.3** Los datos son fijos y salen de 5.3. No hay conexión a servicios reales; los pagos, el calendario y las descargas se simulan con un aviso en pantalla.
Verifica: los mismos números en todas las pantallas. · Respaldo: F4

**R4.4** Cada error de 5.4 aparece dentro de la pantalla donde ocurre (mensaje en línea, aviso arriba del botón u hoja inferior), nunca como pantalla aparte, y siempre trae una acción de salida. Se activa de forma determinista, para que el moderador lo pueda mostrar en la prueba:
- E2 (multa sin descuento): elegir la multa B.
- E3 (sin ubicación): tocar "No permitir" en el permiso.
- E5 (horario lleno): elegir Aventura Plaza, sábado 7 de noviembre, 9:00 a. m.
- Sin cupos con el filtro: activar a la vez los filtros "Sábado" y "Tarde".
- F2-E2 (pago aún no reflejado): pedir el paz y salvo de la multa D justo después de pagarla.
- E7 (cita en menos de 24 horas): se ve como estado Deshabilitado de "Cambiar fecha", con el motivo.
- E1, E6, F2-E3 y los errores de conexión de 6.0: en Más › Herramientas de prueba, el interruptor "Simular falla de conexión" hace que la siguiente acción que carga o guarda algo falle una vez. En esa misma sección, "Reiniciar el prototipo" vuelve todo al estado inicial.
Verifica: cada disparador muestra su error en la misma pantalla. · Respaldo: F1, F2 · Etapa: T3

**R4.5** Lo que el negocio no ha decidido no se diseña: no hay pantalla de pago del curso, no se muestra costo por cambiar la cita y no hay opción de curso virtual. El costo del curso aparece solo como dato informativo, con la línea "No se cobra en este paso".
Verifica: S09 no pide medio de pago; S16 no muestra costo; S06 no tiene filtro "Virtual". · Respaldo: D5

**R4.6** Ningún botón es decorativo: todo lo que parece tocable lleva a una pantalla o cambia un estado. Lo que no aplica se muestra deshabilitado, con el motivo en una línea.
Verifica: tocar cada botón de cada pantalla. · Respaldo: F4, F5

**R4.7** Hay tres marcos de inicio de tarea para las pruebas: S00 (llegó la notificación), S01 con la multa A sin cita y S01 con la multa A en estado "con cita" (para cambiar la fecha).
Verifica: los tres marcos existen y están nombrados "Inicio de tarea · …". · Respaldo: O1, O3

**R4.8** Cada elemento interactivo clave tiene cuatro estados en el mismo componente y en la misma pantalla (tabla 6.0): Normal; Cargando (indicador de giro + la acción en gerundio, máximo 1 segundo, sin poder tocarlo otra vez); Error (mensaje en línea con salida); Deshabilitado (gris claro #BDBDBD + el motivo en una línea debajo).
Verifica: provocar los cuatro estados de cada elemento de 6.0 en el navegador. · Respaldo: F1, F5 · Etapa: T3

**R4.9** Transiciones instantáneas: sin animaciones de deslizamiento, desvanecido ni rebote. La pantalla cambia en el mismo toque o al terminar el estado Cargando.
Verifica: ninguna animación entre pantallas. · Respaldo: O3 · Etapa: T4

---

## 5. Reglas de contenido

### 5.1 Etiquetas exactas

| Concepto | Etiqueta en pantalla | Nunca usar | Respaldo |
| --- | --- | --- | --- |
| Pestañas | Inicio · Multas · Pagar · Citas · Más | Mis multas, Mis citas | V5 |
| Acción del curso | Sacar cita para el curso | Sacar cita (solo), Agendar | V3 |
| El curso | curso para el descuento | curso pedagógico por infracción | A3 |
| Bloque del descuento | Descuento de ley por hacer el curso, con la cifra "50 %" grande al lado | Descuento del 50 % (como título), ¡Oferta! | V6, V8 |
| Plazo | Tienes hasta el [día de la semana] [fecha] para el descuento | Fecha límite, plazo para acogerse al beneficio | A3, V5, O2 |
| Tiempo que queda | Te quedan [n] días hábiles | días restantes, días (sin "hábiles") | P2, V5 |
| Valor | Pagas $316.556 en vez de $633.111 | valor de la sanción con reducción | A3 |
| Tipo de multa | Multa en la vía · Multa por cámara (fotomulta) | comparendo por detección electrónica | A3 |
| Lugar del curso | Punto autorizado | punto con convenio vigente, centro | A3 |
| Ubicación | Cerca de: mi ubicación · Casa · Otro barrio | Cerca de ti | V5 |
| Horarios | Días y horas con cupo · Cupos hasta el jueves 12 de noviembre | Horarios disponibles | V5 |
| Cambio de cita | Cambiar fecha · Cancelar cita | Reprogramar, Cancelar (solo) | V5 |
| Medios de pago | Nequi · Daviplata · Bancos (PSE) · Tarjeta · En persona | PSE (solo) | V5 |
| Prueba de pago | Comprobante de pago | Recibo | D3 |
| Documento para el banco | Recibo para pagar en el banco | Comprobante, volante | D3 |
| Sitios para pagar | Dónde pagar en persona | Puntos de atención | V1 |
| Lugar del curso en Más | Dónde hacer el curso | Puntos de atención, Cursos | V2, D2 |
| Verificar mensajes | ¿Este mensaje es real? | Canal oficial (solo) | V6 |
| Pagos anteriores | Historial de pagos | Descargar documentos | V8 |

### 5.2 Formatos

**R5.1** Dinero con signo, punto de miles y sin decimales: "$633.111".
Verifica: ningún valor con decimales ni "COP". · Respaldo: A3

**R5.2** Fechas con día de la semana y mes en letras, sin año salvo que sea de otro año: "jueves 12 de noviembre"; "viernes 9 de enero de 2026". Horas: "9:00 a. m.", "2:00 p. m.". Distancias: "4,2 km".
Verifica: ninguna fecha en formato 12/11/2026 en el flujo principal. · Respaldo: O2, A3

**R5.3** Los días hábiles excluyen sábados, domingos y festivos (lunes 2 y lunes 16 de noviembre de 2026). El conteo incluye el día de hoy. El último día se muestra en negrita con ícono de reloj: "Hoy es el último día para el descuento".
Verifica: el viernes 6 de noviembre la app dice "Te quedan 5 días hábiles". · Respaldo: P2, O2

**R5.4** Textos en segunda persona ("tú"), frases de máximo 20 palabras, sin mayúsculas sostenidas, sin signos de exclamación salvo en las dos salidas exitosas (¡Cita confirmada! y ¡Paz y salvo descargado!).
Verifica: revisar los textos de cada pantalla. · Respaldo: V6, F5

### 5.3 Datos del prototipo (contenido real)

Hoy en el prototipo: **viernes 6 de noviembre de 2026, 7:30 p. m.**

**Usuario**
- Juan Sebastián López Vallejo · C.C. 1.130.456.779 · placa CLX 472 · celular 300 ••• 4512 · correo j•••@correo.com
- Dirección guardada: Casa (barrio San Fernando). Trabaja remoto desde casa.

**Multas**

| Multa | N.° de comparendo | Tipo | Infracción | Fecha | Valor | Con descuento | Último día del 50 % | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | 76001000000045218734 | Multa en la vía | C29 · Conducir a velocidad superior a la máxima permitida | jueves 5 de noviembre de 2026 | $633.111 | $316.556 | jueves 12 de noviembre | Pendiente, sin curso, sin cita (estado alterno "con cita": ver Cita) |
| D | 76001000000045001902 | Multa en la vía | C02 · Estacionar en sitio prohibido | martes 3 de noviembre de 2026 | $633.111 | $316.556 | martes 10 de noviembre | Pendiente, curso hecho el jueves 5 de noviembre en Salomia |
| B | 76001000000044102233 | Multa en la vía | B01 · Conducir sin llevar la licencia de conducción | martes 1 de septiembre de 2026 | $337.659 | No aplica | terminó el martes 8 de septiembre | Pendiente, sin descuento (dispara E2) |
| C | 76001000000043910125 | Multa en la vía | C02 · Estacionar en sitio prohibido | 2025 | $292.000 pagados | — | — | Pagada el viernes 9 de enero de 2026 (sirve para el paz y salvo) |

- Valores de 2026: multa tipo C = 15 salarios mínimos diarios = $633.111; tipo B = 8 = $337.659.
- Costo del curso: $65.000 (dato del prototipo en papel, por confirmar con la Secretaría). Ahorro real de la multa A: $633.111 − $316.556 − $65.000 = **$251.555**.
- Duración del curso: 2 horas. Requisitos: cédula original y llegar 15 minutos antes.

**Puntos autorizados para el curso** (Secretaría de Movilidad de Cali)

| Punto | Dirección | Horario de atención | Distancia desde Casa |
| --- | --- | --- | --- |
| Sede Salomia | Carrera 3 No. 56-30 | Lunes a viernes 7:30 a. m.–5:00 p. m. · sábado 9:00 a. m.–12:00 m. | 4,2 km (dato de prueba) |
| C.C. Aventura Plaza | Carrera 100 No. 15A-61, piso 2 | Lunes a viernes 7:30 a. m.–5:00 p. m. · sábado 9:00 a. m.–12:00 m. | 6,8 km (dato de prueba) |

**Cupos del curso hasta el último día de la multa A**

| Día | Sede Salomia | C.C. Aventura Plaza |
| --- | --- | --- |
| sábado 7 de noviembre | 9:00 a. m. (3 cupos) | 9:00 a. m. (1 cupo, se llena al confirmar: E5) |
| lunes 9 de noviembre | 7:30 a. m. (5) · 10:00 a. m. (2) · 2:00 p. m. (6) | 10:00 a. m. (4) · 2:00 p. m. (0, no tocable) |
| martes 10 de noviembre | 7:30 a. m. (4) · 2:00 p. m. (3) | 7:30 a. m. (6) |
| miércoles 11 de noviembre | 10:00 a. m. (5) | 10:00 a. m. (2) · 2:00 p. m. (5) |
| jueves 12 de noviembre | 7:30 a. m. (1) · 2:00 p. m. (6) | 10:00 a. m. (3) |

**Cita** (estado "con cita" de la multa A): reserva **CP-2026-089417** · Sede Salomia · lunes 9 de noviembre, 10:00 a. m. a 12:00 m.

**Pago simulado de la multa D**: transacción **SIM-2026-11-0045871** · viernes 6 de noviembre, 7:42 p. m. · $316.556 · Nequi.

**Recibo para pagar en el banco (multa D)**: código de pago **7600-1045-0019-02** · válido hasta el martes 10 de noviembre.

**Dónde pagar en persona**: Sede principal Salomia (Carrera 3 No. 56-90) · La Flora (Calle 70N No. 3BN-200) · C.C. La Estación (Carrera 1 entre Calles 36 y 38, local B1-33) · C.C. Aventura Plaza (Carrera 100 No. 15A-61, piso 2). Línea de la Secretaría: (602) 369 0811.

**Notificación de entrada (S00)**: "SIMIT · Tu multa del 5 de noviembre tiene 50 % de descuento si haces el curso. Tienes hasta el jueves 12 de noviembre."

### 5.4 Textos de error y de salida

Adaptados de los flujos de Semana 1 a las etiquetas de 5.1. Cada error dice qué pasó, qué se conserva y qué puede hacer Juan.

**Flujo principal (F1)**

| ID | Título | Texto | Acciones |
| --- | --- | --- | --- |
| E1 | No pudimos verificar tu identidad | Revisa que tu cédula y el código estén bien escritos. Tu avance no se pierde. | Pedir código nuevo · Volver a intentar |
| E2 | Esta multa ya no tiene el descuento | El plazo del 50 % terminó el martes 8 de septiembre. Puedes pagar el valor completo: $337.659. | Pagar esta multa · Volver a mis multas |
| E3 | No pudimos ubicarte | El permiso de ubicación está desactivado. Escribe tu barrio o elige Casa y te mostramos los puntos autorizados más cercanos. | Elegir Casa · Escribir barrio · Activar ubicación |
| E4 | Aún no hay puntos autorizados en esta zona | No encontramos puntos autorizados cerca de este barrio. Prueba con otro barrio o con tu ubicación. | Cambiar barrio · Avísame cuando haya (ALT2) |
| E5 | Ese horario se acaba de llenar | Otra persona tomó el último cupo del sábado 7 de noviembre a las 9:00 a. m. Te mostramos el horario libre más cercano. | Elegir Salomia, sábado 9:00 a. m. · Ver otros horarios |
| Sin cupos con filtro | No hay cupos el sábado en la tarde antes del jueves 12 de noviembre | Los sábados el curso es solo en la mañana. Estos son los cupos más cercanos dentro de tu plazo. | Quitar filtro "Tarde" · Ver sábado 7 de noviembre, 9:00 a. m. |
| E6 | No pudimos confirmar tu cita | Hubo un problema de conexión. Tu sede, día y hora siguen guardados. | Intentar de nuevo · Guardar para después (ALT3) |
| E7 | Ya no puedes cambiar la fecha desde la app | Tu cita es en menos de 24 horas. Puedes cancelarla y sacar una nueva, o llamar al (602) 369 0811. | Cancelar cita · Llamar · Volver |
| ALT3 | Guardamos tu selección | Te recordaremos antes del jueves 12 de noviembre. | Ir al inicio |
| ALT4 | Cancelamos tu cita y liberamos el cupo | Aún tienes hasta el jueves 12 de noviembre para el descuento. | Sacar cita para el curso |
| OK1 | ¡Cita confirmada! | (Con la elección de ejemplo) Reserva CP-2026-089417 · Sede Salomia · lunes 9 de noviembre, 10:00 a. m. a 12:00 m. Te recordamos 24 horas y 2 horas antes. Lleva tu cédula original. | Agregar al calendario · Ver mis citas · Ir al inicio |

Texto de S18 (confirmar cancelación): "Si cancelas y no sacas otra cita antes del jueves 12 de noviembre, pierdes el descuento. ¿Quieres cancelar?" · Botones "Sí, cancelar cita" y "No, mantener mi cita".

**Flujo Paz y salvo (F2)**

| ID | Título | Texto | Acciones |
| --- | --- | --- | --- |
| E1 | No pudimos verificar tu identidad | Igual a E1 del flujo principal. | Pedir código nuevo · Volver a intentar |
| E2 | Aún no vemos tu pago reflejado | Los pagos pueden tardar en actualizarse. No tienes que hacer nada: te avisamos apenas aparezca. | Avísame (ALT1) · Volver |
| E3 | No pudimos generar tu paz y salvo | Tu pago y tus datos están a salvo. Intenta de nuevo; si sigue igual, te lo enviamos al correo. | Intentar de nuevo · Enviármelo después |
| E4 | No pudimos guardar el archivo | Tu celular no tiene espacio o el permiso está desactivado. Tu paz y salvo sigue en Historial de pagos. | Enviar a mi correo · Volver |
| E5 | No pudimos enviar el documento | Revisa tu conexión y que el correo esté bien escrito. | Intentar de nuevo · Descargar |
| P3 | Algo no coincide | Cuéntanos qué dato no coincide y adjunta tu comprobante. | Enviar reporte → "Recibimos tu reporte. Tu número de radicado es RAD-2026-11-000384." |
| OK1 | ¡Paz y salvo descargado! | Listo, tu paz y salvo está en tu celular: SIMIT_PazYSalvo_76001000000043910125.pdf | Abrir · Compartir · Volver al inicio |

---

## 6. Reglas de comportamiento

Formato: **Evento** → **Cambio de estado** → **Si falla**.

### 6.0 Estados de los elementos interactivos clave del flujo de Citas

Todos se resuelven en la misma pantalla (R4.8). Respaldo de la tabla: F1 (D9 a D11, E6, E7), P3, V8 · Etapa: T3.

| Elemento (pantalla) | Normal | Cargando | Error | Deshabilitado |
| --- | --- | --- | --- | --- |
| Lista de citas (S12) | Tarjeta de cada cita con estado, sede, día y hora | 2 tarjetas de esqueleto gris al abrir Citas | "No pudimos cargar tus citas. Revisa tu conexión." + Reintentar | — |
| Botón "Sacar cita para el curso" (S12) | Activo si hay una multa con descuento y sin cita | "Buscando tus multas…" | "No pudimos cargar tus multas. Tu información está a salvo." + Reintentar | "Tu multa ya tiene cita. Puedes cambiar la fecha." |
| Botón "Cambiar fecha" (S14) | Activo | "Cargando horarios…" | "No pudimos cargar los horarios. Tu cita sigue igual." + Reintentar | "Ya asististe a este curso" o "Tu cita es en menos de 24 horas" |
| Horario (S15 y S08) | Hora + cupos; al tocarlo queda marcado | Esqueleto de los horarios al cambiar de día o de sede | E5 en el horario elegido, al tocar Continuar | "Sin cupos" (0 cupos) o "Tu cita actual" |
| Botón "Continuar" (S15) | Activo con un horario marcado | — | — | Hasta marcar un horario distinto al actual |
| Botón "Confirmar el cambio" (S16) | Activo | "Confirmando el cambio…" | "No pudimos confirmar el cambio. Tu cita del lunes 9 de noviembre sigue igual." + Intentar de nuevo | Mientras carga |
| Botón "Sí, cancelar cita" (S18) | Activo | "Cancelando tu cita…" | "No pudimos cancelar tu cita. Sigue confirmada." + Intentar de nuevo | Mientras carga |
| Botón "Confirmar cita" (S09) | Activo | "Confirmando tu cita…" | E6 | Mientras carga |
| Botón "Agregar al calendario" (S11 y S17) | Activo | "Agregando…" | "No tenemos permiso para usar tu calendario." + Permitir | "Agregada a tu calendario" con chulo |

**R6.1** Toque en "Sacar cita para el curso" desde la tarjeta o el detalle de la multa A → abre S06 (paso 1) con la multa A ya elegida, sin paso 0 → si la multa no tiene descuento (B), abre E2 en vez del paso 1.
Verifica: multa A › S06; multa B › E2. · Respaldo: F1 (D1), V3

**R6.2** Entrada desde Citas (S12) o Más › Dónde hacer el curso (S25) → abre S05 con A tocable y su último día; D deshabilitada con "Curso hecho el jueves 5 de noviembre"; B deshabilitada con "Sin descuento: el plazo terminó el martes 8 de septiembre"; C no aparece → sin sesión, abre S31 y al verificar vuelve a S05.
Verifica: S05 muestra 3 multas, 2 deshabilitadas con su motivo. · Respaldo: V8, F1 (D0)

**R6.3** Entrada a S06 → pide elegir "Cerca de: mi ubicación · Casa · Otro barrio" → si Juan niega la ubicación, muestra E3 dentro de la misma pantalla y deja elegir Casa o escribir barrio, sin sacarlo del paso.
Verifica: "No permitir" › E3 en S06. · Respaldo: F1 (D2, D3), V5

**R6.4** En S06, los filtros "Sábado", "Entre semana", "Mañana" y "Tarde" se combinan y filtran las dos sedes a la vez → cada tarjeta de punto muestra su próximo cupo dentro del plazo con el filtro aplicado → si ninguna sede tiene cupo con el filtro, muestra el estado "Sin cupos con filtro" de 5.4, con el cupo más cercano como salida.
Verifica: "Sábado" › 2 sedes con 9:00 a. m.; "Sábado" + "Tarde" › estado sin cupos. · Respaldo: P3, V8, A1 (ítem 19)

**R6.5** Toque en un horario de S08 → el horario queda marcado y se activa "Continuar" → un horario con 0 cupos se ve gris con "Sin cupos" y no se puede tocar; elegir Aventura Plaza, sábado 9:00 a. m., y tocar "Continuar" abre E5, que marca ese horario como lleno y ofrece Salomia a la misma hora.
Verifica: lunes 2:00 p. m. en Aventura no es tocable; sábado 9:00 a. m. en Aventura › E5. · Respaldo: F1 (D6), P3

**R6.6** S09 muestra multa, punto con sello, dirección, día, hora, duración, requisitos, costo del curso ("No se cobra en este paso") y ahorro real → "Confirmar cita" muestra el estado Cargando en el mismo botón ("Confirmando tu cita…") y abre S11 → con "Simular falla de conexión" encendido, muestra E6 en línea en S09 con la selección intacta; "Guardar para después" muestra ALT3.
Verifica: S09 › S11 con un toque; con la falla simulada, E6 aparece en S09 y los datos siguen. · Respaldo: F1 (D7, D8), C3, G1

**R6.7** Al confirmar la cita (S11) → la multa A cambia al estado "con cita" en S01, S02, S03 y S12, y todo botón "Sacar cita para el curso" de esa multa cambia a "Ver mi cita" (R2.8). "Agregar al calendario" muestra el aviso "Agregamos tu cita al calendario".
Verifica: después de confirmar, volver a Inicio y ver "Cita: lunes 9 de noviembre, 10:00 a. m." · Respaldo: G1, V8, F1 (OK1)

**R6.8** El contador del plazo se calcula con R5.3 y se ve igual en todas las pantallas → si es el último día, el texto pasa a negrita con ícono de reloj → si el plazo terminó, la multa muestra E2 y desaparece todo botón del curso para esa multa.
Verifica: multa D (último día martes 10 de noviembre) muestra "Te quedan 3 días hábiles". · Respaldo: P2, O2, D4

**R6.9** En S14, "Cambiar fecha" abre S15 con los mismos filtros de S06, la sede actual preelegida y solo cupos hasta el último día → "Confirmar el cambio" (S16) muestra la cita actual y la nueva lado a lado, sin costo, y la cita actual se conserva hasta confirmar → S17 confirma con el mismo número de reserva y actualiza el calendario; si la cita es en menos de 24 horas o ya pasó, "Cambiar fecha" aparece deshabilitado con su motivo (E7).
Verifica: S14 › S15 › S16 › S17; la reserva sigue siendo CP-2026-089417. · Respaldo: F1 (D9, D10), V5, D5

**R6.10** "Cancelar cita" en S14 abre S18 → "Sí, cancelar cita" abre ALT4 y la multa A vuelve al estado sin cita, con el mismo contador → "No, mantener mi cita" vuelve a S14 sin cambios.
Verifica: cancelar › Inicio muestra de nuevo "Sacar cita para el curso". · Respaldo: F1 (D11)

**R6.11** Pagar (S19) lista A y D: A con el aviso de R2.9; D con "Curso hecho el jueves 5 de noviembre" y "Pagas $316.556 en vez de $633.111" → tocar D abre S20 con el valor arriba y los 5 medios de 5.1 → elegir Nequi simula el pago y abre S21; elegir "En persona" abre S22.
Verifica: D › Nequi › S21 con transacción SIM-2026-11-0045871. · Respaldo: V4, V5, V8

**R6.12** S21 muestra multa, valor, fecha, hora, medio y número de transacción, con "Guardar imagen", "Enviar por WhatsApp" y "Enviar al correo" → cada acción muestra un aviso de confirmación → la multa D pasa a "Pagada" en Multas y aparece en Historial de pagos (S23).
Verifica: después de pagar, D figura como Pagada y en S23. · Respaldo: V5, V8

**R6.13** S22 muestra el recibo para pagar en el banco (código de pago y "válido hasta el martes 10 de noviembre") con "Guardar recibo" y el enlace "Dónde pagar en persona" a S26.
Verifica: S20 › En persona › S22 › S26. · Respaldo: V1, D3

**R6.14** Paz y salvo: S28 lista solo multas pagadas (C) → C abre los datos con "Generar paz y salvo" y "Algo no coincide" → "Generar" muestra el estado Cargando en el mismo botón ("Generando tu paz y salvo…", máximo 1 segundo) y abre S30 con vista previa, código QR, fecha de expedición y las acciones Descargar, Compartir y Ver después → si se pide el paz y salvo de D recién pagada, abre F2-E2.
Verifica: C › S30; D recién pagada › F2-E2. · Respaldo: F2 (D1 a D6), F3

**R6.15** "¿Este mensaje es real?" (S27) se abre desde Más, desde el bloque del descuento y desde S04 → muestra tres líneas: "El SIMIT no agenda ni cobra por WhatsApp", "Nunca te enviamos enlaces para pagar por SMS" y "Solo agendamos en puntos autorizados con este sello", más el sello de ejemplo.
Verifica: los tres caminos llegan a S27 con las tres líneas. · Respaldo: V6, A1, P1

---

## 7. Prohibiciones

**X1** No muestres lugares del curso sin el sello "Punto autorizado", ni enlaces a tramitadores, WhatsApp o páginas de terceros. · Respaldo: P1, C1

**X2** No pidas datos de tarjeta ni de cuenta dentro de Sacar cita; el pago del curso está por definir. · Respaldo: D5

**X3** No muestres descuentos distintos al 50 %, promociones, "¡Oferta!", "¡Aprovecha!", contadores con horas y segundos, emojis ni mayúsculas sostenidas en el bloque del descuento. · Respaldo: V6, D4

**X4** No uses ninguna palabra de la columna "Nunca usar" de 5.1. · Respaldo: A3, V5

**X5** No llames "recibo" a la prueba de pago. · Respaldo: D3

**X6** No agregues una pestaña "Curso" ni un sexto ítem a la barra. · Respaldo: D1

**X7** No muestres días posteriores al último día del 50 % en S08 ni en S15, ni dejes tocar horarios sin cupo. · Respaldo: P3

**X8** No uses mensajes genéricos ("Error", "Algo salió mal", "Reintentar"). Todo error usa el texto de 5.4. · Respaldo: F5

**X9** No uses lorem ipsum, "Usuario", "$XX", "[fecha]" ni marcadores en pantalla; solo los datos de 5.3. · Respaldo: F4

**X10** No digas que la cita llegará por correo ni pongas pantallas de espera después de confirmar. · Respaldo: C3, G1

**X11** No ofrezcas curso virtual ni muestres un costo por cambiar la cita. · Respaldo: D5

**X12** No juntes en una misma lista los lugares del curso y los lugares para pagar. · Respaldo: D2, V2

**X13** No generes pantallas de otro ancho que 402 px ni versiones de escritorio. · Respaldo: F4 · Etapa: T2

**X14** No uses color, logo, fotos ni ilustraciones, ni animaciones de transición. · Respaldo: F4 · Etapa: T1, T4

**X15** No resuelvas un estado (cargando, error, deshabilitado) creando otra pantalla. · Respaldo: F1 · Etapa: T3

---

## 8. Plantilla de prompt por pantalla (tres capas)

Usa esta plantilla en cada iteración y guarda el prompt y la captura en el registro de prompts.

```
Usa el skill del proyecto SIMIT.

PANTALLA: [ID y nombre de la sección 3]. [Qué bloques tiene, en qué orden, y qué se ve sin desplazar.]

COMPORTAMIENTO: [Evento] → [cambio de estado] → [salida si falla], según [R6.x]. 
[Qué pasa al volver.]

CONTENIDO REAL: [datos exactos de 5.3 y etiquetas de 5.1 que debe mostrar].

REGLAS QUE APLICAN: [R… y X…]. Verifica antes de entregar: [la línea "Verifica" de esas reglas].
```

Ejemplo (S08 · Paso 2, iteración 1):

```
Usa el skill del proyecto SIMIT.

PANTALLA: S08 · Paso 2 · Días y horas con cupo. Arriba el stepper con "2 Horario" activo. Debajo, la tarjeta del punto elegido (Sede Salomia, sello Punto autorizado, Carrera 3 No. 56-30) y la línea "Cupos hasta el jueves 12 de noviembre". Luego una fila de días desplazable de sábado 7 a jueves 12 de noviembre y, para el día elegido, los horarios con su número de cupos. Al final, el botón "Continuar", desactivado hasta elegir horario.

COMPORTAMIENTO: tocar un día cambia los horarios; tocar un horario lo marca y activa "Continuar" (R6.5). Un horario con 0 cupos se ve gris con "Sin cupos" y no se puede tocar. Si el punto es Aventura Plaza y Juan elige sábado 9:00 a. m., al tocar "Continuar" abre E5 con el texto de 5.4 y ofrece Salomia a la misma hora. "‹ Volver" regresa a S06 con la sede aún elegida.

CONTENIDO REAL: cupos de la tabla de 5.3; fecha en formato "sábado 7 de noviembre"; horas "9:00 a. m.".

REGLAS QUE APLICAN: R2.3, R3.3, R3.4, R5.2, R6.5, X7. Verifica: no aparece el viernes 13 de noviembre; lunes 2:00 p. m. en Aventura no es tocable.
```
