<?php

namespace App\Http\Controllers;

use App\model\mdIzin;
use App\model\mdizinPersyaratan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IzinControl extends Controller
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
        } elseif ($type == 'dataByDistrik') {
            return self::dataByDistrik($r);
        }
    }


    function dataAll(Request $r)
    {
        return mdIzin::with('persyaratan')->where("aktif", "true")->get();
    }
    function dataByDistrik(Request $r)
    {
        return mdIzin::with('persyaratan')->where("aktif", "true")->where("distrik_id", $r->get('distrik_id'))->get();
    }

    function InsertByForm(Request $r)
    {
        $data = $r->get("data");
        $toDbIzin = array(
            "nama_izin" => $data['nama_izin'],
            "kategori" => $data['kategori'],
            "masakerja" => $data['masakerja'],
            "distrik_id" => $data['distrik_id'],
            "aktif" => $data['aktif'],
        );
        $Save =  mdIzin::insert($toDbIzin);
        $id = DB::getPdo()->lastInsertId();

        foreach ($data['persyaratan'] as $i => $p) {
            $todbpersyaratan = array(
                "opdi_id" => $id,
                "persyaratan" => $p['persyaratan'],
                "aktif" => 'true',
            );
            mdizinPersyaratan::insert($todbpersyaratan);
        }


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
        $toDbizin = array(
            "nama_izin" => $data['nama_izin'],
            "kategori" => $data['kategori'],
            "masakerja" => $data['masakerja'],
            "distrik_id" => $data['distrik_id'],
            "aktif" => $data['aktif'],
        );
        $Save =  mdIzin::where("opdi_id", $data['opdi_id'])->update($toDbizin);
        foreach ($data['persyaratan'] as $i => $p) {
            $todbpersyaratan = array(
                "opdi_id" => $data['opdi_id'],
                "persyaratan" => $p['persyaratan'],
                "aktif" => 'true',
            );
            mdizinPersyaratan::where("opdi_id", $data['opdi_id'])->update($todbpersyaratan);
        }
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
        $delete = mdIzin::where("opdi_id", $data['opdi_id'])->delete();
        $delete1 = mdizinPersyaratan::where("opdi_id", $data['opdi_id'])->delete();
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
        return mdIzin::where('opdi_id', $r->get('id'))->with('persyaratan')->first();
    }
}
