# Calculator Automation Project

Proyecto de automatización de pruebas E2E (End-to-End) para la Calculadora de Windows utilizando WebdriverIO y Appium.

## Descripción

Este repositorio contiene scripts de prueba automatizados escritos en **TypeScript** utilizando el framework **WebdriverIO** con **Mocha**. El objetivo es validar la funcionalidad de la aplicación nativa `Microsoft.WindowsCalculator` en entornos Windows 10/11.

## Requisitos Previos

Antes de ejecutar las pruebas, asegúrate de tener instalado y configurado lo siguiente:

1.  **Node.js** (versión 16 o superior).
2.  **WinAppDriver** o un servidor **Appium** ejecutándose (local o remotamente).
3.  **Modo de Desarrollador** activado en Windows (Configuración -> Actualización y seguridad -> Para programadores).

## Instalación

Si acabas de clonar este repositorio, instala las dependencias necesarias ejecutando:

```bash
npm install
```

## Reconstrucción del Entorno

Para llegar al estado actual del proyecto (partiendo de una carpeta vacía), se ejecutaron comandos similares a los siguientes para instalar WebdriverIO, TypeScript y el framework de pruebas:

1.  **Inicialización del proyecto Node.js:**
    ```bash
    npm init -y
    ```

2.  **Instalación de WebdriverIO CLI:**
    ```bash
    npm install --save-dev @wdio/cli
    ```

3.  **Configuración inicial de WebdriverIO:**
    Este comando inicia el asistente de configuración que instala dependencias como `@wdio/local-runner`, `@wdio/mocha-framework` y `ts-node`:
    ```bash
    npx wdio config
    ```
    *Opciones típicas seleccionadas:* TypeScript, Mocha, Spec Reporter, ejecución local.

## Configuración

La configuración principal se encuentra en el archivo `wdio.conf.ts`.

*   **Capabilities:** Configurado para la aplicación `Microsoft.WindowsCalculator_8wekyb3d8bbwe!App`.
*   **Conexión Remota:** Si deseas conectar a un servidor Appium remoto (ej. `192.168.85.240`), edita `wdio.conf.ts` y descomenta/ajusta la propiedad `hostname`.

```typescript
// wdio.conf.ts
// hostname: '192.168.85.240',
```

## Ejecución de Pruebas

Para ejecutar la suite de pruebas:

```bash
npx wdio run wdio.conf.ts
```