<?php

namespace App\Repositories\Hospitality;

use App\Models\Hospitality\Place;
use App\Repositories\CrudRepository;

class PlaceRepository extends CrudRepository
{
    public function __construct(Place $model)
    {
        parent::__construct($model);
    }

}
