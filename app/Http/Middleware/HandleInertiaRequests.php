<?php

namespace App\Http\Middleware;

use App\Models\RoleUser;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        // dd($request->user()->id);

        if (!empty($user)) {
            $role = RoleUser::where('user_id', '=', $request->user()->id)->first();
        }


        // dd($role['role_id']);
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'notificationCount' => $request->user()->unreadNotifications()->count()
                ] : null,
                'role' => $role['role_id'] ?? null
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'danger' => $request->session()->get('danger'),
            ],
        ];
    }
}
