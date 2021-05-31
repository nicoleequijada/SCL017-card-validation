# Card Validation

Elegí este proyecto, porque me pareció muy util crear una plataforma donde tengas que hacer todo online, sin necesidad de llamar a los call centers y estar exponiendo los datos de tu tarjeta de credito para hacer una reserva telefonica.

# imagen final

![image](https://user-images.githubusercontent.com/72900415/120220403-acd47b80-c20a-11eb-91e9-aae68c188265.png)
![image](https://user-images.githubusercontent.com/72900415/120220468-c1b10f00-c20a-11eb-8e55-04fb11b1e57f.png)
![image](https://user-images.githubusercontent.com/72900415/120220509-d1305800-c20a-11eb-916e-672ee4467cd9.png)



# Resumen del proyecto

En este proyecto se realizó una plataforma que ofrece paquetes turisticos en todo chile, la funcion principal es validar si las tarjetas de creditos son validas o invalidas de acuerdo al algoritmo de Luhn, adcional se debe encapsular los digitos de tu tarjeta a medida que vayas escribiendo, solo deben verse los ultimos 4 digitos, implemente que por medidas de seguridad, no permitiera la función de pegar datos. 

# Como inicie mi proyecto

Lo primero que hice fue realizar un boceto con papel y lapiz para plazmar mi idea, organicé las prioridades para comenzar a desarollarlo, pase mi boceto de papel y lapiz a google slide y una vez teniendo clara las ideas empece a realizar la estructura con HTML y CSS. Practique varias veces el algoritmo de Luhn en papel y lapiz y una vez conocidiendo los posibles escenarios empezamos a crear la logica en Javascript 

# Como fue la planificación

Lo primero fue crear la pagina inicial donde el cliente conoce que somos y que hacemos, en la misma pagina incial encuentra las opciones de destinos turisticos con un boton de reservar, cuando presiona el mismo, lo redirecciona a la segunda pagina donde encontrar una cajita de compra, luego tiene que ingresar los datos de su tarjeta de credito, **Si el usuario intenta enviar un campo en blanco le saldra un alert indicando que debe ingresar datos correcto**, **Si el usuario intenta escribir letras o caracteres especiales, le saldra un alert indicandole que debe ingresar datos correcto**, **Si el usuario intenta pegar los datos de una tarjeta de credito le saldra un alert indicando que debe ingresar datos correctos** y **si el usuario intenta realizar una compra con una tarjeta de mayor o menor logitud de 16 digitos, le saldra un alert indicando que debe ingresar datos correcto** Luego que implementamos esta funcion, **aplicamos el algoritmo de Luhn** para que validara si la tarjeta es valida o invalida y mostrara un mensaje con la respuesta de la misma. Luego de tener la parte de validacion lista el siguiente paso era encapsular u ocultar los datos de la tarjea de credito en el momento que el usario escribiera, solo son visiables los ultimos 4 digitos.

#### Nicole Quijada
