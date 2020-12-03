<?php

namespace App\Http\Controllers;

use App\model\mdDistrik;
use Illuminate\Http\Request;

class distrikControl extends Controller
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
        }
        elseif ($type == 'GetById') {
            return self::GetById($r);
        }
    }

    function dataAll(Request $r)
    {
        return mdDistrik::where("aktif", "true")->get();
    }
    function GetById(Request $r){
        return mdDistrik::where("distrik_id", $r->get('id'))->first();

    }
    function InsertByForm(Request $r)
    {
        $data = $r->get("data");
        $toDb = array(
            "nama" => $data['nama'],
            "kab_kota" => $data['kab_kota'],
            "alamat" => $data['alamat'],
            "aktif" => $data['aktif']
        );
        $Save =  mdDistrik::insert($toDb);
        if ($Save) {
            return array(
                "title" => "Berhasil",
                "text"  => "Data Berhasil Di Input"
            );
        }
    }

    function UpdateById(Request $r)
    {
        $data = $r->get("data");
        $toDb = array(
            "nama" => $data['nama'],
            "kab_kota" => $data['kab_kota'],
            "alamat" => $data['alamat'],
            "aktif" => $data['aktif']
        );
        $Save =  mdDistrik::where("distrik_id", $data['distrik_id'])->update($toDb);
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
        $delete = mdDistrik::where("distrik_id", $data['distrik_id'])->delete();
        if ($delete) {
            return array(
                "title" => "Berhasil",
                "text"  => "Data Berhasil Di Hapus"
            );
        }
    }
}
