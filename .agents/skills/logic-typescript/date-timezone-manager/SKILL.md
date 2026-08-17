---
name: date-timezone-manager
description: Reglas estrictas para manipulación de fechas y conversiones UTC en el ecosistema La Imaginaria (Venezuela UTC-4). Invocar SIEMPRE que la tarea implique enviar, guardar, leer, consultar o mostrar fechas — incluyendo formularios, filtros por rango, queries a la API/DB, inputs de calendario, y visualización de timestamps. Previene el solapamiento de fechas causado por la diferencia horaria entre la zona local y UTC.
---

# Date Timezone Manager

El servidor almacena fechas en UTC+0. La zona local es Venezuela (UTC-4). Sin conversión explícita, las operaciones nocturnas (ej. 8pm local) se registran en el día siguiente en UTC.

**Todas las utilidades están en `src/utils/dateUtils.ts`.** Para la referencia completa de cada función, consultar [references/api.md](references/api.md).

## Regla Principal

**Prohibido** usar `new Date().toISOString()`, `.toISOString().split('T')[0]`, o enviar objetos `Date` crudos al backend. Siempre usar las funciones de `dateUtils`.

## Flujo según tipo de tarea

1. Identificar la operación de fecha:
   - **¿Enviar una fecha al servidor?** → Usar `toUTCString(date)` en el payload
   - **¿Enviar una hora pura (HH:mm)?** → Usar `toUTCTime(localTime)`
   - **¿Mostrar fecha de la DB al usuario?** → Usar `toLocalDisplay(isoString, formato?)`
   - **¿Inyectar fecha en DatePicker/calendario?** → Usar `toLocalDateObject(isoString)`
   - **¿Consultar registros de un día/semana/mes?** → Usar funciones de rango (ver abajo)
   - **¿Obtener "hoy" como YYYY-MM-DD?** → Usar `getLocalToday()`

2. Importar desde `@/utils/dateUtils`
3. Aplicar la función correspondiente

## Rangos de consulta (crítico)

Consultar por fecha cruda (`WHERE date = '2026-02-22'`) pierde registros nocturnos que caen en el día siguiente en UTC.

| Necesidad | Función | Retorno |
|-----------|---------|---------|
| Hoy | `getDateRangeUTC()` | `{ startDate, endDate }` UTC |
| Día específico | `getDateRangeUTC("2026-02-22")` | `{ startDate, endDate }` UTC |
| Semana actual | `getThisWeekRangeUTC()` | Lun 00:00 → Dom 23:59 (local→UTC) |
| Mes actual | `getThisMonthRangeUTC()` | Día 1 → último día (local→UTC) |
| Rango personalizado | `getCustomRangeUTC(start, end)` | YYYY-MM-DD → rango UTC |

Siempre pasar `startDate` y `endDate` como filtros `gte`/`lte` a la API.

## Anti-patrones comunes

```diff
- // ❌ Enviar fecha sin conversión
- payload.date = selectedDate;
+ // ✅ Convertir a UTC
+ payload.date = toUTCString(selectedDate);

- // ❌ Obtener "hoy" con toISOString (falla de noche)
- const today = new Date().toISOString().split('T')[0];
+ // ✅ Fecha local real
+ const today = getLocalToday();

- // ❌ Mostrar fecha UTC directamente
- <span>{row.created_at}</span>
+ // ✅ Mostrar en hora local
+ <span>{toLocalDisplay(row.created_at)}</span>

- // ❌ Filtrar por igualdad de fecha
- where: { date: '2026-02-22' }
+ // ✅ Filtrar por rango UTC
+ const { startDate, endDate } = getDateRangeUTC('2026-02-22');
+ where: { date: { gte: startDate, lte: endDate } }
```
