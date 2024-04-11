<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Models\User;
use App\Notifications\TaskCronNotification;
use Illuminate\Http\Request;
use App\Notifications\TaskNotification;
use Illuminate\Support\Facades\Notification;

class TaskCronController extends Controller
{
    public function cron()
    {
        $now = date('Y-m-d H:i:s');
        $results = Todo::where('deadline', '<=', $now)->get();

        // dd($results);
        foreach($results as $row){
            $deadline = strtotime($row->deadline);

            $date_now = strtotime($now);
            if($row->email_sent == 0 && $deadline <= $date_now){
                echo $row->id.'<br>';

                $user = User::findOrFail($row->by_user_id);
                $todo = Todo::findOrFail($row->id);

                Notification::send($user, new TaskCronNotification($row));

                $todo->update([
                    'email_sent' => 1
                ]);
                // echo date('Y-m-d H:i:s', $deadline).' - '.$now.'<br>';
            }
        }

        // if($results->email_sent == 0)
        // {
        //     echo '1';
        // }
    }
}
