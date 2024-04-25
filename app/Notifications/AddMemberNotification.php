<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AddMemberNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    protected $requestData;

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

        // ddd($this->requestData);
        return (new MailMessage)
                    ->subject('Board Invitation')
                    ->line($this->requestData['name'].' invited you to the board.')
                    ->action('Accept Invitation', url('/kanban/'.$this->requestData['email'].'/acceptInvitation/'. $this->requestData['board_id']))
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
