<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Auth;



class AdminUserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $guard = null) :Response
    {
        if (Auth::guard($guard)->check() ) {

            $role = Auth::user()->roles()->first()->name; 
         //  dd($role);
            if( $role != 'admin' && $role != 'user')   
                return redirect()->back()->withErrors(['message' => 'Unauthorized access']);

               }
           return $next($request);  
    }
}
