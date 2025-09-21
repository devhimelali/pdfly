<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $services = Service::get();
//        return $services;
        return Inertia::render('home/Index', [
            'services' => $services,
        ]);
    }
}
