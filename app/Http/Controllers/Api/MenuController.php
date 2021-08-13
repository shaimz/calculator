<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $category_id
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json(Menu::with('food.food')->get());
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $exists = Menu::where(['name' => $request->name])->with('food')->first();
        if (!$exists) {
            $menu = new Menu();
            $menu->name = $request->name;
            $menu->date = $request->date;
            $menu->save();

            $response = Menu::where('id', $menu->id)->with('food')->first();

            return response()->json($response);
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
        return response()->json(Menu::where('menu_id', $id)->with('food')->get());
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
     * @param \Illuminate\Http\Request $request
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $menu_id = $id;
        $menu = Menu::where('id', $id)->first();
        $menu->name = $request->name;
        $menu->date = $request->date;
        $menu->save();

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
        $ingredients = $request->ingredients;
        foreach ($ingredients as $key => $quantity) {
            if ($result = FoodIngredient::where('ingredient_id', $key)->where('food_id', $id)->where('category_id', $request->category_id)) $result->delete();
        }

        return response()->json();
    }
}
