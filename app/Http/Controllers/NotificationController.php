<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NotificationController extends Controller
{
    public function index(Request $request): Response
    {
        $notification = $request->user()->notifications()->paginate(10);

        $notifMap = $notification->map(function ($notif){
            // $notif = Product::findOrFail()
            $purchasor_name = User::findOrFail($notif['data']['buyer_id']);
            $notif->purchasor_name = $purchasor_name['name'];
            return $notif;
        });

        // ddd($notification);
        return Inertia::render(
            'Notification/Index',
            [
                'notifications' => $notification
            ]
        );
    }
}
