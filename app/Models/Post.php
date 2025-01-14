<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'price',
        'city',
        'loctype',
        'address',
        'img_path',
        'description',
        'createdby'
    ];

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'createdby');
    }

 
}
