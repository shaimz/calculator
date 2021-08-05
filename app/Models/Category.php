<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';
    public $timestamps = false;

    public function ingredients(){
        $this->hasMany(Ingredient::class,'category_id','id');
    }
}
