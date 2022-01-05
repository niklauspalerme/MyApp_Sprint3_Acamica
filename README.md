# Sprint Proyect #3 - My APP Live

Entrega del proyecto del Sprint #3 sobre **My APP Live**. Consiste en entregar una aplicación que se encuentre online en el internet para poder gestionar ordenes de los usuarios del restuarante Delilah Restó. Además la aplicación contará con un usuario admins que pueda realizar todas las operaciones CRUD de la misma


## Conectarse al Sevidor de AWS
* Ingresar a la url https://aws.amazon.com/ y presionar Sign IN
* Seleccionar IAM User
* Ingresar Account Id: `archivo_account_id`
* Ingresar usuario: `archivo_user`
* Ingresar password: `archivo_password`

## Iniciar las Instancias
* En el buscador de la barra superior ingresar EC2, seleccionarlo
* Acceder al menú *Auto Scaling Groups* en la sección de la izquierda
* Hacer click sobre el grupo creado con nombre `ASG-Sprint3`
* Presionar el botón edit en el primer cuadro (Detalles del grupo)
* Ingresar los siguientes valores:
	* Desired capacity: 2
	* Minimum capacity: 1
	* Maximum capacity: 3
* Presionar botón Update/Actualizar

## Chequeo de que las Instancias esten funcionando
* En el buscador de la barra superior ingresar EC2, seleccionarlo
* Acceder al menú Instances/Instancias
* Verificar que las instancias pasen a estado `Running/Corriendo`

## Ingresar sitios del Proyecto
* Url dominio propio del frontend: https://www.delilahrestonico.tk/
* Url dominio de la api: https://api.delilahrestonico.tk/
* Url de la documentación de la api:  https://api.delilahrestonico.tk/api/v1/documentation/
* Repositorio Git del proyecto actualizado: https://github.com/niklauspalerme/MyApp_Sprint3_Acamica

## Probar API del Sprint #3 
* Ingresando a postman o similar
* Acceder a cada punto según documentación en https://api.delilahrestonico.tk/api/v1/documentation/

## Agregar rule para Acceder por SSH desde Mi PC
* En el buscador de la barra superior ingresar EC2, seleccionarlo
* Acceder al menú Security Groups
* Buscar en la lista y hacer click sobre *sprint3* (Nombre del grupo de seguridad)
* Presionar botón Edit inbound rules
* Presionar botón Add rule
* Seleccionar Type SSH
* Seleccionar Source My IP y luego presionar Save Rules

## Acceder por SSH a Instancias
* En el buscador de la barra superior ingresar EC2, seleccionarlo
* Acceder al menú Instances
* Hacer click en una instancia con estado Running
* Presionar el botón Connect, en la solapa SSH muestra el instructivo para continuar
* El archivo PEM va adjunto con la entrega

## CICD
* Acceder a proyecto en https://gitlab.com/nicolax0416/sprint-3/-/pipelines
* Se actualiza repositorio en S3 

## Acceder a S3
* En el buscador de la barra superior ingresar EC2, seleccionarlo
* Acceder al menú S3
* Click en el bucket `sprint3-nicolaspalermo`
* Se verá el archivo que sirve de index para el sitio https://www.delilahrestonico.tk/



