<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menu';
    public $timestamps = false;

    public function food(){
        return $this->hasMany(MenuItem::class,'menu_id','id');
    }
}
