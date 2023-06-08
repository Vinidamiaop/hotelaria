<?php

namespace App\Services\Hospitality;

use App\Repositories\Hospitality\PlaceRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PlaceService
{
    private PlaceRepository $repository;

    public function __construct(PlaceRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAll()
    {
        return $this->repository->getAll();
    }

    public function getById($id)
    {
        return $this->repository->getById($id);
    }

    public function create(Request $request)
    {
        $dados = $request->all();
        if($request->hasFile('image') && $request->file('image')->isValid()) {
            $imageName = uniqid(date('HisYmd'), false);
            $extension = $request->image->extension();
            $fileName = "{$imageName}.{$extension}";
            $imagePath = $request->image->storeAs('public/places', $fileName);
            if(!$imagePath){
                return false;
            }

            $dados['image'] = "places/$fileName";
        }
        $dados['slug'] = Str::slug($dados['name'], '-');
        return $this->repository->create($dados);
    }

    public function update(int $id, array $data)
    {
        return $this->repository->update($id, $data);
    }

    public function delete(int $id)
    {
        return $this->repository->delete($id);
    }

}
