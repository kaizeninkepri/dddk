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
            return "login";
        }
        return "salah";
    }
    public function logoutS(Request $request)
    {
        Auth::logout();
        return redirect('pages/login');
    }
}
