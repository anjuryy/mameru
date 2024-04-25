<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Crypt;

class TaskCronNotification extends Notification
{
    use Queueable;

    protected $requestData;
    /**
     * Create a new notification instance.
     */
    public function __construct($requestData)
    {
        $this->requestData = $requestData;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        ($this->requestData['deadline']) ? $schedule_data = 'is scheduled today '. date('F d, Y', strtotime($this->requestData['deadline'])) : $schedule_data = '';

        $encrypted_id = Crypt::encryptString($this->requestData['id']);

        return (new MailMessage)
                    ->subject('Task Notification Deadline')
                    ->greeting('Good Day,')
                    ->line('Your task named "'.$this->requestData['name'].'" '.$schedule_data.'')
                    ->action('Edit Task Action to Complete?', url('/todo/'.$encrypted_id.'/edit'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
