# Challenge Dafiti
#### Descripción
_Examen técnico de DAFITI para posición Full-Stack Developer. El mismo se compone de:_

**·** Backend: Validador de "Escaleras" de Póker en **PHP**.

**·** Frontend: Simulador de página de E-Commerce en **React**.

**·** Base de datos: Ejercicio en **MySQL**.

#### Backend
Para comenzar, se deben instalar las dependencias
```bash
cd backend &&
composer install &&
cd ..
```

Luego, ejecutar los tests
```bash
cd backend &&
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/PokerControllerTest.php &&
cd ..
```

#### Frontend
Para comenzar, se deben instalar las dependencias
```bash
cd frontend &&
npm i &&
cd ..
```

Luego, ejecutar el cliente
```bash
cd frontend &&
npm start
```

#### Database
El archivo que contiene las consultas se encuentra dentro de 'database'
```bash
cd database
```