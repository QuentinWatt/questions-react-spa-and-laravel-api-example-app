# React SPA & Laravel API example app
I've set this project up as a mono repo (meaning there are multiple projects in the repo). 

This project contains:
- A React app set up as an SPA located in the `react-spa` directory.
- A Laravel api located in the `backend-api` directory

## Set up
Clone this repo:
```bash
git clone https://github.com/QuentinWatt/questions-react-spa-and-laravel-api-example-app.git ~/react-spa-and-laravel-api
```

## React SPA set up
#### From the cli:

Move to the React directory
```bash
cd ~/react-spa-and-laravel-api/react-spa
```

Install the project dependencies with Yarn (or NPM)
```bash
yarn
```

Run the project in development mode
```bash
yarn start
```

## Laravel API set up

This will require basic laravel hosting environment is set up on your computer with Laravel Valet, Laravel Homestead or alternative.

#### From the cli:
Move to the laravel directory
```bash
cd ~/react-spa-and-laravel-api/backend-api
```

Install the PHP dependencies
```bash
composer install
```

Generate the app keys
```bash
php artisan key:generate
```

Copy the `.env.example` file to `.env`
```bash
cp .env.example .env
```
Dont forget to set up your environment variables.

Run the database migrations
```bash
php artisan migrate
```

Seed up some example (Optional)
```bash
php artisan db:seed
```
