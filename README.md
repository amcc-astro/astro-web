# Anadameth Astronomy Web

The Official website for Astronomy Society of Anandamaithreya Central College, Balangoda, Sri Lanka.

## Development and Set-Up

After cloning the repository, navigate to the directory and run

```bash
$ composer install
$ php please make:user
```
This will install required packages and create the default user. To test the website, use

```bash
$ php artisan serve
```
And navigate your browser to https://localhost:8000/

If you plan on modifying styling or JS components you will need to install required NPM packages and start the development vite server:

```bash
$ npm install
$ npm run dev
```

After development, to package the modified resources use,

```bash
$ npm run build
```

## Copyright

This work is copyrighted to Anadameth Astronomy Society, Anandamaithreya Central College, Sri Lanka under ![LICENSE.md](GPLv2). Article text and images are CC-BY-SA unless otherwise specified within the content.
