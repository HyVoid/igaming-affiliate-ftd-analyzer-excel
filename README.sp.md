[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla de Excel para afiliados y compra de medios de iGaming: calculadora de coste por FTD (C/FTD) y analizador de cohortes de tráfico
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/53808d1c-6d13-4502-a81d-ef846d596902" />
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/268198c3-9abc-4547-9c47-42f447f390e6" />

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346.svg)
![Category](https://img.shields.io/badge/Tool-iGaming%20UA%20%26%20Affiliate%20BI-2251FF.svg)

**Un analizador de rendimiento para afiliados y compra de medios de iGaming, una calculadora de coste por depositante primerizo (C/FTD / CPFTD) y una plantilla de Excel para decisiones tempranas sobre cohortes. Diseñada para gestores de adquisición de usuarios (UA) de casinos y casas de apuestas, directores de afiliados y especialistas en marketing de rendimiento, para evaluar cohortes de jugadores D3/D4/D7, aislar bloqueos de cuentas publicitarias y fraude por abuso de bonos, y automatizar la asignación de presupuesto con `SCALE / KEEP / STOP / REVIEW`—disponible como simulador gratuito en el navegador (sin registro) y como libro de Microsoft Excel descargable.**

> **Accede a las herramientas de análisis de tráfico y decisiones de C/FTD de iGaming**
>
> - 🌐 **[Lanza el analizador gratuito de C/FTD y tráfico de iGaming basado en navegador](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)** — Audita cohortes tempranas de proveedores, prueba umbrales mínimos de muestra de FTD y simula reglas de presupuesto de compra de medios directamente en tu navegador sin instalar software ni crear una cuenta.
> - 📥 **[Descarga el libro de Excel para afiliados y compra de medios de iGaming (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** — Obtén la plantilla completa de hoja de cálculo para revisiones presupuestarias quincenales sin conexión, calibración de referencias multi-GEO y backtesting histórico del ROI del Día 30.
>
> *Sin registro. Sin instalación. Acceso gratuito desde el navegador. *

---

## Métricas clave de adquisición de usuarios de iGaming y puntos críticos de tráfico que resuelve

En lugar de juzgar a los proveedores de tráfico por el volumen bruto de registros o por picos tempranos ruidosos de CPA, este marco basado en reglas conecta la progresión temprana del embudo de jugadores con puertas de muestra estadísticas. Así es como el analizador vincula los **puntos críticos de compra de medios y afiliación de iGaming** con métricas auditables de **FTD y retención**:

| Punto crítico de UA y afiliación de iGaming | Mecanismo de evaluación y filtrado basado en reglas | KPIs clave de casino y apuestas deportivas supervisados |
| :--- | :--- | :--- |
| **Coste por depositante primerizo (C/FTD) descontrolado** | Compara el coste de adquisición del proveedor con matrices de objetivos específicos por GEO y plataforma en mercados de Tier-1 a Tier-3. | Coste por FTD (`C/FTD` / `CPFTD`), desviación del C/FTD objetivo (%), coste por registro (`CPR`) |
| **Volumen de registros vanidoso y conversión de embudo débil** | Rastrea la progresión del jugador tras el registro inicial para aislar fuentes de tráfico que no se convierten en depositantes recurrentes. | Registros activos netos, tasa de conversión de registro a FTD (%), ratio de depósito recurrente, retención temprana de jugadores |
| **Escalado o eliminación prematura en cohortes pequeñas** | Aplica umbrales mínimos de gasto y requisitos de muestra de FTD en el Día 3, Día 4 y Día 7 antes de activar cambios de presupuesto. | Umbral mínimo de gasto (mínimo de $300), suficiencia de muestra de FTD (`D3 >= 10`, `D4 >= 15`, `D7 >= 30`) |
| **Bloqueos de cuentas publicitarias, cloaking y fraude por abuso de bonos** | Separa el bajo rendimiento real del proveedor de cuentas publicitarias restringidas, postbacks rotos o fraude de depósito básico. | Estado de salud de la cuenta publicitaria (`Restricted` / `Banned`), indicadores de riesgo de fraude, alertas de anomalías de cero depósitos recurrentes |
| **Asignaciones subjetivas de presupuesto de compra de medios** | Traduce métricas de cohortes con múltiples filtros en comandos deterministas y explicables de enrutamiento de presupuesto con rastro de auditoría. | Indicadores de acción automatizados `SCALE` (+30 % de presupuesto), `KEEP`, `STOP` o `REVIEW` + ID de la regla activada |
| **Umbrales de corte temprano no validados** | Retrovalida las decisiones del Día 3–7 contra el rendimiento maduro de la cohorte del Día 30 para verificar si las reglas tempranas eliminan jugadores rentables de alto valor. | Validación de cohortes maduras del Día 30, tasa de falsos positivos de `STOP`, alineación de LTV/ROAS entre etapa temprana y madura |

---

## Tutorial paso a paso: cómo auditar proveedores de tráfico de iGaming y automatizar decisiones de presupuesto

El analizador opera con un **ciclo de revisión quincenal de UA de iGaming repetible**: configura tus referencias de GEO/canal una vez, pega las exportaciones brutas del tracker, revisa los indicadores de acción activados por reglas y retrovalida contra datos maduros de jugadores del Día 30.

### Paso 1: Configurar referencias de GEO, puertas de muestra y reglas de C/FTD
Abre la pestaña dedicada `Configuration & Thresholds` para establecer la economía unitaria de tu operador y las barreras estadísticas:

- **Suelo de protección de gasto mínimo:** Valor predeterminado de `300 unidades monetarias` (evita matar prematuramente campañas de prueba con poco gasto).
- **Puertas de suficiencia de muestra de FTD por cohorte:** Requiere al menos `10 FTD al Día 3`, `15 FTD al Día 4` y `30 FTD al Día 7` antes de activar las reglas de rendimiento.
- **Disparadores automáticos de acciones de presupuesto:**
  - Umbral de `SCALE`: cuando el `C/FTD real <= 85%` del objetivo aplicable de GEO/plataforma (activa una sugerencia de aumento de asignación de presupuesto del `+30%`).
  - Umbral de `STOP`: cuando el `C/FTD real >= 125%` del objetivo aplicable (siempre que se cumpla la suficiencia de muestra).

*(Nota: los valores predeterminados son puntos de referencia ilustrativos. Calibra los objetivos según tus márgenes reales de NGR de casino/apuestas, la jurisdicción de licencia y los costes de procesamiento de pagos.)*

### Paso 2: Importar exportaciones de postbacks S2S, afiliados y plataformas publicitarias
Exporta los registros de rendimiento de cohortes desde tu software de seguimiento de afiliados (p. ej., Affilka, Income Access, Cellxpert, Scaleo), MMP (AppsFlyer, Adjust) o redes publicitarias (Meta, Google Ads, Telegram, DSP programáticos) y péguelos en la hoja de entrada:

- **Metadatos de campañas y proveedores:** ID de proveedor/afiliado, GEO/mercado objetivo, plataforma de tráfico, fecha de lanzamiento y fecha de instantánea de reporte.
- **Métricas de parte superior del embudo y gasto:** Gasto publicitario total, impresiones, clics y registros netos de jugadores activos.
- **Señales de monetización y riesgo de jugadores:** Depósitos primerizos (recuento de FTD), recuentos de depósitos recurrentes, retención temprana de la cohorte, estado de salud de la cuenta publicitaria y anotaciones manuales de riesgo de fraude.

*(Mantén ventanas de atribución y unidades monetarias consistentes en todas las filas importadas.)*

### Paso 3: Auditar los KPIs de cohortes y ejecutar acciones de `SCALE / KEEP / STOP / REVIEW`
Navega a las vistas de `Decision Engine & KPI Dashboard` para inspeccionar la evaluación automatizada de cada lote de proveedores activos:

- **Comprobación de suficiencia estadística:** Verifica si un C/FTD alto es un fallo genuino (`STOP`) o simplemente una cohorte con muestra insuficiente dirigida a `KEEP / MONITOR`.
- **Puerta operativa y de fraude:** Comprueba si las campañas con FTD sospechosamente baratos pero cero depósitos recurrentes—o cuentas publicitarias restringidas—han sido interceptadas y dirigidas a `REVIEW`.
- **Auditoría de acciones explicables:** Lee la regla exacta activada detrás de cada recomendación antes de ajustar los límites de compra de medios o los acuerdos de CPA con afiliados.

### Paso 4: Retrovalidar contra resultados maduros del Día 30 y exportar a Excel
Ejecuta este flujo de trabajo dos veces por semana durante las fases activas de campaña. Una vez que las cohortes históricas de jugadores alcanzan la **madurez del Día 30**, registra sus resultados realizados en la vista de validación histórica para verificar si tus umbrales de C/FTD del Día 3 y Día 7 predijeron con precisión la calidad del jugador a largo plazo.

> 🎰 **¿Listo para estandarizar tus revisiones bisemanales de tráfico y afiliación de iGaming?** 
> Después de probar las puertas de decisión en el **[analizador gratuito de C/FTD de iGaming basado en navegador](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)**, descarga el **[libro de Excel reutilizable para evaluación de proveedores de iGaming (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** para mantener registros de auditoría sin conexión, almacenar tus matrices de referencia multi-GEO propias y ejecutar backtests recurrentes de cohortes con tu equipo de UA.

---

## Por qué construí este marco de evaluación de tráfico de iGaming basado en reglas

En la adquisición de usuarios de iGaming de alta velocidad, los informes tempranos de cohortes crean una trampa operativa costosa: **las métricas parecen matemáticamente precisas mucho antes de ser estadísticamente fiables para justificar un escalado o un recorte de presupuesto.**

Considera tres modos comunes de fallo durante una revisión temprana de campaña:
1. **La ilusión del registro barato:** Una fuente de tráfico entrega un volumen masivo de registros con CPI/CPR mínimos, pero convierte a casi cero depositantes primerizos (FTDs).
2. **La cohorte VIP de combustión lenta:** Un proveedor de PPC o SEO parece caro en el C/FTD del Día 3, pero atrae jugadores de apuestas deportivas o slots de alta intención que vuelven a depositar intensamente hacia el Día 14.
3. **Disrupciones de plataforma y seguimiento:** Una agencia de compra de medios históricamente sólida muestra un pico repentino de C/FTD—no porque la calidad del tráfico haya degradado, sino porque una cuenta publicitaria fue sometida a una restricción oculta o un píxel de postback S2S se rompió.

### La "trampa de la cohorte del Día 3": Proveedor A vs. Proveedor B
Imagina una revisión de presupuesto del Día 3 donde el **referente de coste por FTD (C/FTD) objetivo es de $40**:
- **El Proveedor A** ha gastado **$300** y generado **10 FTDs** $\rightarrow$ `C/FTD = $30` (cumple la puerta de muestra del Día 3 de 10 FTD).
- **El Proveedor B** ha gastado **$100** y generado **2 FTDs** $\rightarrow$ `C/FTD = $50` (25 % peor que el referente de $40).

En una hoja de cálculo ingenua, un comprador de medios termina inmediatamente al Proveedor B por exceder el CPA objetivo y escala al Proveedor A. Sin embargo, el Proveedor B solo ha generado **2 FTDs**—muy por debajo del suelo estadístico de muestra de 10 FTD y del umbral de protección de gasto de $300. Cortar al Proveedor B en el Día 3 es una **terminación prematura impulsada por el ruido de muestras pequeñas**. Mientras tanto, antes de dar al Proveedor A un 30 % más de presupuesto, el analista aún necesita verificar que esos 10 FTDs no sean abusadores de bonos básicos con cero depósitos recurrentes.

Construí este analizador para convertir esa lógica de diagnóstico exacta en un **marco de decisión repetible y basado en reglas**—eliminando los debates intuitivos durante las reuniones quincenales de presupuesto.

---

## Hojas de cálculo ad hoc de afiliación vs. motor de decisiones de iGaming basado en reglas

| Dimensión de evaluación de UA de iGaming | Trackers ad hoc tradicionales y revisiones intuitivas | Analizador de proveedores de iGaming basado en reglas (esta herramienta) |
| :--- | :--- | :--- |
| **Decisiones de escalado temprano (Día 3–7)** | Los compradores de medios escalan presupuestos agresivamente basándose en unos pocos FTDs tempranos baratos, arriesgando una alta exposición a tráfico de bajo LTV. | Aplica **puertas de muestra de FTD de D3 (10), D4 (15) y D7 (30)** más comprobaciones de depósito recurrente antes de emitir una bandera de `SCALE` (+30 %). |
| **Cortes de proveedores con bajo rendimiento** | Afiliados o conjuntos de anuncios prometedores se pausan prematuramente debido a una alta varianza de C/FTD en volúmenes de gasto diminutos. | Aplica un **suelo de protección de gasto mínimo de $300** y una comprobación de suficiencia de muestra para separar el ruido estadístico del fallo real (`STOP`). |
| **Detección de fraude básico y abuso de bonos** | Los registros baratos y los depósitos mínimos básicos enmascaran anillos de bots automatizados o tráfico de incentivos con cero retención. | Contrasta la eficiencia de C/FTD con **la progresión de depósitos recurrentes, la retención temprana y las anotaciones de fraude** para activar `REVIEW`. |
| **Bloqueos de cuentas publicitarias y caídas de postbacks** | Las caídas repentinas en la conversión de FTD causadas por restricciones de cuentas de Meta/Google o errores de seguimiento S2S se atribuyen a la calidad del proveedor. | **Puertas dedicadas de salud de cuenta y riesgo operativo** aíslan cuentas restringidas para remediación manual en lugar de terminación ciega. |
| **Referenciación multi-GEO y multicanal** | Los analistas aplican objetivos mentales de C/FTD inconsistentes entre mercados Tier-1 (Reino Unido/UE), LatAm (Brasil/México) y asiáticos. | Centraliza una **matriz de referencias configurable GEO × Plataforma** para que cada proveedor se evalúe contra objetivos regionales estandarizados. |
| **Calibración de umbrales y backtesting del Día 30** | Las reglas de corte temprano del Día 3/Día 7 nunca se auditan contra la rentabilidad madura de la cohorte de 30 días. | Vincula lotes de decisiones tempranas con **registros de resultados maduros del Día 30** para auditar falsos positivos y refinar las bandas de tolerancia de C/FTD. |

---

## Para quién está diseñado este analizador de iGaming: roles y flujos de trabajo

Este kit de evaluación de formato dual (Navegador + Excel) está diseñado para equipos de marketing de rendimiento y comerciales de casinos en línea, casas de apuestas deportivas y agencias de iGaming:

- **Gestores de adquisición de usuarios (UA) y marketing de rendimiento de iGaming:** Estandariza tus reuniones quincenales de asignación de presupuesto. Usa la **calculadora de decisiones de coste por FTD (C/FTD)** para defender acciones de `SCALE`, `KEEP` y `STOP` con evidencia transparente y basada en reglas en Meta, Google, TikTok y DSP programáticos.
- **Gestores de afiliados de casinos y apuestas deportivas:** Audita objetivamente a los socios de afiliados externos y las redes de subafiliados. Usa el **analizador de calidad de cohortes tempranas** para detectar el abuso de CPA básico (afiliados que entregan FTDs de depósito mínimo con cero depósitos recurrentes) antes de pagar comisiones sin tope.
- **Agencias de compra de medios y equipos de arbitraje:** Protege tus presupuestos publicitarios en canales de tráfico volátiles. Usa el **libro de gasto mínimo y puertas de muestra** para evitar que compradores de medios junior maten campañas de alto potencial durante la fase de aprendizaje del Día 3 o escalen cuentas publicitarias restringidas.
- **Analistas de BI, responsables de crecimiento y equipos de CRM de iGaming:** Une la brecha entre las exportaciones brutas de atribución y los informes ejecutivos. Usa la **hoja de backtesting histórico del Día 30** para calibrar si tus umbrales tempranos de C/FTD D3/D7 realmente se correlacionan con los ingresos netos de juego (NGR) maduros de 30 días.
- **CMOs, directores de crecimiento y propietarios de presupuesto:** Establece gobernanza centralizada sobre el gasto de adquisición externo sin esperar meses para construir pipelines de BI de almacén de datos personalizados.

---

## Casos de uso del sector y escenarios de adquisición de iGaming de cola larga

Ya sea que lances un nuevo casino cripto, escales una casa de apuestas LatAm localizada o gestiones más de 50 afiliados CPA/Hybrid, este marco se adapta a escenarios específicos de tráfico de iGaming:

### 1. Auditoría de calidad de acuerdos CPA e Hybrid de afiliados (prevención del fraude básico)
En las estructuras de afiliación CPA e Hybrid, las fuentes de tráfico poco escrupulosas suelen jugar con el umbral de depósito básico—generando FTDs baratos que nunca realizan una segunda apuesta. Al evaluar **los ratios de depósito recurrente y la retención temprana junto con el C/FTD**, los gestores de afiliados pueden dirigir lotes de tráfico sospechosos a `REVIEW` antes de aprobar aumentos de límite.

### 2. Compra de medios de alta volatilidad en redes sociales e in-app (Meta, Google, Telegram y Pop/Push)
Las campañas de medios pagados en verticales restringidos de iGaming enfrentan bloqueos frecuentes de cuentas publicitarias, rechazos creativos y caídas de seguimiento de atribución. La **Puerta de Salud de Cuenta** del analizador garantiza que cuando un proveedor de alto rendimiento sufre una restricción del lado de la plataforma, la campaña se marque para protección operativa en lugar de clasificarse erróneamente como tráfico de baja calidad.

### 3. Calibración de lanzamientos de apuestas y casinos multi-GEO (Tier-1 vs. mercados emergentes)
Un C/FTD de $35 puede ser altamente rentable en jurisdicciones reguladas europeas o norteamericanas, pero catastrófico en mercados emergentes de alto volumen y bajo ARPU (como Brasil, India o LatAm). Usa la **Matriz de Referencias Mercado × Plataforma** para normalizar la evaluación de proveedores entre diversas monedas y economías regionales de jugadores.

---

### Alcance operativo y advertencia analítica
*Este kit de herramientas es un modelo de apoyo a la decisión para cohortes tempranas basado en reglas—no un tracker de atribución S2S en tiempo real, ni un cortafuegos antifraude, ni un motor predictivo de LTV a nivel de jugador, ni un libro contable financiero estatutario. Un C/FTD favorable en el Día 3 o Día 7 no garantiza los ingresos netos de juego (NGR) ni la rentabilidad neta del Día 30. Asegúrate siempre de que los datos importados usen ventanas de atribución y unidades monetarias consistentes, y combina los resultados de la hoja de cálculo con una revisión experimentada de riesgos y cumplimiento.*

---

## Sobre el creador

Creo herramientas ligeras e inspeccionables de apoyo a la decisión para flujos de trabajo operativos de alto riesgo donde demasiadas variables en movimiento se pierden en hojas de cálculo desconectadas. La pregunta guía es simple: **¿qué evidencia exacta y barreras estadísticas deben estar en un solo lugar para tomar la próxima decisión de presupuesto con confianza?**

## Detalles técnicos

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>

<details>
<summary><strong>Arquitectura del libro</strong></summary>

El analizador utiliza cinco hojas de trabajo conectadas. Cada hoja tiene una responsabilidad definida, separando la configuración, la evidencia bruta, el cálculo de métricas, las reglas de decisión y la revisión directiva.

| Hoja de trabajo | Responsabilidad | Salida principal |
|---|---|---|
| `01_Config_Rules` | Configuración central de moneda, referencias, umbrales de muestra, reglas de riesgo y multiplicadores de acción | Parámetros operativos ajustables |
| `02_Raw_Input` | Almacena datos de adquisición, conversión, retención, gasto y riesgo a nivel de proveedor | Registros fuente validados |
| `03_KPI_Engine` | Calcula días transcurridos, hitos de evaluación, costes de adquisición, tasas de embudo, retención y CP Score | Métricas de rendimiento comparables |
| `04_Decision_Engine` | Aplica en secuencia suficiencia de muestra, puertas de riesgo y umbrales de rendimiento | SCALE, KEEP, STOP o REVIEW |
| `05_Exec_Dashboard` | Presenta la instantánea ejecutiva, la lista de acciones y la revisión histórica del Día 30 | Evidencia de revisión presupuestaria y backtesting de decisiones |

El flujo de datos previsto es:

```text
01_Config_Rules
       │
       ├──────────────────────────────┐
       ▼                              ▼
02_Raw_Input ──► 03_KPI_Engine ──► 04_Decision_Engine
                                          │
                                          ▼
                                  05_Exec_Dashboard
                                          │
                                          ▼
                                  Day 30 Backtesting
                                          │
                                          ▼
                              Recalibrate operating rules
```

Los valores de configuración alimentan los cálculos y las reglas de decisión. Los registros brutos aportan las observaciones. El motor de KPI transforma esas observaciones en métricas comparables, y el motor de decisiones aplica las reglas configuradas. El dashboard presenta los resultados para su revisión.

Esta separación es intencionada: cambiar un referente no debería requerir reconstruir la lógica de cálculo del libro, y una métrica de rendimiento favorable no debería eludir una condición de riesgo bloqueante.

<details>
<summary><strong>Dependencia entrada-salida</strong></summary>

| Entrada o condición | Cálculo afectado | Implicación para la decisión |
|---|---|---|
| Gasto y recuento de FTD | Coste por FTD | Comparación de costes de adquisición |
| Recuento de NAR | Coste por NAR | Coste de adquisición del evento NAR configurado |
| Recuentos de registro, FTD y STD | Tasas de conversión del embudo | Identifica fugas de conversión |
| Recuentos retenidos del Día 2, Día 3 y Día 7 | Tasas de retención | Añade evidencia temprana de calidad |
| Fecha de lanzamiento y fecha de datos | Días activos e hito de evaluación | Determina si la cohorte ha alcanzado un punto de control |
| Estado de cuenta y riesgo de fraude | Puerta de riesgo | Puede bloquear o calificar recomendaciones basadas en rendimiento |
| Mercado y plataforma | Búsqueda de referencia objetivo | Establece el objetivo de comparación aplicable |
| Ingresos maduros del Día 30 | Revisión histórica de resultados | Apoya la evaluación retrospectiva de reglas |

</details>

</details>

<details>
<summary><strong>La lógica de negocio detrás del motor de decisiones</strong></summary>

El sistema no considera un coste de adquisición bajo como prueba suficiente de la calidad del proveedor. Separa cuatro preguntas que deben responderse en orden:

1. **¿Hay suficiente evidencia?** Una muestra pequeña puede hacer que un proveedor parezca inusualmente eficiente o ineficiente. El analizador comprueba el hito de evaluación relevante y el requisito mínimo de muestra antes de tratar el resultado de rendimiento como apto para decisión.
2. **¿Hay condiciones que anulan el rendimiento?** Las restricciones de cuenta, los indicadores de fraude y otras condiciones de riesgo configuradas pueden bloquear o calificar una acción basada en rendimiento.
3. **¿Cómo se compara el coste observado con el referente apropiado?** El motor compara el coste por FTD con el objetivo para el mercado y la plataforma relevantes, en lugar de depender de un umbral universal de coste de adquisición.
4. **¿Qué acción está justificada ahora?** El motor devuelve una recomendación estructurada y una razón, facilitando la revisión de la decisión y la distinción entre una restricción operativa y un problema de rendimiento.

Las etiquetas de decisión significan:

| Acción | Interpretación |
|---|---|
| `SCALE` | La evidencia disponible satisface la regla de rendimiento configurada y ninguna condición de riesgo bloqueante impide escalar |
| `KEEP` | Continuar monitoreando sin un aumento de presupuesto impulsado por rendimiento ni una recomendación de detención |
| `STOP` | Detener o bloquear la asignación adicional bajo las reglas de rendimiento o riesgo configuradas |
| `REVIEW` | Resolver una condición de riesgo u obtener revisión humana antes de tratar el resultado de rendimiento como ejecutable |

Estas son recomendaciones, no acciones automatizadas de pago, cuenta o campaña. Las decisiones finales siguen sujetas al contexto operativo y a la revisión humana.

</details>

<details>
<summary><strong>Tres trampas que atrapan incluso a equipos de adquisición experimentados</strong></summary>

<details>
<summary><strong>Trampa 1: Tratar un coste por FTD bajo como prueba de calidad</strong></summary>

**La decisión:** Aumentar el presupuesto de un proveedor porque su coste temprano por FTD está por debajo del objetivo.

**El defecto oculto:** El proveedor puede tener muy pocos FTDs, un comportamiento débil de depósito recurrente, mala retención o un indicador de riesgo a nivel de cuenta.

| Enfoque incorrecto | Enfoque corregido |
|---|---|
| Clasificar proveedores solo por coste por FTD | Comprobar la suficiencia de muestra y el estado de riesgo antes de comparar costes |
| Escalar inmediatamente al proveedor más barato | Escalar solo cuando se cumpla la regla de rendimiento configurada y no se aplique una puerta de riesgo bloqueante |

Un coste por FTD bajo mide la eficiencia de adquisición para un evento. No establece el valor posterior ni descarta el fraude. El proceso corregido preserva la señal de coste mientras exige suficiente evidencia y el cumplimiento de las comprobaciones de riesgo aplicables.

**Implicación para la decisión:** Una cohorte barata pero inmadura o arriesgada debe permanecer bajo observación o revisión en lugar de recibir un aumento automático de presupuesto.

<details>
<summary><strong>Referencia de fórmula y regla</strong></summary>

Conceptualmente:

```text
Cost per FTD = Spend / FTD Count
```

Una decisión de escalado basada en rendimiento se evalúa solo después de las comprobaciones de suficiencia de muestra y riesgo. En el marco configurado, la condición de escala es:

```text
Cost per FTD <= Target Cost per FTD × Scale Ratio
```

La configuración fuente utiliza una ratio de escala de ejemplo del `85%`. Esta es una regla configurable, no un estándar universal del sector.

</details>

</details>

<details>
<summary><strong>Trampa 2: Detener a un proveedor antes de que la muestra sea suficiente</strong></summary>

**La decisión:** Detener a un proveedor porque su coste de adquisición inicial excede el objetivo.

**El defecto oculto:** La cohorte puede no haber alcanzado aún el hito de evaluación requerido, y un pequeño número de conversiones puede producir estimaciones de coste inestables.

| Enfoque incorrecto | Enfoque corregido |
|---|---|
| Aplicar el mismo juicio de rendimiento a cada edad | Evaluar contra el hito actual de la cohorte |
| Tratar la evidencia faltante como bajo rendimiento confirmado | Devolver `KEEP` cuando la muestra es insuficiente, a menos que una regla de riesgo de mayor prioridad requiera otra acción |

El analizador utiliza tamaños mínimos de muestra de FTD configurables para el Día 3, Día 4 y Día 7. El ejemplo suministrado utiliza mínimos de 10, 15 y 30 FTDs respectivamente. Una cohorte que no ha cumplido el requisito relevante no se considera automáticamente un fracaso.

Esto no es permiso para ignorar una restricción de cuenta genuina o un fraude confirmado. Las reglas de riesgo se evalúan por separado y pueden tener prioridad sobre la decisión de rendimiento basada en muestra.

**Implicación para la decisión:** Preserva la distinción entre «aún no hay suficiente evidencia» y «hay suficiente evidencia para detener». Las dos condiciones no deberían producir la misma conclusión.

<details>
<summary><strong>Referencia de la regla de suficiencia de muestra</strong></summary>

Las reglas de punto de control previstas son:

| Punto de control de evaluación | Recuento mínimo de FTD de ejemplo |
|---|---:|
| Día 3 | 10 |
| Día 4 | 15 |
| Día 7 | 30 |
| Día 30 | Revisión de cohorte madura |

Los valores configurados deben validarse contra las celdas de parámetros del libro real antes de la puesta en marcha operativa. La madurez del Día 30 no garantiza por sí sola que todos los campos de ingresos o atribución estén completos.

</details>

</details>

<details>
<summary><strong>Trampa 3: Confundir riesgo operativo con mal rendimiento de adquisición</strong></summary>

**La decisión:** Reducir o detener a un proveedor porque el dashboard muestra un rendimiento débil o incompleto.

**El defecto oculto:** El resultado puede verse afectado por una cuenta bloqueada o restringida, un fraude sospechoso, fallos de seguimiento, atribución retrasada u otras condiciones operativas. Una métrica de rendimiento por sí sola no puede identificar la causa.

| Enfoque incorrecto | Enfoque corregido |
|---|---|
| Interpretar cada resultado desfavorable como bajo rendimiento del proveedor | Inspeccionar el estado de la puerta de riesgo y la razón de activación |
| Continuar escalando porque la métrica de coste parece favorable | Respetar las condiciones de riesgo bloqueantes incluso cuando la métrica de coste es atractiva |
| Tratar una advertencia como un hallazgo confirmado | Distinguir condiciones marcadas, sospechosas y confirmadas |

La puerta de riesgo separa las condiciones bloqueantes de las situaciones que requieren investigación humana. Una cuenta bloqueada o un fraude confirmado pueden bloquear la asignación adicional. Una cuenta marcada o una condición de fraude sospechoso pueden requerir revisión. Una regla configurada de protección de gasto bajo puede evitar una detención prematura basada en rendimiento.

**Implicación para la decisión:** La siguiente acción debería abordar el modo de fallo real—acceso a la cuenta, integridad del seguimiento, calidad del tráfico, madurez de la muestra o economía de la adquisición—en lugar de usar cambios de presupuesto como sustituto del diagnóstico.

<details>
<summary><strong>Interpretación de la puerta de riesgo</strong></summary>

El marco fuente incluye las siguientes condiciones:

| Condición | Manejo previsto |
|---|---|
| El estado de la cuenta es `BANNED` | Condición bloqueante; recomendar `STOP` |
| El estado de la cuenta es `FLAGGED` | Advertencia que requiere interpretación cuidadosa |
| El riesgo de fraude es `CONFIRMED` | Condición bloqueante; recomendar `STOP` |
| El riesgo de fraude es `SUSPECTED` | Revisión manual |
| La muestra de FTD es suficiente pero la tasa de depósito recurrente está por debajo del mínimo configurado | Condición de revisión |
| El gasto está por debajo del umbral mínimo de gasto configurado | Protección contra acciones prematuras basadas en rendimiento |

La precedencia exacta, los valores de estado permitidos y el comportamiento de las fórmulas deben verificarse contra el libro desplegado antes de su uso. La tabla describe el marco de decisión previsto, no una garantía de que cada estado de plataforma externa pueda detectarse automáticamente.

</details>

</details>

</details>

<details>
<summary><strong>Escenario de ejemplo</strong></summary>

Considera un proveedor hipotético adquirido a través de una combinación específica de mercado y plataforma. Las cifras siguientes ilustran cómo debe interpretarse el marco; no son resultados reportados de una campaña real.

| Métrica | Valor de ejemplo |
|---|---:|
| Gasto | 3,600 |
| Recuento de FTD | 40 |
| Coste objetivo por FTD | 100 |
| Recuento de depósitos recurrentes | 12 |
| Recuento retenido del Día 3 | 20 |
| Estado de la cuenta | Activo |
| Riesgo de fraude | Ninguno reportado |

El coste por FTD es:

```text
3,600 / 40 = 90
```

Si la ratio de escala configurada es del 85 %, el umbral de escala es:

```text
100 × 85% = 85
```

El coste observado de 90 está por debajo del objetivo de 100, pero **no** está en o por debajo del umbral de escala de 85. Bajo este ejemplo, la métrica de coste por sí sola no activa `SCALE`.

La tasa de depósito recurrente es:

```text
12 / 40 = 30%
```

La tasa de retención del Día 3 es:

```text
20 / 40 = 50%
```

Estas cifras añaden contexto sobre el comportamiento posterior, pero no deben interpretarse como tasas universalmente buenas o malas. Su significado depende del mercado, la plataforma, el producto, la ventana de atribución y el referente configurado relevantes.

El motor comprueba a continuación si la cohorte ha alcanzado el punto de control relevante, si la muestra es suficiente y si alguna puerta de riesgo bloquea o redirige la decisión. Si la muestra es suficiente y no se aplica ninguna condición de revisión, el resultado de coste cae entre los umbrales de ejemplo de escala y detención, por lo que la acción basada en rendimiento es `KEEP`.

La conclusión operativa no es «este proveedor es bueno» ni «este proveedor es malo». Es: **el coste observado es mejor que el objetivo pero no cumple la condición de escala configurada; continúa monitoreando a menos que una condición de riesgo separada cambie la acción.**

</details>

<details>
<summary><strong>Referencia de fórmulas</strong></summary>

Las siguientes fórmulas describen la lógica de cálculo prevista. Son patrones de referencia, no un sustituto de la inspección de las fórmulas exactas de una versión concreta del libro. Las referencias de celdas, los nombres de tablas, las referencias estructuradas y los rangos de desbordamiento pueden diferir según la implementación.

<details>
<summary><strong>1. Entrada bruta: claves de registro y comprobaciones de calidad de datos</strong></summary>

**Propósito:** Identificar los registros fuente y hacer visibles las entradas faltantes o inconsistentes antes de interpretar las métricas calculadas.

Lógica típica:

```excel
=IF([@Vendor_Name]="","",[@Vendor_Name]&"|"&[@Market]&"|"&[@Platform]&"|"&TEXT([@Launch_Date],"yyyymmdd"))
```

Este es solo un patrón ilustrativo de clave compuesta. El libro de producción puede usar una definición de clave diferente. Si varios registros comparten el mismo proveedor, mercado, plataforma y fecha de lanzamiento, la clave debe incluir un identificador adicional de lote o fuente para mantenerse única.

Una sonda de calidad de datos debe identificar por separado los campos obligatorios faltantes, las fechas no válidas, los importes o recuentos negativos y los totales de embudo inconsistentes. Una clave generada no es prueba de que un registro esté completo o sea único.

</details>

<details>
<summary><strong>2. Motor de KPI: días transcurridos, costes de adquisición y tasas de conversión</strong></summary>

**Propósito:** Estandarizar la edad de la cohorte y calcular métricas comparables de adquisición y embudo.

Días transcurridos:

```excel
=Data_Date-Launch_Date+1
```

La convención `+1` trata la fecha de lanzamiento como el Día 1. La misma convención debe usarse consistentemente al asignar los hitos del Día 3, Día 4, Día 7 y Día 30.

Coste por FTD:

```excel
=IF(FTD_Count>0,Spend_Amount/FTD_Count,0)
```

Coste por NAR:

```excel
=IF(NAR_Count>0,Spend_Amount/NAR_Count,0)
```

Tasa de registro a FTD:

```excel
=IF(NAR_Count>0,FTD_Count/NAR_Count,0)
```

Tasa de FTD a STD:

```excel
=IF(FTD_Count>0,STD_Count/FTD_Count,0)
```

Estos patrones usan cero cuando el denominador es cero para evitar errores de división. En los informes, sin embargo, una salida de cero no debe confundirse con un coste medido de cero ni con una tasa de conversión confirmada de cero. Cuando sea práctico, muestra un estado de muestra o denominador acompañante.

</details>

<details>
<summary><strong>3. Motor de KPI: retención y CP Score</strong></summary>

**Propósito:** Añadir indicadores de calidad posterior a las comparaciones de coste de adquisición.

Un patrón de tasa de retención es:

```excel
=IF(FTD_Count>0,Retained_Count/FTD_Count,0)
```

El marco fuente define el CP Score como una puntuación compuesta ponderada en tres componentes:

| Componente | Peso |
|---|---:|
| Eficiencia de coste | 50% |
| Salud de depósito recurrente | 25% |
| Retención del Día 3 | 25% |

La puntuación se normaliza contra los objetivos configurados y el umbral mínimo de depósito recurrente, y luego se limita al rango 0–100. Esto permite ver varios indicadores juntos sin afirmar que la puntuación es una probabilidad predictiva.

La puntuación debe interpretarse junto con las métricas brutas, el tamaño de muestra, el hito y el resultado de la puerta de riesgo. Las puntuaciones compuestas pueden ocultar patrones subyacentes materialmente diferentes si se muestran solas.

</details>

<details>
<summary><strong>4. Motor de decisiones: suficiencia de muestra, puertas de riesgo y umbrales de acción</strong></summary>

**Propósito:** Aplicar la secuencia de decisión prevista: suficiencia de muestra, comprobaciones de riesgo y, a continuación, comparación con el referente.

Los umbrales de rendimiento de ejemplo son:

```text
Scale threshold = Target Cost per FTD × 0.85
Stop threshold  = Target Cost per FTD × 1.25
```

El marco suministrado usa estas ratios de ejemplo como parámetros configurables. La regla de escala se cumple cuando el coste por FTD está en o por debajo del umbral de escala; la regla de detención se cumple cuando el coste por FTD está en o por encima del umbral de detención, sujeto a las reglas de protección y riesgo aplicables.

El orden de decisión de alto nivel es:

```text
1. Evaluate blocking risk conditions.
2. Evaluate conditions requiring review.
3. Check sample sufficiency for the current milestone.
4. Apply the configured performance thresholds.
5. Return the action, trigger reason, and budget adjustment factor.
```

El motor de acciones no debería permitir que una métrica de coste favorable anule una condición de riesgo bloqueante. Del mismo modo, la evidencia de muestra insuficiente no debería interpretarse como prueba de mal rendimiento.

El factor de ajuste de presupuesto se deriva del multiplicador de acción configurado. Representa un ajuste sugerido, no una modificación directa del presupuesto de una plataforma publicitaria.

</details>

<details>
<summary><strong>5. Dashboard ejecutivo: backtesting histórico del Día 30</strong></summary>

**Propósito:** Comparar las recomendaciones tempranas con los resultados observados posteriormente para que el equipo pueda evaluar si sus reglas son útiles.

El marco fuente considera lotes históricos que han alcanzado al menos 30 días y tienen ingresos registrados positivos del Día 30. Las reglas de evaluación de ejemplo incluyen:

- Una decisión temprana de `SCALE` se considera exitosa cuando los ingresos del Día 30 divididos por el gasto son al menos 1.0.
- Una decisión temprana de `STOP` se considera correcta cuando el ROI correspondiente del Día 30 está por debajo de 0.6.

Estas son definiciones de evaluación configurables, no estándares universales. La fuente no establece que los umbrales hayan sido validados independientemente en mercados o plataformas.

El backtesting puede exponer errores sistemáticos—por ejemplo, escalar cohortes que luego no recuperan el gasto o detener cohortes que habrían rendido aceptablemente. Los resultados siguen siendo sensibles al retraso de atribución, los registros de ingresos incompletos, la selección de cohortes y los cambios en las condiciones operativas.

</details>

</details>

<details>
<summary><strong>Reglas de validación</strong></summary>

El libro depende de datos fuente consistentes, fechas de cohorte válidas, referencias de mercado/plataforma compatibles y umbrales configurados correctamente. Las siguientes reglas describen el comportamiento de validación previsto. Los valores exactos de los desplegables y el manejo de errores a nivel de fórmula deben verificarse contra el libro desplegado.

| Campo o condición | Regla de validación | Manejo esperado |
|---|---|---|
| `Record_ID` | Cada registro fuente debería tener un identificador utilizable; las claves compuestas repetidas deben investigarse | Marcar posibles duplicados en lugar de asumir que los registros son únicos |
| `Vendor_Name` | Necesario para identificar y revisar un registro de proveedor | Los nombres de proveedor en blanco no deben tratarse como registros analíticos válidos |
| `Market` | Debe coincidir con una referencia de mercado configurada | Investigar los valores no coincidentes; una referencia faltante puede impedir una comparación de objetivo válida |
| `Platform` | Debe coincidir con un valor de plataforma configurado | Investigar ortografía inconsistente o valores no soportados |
| `Launch_Date` | Debe ser una fecha válida | Las fechas no válidas impiden un cálculo fiable de la edad de la cohorte |
| `Data_Date` | Debe ser una fecha válida y consistente con el periodo de observación | Fechas no válidas o inconsistentes pueden clasificar erróneamente los hitos de evaluación |
| `Spend_Amount` | Debe ser numérico y no negativo | Investigar valores negativos y distinguir el gasto faltante del gasto cero real |
| `Impressions` | Debe ser un recuento no negativo | Investigar observaciones negativas o no numéricas |
| `Clicks` | Debe ser un recuento no negativo | Investigar valores negativos y relaciones inverosímiles con las impresiones |
| `NAR_Count` | Debe ser un recuento no negativo | Comprobar las definiciones de origen y la consistencia con el embudo de registro |
| `FTD_Count` | Debe ser un recuento no negativo | Requerido para los cálculos de coste por FTD y conversiones relacionadas |
| `FTD_Amount` | Debe ser numérico y consistente con la convención de moneda de origen | Investigar valores faltantes o discrepancias de moneda |
| `STD_Count` y `TTD_Count` | Deben ser recuentos no negativos | Verificar las definiciones de eventos y las relaciones de embudo esperadas |
| `D2_Retained_Count`, `D3_Retained_Count`, `D7_Retained_Count` | Deben ser recuentos no negativos con un denominador de retención consistente | Investigar recuentos que excedan la cohorte elegible o reflejen ventanas de observación inconsistentes |
| `Day30_Actual_Revenue` | Debe ser numérico e interpretarse consistentemente con la moneda elegida y la definición de ingresos | Excluir observaciones incompletas o inmaduras del backtesting según corresponda |
| `Account_Status` | Debe usar un valor de estado reconocido | Las condiciones de bloqueo o marcado deben seguir las reglas de riesgo configuradas |
| `Fraud_Risk_Tag` | Debe usar una clasificación de riesgo reconocida | Los casos confirmados y sospechosos no deben tratarse como equivalentes |
| `Analyst_Notes` | Registrar incidentes de seguimiento relevantes, retrasos de atribución, restricciones o hallazgos manuales | Proporciona contexto para la revisión y el backtesting posteriores |
| Búsqueda de referencia | La combinación de mercado y plataforma debe resolverse al referente previsto | Investigar fallos de búsqueda en lugar de sustituir silenciosamente un objetivo no relacionado |
| Suficiencia de muestra | El punto de control relevante debe cumplir su tamaño mínimo de muestra configurado | Mantener la evidencia inmadura separada del bajo rendimiento confirmado |
| Puerta de riesgo | Las condiciones bloqueantes y de revisión deben evaluarse antes de las acciones basadas en rendimiento | Impedir que métricas de coste favoribles anulen las condiciones bloqueantes |
| Rangos de desbordamiento de fórmulas | Las celdas de destino deben permanecer libres para los resultados de matrices dinámicas | Limpiar las celdas obstructoras si Excel informa `#SPILL!` |
| Modo de cálculo | El libro debería usar el recálculo automático | Recalcular si los resultados parecen obsoletos |
| Referencias de fórmulas | Los rangos de fórmulas y los nombres de tabla configurados deben permanecer intactos | Investigar errores de `#REF!`, `#VALUE!` y similares antes de usar recomendaciones |

<details>
<summary><strong>Notas de calidad de datos y manejo de errores</strong></summary>

- **Denominador cero:** Las fórmulas de coste y conversión pueden devolver `0` cuando su denominador es cero. Esto evita un error de división pero no establece un coste medido o una tasa de conversión de cero. Revisa el recuento subyacente antes de interpretar el resultado.
- **Mercado/plataforma no coincidente:** Un fallo de búsqueda de referencia debe resolverse en el origen o en la configuración. No asumas que un objetivo faltante significa que el proveedor ha cumplido su objetivo.
- **Nombre de proveedor faltante:** El identificador del registro puede permanecer en blanco cuando el campo de nombre de proveedor está en blanco, dependiendo de la fórmula desplegada.
- **Errores de desbordamiento de matriz dinámica:** Limpia las celdas que obstruyan el rango de desbordamiento previsto. No sobrescribas las celdas de salida generadas por fórmulas para forzar un resultado.
- **Cálculos obsoletos:** Comprueba el modo de cálculo de Excel y recalcula cuando sea necesario.
- **Formato de moneda:** Los formatos de visualización no convierten valores entre monedas. Confirma que los importes de origen y los referentes configurados usan una base monetaria consistente.
- **Recuentos de retención y embudo:** Comprueba las definiciones de denominadores y las ventanas de observación. Una ratio matemáticamente válida puede seguir siendo engañosa cuando los eventos de origen usan definiciones de cohorte diferentes.

La validación reduce errores evitables, pero no puede establecer que cada informe de origen esté completo, que cada conversión sea legítima o que cada evento de atribución esté correctamente asignado. Esas condiciones requieren comprobaciones operativas y conciliación con las plataformas subyacentes.

</details>

</details>

<details>
<summary><strong>Requisitos de ejecución</strong></summary>

| Elemento | Requisito o recomendación |
|---|---|
| Versión de Excel | Se recomienda Microsoft 365; Excel 2021 o posterior es la base prevista |
| Compatibilidad de fórmulas | Utiliza funcionalidad moderna de Excel, incluidas matrices dinámicas y funciones avanzadas como `LET`, `FILTER`, `SORT`, `XLOOKUP`, `MAP`, `LAMBDA`, `HSTACK` y `VSTACK` |
| Versiones anteriores de Excel | Excel 2019 y anteriores no son compatibles con la arquitectura de fórmulas prevista |
| Formato del libro | `.xlsx` o `.xlsb`, sujeto a pruebas de compatibilidad del archivo entregado |
| Colaboración | OneDrive o SharePoint pueden soportar flujos compartidos; evita ediciones estructurales simultáneas en la tabla de entrada |
| Escala de trabajo sugerida | Hasta aproximadamente 10,000 registros para uso rutinario; prueba el rendimiento antes de expandir hacia 50,000 registros |
| Datos históricos | Archiva periódicamente los registros maduros antiguos cuando el libro activo se vuelva difícil de mantener |

La versión realmente compatible debe confirmarse contra la versión del libro que se distribuye. La disponibilidad de una función en una versión de Excel no garantiza por sí sola que cada fórmula se comporte idénticamente en todos los entornos.

</details>

<details>
<summary><strong>Procedimiento operativo</strong></summary>

<details>
<summary><strong>Revisión bisemanal de proveedores y presupuesto</strong></summary>

1. **Importa los registros fuente.** Actualiza `02_Raw_Input` con la información más reciente disponible de proveedor, mercado, plataforma, gasto, conversión, retención y riesgo.
2. **Comprueba la calidad de los datos.** Revisa identificadores faltantes, referencias no coincidentes, fechas inconsistentes, recuentos inverosímiles e incidentes de seguimiento.
3. **Revisa las puertas de decisión.** Distingue entre muestras insuficientes, riesgo operativo y recomendaciones basadas en rendimiento.
4. **Revisa el dashboard.** Usa la instantánea ejecutiva y la lista de acciones para preparar la revisión presupuestaria. Confirma la razón de activación antes de cambiar una asignación.
5. **Registra la decisión.** Documenta el contexto relevante y las anulaciones manuales en los registros operativos apropiados.
6. **Revista las cohortes maduras.** Compara las decisiones tempranas con los resultados del Día 30 disponibles e investiga los errores sistemáticos.

</details>

<details>
<summary><strong>Mantenimiento de parámetros</strong></summary>

- Actualiza los valores de referencia de mercado/plataforma cuando cambie la economía de objetivos del negocio.
- Ajusta los umbrales de muestra y las ratios de acción a través del área de configuración en lugar de editar fórmulas de decisión individuales.
- Añade nuevos mercados o plataformas solo después de actualizar la configuración relevante de referencias y validación.
- Preserva los rangos generados por fórmulas y verifica las salidas tras cambios estructurales.
- Vuelve a probar casos representativos después de modificar reglas de riesgo o umbrales de decisión.

</details>

</details>

<details>
<summary><strong>Limitaciones</strong></summary>

Este analizador es un marco de apoyo a la decisión basado en reglas. No es una garantía predictiva de los ingresos del Día 30 y no ejecuta automáticamente acciones de campaña, pago o cuenta.

Las señales tempranas de adquisición pueden cambiar debido a retrasos de atribución, devoluciones posteriores, fallos de seguimiento, restricciones de plataforma y diferencias en la calidad de las cohortes. Una recomendación es tan fiable como los datos subyacentes, las definiciones de referentes, los requisitos de muestra y las reglas.

El backtesting del Día 30 puede ayudar a identificar dónde deben ajustarse las reglas, pero el rendimiento histórico no garantiza la precisión futura. Los resultados deben segmentarse por mercado, plataforma y condiciones operativas relevantes donde existan datos suficientes.

</details>

<details>
<summary><strong>Solución de problemas</strong></summary>

| Síntoma | Causa probable | Comprobación recomendada |
|---|---|---|
| `#SPILL!` | Celdas que bloquean un rango de salida de matriz dinámica | Limpiar las celdas obstructoras sin eliminar la fórmula de origen |
| `#N/A` en resultados dependientes de referencias | La combinación de mercado/plataforma no coincide con los valores de referencia configurados | Comprobar ortografía, valores permitidos y cobertura de referencias |
| Coste o tasa cero inesperado | El denominador puede ser cero, faltar o no estar aún reportado | Inspeccionar los recuentos subyacentes y el estado de completitud de los datos |
| Los resultados no se actualizan | El modo de cálculo o las dependencias del libro pueden ser incorrectos | Confirmar el cálculo automático y recalcular |
| El identificador del proveedor está en blanco | Pueden faltar campos de origen obligatorios | Comprobar el campo de nombre de proveedor y la fórmula del identificador |
| Tasa de retención o conversión inverosímil | Los recuentos pueden usar definiciones de cohorte o ventanas de observación inconsistentes | Conciliar las definiciones de eventos y la población elegible |
| Recomendación `SCALE` o `STOP` inesperada | La configuración, la precedencia de riesgo o la selección de referencia pueden no coincidir con lo esperado | Inspeccionar la razón de activación, el referente aplicable, el estado de la muestra y los umbrales configurados |

</details>

</details>

## La lógica de negocio y la metodología

El analizador está diseñado en torno a un problema práctico de gestión de adquisición: los datos tempranos están disponibles mucho antes de que el valor a largo plazo del proveedor sea cierto, pero las decisiones de presupuesto no siempre pueden esperar a que madure cada cohorte. Su propósito es estructurar esa incertidumbre para que las decisiones puedan revisarse de forma consistente en lugar de tomarse a partir de una métrica atractiva o alarmante.

- **La evaluación basada en hitos** separa las decisiones del Día 3, Día 4 y Día 7. Ayuda al equipo a evitar tratar una cohorte inmadura como si tuviera la misma fuerza probatoria que una madura.
- **La comparación con referentes** evalúa el coste de adquisición contra el objetivo para el mercado y la plataforma relevantes. Esto hace que las comparaciones de proveedores sean más significativas comercialmente que aplicar un umbral de coste universal en diferentes condiciones operativas.
- **El filtrado de riesgos** separa las restricciones de cuentas y el fraude sospechoso o confirmado de los problemas ordinarios de rendimiento. Ayuda al equipo a identificar cuándo el siguiente paso debería ser una investigación o un control de riesgos en lugar de un ajuste rutinario de presupuesto.
- **La revisión multiindicador** combina el coste de adquisición con el comportamiento del embudo, las señales de depósito recurrente y la retención. Proporciona más contexto para juzgar si una adquisición barata viene acompañada de evidencia de calidad posterior.
- **El backtesting del Día 30** compara las recomendaciones tempranas con los resultados registrados posteriormente. Proporciona una forma de revisar si las reglas actuales son sistemáticamente demasiado agresivas, demasiado conservadoras o insuficientemente sensibles a condiciones operativas específicas.

Estos métodos funcionan juntos como una secuencia de decisión: establece si la evidencia es utilizable, comprueba si se aplican condiciones de riesgo, compara el rendimiento con el objetivo apropiado y luego revisa la recomendación contra los resultados posteriores.

El resultado no es una afirmación de que el rendimiento temprano pueda conocerse con certeza. Es un proceso repetible para hacer las decisiones tempranas más transparentes, documentar por qué se sugirió una acción y mejorar las reglas a medida que hay mejor evidencia disponible.

## Otras herramientas de esta serie

Theseus Workshop desarrolla herramientas ligeras de análisis de negocio y apoyo a la decisión para problemas operativos recurrentes.

- **Estimación de costes de construcción y control de proyectos** — Conecta los supuestos de estimación con el seguimiento de costes y ejecución a nivel de proyecto.
- **Conciliación de inventario y análisis de mermas** — Ayuda a identificar discrepancias entre registros y ubicaciones de inventario.
- **Rentabilidad por pedido y conciliación financiera** — Estructura el análisis de ingresos y costes en torno a pedidos individuales.
- **Pronóstico de negocio y planificación de escenarios** — Ayuda a evaluar resultados financieros bajo supuestos operativos alternativos.

Explora los proyectos relacionados en el [perfil de GitHub de Theseus Workshop](https://github.com/HyVoid). Confirma la disponibilidad y el alcance actual de cada repositorio antes de adoptarlo para uso operativo.

## Licencia

Este proyecto está destinado a distribuirse bajo la **Licencia Apache 2.0**.

Antes de publicar una versión, incluye el archivo `LICENSE` aplicable en el repositorio y confirma que la licencia cubre los archivos reales que se distribuyen. Si la versión de navegador, el libro de Excel o los activos de terceros tienen términos de licencia separados, documenta esos términos explícitamente en lugar de asumir que cada componente está cubierto de la misma manera.
