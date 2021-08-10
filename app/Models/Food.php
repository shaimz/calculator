<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    public $timestamps = false;
    protected $table = 'food';

    public function data(){
        return $this->belongsTo(Food::class,'id','food_id');
    }
    public function group(){
        return $this->hasOne(Group::class,'id','group_id');
    }
}
