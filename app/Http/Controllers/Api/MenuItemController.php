<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $menu_id
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $menu_id = $request->menu_id;
        return response()->json(MenuItem::where('menu_id',$menu_id)->get());
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

        $db_data = MenuItem::where('menu_id',$request->menu_id)->where('food_id',$request->food_id)->first();

        if(!$db_data) {
            $item = new MenuItem();
            $item->food_id = $request->food_id;
            $item->menu_id = $request->menu_id;
            $item->save();
        }

        return response()->json($item->id ?? ['error' => 'Exists']);
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(MenuItem::where('food_id',$id)->get());
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
        $item = MenuItem::find($id);
        $item->food_id = $request->food_id ?? 0;
        $item->menu_id = $request->menu_id ?? 0;
        $item->save();

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
