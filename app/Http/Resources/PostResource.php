<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Storage;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'city' => $this->city,
            'price' => $this->price,
            'loctype' => $this->loctype,
            'address' => $this->address,
            'img_path' => $this->img_path && !(str_starts_with($this->img_path, 'http')) ?
            Storage::url($this->img_path) : $this->img_path,
            'description' => $this->description,
            'createdBy' => new UserResource($this->createdBy),
            'created_at' => (new Carbon($this->created_at))->format('d/m/Y'),
            'updated_at' => (new Carbon($this->updated_at))->format('d/m/Y')
        ];
    }
}
