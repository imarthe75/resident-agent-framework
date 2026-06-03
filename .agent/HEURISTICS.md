# 🧠 Heurística Cognitiva y Toma de Decisiones por IA (HEURISTICS.md)

Este documento define las reglas heurísticas y de razonamiento que guían la toma de decisiones de la inteligencia artificial dentro del host.

## 🔄 1. Heurística de Autocorrección (Loop Prevention)
El agente de IA debe aplicar control cognitivo para evitar bucles repetitivos de corrección de código:
- **Límite de Intentos:** Si una corrección de código (linter o test unitario) falla más de **3 veces consecutivas**, la IA debe detenerse inmediatamente.
- **Higiene de Errores:** En lugar de reintentar el mismo cambio, debe extraer el log de error completo, compararlo semánticamente contra las lecciones aprendidas en `memory.lessons` (PostgreSQL) y replantear el enfoque de diseño.

## 📉 2. Heurística de Ahorro y Degradación de Contexto (Context Saving)
Para evitar la degradación del razonamiento del modelo por saturación de contexto:
- **Summarization Proactiva:** Al interactuar con el sistema de archivos, la IA debe resumir el contenido en lugar de leer archivos masivos.
- **Búsqueda Semántica Eficiente:** Usar el `SemanticCache` de Valkey como filtro de entrada principal para interceptar consultas redundantes e idénticas en menos de 5ms.

## 🏛️ 3. Criterios de IA para la Creación de ADRs
La IA debe registrar de forma autónoma una decisión arquitectónica en `DECISIONS/` cuando:
1. Se introduzcan nuevas dependencias o librerías al arnés (`requirements.txt`).
2. Se altere la configuración de puertos o mapeo de volúmenes de datos locales en `docker-compose.yml`.
3. Se modifique una ley o regla fundamental de `.agent/AGENT.md` o `.agent/RULES.md`.
