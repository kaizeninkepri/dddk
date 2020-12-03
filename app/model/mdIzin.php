<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class mdIzin extends Model
{
    protected $table = "opd_izin";
    protected $primaryKey  = "opdi_id";


    function persyaratan()
    {
        return $this->hasMany(mdizinPersyaratan::class, 'opdi_id');
    }
    
}
