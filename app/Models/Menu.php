<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'plan';

    public function food(){
        return $this->hasMany(Food::class,'id','food_id');
    }
}
