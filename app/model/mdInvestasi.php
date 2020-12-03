<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class mdInvestasi extends Model
{
    protected $table = "investasi";
    protected $primaryKey = "investasi_id";


    function perusahaan(){
        return $this->belongsTo(mdperusahaan::class,'perusahaan_id');
    }
}
