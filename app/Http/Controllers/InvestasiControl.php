<?php

namespace App\Http\Controllers;

use App\model\mdInvestasi;
use App\model\mdperusahaan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InvestasiControl extends Controller
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
        } elseif ($type == 'dataByDistrik') {
            return self::dataByDistrik($r);
        } 
    }

    function InsertByForm(Request $r){
        $data = $r->get('data');
        $triwulan = $r->get('triwulan');
        $tahun = $r->get('tahun');
        $distrik_id = $r->get('distrik_id');

        for ($i = 0; $i < count($data); $i++) {
        $perusahaan = mdperusahaan::where('nama', $data[$i]['nama'])->first();

        if ($perusahaan){
            $perusahaan_id = $perusahaan->perusahaan_id;
        }
        else{
            $toDbIzin = array(
                "nama" => $data[$i]['nama'],
                "npwp" => $data[$i]['npwp'],
                "alamat" => $data[$i]['alamat'],
                "bidang" => $data[$i]['bidang'],
                "negara" => $data[$i]['negara'],
                "distrik_id" => $distrik_id,
                "aktif" => $data[$i]['aktif'],
            );
            $Save =  mdperusahaan::insert($toDbIzin);
            $perusahaan_id = DB::getPdo()->lastInsertId();
        }
    


            $toDb =  array(
                "perkiraan_nilai" => $data[$i]['perkiraan_nilai'],
                "jenis_investasi" => $data[$i]['jenis_investasi'],
                "perusahaan_id" => $perusahaan_id,
                "triwulan" => $triwulan,
                "tahun" => $tahun,
                "periode" => $data[$i]['periode'],
                "proses" => $data[$i]['proses'],
                "distrik_id" => $distrik_id,
            );

            $Save = mdInvestasi::insert($toDb);
            // if ($Save) {
            //     return array(
            //         "title" => "Berhasil",
            //         "text"  => "Data Berhasil Di Update"
            //     );
            // }
        }
    }

    function UpdateById(Request $r){
        $data = $r->get('data');
        $triwulan = $r->get('triwulan');
        $tahun = $r->get('tahun');
        $distrik_id = $r->get('distrik_id');

        $perusahaan = mdperusahaan::where('nama', $data['nama'])->first();
        $perusahaanJumlah = count($perusahaan);
        if ($perusahaanJumlah > 0){
            $perusahaan_id = $perusahaan->perusahaan_id;
        }
        else{
            $toDbIzin = array(
                "nama" => $data['nama'],
                "npwp" => $data['npwp'],
                "alamat" => $data['alamat'],
                "bidang" => $data['bidang'],
                "negara" => $data['negara'],
                "distrik_id" => $distrik_id,
                "aktif" => $data['aktif'],
            );
            $Save =  mdperusahaan::insert($toDbIzin);
            $perusahaan_id = DB::getPdo()->lastInsertId();
        }

        $toDb =  array(
            "perkiraan_nilai" => $data['perkiraan_nilai'],
            "jenis_investasi" => $data['jenis_investasi'],
            "perusahaan_id" => $perusahaan_id,
            "triwulan" => $triwulan,
            "tahun" => $tahun,
            "periode" => $data['periode'],
            "proses" => $data['proses'],
            "distrik_id" => $distrik_id,
        );

        mdInvestasi::where('investasi_id',$toDb)->update($toDb);
    }

    function DeleteById(Request $r)
    {
        $data = $r->get("data");
        $delete = mdInvestasi::where("investasi_id", $data['investasi_id'])->delete();
        if ($delete) {
            return array(
                "title" => "Berhasil",
                "text"  => "Data Berhasil Di Hapus"
            );
        }
    }

    function dataByDistrik(Request $r)
    {
        // return $r->get("id");
        return mdInvestasi::with('perusahaan')->where('distrik_id', $r->get('id'))->get();
    } 

}
