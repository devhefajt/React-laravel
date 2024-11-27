<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the dashboard.
     *
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard');
    }
}