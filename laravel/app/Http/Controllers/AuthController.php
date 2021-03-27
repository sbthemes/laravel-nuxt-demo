<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function feedback(Request $request)
    {
        return response()->json($request->all());
    }
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $remember = ! empty($request->remember) ? true : false;

        if (! auth()->attempt($data, $remember)) {
            throw ValidationException::withMessages([
                'email' =>  'Invalid credentials.'
            ]);
        }

        $request->session()->regenerate();
        return response()->noContent();
    }

    public function user(Request $request)
    {
        return auth()->user();
    }

    public function logout(Request $request)
    {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->noContent();
    }
}
