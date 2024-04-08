<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reports = Auth::user()->reports()->paginate()->withQueryString();

        $reportEncryptedId = $reports->map(function ($report){
            $report->encrypted_id = Crypt::encryptString($report->id);
            return $report;
        });

        return Inertia::render('Report/Index',
            [
                'reports' => $reports
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Report/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Report $report)
    {
        Validator::make($request->all(), [
            'title' => 'required|string|max:25',
            'comment' => 'required|string|max:255',
            // 'image' => 'image'
        ])->validate();
        
        $fileName = '';

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $fileName);
        }

        $request->user()->reports()->create([
            'title' => $request->title,
            'comment' => $request->comment,
            'image' => $fileName
        ]);

        return redirect(route('report.index'))->with('success','Successfully Added');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $report = Auth::user()
                    ->reports()
                    // ->with('images')
                    ->find($decrypted_id);

        $report['encrypted_id'] = Crypt::encryptString($report->id);

        return Inertia::render(
            'Report/Show',
            [
                'report' => $report
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $report = Auth::user()
                    ->reports()
                    // ->with('images')
                    ->find($decrypted_id);

        $report['encrypted_id'] = Crypt::encryptString($report->id);

        return Inertia::render(
            'Report/Edit',
            [
                'report' => $report
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $decrypted_id = Crypt::decryptString($id);

        Validator::make($request->all(), [
            'title' => 'required|string|max:25',
            'comment' => 'required|string:max:255',
            'image' => 'image'
        ])->validate();

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $fileName);

            // Handle file upload logic here

            $request->user()->reports()->where('id', $decrypted_id)->update([

                'title' => $request->title,
                'comment' => $request->comment,
                'image' => $fileName

            ]);
        } else {
            $request->user()->reports()->where('id', $decrypted_id)->update([

                'title' => $request->title,
                'comment' => $request->comment

            ]);
        }

        return redirect(route('report.index'))->with('success','Successfully Edited');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        Report::where('id', $decrypted_id)->delete();

        return redirect(route('report.index'))->with('success','Successfully Deleted');
    }
}
