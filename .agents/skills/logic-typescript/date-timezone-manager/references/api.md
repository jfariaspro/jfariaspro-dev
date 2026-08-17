# API de dateUtils — Referencia Completa

Archivo fuente: `src/utils/dateUtils.ts`  
Dependencias: `date-fns`, `date-fns/locale/es`

---

## Envío (Local → UTC)

### `toUTCString(date): string | null`
Convierte Date/string/number local a ISO 8601 UTC (`"…Z"`).  
Retorna `null` si la entrada es inválida o nula.

```ts
import { toUTCString } from '@/utils/dateUtils';
// payload.date = toUTCString(model.date);
```

### `toUTCTime(localTime): string`
Convierte hora local `"HH:mm"` a hora UTC `"HH:mm"`.

```ts
toUTCTime("22:00") // → "02:00" (UTC-4)
```

---

## Lectura (UTC → Local)

### `toLocalDisplay(dateString, dateFormat?): string`
Formatea un ISO UTC a string legible local.  
Default: `'dd/MM/yyyy hh:mm a'`. Retorna `'-'` si es nulo.

```ts
toLocalDisplay("2026-05-25T10:00:00.000Z")
// → "25/05/2026 06:00 a. m."

toLocalDisplay("2026-05-25T10:00:00.000Z", "dd/MM/yyyy")
// → "25/05/2026"
```

### `toLocalDateObject(dateString): Date | undefined`
Parsea ISO UTC a objeto `Date` local. Útil para DatePicker / DayPicker.

```ts
const dateObj = toLocalDateObject(row.created_at);
// <DayPicker selected={dateObj} />
```

---

## Consultas por Rango (CRÍTICO)

> Todas retornan `{ startDate: string, endDate: string }` ya en ISO UTC.

### `getDateRangeUTC(dateString?)`
Rango de 24h locales. Sin argumento = hoy.

```ts
const { startDate, endDate } = getDateRangeUTC();       // hoy
const { startDate, endDate } = getDateRangeUTC("2026-02-22"); // día específico
```

### `getThisWeekRangeUTC()`
Lunes 00:00 → Domingo 23:59:59 (local → UTC).

### `getThisMonthRangeUTC()`
Día 1 00:00 → último día 23:59:59 (local → UTC).

### `getCustomRangeUTC(start, end)`
Rango personalizado. Ambos argumentos en formato `YYYY-MM-DD`.

```ts
getCustomRangeUTC("2026-02-01", "2026-02-15")
```

---

## Utilidades Locales

### `getLocalToday(): string`
Fecha local actual como `"YYYY-MM-DD"`. Reemplaza `new Date().toISOString().split('T')[0]`.

### `getLocalNowDisplay(): string`
Fecha y hora actual legible (`"dd/MM/yyyy hh:mm a"`).

### `getUTCOffset(): string`
Offset del browser como `"-04"`, `"+05"`, etc.

### `getTimeZone(): string`
Zona horaria IANA del browser (ej: `"America/Caracas"`).
