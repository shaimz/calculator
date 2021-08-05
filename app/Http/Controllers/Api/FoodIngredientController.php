<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FoodIngredient;
use Illuminate\Http\Request;

class FoodIngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $category_id
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $group_id = $request->group_id;
        return response()->json(FoodIngredient::where('food_id',$group_id)->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255'
        ]);

        $food = new FoodIngredient();
        $food->name = $request->name;
        $food->group_id = $request->group_id;
        $food->portions = $request->portions;
        $food->price_portion = $request->price_portion;
        $food->save();

        return response()->json($food->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(FoodIngredient::where('food_id',$id)->get());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $food = FoodIngredient::find($id);
        $food->name = $request->name ?? '';
        $food->portions = $request->portions ?? 0;
        $food->price_portion = $request->price_portion ?? 0;
        $food->save();

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
