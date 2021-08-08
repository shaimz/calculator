<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FoodIngredient extends Model
{
    protected $table = 'food_ingredient';
    public $timestamps = false;

    public function ingredient(){
        return $this->belongsTo(Ingredient::class,'ingredient_id','id');
    }
    public function food(){
        return $this->belongsTo(Food::class,'food_id','id');
    }
}
