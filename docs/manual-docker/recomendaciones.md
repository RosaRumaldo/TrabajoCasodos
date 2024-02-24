# Recomendaciones

- Luego de instalar el facturador puede cambiar algunos parámetros en el archivo .env como:

  - La dirección de envío de correos que utiliza el facturador     para enviar los archivos pdf, xml y cdr a sus clientes.

  - Cambiar algunas configuraciones de plantillas de los pdf entre otros.

- Recuerde que siempre que se edita el archivo .env debe utilizar el comando “php artisan config:cache” dentro del contenedor de fpm1, para más detalles puede observar el manual de actualización [aqui](https://support.google.com/drive/answer/6283888).

- La ruta donde ejecute el script será donde se clone el repositorio, debe verificar que los usuarios del servidor tengan permisos a dicha ruta si desea acceder desde ftp o scp.
