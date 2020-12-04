<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        return view('application');
    }

    public function SubmitLogin(Request $request)
    {
        $credentials = $request->only('email', 'password');
        // return $credentials;
        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return array(
                "nama" => "login",
                "id" => Auth::user()->user_id
            );
        }
        return "salah";
    }
    public function logoutS(Request $request)
    {
        Auth::logout();
        return redirect('pages/login');
    }

    public function menu(Request $r)
    {
        if (Auth::user()->user_id == 0) {
            $data[] = array(
                "url" => "/",
                "name" => "Dashboard",
                "slug" => "home",
                "icon" => "HomeIcon",
            );
        } else {
            $data[] = array(
                "url" => "/dashboard?v=" . Auth::user()->user_id,
                "name" => "Dashboard",
                "slug" => "home",
                "icon" => "HomeIcon",
            );
        }
        

        $data[] = array(
            "url" => "users",
            "name" => "Profile",
            "slug" => "profile",
            "icon" => "UsersIcon",
        );

        $data[] = array(
            "url" => "/distrik/detail?v=" . Auth::user()->user_id . "&t=1",
            "name" => "Investasi",
            "slug" => "investasi",
            "icon" => "TrendingUpIcon",
        );
        $data[] = array(
            "url" => "/distrik/detail?v=" . Auth::user()->user_id . "&t=2",
            "name" => "perusahaan",
            "slug" => "perusahaan",
            "icon" => "GridIcon",
        );
        return $data;
        // {
        //     url: "users",
        //     name: "Users",
        //     slug: "investasi",
        //     icon: "UsersIcon",
        //   },
        //   {
        //     url: "page2",
        //     name: "Infrastruktur",
        //     slug: "investasi",
        //     icon: "SlidersIcon",
        //   },
        //   {
        //     url: "page2",
        //     name: "Investasi",
        //     slug: "investasi",
        //     icon: "TrendingUpIcon",
        //   },
    }
}
