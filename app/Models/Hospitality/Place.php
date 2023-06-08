<?php

namespace App\Models\Hospitality;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Place extends Model
{
    #region Properties
    protected $fillable = [
        'name',
        'address',
        'city',
        'state',
        'country',
        'description',
        'image',
        'slug'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    #endregion

    #region Mutator
    public function setSlugAttribute($value)
    {
        $this->attributes['slug'] = Str::slug($value);
    }
    #endregion

    #region Accessor
    public function getImageAttribute($value)
    {
        return asset("storage/$value");
    }
    #endregion
}
