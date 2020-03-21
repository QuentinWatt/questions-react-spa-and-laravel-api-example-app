<?php

use App\Models\Product;
use Bezhanov\Faker\Provider\Commerce;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

/** @var Factory $factory */
$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new Commerce($faker));
    return [
        'title' => $faker->productName,
        'description' => $faker->realText(),
        'price' => $faker->numberBetween(100, 15000), // cents
    ];
});
