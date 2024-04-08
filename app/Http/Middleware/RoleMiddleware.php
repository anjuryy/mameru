<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, $role)
    {
        // dd('Middleware is being executed');

        if (!$request->user() || !$request->user()->hasRole($role)) {
            abort(403, 'Unauthorized');
        } else {
            Session::put('user_role', $role);
        }
        
        return $next($request);
    }
}
