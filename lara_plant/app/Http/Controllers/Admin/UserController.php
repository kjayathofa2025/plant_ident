<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Response;


class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        $users = $users->map(function ($user, $index) {
            $user['serialNumber'] = $index + 1;
            return $user;
        });
        return Inertia::render('Users/Index', [
            'users' => $users,'Index'
         //   'flash' => session('flash'), 
        ]);
    }

    public function create()
    {
       return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
           // 'role' => ['required|string|exist:roles,name'],
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password); // Hash the password
        $user->save();
        $user->assignRole($request->role);
        return redirect()->route('users.index')->with('success', 'User created successfully!');
    }

    public function show(User $user)
    {
        return Inertia::render('Users/Show', [
            'user' => $user,
        ]);
    }


    public function edit($id)
    {

        $data['getRecord'] = User::getSingle($id);
        return Inertia::render('Users/Edit',$data);
    }
    public function userRoles($id)
    {
      //  $user = User::with('roles')->findOrFail($id);
        $user = User::with('role')->findOrFail($id);
        $roles = Role::all();

        return Inertia::render('Users/Roles', ['role' => $roles, 'id' => $id, 'user' => $user]);
    }

    public function saveRole(Request $request)
    {

        $user = User::findOrFail($request->input('user_id'));
       // $selectedRoles = $request->input('roles') ?? [];
       $selectedRoles = $request->input('role') ?? [];

        $existingRoles = $user->roles->pluck('id')->toArray();

        $rolesToRemove = array_diff($existingRoles, $selectedRoles);
        foreach ($rolesToRemove as $roleId) {
            $role = Role::findOrFail($roleId);
            $user->removeRole($role);
        }

        foreach ($selectedRoles as $roleId) {
            $role = Role::findOrFail($roleId);
            if (!$user->hasRole($role)) {
                $user->assignRole($role);
            }
        }

        return redirect()->route('users.roles', $user->id);
    }


    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user)],
            'password' => ['nullable', 'string', 'min:8'],
        ]);

        $user = User :: getSingle($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password); // Hash the password
        $user->save();
        $user->assignRole($request->role);
        return redirect()->route('users.index')->with('success', 'User Update successfully!');
    }

    public function destroy(String $id)
    {
        $user = User::getSingle($id);
       // dd($user->name);
        if ($user) 
        {
            $user->delete();
            return redirect()->route('users.index')->with('success', 'User deleted successfully!');
        } else {
            // If the user does not exist, redirect with an error message
            return redirect()->route('users.index')->with('error', 'User not found!');
        }
    }
}
