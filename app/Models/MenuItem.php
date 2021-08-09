<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    protected $table = 'menu_item';
    public $timestamps = false;

    public function food(){
        return $this->hasOne(Food::class,'id','food_id');
    }
}
