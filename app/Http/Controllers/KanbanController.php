<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class KanbanController extends Controller
{
    public function index()
    {
        return Inertia::render('Kanban/Index');
    }
}
