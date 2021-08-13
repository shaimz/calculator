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

                if(is_array($menu_id)){
                    $items = MenuItem::whereIn('menu_id',$menu_id)->get();
                }else{
                    $items = MenuItem::where('menu_id', $menu_id)->get();
                }
                foreach ($items as $item) {
                    $menu_name = Menu::where('id', $item->menu_id)->pluck('name')->first();
                    $food_ingredient = FoodIngredient::where('food_id', $item->food_id)->with(['ingredient', 'category'])->get();
                    $result[$menu_name][] = $food_ingredient->toArray();
                    $total = 0;
                    foreach ($food_ingredient as $fi) {
                        $process = true;
                        if (!empty($categories[$fi->category->name])) {
                            foreach ($categories[$fi->category->name] as $index => $obj) {
                                if (($obj['name'] === $fi->ingredient->name) && $index !== 'total') {
//                                    $obj['price'] += $fi->ingredient->price;
//                                    $obj['purchase_price'] += $fi->ingredient->purchase_price;
//                                    $obj['quantity'] += $fi->ingredient->quantity;
                                    $categories[$fi->category->name][$index]['price'] += $fi->ingredient->price;
                                    $categories[$fi->category->name][$index]['purchase_price'] += $fi->ingredient->purchase_price;
                                    $categories[$fi->category->name][$index]['quantity'] += $fi->ingredient->quantity;
                                    $total += $fi->ingredient->purchase_price;
                                    $categories[$fi->category->name]['total'] = $total;
                                    $process = false;
                                }
                            }
                        }
                        $i++;

                        if ($process) {
                            $categories[$fi->category->name][] = ['id' => $i, 'name' => $fi->ingredient->name, 'price' => $fi->ingredient->price, 'purchase_price' => $fi->ingredient->purchase_price, 'quantity' => $fi->quantity, 'measure' => $fi->ingredient->measure];
                            $total += $fi->ingredient->purchase_price;
                            $categories[$fi->category->name]['total'] = $total;
                            $i++;
                        }
                    }
                    $sum += $total;
                }


                $pdf = PDF::loadView('pdf', ['categories' => $categories, 'total' => $sum]);
                return $pdf->download('ingredients.pdf');

            case 'calculation':
                $categories = [];
                $i = 0;
                $sum = 0;

                $menu_name = Menu::where('id', $menu_id)->pluck('name')->first();
                if(is_array($menu_id)){
                    $items = MenuItem::whereIn('menu_id',$menu_id)->get();
                }else{
                    $items = MenuItem::where('menu_id', $menu_id)->get();
                }
                foreach ($items as $item) {
                    $food_ingredient = FoodIngredient::where('food_id', $item->food_id)->with('food.group')->with(['ingredient', 'category'])->get();
                    $total = 0;
                    foreach ($food_ingredient as $fi) {
                        $categories[$fi->food->group->name][$fi->food->name . ' - ' . $fi->food->portions . 'p.'][] = ['id' => $i, 'name' => $fi->ingredient->name, 'price' => $fi->ingredient->price, 'quantity' => $fi->quantity, 'measure' => $fi->ingredient->measure];
//                        $total += $fi->ingredient->price;
//                        $categories[$fi->category->name]['total'] = $total;
                        $i++;
                    }
//                    $sum += $total;
                }

                $pdf = PDF::loadView('calculation.pdf', ['groups' => $categories, 'total' => $sum]);
                return $pdf->download('calculator.pdf');

                break;
            case 'menu':
                $categories = [];
                $i = 0;
                $sum = 0;

                $menu_name = Menu::where('id', $menu_id)->pluck('name')->first();
                if(is_array($menu_id)){
                    $items = MenuItem::whereIn('menu_id',$menu_id)->get();
                }else{
                    $items = MenuItem::where('menu_id', $menu_id)->get();
                }
                foreach ($items as $item) {
                    $food = Food::where('id', $item->food_id)->with('group')->first();
//                    $food_ingredient = FoodIngredient::where('food_id', $item->food_id)->with('food.group')->with(['ingredient', 'category'])->get();;
                    $categories[$food->group->name][$food->name] = ['id' => $i, 'name' => $food->name, 'total' => $food->price_portion * $food->portions, 'portions' => $food->portions, 'price' => $food->price_portion];
                    $sum += $food->price_portion * $food->portions;
                    $i++;
                }

                $pdf = PDF::loadView('menu.pdf', ['groups' => $categories, 'total' => $sum]);
                return $pdf->download('menu.pdf');

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
//            $result[$menu_name][] = $food_ingredient->toArray();
//            $total = 0;
//            foreach ($food_ingredient as $fi) {
//                $categories[$fi->category->name][] = ['id' => $i,'name' => $fi->ingredient->name, 'price' => $fi->ingredient->price, 'quantity' => $fi->quantity, 'measure' => $fi->ingredient->measure];
//                $total += $fi->ingredient->price;
//                $categories[$fi->category->name]['total'] = $total;
//                $i++;
//            }
        }

        return view('pdf', ['categories' => $categories]);
        return $pdf->download('ingredients.pdf');
    }
}
