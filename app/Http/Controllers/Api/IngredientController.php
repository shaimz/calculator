<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Ingredient;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $category_id
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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

        $db_data = Ingredient::where('name',$request->name)->first();

        if(!$db_data){
            $ingredient = new Ingredient();
            $ingredient->name = $request->name;
            $ingredient->category_id = $request->parent_id;
            $ingredient->price = $request->price;
            $ingredient->purchase_price = $request->purchase_price;
            $ingredient->measure = $request->measure;
            $ingredient->save();
        }

        return response()->json($ingredient->id ?? ['error' => 'Exists']);
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if($id === 'all'){
            return response()->json(Category::with('ingredients')->get());
        }
        return response()->json(Ingredient::where('category_id',$id)->get());
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
        $ingredient = Ingredient::find($id);
        $ingredient->name = $request->name ?? '';
        $ingredient->measure = $request->measure ?? 'kg';
        $ingredient->price = $request->price ?? 0;
        $ingredient->purchase_price = $request->purchase_price ?? $request->price;
        $ingredient->save();

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $ingredient = Ingredient::where('id',$request->id)->first();
        $ingredient->delete();
    }
}
