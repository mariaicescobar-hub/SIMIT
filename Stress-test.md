# Stress test · Datos extremos del prototipo SIMIT

## Cómo usar este archivo

- Estos datos NO reemplazan los de Guidelines.md (sección 5.3). Solo se usan cuando en Más › Herramientas de prueba el selector "Datos extremos" tiene elegido un caso.
- Con "Normal" o "Reiniciar el prototipo", la app vuelve a los datos de Guidelines.md 5.3.
- Cada caso cambia solo los datos indicados; todo lo demás sigue igual.
- No corrijas el diseño para que estos datos quepan mientras no se pida: el objetivo es ver qué se rompe.

## Selector "Datos extremos"

Opciones, en este orden: Normal · 1 Nombre largo · 2 Sede con nombre largo · 3 Observación de 520 caracteres · 4 Multa máxima · 5 Multa mínima · 6 Campos vacíos · 7 Sin imágenes · 8 Cero resultados · 9 Cuarenta resultados · 10 Último día y festivos.

## Casos

### 1. Nombre largo (55 caracteres)
- Nombre del usuario: "Juan Sebastián de Jesús López-Vallejo Castañeda Ramírez".

### 2. Sede con nombre largo (72 caracteres)
- Nombre de la Sede Salomia: "Centro Integral de Atención al Conductor del Valle · Sede Norte La Flora".
- Aparece en tarjetas de Citas, selector de sedes, detalle de la cita, resumen y botón del error de horario lleno.

### 3. Observación de 520 caracteres
- La multa A tiene el campo "Observaciones del agente", visible en el detalle de la cita:
  "El conductor del vehículo de placa CLX 472 transitaba por la Avenida 3 Norte en sentido sur-norte a una velocidad registrada de 78 km/h en una zona señalizada con límite de 50 km/h, a la altura de la Calle 44 Norte, frente a la estación de servicio. Se le hizo la señal de pare con el pito y el bastón, se detuvo a 60 metros. Presentó cédula, licencia vigente, SOAT y revisión técnico-mecánica al día. Manifestó que tenía prisa por una cita médica. Se le explicó el procedimiento y el derecho al curso para el descuento."

### 4. Multa máxima
- Multa A: valor $60.776.457 (1.440 salarios mínimos diarios de 2026). Pagas $30.388.229 con el curso.

### 5. Multa mínima
- Multa A: valor $168.813 (4 salarios mínimos diarios de 2026). Pagas $84.407 con el curso. Ahorro real: $19.406 (descontando el curso de $65.000).

### 6. Campos vacíos
- Sin dirección de Casa guardada.
- Sede Salomia sin dirección.
- Multa A sin placa.

### 7. Sin imágenes
- La Sede Salomia no tiene mapa.
- La cita CP-2026-089417 todavía no tiene código QR.

### 8. Cero resultados
- Juan no tiene ninguna cita (ni próximas ni anteriores).
- Ninguna sede tiene cupos entre hoy y el jueves 12 de noviembre.

### 9. Cuarenta resultados
- 40 multas: 6 con descuento vigente y 34 sin descuento. Números consecutivos desde 76001000000045218700. Infracciones alternadas: C29 · Conducir a velocidad superior a la máxima permitida; C02 · Estacionar en sitio prohibido; B01 · Conducir sin llevar la licencia de conducción.
- 40 citas anteriores entre enero y octubre de 2026, en estado Asististe o Cancelada, en Sede Salomia y C.C. Aventura Plaza.
- 40 horarios disponibles el lunes 9 de noviembre entre las dos sedes.

### 10. Último día y festivos
- Hoy: jueves 12 de noviembre de 2026, 7:00 a. m. Es el último día del 50 % de la multa A.
- La cita CP-2026-089417 es hoy a las 2:00 p. m. (menos de 24 horas).
- Multa nueva: N.° 76001000000045330118 · C29 · impuesta el viernes 13 de noviembre de 2026 · último día del 50 %: lunes 23 de noviembre (el lunes 16 es festivo y no cuenta).
- Una cita anterior: miércoles 30 de septiembre de 2026, de 2:00 p. m. a 4:00 p. m., Sede Salomia, Asististe.
