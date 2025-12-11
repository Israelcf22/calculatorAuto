// wdio.conf.ts
// ... (otras configuraciones)

export const config = {
    // ...
    hostname: '192.168.85.240', // IP del servidor Appium
    port: 4723, // Puerto por defecto de Appium
    path: '/', // Ruta por defecto de Appium
    specs: [
        './src/page/**/*.e2e.ts'
    ],
    capabilities: [{
        platformName: 'Windows',
        'appium:automationName': 'Windows',
        'appium:deviceName': 'WindowsPC',
        // Este es el identificador único para la Calculadora de Windows 10/11
        'appium:app': 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App'
    }],
    // ... (otras configuraciones como framework, reporters, etc.)
};
