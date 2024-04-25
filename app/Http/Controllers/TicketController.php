<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Report::paginate()->withQueryString();

        $reportEncryptedId = $tickets->map(function ($report){
            $report->encrypted_id = Crypt::encryptString($report->id);
            return $report;
        });
        
        return Inertia::render(
            'Ticket/Index',
            [
                'tickets' => $tickets
            ]
        );
    }

    public function show($id)
    {
        $decrypted_id = Crypt::decryptString($id);

        $report = Report::find($decrypted_id);

        $report['encrypted_id'] = Crypt::encryptString($report->id);

        return Inertia::render(
            'Ticket/Show',
            [
                'report' => $report
            ]
        );
    }

    public function update(Request $request, $id)
    {
        $decrypted_id = Crypt::decryptString($id);

        Validator::make($request->all(), [
            'status' => 'required'
        ])->validate();

        Report::where('id', $decrypted_id)->update([
            'status' => $request->status,
        ]);
        

        return redirect(route('ticket.index'))->with('success', 'Successfully change status');
    }

    public function searchBar()
    {
        $report = Report::paginate(5)->withQueryString();

        return response()->json(['result' => $report], 200);
    }
}
