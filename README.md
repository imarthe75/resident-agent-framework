# 🌌 Resident Agent Framework: Master Blueprint (MIT License)

Este repositorio contiene la arquitectura de referencia, la infraestructura base y la lógica de control cognitivo para inicializar un **Agente Residente** con soberanía de datos local, memoria de corto plazo (**Valkey**) y memoria de largo plazo (PostgreSQL + pgvector), integrando las pautas de control cognitivo **ECC (Embedded Cognitive Control)**.

---

## 🛠️ Requisitos del Host
- Docker & Docker Compose
- Python 3.10+
- `redis` (librería cliente para interactuar con Valkey), `psycopg2-binary`, `numpy`

---

## 🚀 Guía de Inicialización (Paso a Paso)

Para incorporar este agente a cualquier proyecto nuevo del ecosistema, sigue estos pasos:

### 1. Clonar e Inicializar la Estructura Cognitiva
Copia la carpeta `.agent/` a la raíz de tu proyecto. Asegúrate de definir la estructura inicial en la raíz del nuevo desarrollo:
- `.agent/AGENT.md` (Las Leyes de tu Agente)
- `.agent/CONTEXT.md` (El propósito de tu proyecto)
- `.agent/MAP.md` (El mapa de puertos y directorios)
- `.agent/STATE.md` (La bitácora de sesión)
- `resident_agent_genesis.md` (Manual Maestro de Operaciones en la raíz del proyecto)

### 2. Levantar la Infraestructura Soberana de Memoria (Valkey + Postgres)
Copia el archivo `docker-compose.yml` en la raíz de tu proyecto y levanta las bases de datos locales:
```bash
docker compose up -d
```
> [!IMPORTANT]
> Esto creará las carpetas `./data/valkey` y `./data/postgres` en tu host. Los datos persistirán de forma segura incluso si eliminas los contenedores. Valkey reemplaza por completo a Redis para toda la gestión de caché semántica y estados de sesión de corto plazo.

### 3. Ejecutar el Rito de Inicio (Bootstrapping)
Al iniciar tu sesión de desarrollo, tu agente debe leer `.agent/STATE.md` para sincronizarse con los pendientes de la sesión anterior.

### 4. Integrar la Memoria Corta (Caché Semántica en Valkey)
Utiliza la clase `SemanticCache` para evitar llamadas redundantes a las APIs de modelos de lenguaje, comparando la similitud semántica de la consulta:
```python
from memory.semantic_cache import SemanticCache

# Conexión directa a Valkey
cache = SemanticCache(host="localhost", port=6379)
# Busca si la consulta conceptualmente ya fue respondida en Valkey
response = cache.get(query_embedding)
if not response:
    # Generar respuesta de LLM y guardarla
    cache.set(query_text, query_embedding, response_text)
```

### 5. Integrar la Memoria de Largo Plazo (Embeddings en pgvector)
Almacena resúmenes y lecciones de forma persistente en PostgreSQL:
```python
from memory.long_term_memory import LongTermMemory

db_memory = LongTermMemory()
db_memory.store_lesson("Lección aprendida: Usar UUID v7 para IDs", embedding_vector)
```

### 6. Ejecutar el Rito de Cierre e Higiene Cognitiva (ECC)
Al terminar tu sesión, ejecuta el proceso de control cognitivo:
- **Summarization**: Condensa la actividad y lecciones.
- **Bitácora**: Actualiza `.agent/STATE.md` documentando los cambios y los siguientes pasos.
- **Persistencia**: Almacena las lecciones de la sesión en la base de datos local mediante embeddings.
