<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Featured;
use App\Models\Section;
use App\Models\SectionItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagementController extends Controller
{
    public function index()
    {
        $category = Category::all();

        $featuredWithCategory = Featured::join('categories', 'featureds.category_id', '=', 'categories.id')
            ->select('featureds.*','categories.name as under_name')
            ->get();

        $sectionWithCategory = Section::join('categories', 'sections.category_id', '=', 'categories.id')
        ->select('sections.*', 'categories.name as under_name')
        ->get();

        $sectionItem = SectionItem::all();

        return Inertia::render(
            'Management/Index',
            [
                'category' => $category,
                'featured' => $featuredWithCategory,
                'section' => $sectionWithCategory,
                'sectionItem' => $sectionItem
            ]);
    }
}
