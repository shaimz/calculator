<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Food;
use App\Models\FoodIngredient;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;

class ExportPDF extends Controller
{
    public function export(Request $request)
    {
        $type = $request->type;
        $food_id = $request->food_id;
        $menu_id = $request->menu_id;

        switch ($type) {
            case 'ingredients':
                $result = [];
                $categories = [];
                $i = 0;
                $sum = 0;

                $menu_name = Menu::where('id', $menu_id)->pluck('name')->first();
                $items = MenuItem::where('menu_id', $menu_id)->get();
                foreach ($items as $item) {
                    $food_ingredient = FoodIngredient::where('food_id', $item->food_id)->with(['ingredient', 'category'])->get();
                    $result[$menu_name][] = $food_ingredient->toArray();
                    $total = 0;
                    foreach ($food_ingredient as $fi) {
                        $categories[$fi->category->name][] = ['id' => $i,'name' => $fi->ingredient->name, 'price' => $fi->ingredient->price, 'quantity' => $fi->quantity, 'measure' => $fi->ingredient->measure];
                        $total += $fi->ingredient->price;
                        $categories[$fi->category->name]['total'] = $total;
                        $i++;
                    }
                    $sum += $total;
                }

                $pdf = PDF::loadView('pdf', ['categories' => $categories, 'total' => $sum]);
                return $pdf->download('ingredients.pdf');
                return response()->download($pdf);

            case 'calculation':
                $result = [];
                $categories = [];
                $i = 0;
                $sum = 0;

                $menu_name = Menu::where('id', $menu_id)->pluck('name')->first();
                $items = MenuItem::where('menu_id', $menu_id)->get();
                foreach ($items as $item) {
                    $food_ingredient = FoodIngredient::where('food_id', $item->food_id)->with('food.group')->with(['ingredient', 'category'])->get();
                    $result[$menu_name] = [];
                    $total = 0;
                    foreach ($food_ingredient as $fi) {
                        $categories[$fi->food->group->name][$fi->food->name][] = ['id' => $i,'name' => $fi->ingredient->name, 'price' => $fi->ingredient->price, 'quantity' => $fi->quantity, 'measure' => $fi->ingredient->measure];
//                        $total += $fi->ingredient->price;
//                        $categories[$fi->category->name]['total'] = $total;
                        $i++;
                    }
//                    $sum += $total;
                }

                $pdf = PDF::loadView('calculation.pdf', ['groups' => $categories, 'total' => $sum]);
                return $pdf->download('ingredients.pdf');

                break;
            case 'menu':

                break;
        }
    }

    public function index()
    {
        $menu_id = 1;
        $food_id = 2;
        $result = [];
        $categories = [];
        $i = 0;

        $menu_name = Menu::where('id', $menu_id)->pluck('name')->first();
        $items = MenuItem::where('menu_id', $menu_id)->get();
        foreach ($items as $item) {
            $food_ingredient = FoodIngredient::where('food_id', $item->food_id)->with('food.group')->with(['ingredient', 'category'])->get();
            dd($food_ingredient);
//            $result[$menu_name][] = $food_ingredient->toArray();
//            $total = 0;
//            foreach ($food_ingredient as $fi) {
//                $categories[$fi->category->name][] = ['id' => $i,'name' => $fi->ingredient->name, 'price' => $fi->ingredient->price, 'quantity' => $fi->quantity, 'measure' => $fi->ingredient->measure];
//                $total += $fi->ingredient->price;
//                $categories[$fi->category->name]['total'] = $total;
//                $i++;
//            }
        }

        return view('pdf',['categories' => $categories]);
        return $pdf->download('ingredients.pdf');
    }
}
