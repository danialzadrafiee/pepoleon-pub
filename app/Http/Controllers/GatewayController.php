<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GatewayController extends Controller
{
    public function index(){
        return Inertia::render("Gateway/GatewayIndex/GatewayIndex");
    }
}
