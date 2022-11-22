<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Food;
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
        $menu_id = $request->parent_id;
        return response()->json(MenuItem::where('menu_id',$menu_id)->with('food')->get());
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
            'food_id' => 'required|max:11'
        ]);

        $db_data = MenuItem::where('menu_id',$request->menu_id)->where('food_id',$request->food_id)->first();

        if(!$db_data) {
            $item = new MenuItem();
            $item->food_id = $request->item_id;
            $item->menu_id = $request->parent_id;
            $item->portions = 1;
            $item->save();
        }

        return response()->json(MenuItem::where('id',$item->id)->with('food')->first() ?? ['error' => 'Exists']);
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(MenuItem::where('menu_id',$id)->with('food')->get());
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
        if(!empty($request->portions->all)){
            foreach($request->portions as $food_id => $portion){
                if($food_id === 'all'){
                    $items = MenuItem::where('menu_id', $id)->get();
                    foreach($items as $item){
                        $item->portions = $portion ?? 1;
                        $item->save();
                    }
                }

            }
        }else{
            $items = MenuItem::where(['menu_id' => $id,'food_id' => $request->food_id])->get();
            foreach($items as $item){
                $item->food_id = $request->item_id ?? 0;
                $item->menu_id = $request->parent_id ?? 0;
                $item->portions = $request->portions ?? 1;
                $item->save();
            }
        }
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
        $ingredients = $request->foods;
        foreach($ingredients as $key => $price){
            if($result = MenuItem::where('food_id',$key)->where('menu_id',$id)) $result->delete();
        }

        return response()->json();
    }
}
