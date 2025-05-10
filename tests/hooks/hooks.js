import { createBdd } from 'playwright-bdd';
import { path } from 'path';


const { Before, After, BeforeAll, AfterAll } = createBdd();

Before(async ({page}) => {

    console.log('Iniciando prueba...');
    await page.goto('https://www.saucedemo.com/');

});

After(async () => {

    console.log('Prueba finalizada...');
});

BeforeAll(async ({browser}) => {

    //const page = chromium.launch();

});

/* AfterAll(async () => {

    console.log('Eliminando el directorio .features-gen');
    const directoryFeatureGen = path.join(__dirname, '../features-gen');
    if (fs.existsSync(directoryFeatureGen)) {

        fs.rmdirSync(directoryFeatureGen, { recursive: true, force: true }, (err) => {
            if (err) {
                console.error('Error al eliminar el directorio .features-gen:', err);
            } else {
                console.log('.features-gen eliminado exitosamente.');
            }
        });

    } else {
        console.log('El directorio .features-gen no existe.');
    }
}); */