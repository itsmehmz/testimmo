<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'city' => 'required|string|max:255',
            'price' => 'required|numeric',
            'loctype' => ['required',Rule::in(['Room', 'Studio', 'Apartment'])],
            'address' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg',
            'description' => 'nullable|string|max:255',
        ];
    }
}