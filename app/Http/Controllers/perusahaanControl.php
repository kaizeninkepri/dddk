<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\mdperusahaan;
use Illuminate\Support\Facades\DB;

class perusahaanControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'all') {
            return self::dataAll($r);
        } elseif ($type == 'UpdateById') {
            return self::UpdateById($r);
        } elseif ($type == 'DeleteById') {
            return self::DeleteById($r);
        } elseif ($type == 'InsertByForm') {
            return self::InsertByForm($r);
        } elseif ($type == 'dataById') {
            return self::dataById($r);
        } 
        elseif ($type == 'dataByDistrik') {
            return self::dataByDistrik($r);
        } 
    }


    function dataAll(Request $r)
    {
        
        return mdperusahaan::all();
    }

    function InsertByForm(Request $r)
    {
        $data = $r->get("data");
        $toDbIzin = array(
            "nama" => $data['nama'],
            "npwp" => $data['npwp'],
            "alamat" => $data['alamat'],
            "bidang" => $data['bidang'],
            "negara" => $data['negara'],
            "aktif" => $data['aktif'],
        );
        $Save =  mdperusahaan::insert($toDbIzin);
        $id = DB::getPdo()->lastInsertId();



        if ($Save) {
            return array(
                "title" => "Berhasil",
                "text"  => "Data Berhasil Di Input",
                "id" => $id
            );
        }
    }

    function UpdateById(Request $r)
    {
        $data = $r->get("data");
        $toDbIzin = array(
            "nama" => $data['nama'],
            "npwp" => $data['npwp'],
            "alamat" => $data['alamat'],
            "bidang" => $data['bidang'],
            "negara" => $data['negara'],
            "aktif" => $data['aktif'],
        );
        $Save =  mdperusahaan::where("perusahaan_id", $data['perusahaan_id'])->update($toDbizin);
       
        if ($Save) {
            return array(
                "title" => "Berhasil",
                "text"  => "Data Berhasil Di Update"
            );
        }
    }

    function DeleteById(Request $r)
    {
        $data = $r->get("data");
        $delete = mdperusahaan::where("perusahaan_id", $data['perusahaan_id'])->delete();
        if ($delete) {
            return array(
                "title" => "Berhasil",
                "text"  => "Data Berhasil Di Hapus"
            );
        }
    }

    function dataById(Request $r)
    {
        // return $r->get("id");
        return mdperusahaan::where('perusahaan_id', $r->get('id'))->first();
    }

    function dataByDistrik(Request $r){
        return mdperusahaan::where("distrik_id", $r->get('id'))->get();
    }
}
