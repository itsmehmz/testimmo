<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'price' => $this->faker->numberBetween(500, 5000),
            'city' => $this->faker->city(),
            'loctype' => $this->faker->randomElement(['Room', 'Studio', 'Apartment']),
            'address' => $this->faker->address(),
            'img_path' => $this->faker->imageUrl(),
            'description' => $this->faker->text(),
            'createdby' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
