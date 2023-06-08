<?php

namespace App\Http\Controllers\Hospitality;

use App\Http\Controllers\Controller;
use App\Services\Hospitality\PlaceService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaceController extends Controller
{
    private PlaceService $service;

    public function __construct(PlaceService $service)
    {
        $this->service = $service;
    }

    public function index(): \Inertia\Response
    {
        $places = $this->service->getAll();
        return Inertia::render('Hospitality/Places/Places', compact('places'));
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('Hospitality/Places/Create');
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $retorno = $this->service->create($request);
        return redirect()->route('hospitality.places');
    }
}
