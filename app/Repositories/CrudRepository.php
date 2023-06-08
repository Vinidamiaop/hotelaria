<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

class CrudRepository
{
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        try {
            $registros = $this->model->all();
            if($registros->count() > 0) {
                return $registros->toArray();
            }
            return [];
        } catch (\Exception $e) {
            \Log::info($e->getMessage());
            return [];
        }

    }

    public function getById($id)
    {
        return $this->model->find($id);
    }

    public function create($data)
    {
        return $this->model->create($data);
    }

    public function update(int $id, array $data)
    {
        return $this->model->where('id', $id)->update($data);
    }

    public function delete(int $id)
    {
        return $this->model->where('id', $id)->delete();
    }
}
