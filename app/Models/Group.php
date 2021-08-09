<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $table = 'group';
    public $timestamps = false;

    public function foods(){
        return $this->hasMany(Food::class,'group_id','id');
    }
}
