<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $table = 'ingredient';
    public $timestamps = false;

    public function category(){
        return $this->belongsTo(Category::class,'category_id','id');
    }
    public function measure(){

    }
}
