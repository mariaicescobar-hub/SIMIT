# Stress test v2 · Datos extremos del prototipo SIMIT

## Cómo usar este archivo

- Estos datos NO reemplazan los de Guidelines.md (sección 5.3). Solo se usan cuando en Más › Herramientas de prueba el selector "Datos extremos" tiene elegido un caso.
- Con "Normal" o "Reiniciar el prototipo", la app vuelve a los datos de Guidelines.md 5.3.
- Cada caso cambia solo los datos indicados; todo lo demás sigue igual.
- Todos los textos, valores, fechas, contadores y totales de la app se calculan desde el estado compartido. Ninguna pantalla puede tener estos valores escritos a mano.
- No corrijas el diseño para que estos datos quepan mientras no se pida: el objetivo es ver qué se rompe.

## Selector "Datos extremos"

Opciones, en este orden: Normal · 11 Texto sin espacios · 12 Total gigante · 13 Caracteres especiales · 14 Cambio de año · 15 Semana Santa · 16 Fotomulta de 11 días · 17 Medianoche del último día · 18 Datos inconsistentes · 19 Red lenta · 20 Falla repetida.

## Casos

### 11. Texto sin espacios
- Correo de Juan: "juansebastian.lopezvallejo.castanedaramirez@correoempresarial.com.co" (68 caracteres, sin espacios).
- Cita confirmada y Cambio confirmado muestran: "Te enviamos la confirmación a [correo]".

### 12. Total gigante
- Juan tiene 20 multas pendientes de $60.776.457 cada una.
- Inicio muestra: "Tienes 20 multas pendientes · Total: $1.215.529.140".

### 13. Caracteres especiales
- Nombre del usuario: "María José Ñúñez D'Alessandro".
- Barrio escrito por la usuaria en el paso 1: "Valle del Lili – Ciudad 2000 (Etapa 3) 🏠".

### 14. Cambio de año
- Hoy: miércoles 30 de diciembre de 2026, 4:00 p. m.
- Multa A impuesta el miércoles 30 de diciembre de 2026. Último día del 50 %: jueves 7 de enero de 2027 (el viernes 1 de enero es festivo). Te quedan 5 días hábiles.
- Cupos: sábado 2 de enero de 2027, 9:00 a. m. en las dos sedes; lunes 4 a jueves 7 de enero, horarios normales.
- La cita CP-2026-089417 es el lunes 4 de enero de 2027, 10:00 a. m.

### 15. Semana Santa
- Hoy: viernes 19 de marzo de 2027, 6:00 p. m.
- Multa A impuesta el viernes 19 de marzo de 2027. Último día del 50 %: miércoles 31 de marzo de 2027. Festivos dentro del plazo: lunes 22 (San José), jueves 25 (Jueves Santo) y viernes 26 de marzo (Viernes Santo).
- Entre hoy y el último día hay 12 días de calendario y solo 5 días hábiles.
- Las sedes no abren los festivos: esos días no tienen cupos.

### 16. Fotomulta de 11 días hábiles
- Multa A: Multa por cámara (fotomulta) · C29 · infracción captada el lunes 7 de diciembre de 2026 · notificada el viernes 18 de diciembre de 2026.
- El plazo cuenta desde la notificación, no desde la infracción: último día del 50 %, miércoles 6 de enero de 2027. El 6 de enero de 2027 NO es festivo (Reyes Magos se pasa al lunes 11 de enero).
- Hoy: lunes 21 de diciembre de 2026. Te quedan 11 días hábiles.

### 17. Medianoche del último día
- Hoy: jueves 12 de noviembre de 2026, 11:58 p. m. Es el último día del 50 %.
- 60 segundos después de entrar a "Confirma el cambio" (S16), el reloj del prototipo pasa a viernes 13 de noviembre, 12:00 a. m. Desde ese momento el plazo del 50 % está vencido.

### 18. Datos inconsistentes del sistema
- La cita CP-2026-089417 dice "Confirmada" pero su fecha ya pasó: lunes 2 de noviembre de 2026, que además fue festivo.
- Un horario del lunes 9 de noviembre en C.C. Aventura Plaza llega con -1 cupos.
- La multa D figura como "Pagada" y todavía tiene una cita próxima.

### 19. Red lenta
- Toda acción que carga o guarda tarda 12 segundos en vez de 800 ms.

### 20. Falla repetida
- La falla de conexión ocurre 3 veces seguidas en la misma acción; la cuarta vez funciona.
