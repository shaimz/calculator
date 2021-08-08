<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Food;
use App\Models\FoodIngredient;
use App\Models\Ingredient;
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
        $food_id = $request->food_id;
        return response()->json(FoodIngredient::where('food_id',$food_id)->with('food')->with('ingredient')->get());
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

        foreach($request->ingredients as $id => $quantity){
            $exists = FoodIngredient::where(['food_id' => $request->food_id, 'ingredient_id' => $id])->with('ingredient')->with('food')->first();
            if(!$exists){
                $foodI = new FoodIngredient();
                $foodI->ingredient_id = $id;
                $foodI->food_id = $request->food_id;
                $foodI->category_id = $request->category_id;
                $foodI->quantity = $quantity;
                $foodI->save();

                $response = FoodIngredient::where('id',$foodI->id)->with('food')->with('ingredient')->first();

                return response()->json($response);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(FoodIngredient::where('food_id',$id)->with('food')->with('ingredient')->get());
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
        $ingredients = (array) $request->ingredients;
        foreach($ingredients as $id => $data){
           $ingredient = FoodIngredient::where('ingredient_id',$id)->first();
           $ingredient->quantity = (int) $data;
           $ingredient->save();
        }

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
        $ingredients = $request->ingredients;
        foreach($ingredients as $key => $quantity){
            if($result = FoodIngredient::where('ingredient_id',$key)->where('food_id',$id)->where('category_id',$request->category_id)) $result->delete();
        }

        return response()->json();
    }
}
